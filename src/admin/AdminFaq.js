import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { faqAPI } from "../services/faqAPI";
import { FAQ_CATEGORY_OPTIONS, FAQ_CATEGORIES } from "../constants/faqDefaults";

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

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
      return;
    }
    loadCategoryFaqs(selectedCategory);
  }, [navigate, selectedCategory]);

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
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
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
      setError("Both question and answer are required.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      if (editingFaq) {
        const updated = await faqAPI.update(editingFaq.id, {
          question: form.question.trim(),
          answer: form.answer.trim(),
        });
        setFaqs((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
      } else {
        const created = await faqAPI.create({
          category: selectedCategory,
          question: form.question.trim(),
          answer: form.answer.trim(),
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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button className="bg-slate-900 border border-slate-800 text-white p-2 rounded-lg" onClick={() => setSidebarOpen(true)}>
            ☰ Menu
          </button>
          <h1 className="text-xl font-bold text-white">Manage FAQs</h1>
        </div>

        <div className="hidden md:flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Manage FAQs</h1>
          <div className="text-sm text-slate-400">
            Selected: <span className="font-semibold text-blue-400">{selectedCategory}</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-950/20 border-l-4 border-red-500 text-red-200 p-4 rounded-lg mb-6 border border-red-900/30">
            {error}
          </div>
        )}

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 mb-6 shadow-lg">
          <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">FAQ Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              resetForm();
            }}
            className="w-full md:w-72 bg-slate-950 border border-slate-800 text-slate-100 p-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
          >
            {FAQ_CATEGORY_OPTIONS.map((category) => (
              <option key={category} value={category} className="bg-slate-950">
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-white">
            {editingFaq ? `Edit ${selectedCategory} FAQ` : `Add ${selectedCategory} FAQ`}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="question"
              placeholder="Enter Question"
              value={form.question}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 text-slate-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
              required
            />
            <textarea
              name="answer"
              placeholder="Enter Answer"
              value={form.answer}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 text-slate-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm min-h-[120px]"
              required
            />
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg disabled:bg-slate-850 disabled:text-slate-500 transition-all text-sm"
              >
                {editingFaq ? "Update FAQ" : "Add FAQ"}
              </button>
              {editingFaq && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-2.5 rounded-lg border border-slate-750 transition-all text-sm"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 md:p-6 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">{selectedCategory} FAQs</h3>
            <span className="text-sm text-slate-400">Total: {faqs.length}</span>
          </div>

          {loading ? (
            <p className="p-6 text-slate-500">Loading FAQs...</p>
          ) : faqs.length === 0 ? (
            <p className="p-6 text-slate-500">No FAQs found for {selectedCategory}.</p>
          ) : (
            <div className="divide-y divide-slate-800 bg-slate-950/20">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-4 md:p-6 hover:bg-slate-800/20 transition-all">
                  <p className="font-bold text-slate-100 mb-2">Q: {faq.question}</p>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">A: {faq.answer}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded hover:bg-blue-500/20 font-semibold text-xs border border-blue-500/10 transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded hover:bg-red-500/20 font-semibold text-xs border border-red-500/10 transition-all"
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