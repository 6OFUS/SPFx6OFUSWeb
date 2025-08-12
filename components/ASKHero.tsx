'use client';

import { useState } from 'react';

export const ASKHero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    useful: '',
    improve: '',
    recommend: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[url(/oriBg.png)] h-auto bg-contain bg-top bg-center flex flex-col overflow-hidden items-center justify-center">
      
      {/* Logo + Intro */}
      <div className="text-center md:text-left flex flex-col md:flex-row md:space-x-4 w-full md:w-2/3 justify-start items-center mt-4 px-4">
        <img src="ask/asklogo.png" alt="ASK First Logo" className="w-1/3 md:w-1/6 max-w-full h-auto" />
        <p className="text-lg w-full md:w-1/3 mt-4 md:mt-0">
          Developed by Ngee Ann Polytechnic ICT Immersive Media Students, in collaboration with the Singapore Police Force.
        </p>
      </div>

      {/* What's This Game About */}
      <section className="flex flex-col md:flex-row w-11/12 md:w-2/3 space-y-4 md:space-y-0 md:space-x-4 justify-center items-center px-4 mt-8">
        <div className="space-y-4 w-full md:w-1/2">
          <h2 className="text-xl font-black text-pennblue">WHAT'S THIS GAME ABOUT?</h2>
          <p>
            This simulation game helps retail staff learn how to spot and respond to suspicious behavior using the A.S.K. protocol.
          </p>
          <p>
            Step into the role of a Cashier or Retail Assistant and face real-world scenarios inside a retail store.
          </p>
          <p>
            Feel free to replay the game as many times as you need to train and build confidence.
          </p>
          <p>Together, we can keep Singapore safe.</p>
        </div>
        <img src="ask/info.png" alt="Game Info" className="w-full md:w-1/2 max-w-full h-auto" />
      </section>

      {/* Game Info Images */}
      <section className="flex flex-col md:flex-row w-full md:w-2/3 justify-center items-center px-4 space-y-4 md:space-y-0 md:space-x-4 mt-8">
        <img src="ask/whatIsASK.png" alt="Game Info" className="w-full md:w-1/2 max-w-full h-auto" />
        <img src="ask/controls.png" alt="Game Info" className="w-full md:w-1/2 max-w-full h-auto" />
      </section>

      {/* After Learning Section */}
      <div className="py-12 w-full flex flex-col justify-center items-center space-y-4 px-4">
        <p className="text-2xl text-center md:w-1/3 text-pennblue font-extrabold">
          After learning what A.S.K. is… do you know how to use it correctly in-store?
        </p>
        <p className="text-lg text-center md:w-2/3 font-bold">
          That’s why we built this training game to help retail workers like you practice and prepare.
        </p>
        <img src="ask/points.png" alt="Game Points" className="w-full md:w-1/3 max-w-full h-auto" />
      </div>

      {/* Feedback Form */}
      <section className="w-full max-w-xl my-20 px-4 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-black text-pennblue mb-4 text-center">WE'D LOVE TO HEAR FROM YOU!</h2>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
          <img src="ask/hhThumbsUp.png" alt="Game Info" className="w-1/2 md:w-1/3 max-w-full h-auto" />
          <h2 className="text-xl md:text-2xl font-bold">
            Help us improve this training experience. Share your thoughts after trying the game.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 flex flex-col justify-center items-center w-full mt-8">
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
            className="w-full rounded-2xl border-[4px] border-black px-4 py-2 font-bold shadow-orangeGlow"
          />

          {/* Experience */}
          <div className="w-full">
            <p className="text-xl mb-2">How was your experience?</p>
            {['Excellent', 'Good', 'Okay', 'Can be better'].map((option) => (
              <label key={option} className="mr-4 text-lg">
                <input
                  type="radio"
                  name="experience"
                  value={option}
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

          {/* Recommend */}
          <div className="w-full">
            <p className="mb-2">Would you recommend this training game to others?</p>
            <label className="mr-4 text-lg">
              <input
                type="radio"
                name="recommend"
                value="Yes"
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
                onChange={handleChange}
                className="mr-1"
              />
              No
            </label>
          </div>

          <button
            type="submit"
            className="bg-white border-4 border-black px-10 py-2 rounded-2xl mx-auto shadow-orangeGlow"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
