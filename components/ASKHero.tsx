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
     <div className="text-left flex space-x-4 w-2/3 justify-start items-center mt-4">
        <img src="ask/asklogo.png" alt="ASK First Logo" className="w-1/6" />
        <p className="text-lg w-1/3">
          Developed by Ngee Ann Polytechnic ICT Immersive Media Students, in collaboration with the Singapore Police Force.
        </p>
      </div>

      <section className="text-left flex w-2/3 space-x-2 justify-center items-center">
        <div className='space-y-4'>
           <h2 className="text-xl font-black text-blue-600">WHAT'S THIS GAME ABOUT?</h2>
            <p>
              This simulation game helps retail staff learn how to spot and respond to suspicious behavior using the A.S.K. protocol.
            </p>
            <p>
              Step into the role of a Cashier or Retail Assistant and face real-world scenarios inside a retail store. Your job is to spot suspicious behavior and make smart choices to prevent shop theft.
            </p>
            <p>
              Feel free to replay the game as many times as you need to train and build confidence. Once you’re ready, take the test and see how you do.
            </p>
            <p>Together, we can keep Singapore safe.</p>
        </div>
        <img src="ask/info.png" alt="Game Info" className="w-1/2" />
      </section>

      <section className="text-left flex w-2/3 justify-center items-center">
        <img src="ask/whatIsASK.png" alt="Game Info" className="w-1/2 h-full" />
        <img src="ask/controls.png" alt="Game Info" className="w-1/2 h-full" />
      </section>

      <div className='py-12 w-full flex justify-center items-center flex-col space-y-2'>
        <p className="text-2xl text-center w-1/3 text-pennblue font-extrabold">
          After learning what A.S.K. is… do you know how to use it correctly in-store?
        </p>
        <p className="text-lg text-center w-2/3 font-bold">
          That’s why we built this training game to help retail workers like you practice and prepare.
        </p>
        <img src="ask/points.png" alt="Game Points" className="w-1/3 h-full" />
      </div>

      <section className="w-full max-w-4xl my-40 flex justify-center flex-col items-center">
        <h2 className="text-3xl font-black text-pennblue mb-4">WE'D LOVE TO HEAR FROM YOU!</h2>
        <div className="flex items-center justify-center">
          <img src="ask/hhThumbsUp.png" alt="Game Info" className="w-1/3 h-full" />
          <h2 className="text-2xl font-bold mb-4">Help us improve this training experience. Share your thoughts after trying the game.</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-10 flex flex-col justify-center items-center">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-2xl border-[4px] border-black px-4 py-2 font-bold 
             shadow-orangeGlow"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-2xl border-[4px] border-black px-4 py-2 font-bold 
             shadow-orangeGlow"
          />

          <div>
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

          <div>
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
