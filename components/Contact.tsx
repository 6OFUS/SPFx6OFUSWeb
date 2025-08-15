'use client';

import { useState } from 'react';
import { Navbar } from './Navbar';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    for (const key in formData) {
      if (!formData[key as keyof typeof formData].trim()) {
        alert('Please fill in all fields before submitting.');
        return false;
      }
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setSubmitting(true); // disable button

      emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,   // Service ID
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,  // Template ID
        formData,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!    // Public Key
      )
      .then(() => {
        alert('Thanks for your feedback!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitting(false)
      })
      .catch((err) => {
        console.error('Failed to send feedback:', err);
        alert('Something went wrong. Please try again.');
      });
    } catch (err) {
      console.error(err);
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <section className="w-full max-w-5xl my-40 px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-black text-pennblue mb-4 text-center">
          WE'D LOVE TO HEAR FROM YOU!
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
          <img src="ask/hhThumbsUp.png" alt="Game Info" className="w-1/2 md:w-1/3 max-w-full h-auto" />
          <h2 className="text-lg md:text-xl font-extrabold my-6">
            Got a question? Want to collab? Or just want to say “Aiyoh, Fake One!” with us? 😆
            <br></br><br></br>
            Fill in the form below or email us — either way, we’ll get back to you faster than a scammer can type “Hello, dear…” 🕵️‍♂️
            <br></br><br></br>
            📧 Email us at: 6ofus2025@gmail.com
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-8 flex flex-col justify-center items-center w-full mt-8 px-0 lg:px-20"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-3xl border-[4px] border-black px-4 py-2 font-bold shadow-orangeGlow"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full rounded-3xl border-[4px] border-black px-4 py-2 font-bold shadow-orangeGlow"
          />

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border-black border-4 rounded-3xl px-4 py-2 shadow-orangeGlow"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full border-black border-4 rounded-3xl px-4 py-2 h-24 shadow-orangeGlow"
          />

          <button
            type="submit"
            disabled={submitting}
            className={`bg-white border-4 border-black px-10 py-2 rounded-2xl mx-auto shadow-orangeGlow ${
              submitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </section>
    </div>
  );
};
