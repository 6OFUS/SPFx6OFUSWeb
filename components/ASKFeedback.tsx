'use client';

import { useState } from 'react';
import { Navbar } from './Navbar';

export const ASKFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    useful: '',
    improve: '',
    recommend: '',
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
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to submit');

      alert('Thanks for your feedback!');
      setFormData({
        name: '',
        email: '',
        experience: '',
        useful: '',
        improve: '',
        recommend: '',
      });

      setSubmitting(false)
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden items-center justify-center">
      <Navbar />
      <section className="w-full max-w-2xl my-40 px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-black text-pennblue mb-4 text-center">
          WE'D LOVE TO HEAR FROM YOU!
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
          <img src="ask/hhThumbsUp.png" alt="Game Info" className="w-1/2 md:w-1/3 max-w-full h-auto" />
          <h2 className="text-lg md:text-xl font-extrabold">
            Help us improve this training experience. Share your thoughts after trying the game.
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8 flex flex-col justify-center items-center w-full mt-8 px-0 lg:px-20"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-2xl border-[4px] border-black px-4 py-2 font-bold shadow-orangeGlow"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full rounded-2xl border-[4px] border-black px-4 py-2 font-bold shadow-orangeGlow"
          />

          <div className="w-full">
            <p className="text-xl mb-2">How was your experience?</p>
            {['Excellent', 'Good', 'Okay', 'Can be better'].map((option) => (
              <label key={option} className="mr-4 text-lg">
                <input
                  type="radio"
                  name="experience"
                  value={option}
                  checked={formData.experience === option}
                  onChange={handleChange}
                  className="mr-1"
                />
                {option}
              </label>
            ))}
          </div>

          <textarea
            name="useful"
            value={formData.useful}
            onChange={handleChange}
            placeholder="What did you find useful or enjoyable?"
            className="w-full border-black border-4 rounded-2xl px-4 py-2 h-24 shadow-orangeGlow"
          />
          <textarea
            name="improve"
            value={formData.improve}
            onChange={handleChange}
            placeholder="What can we improve?"
            className="w-full border-black border-4 rounded-2xl px-4 py-2 h-24 shadow-orangeGlow"
          />

          <div className="w-full">
            <p className="mb-2">
              Would you recommend this training game to others?
            </p>
            <label className="mr-4 text-lg">
              <input
                type="radio"
                name="recommend"
                value="Yes"
                checked={formData.recommend === 'Yes'}
                onChange={handleChange}
                className="mr-1"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="recommend"
                value="No"
                checked={formData.recommend === 'No'}
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>

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
