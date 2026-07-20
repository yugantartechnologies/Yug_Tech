import { DEFAULT_FAQS_BY_CATEGORY, FAQ_CATEGORY_OPTIONS } from "../constants/faqDefaults";

const STORAGE_KEY = "admin_faqs_by_category_v1";

const buildSeedData = () => {
  const seeded = [];
  FAQ_CATEGORY_OPTIONS.forEach((category) => {
    const items = DEFAULT_FAQS_BY_CATEGORY[category] || [];
    items.forEach((item, index) => {
      seeded.push({
        id: `${category.toLowerCase()}-${index + 1}`,
        category,
        question: item.question,
        answer: item.answer,
      });
    });
  });
  return seeded;
};

const readFaqs = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const seeded = buildSeedData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
    return seeded;
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeFaqs = (faqs) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(faqs));
  return faqs;
};

const makeId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const faqAPI = {
  getAll: async () => {
    return readFaqs();
  },

  getByCategory: async (category) => {
    const allFaqs = readFaqs();
    return allFaqs.filter((faq) => faq.category === category);
  },

  create: async ({ category, question, answer }) => {
    const faqs = readFaqs();
    const created = {
      id: makeId(),
      category,
      question,
      answer,
    };
    writeFaqs([...faqs, created]);
    return created;
  },

  update: async (id, updates) => {
    const faqs = readFaqs();
    let updatedFaq = null;
    const updatedFaqs = faqs.map((faq) => {
      if (faq.id !== id) return faq;
      updatedFaq = { ...faq, ...updates, id: faq.id };
      return updatedFaq;
    });
    writeFaqs(updatedFaqs);
    return updatedFaq;
  },

  delete: async (id) => {
    const faqs = readFaqs();
    const filtered = faqs.filter((faq) => faq.id !== id);
    writeFaqs(filtered);
    return { success: true };
  },
};
