import Head from 'next/head'

import { useState } from 'react';

const Home = () => {

  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch(`/api/advice?prompt=${input}`);
    const data = await res.json();
    setAnswer(data.text);
    setLoading(false);
  }

  return (
    <div className='flex justify-center'>
      <Head>
        <title>Advice Giver</title>
        <meta name="description" content="App that gives advice using OpenAI GPT-3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex pt-40 p-4 flex-col max-w-lg w-full h-screen gap-6'>
        <h1 className='text-2xl'>Give me some advice on...</h1>
        <form onSubmit={handleSubmit} className='flex justify-center flex-col gap-5'>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='border-2 border-violet-800 py-3 px-5 rounded-xl text-2xl'
          />
          <input className="self-end bg-violet-800 text-white py-2 px-5 rounded-md hover:bg-violet-700" type="submit" value="Submit" />
        </form>
        {loading && <div>Loading...</div>}
        {answer && <>
          <h2>Answer:</h2>
          <div>{answer}</div>
        </>}
      </div>
    </div>
  )
}

export default Home;