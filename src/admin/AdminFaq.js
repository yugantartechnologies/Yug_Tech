import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminLogin from "./AdminLogin";
import { faqAPI } from "../services/faqAPI";
import { FAQ_CATEGORY_OPTIONS, FAQ_CATEGORIES } from "../constants/faqDefaults";
import { getCurrentAdmin, logoutAdmin } from "./adminAuth";

const EMPTY_FORM = { question: "", answer: "" };

export default function AdminFaq() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(FAQ_CATEGORIES.HOME);
  const [faqs, setFaqs] = useState([]);
  const [editingFaq, setEditingFaq] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [adminState, setAdminState] = useState(getCurrentAdmin());

  useEffect(() => {
    const admin = getCurrentAdmin();
    setAdminState(admin);
    if (admin.isLoggedIn) {
      loadCategoryFaqs(selectedCategory);
    }
  }, [selectedCategory]);

  const loadCategoryFaqs = async (category) => {
    setLoading(true);
    setError("");
    try {
      const data = await faqAPI.getByCategory(category);
      setFaqs(data);
    } catch (err) {
      setError(err.message || "Failed to load FAQs.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of the admin panel?")) {
      logoutAdmin();
      navigate("/admin/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setEditingFaq(null);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.question.trim() || !form.answer.trim()) {
      setError("Please enter both question and answer.");
      return;
    }
    setLoading(true);
    try {
      if (editingFaq) {
        const updated = await faqAPI.update(editingFaq.id, {
          category: selectedCategory,
          question: form.question,
          answer: form.answer
        });
        setFaqs((prev) => prev.map((f) => (f.id === editingFaq.id ? updated : f)));
      } else {
        const created = await faqAPI.create({
          category: selectedCategory,
          question: form.question,
          answer: form.answer
        });
        setFaqs((prev) => [...prev, created]);
      }
      resetForm();
    } catch (err) {
      setError(err.message || "Unable to save FAQ.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (faq) => {
    setEditingFaq(faq);
    setForm({ question: faq.question, answer: faq.answer });
    setError("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this FAQ?")) return;
    setLoading(true);
    try {
      await faqAPI.delete(id);
      setFaqs((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message || "Unable to delete FAQ.");
    } finally {
      setLoading(false);
    }
  };

  if (!adminState?.isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setAdminState(getCurrentAdmin())} />;
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex font-sans">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button className="bg-white border border-slate-300 text-slate-800 p-2 rounded-lg text-xs font-semibold" onClick={() => setSidebarOpen(true)}>
            ☰ Menu
          </button>
          <h1 className="text-base font-bold text-slate-900">Manage FAQs</h1>
        </div>

        <div className="hidden md:flex items-center justify-between mb-7">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Manage FAQs</h1>
          <div className="text-xs text-slate-500 font-semibold bg-white border border-slate-200/90 px-3 py-1 rounded-lg">
            Category: <span className="text-blue-600 font-bold">{selectedCategory}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl mb-6 text-xs font-semibold">
            {error}
          </div>
        )}

        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 mb-6 shadow-xs">
          <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Select FAQ Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              resetForm();
            }}
            className="w-full md:w-72 bg-slate-50 border border-slate-300 text-slate-800 p-2.5 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white text-xs font-semibold"
          >
            {FAQ_CATEGORY_OPTIONS.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 mb-8 shadow-xs">
          <h2 className="text-lg font-bold mb-4 text-slate-900">
            {editingFaq ? `Edit ${selectedCategory} FAQ` : `Add New ${selectedCategory} FAQ`}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="question"
              placeholder="Enter Question"
              value={form.question}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 p-3 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white text-xs"
              required
            />
            <textarea
              name="answer"
              placeholder="Enter Answer"
              value={form.answer}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 p-3 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white text-xs min-h-[110px]"
              required
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl transition-all text-xs cursor-pointer shadow-xs"
              >
                {editingFaq ? "Update FAQ" : "Add FAQ"}
              </button>
              {editingFaq && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-2.5 rounded-xl border border-slate-200 transition-all text-xs cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
          <div className="p-4 md:p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800">{selectedCategory} FAQs</h3>
            <span className="text-xs font-semibold text-slate-500">Total: {faqs.length}</span>
          </div>

          {loading ? (
            <p className="p-6 text-slate-400 text-xs">Loading FAQs...</p>
          ) : faqs.length === 0 ? (
            <p className="p-6 text-slate-400 text-xs">No FAQs found for {selectedCategory}.</p>
          ) : (
            <div className="divide-y divide-slate-100 bg-white">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-4 md:p-5 hover:bg-slate-50/70 transition-all">
                  <p className="font-bold text-slate-900 mb-1.5 text-xs">Q: {faq.question}</p>
                  <p className="text-slate-600 mb-3 text-xs leading-relaxed">A: {faq.answer}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-100 font-semibold text-xs border border-blue-200 transition-all cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      className="bg-red-50 text-red-600 px-3 py-1 rounded-lg hover:bg-red-100 font-semibold text-xs border border-red-200 transition-all cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
