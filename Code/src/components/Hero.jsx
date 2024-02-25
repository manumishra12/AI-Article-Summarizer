import React from 'react'
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/manumishra12", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '> AI Summarizer</span>
      </h1>
      <h2 className='desc'>
        Transforming Lengthy Articles into Clear and Concise Summaries with Summize - Powered by OpenAI GPT-4
      </h2>

    </header>
  );
};

export default Hero;