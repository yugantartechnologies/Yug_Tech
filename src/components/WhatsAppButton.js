import React from 'react';

// Edit `phone` and `message` as needed. Phone should be in international format without + or dashes (e.g. 919812345678).
// User-provided number: 7859982605 (India), add country code 91
const phone = '917859982605';
const message = 'Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.'; // already URL-encoded

export default function WhatsAppButton() {
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="whatsapp-fab fixed right-6 bottom-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
    >
      <svg className="animate-blink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.92 11.92 0 0012.01.5C6.02.5 1 5.52 1 11.51c0 2.02.53 3.92 1.53 5.61L1 23l6.1-1.6A11.45 11.45 0 0012 22c5.99 0 10.98-5.02 10.98-10.99 0-2.95-1.15-5.71-3.46-7.53zM12 20.1c-.98 0-1.94-.26-2.78-.76l-.2-.12-3.63.95.98-3.54-.13-.23A8.06 8.06 0 013.86 11.5c0-4.5 3.67-8.16 8.14-8.16 2.17 0 4.21.84 5.74 2.37 1.53 1.53 2.37 3.56 2.37 5.73 0 4.48-3.66 8.16-8.11 8.16z" />
        <path d="M17.37 14.02c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.29-.71.9-.87 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.24-1.38-.83-.74-1.39-1.64-1.55-1.92-.16-.29-.02-.45.12-.59.12-.12.28-.32.42-.48.14-.16.19-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.33 0 1.38.99 2.72 1.13 2.9.14.18 1.95 3 4.73 4.21 1.02.44 1.82.7 2.45.9.99.31 1.89.27 2.6.17.79-.12 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.18-.54-.32z" />
      </svg>
    </a>
  );
}
