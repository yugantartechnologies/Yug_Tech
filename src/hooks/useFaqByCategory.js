import { useEffect, useState } from "react";
import { faqAPI } from "../services/faqAPI";

export default function useFaqByCategory(category) {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loadFaqs = async () => {
      if (!category) {
        setFaqItems([]);
        return;
      }

      const response = await faqAPI.getByCategory(category);
      if (isMounted) {
        setFaqItems(
          response.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))
        );
      }
    };

    loadFaqs();
    return () => {
      isMounted = false;
    };
  }, [category]);

  return faqItems;
}
