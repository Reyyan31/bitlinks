'use client';
import React, { useState } from 'react';

const shorten = () => {
  const [url, seturl] = useState('');
  const [shorturl, setshorturl] = useState('');
  const [generated, setgenerated] = useState("");
  
   const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("/api/generate", requestOptions)
   
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
   }
   

  return (
    <div className='mx-auto max-w-lg bg-purple-200 my-20 p-10 rounded-lg '>
      <h1 className='font-bold text-2xl text-center'>Generate Your Short URLs</h1>
      <div className='flex flex-col gap-3 my-3'>
        <input
          type="text"
          value={url}
          className="p-3 py-2 focus:outline-purple-600 bg-white rounded-lg"
          placeholder="Input Your URL"
          onChange={e => {seturl(e.target.value)}}
        />
        <input
          type="text"
          value={shorturl}
          className="p-3 py-2 focus:outline-purple-600 bg-white rounded-lg"
          placeholder="Input Your Short URL Text"
          onChange={e => {setshorturl(e.target.value)}}
        />
        <button onClick={generate} className='my-1 cursor-pointer  rounded-full bg-purple-500 shadow-lg p-3 py-2 font-bold hover:bg-purple-700 text-white'>Generate</button>
      </div>
      {generated && (
        <>
          <span className="font-bold text-lg">Your Link:</span> <br />
          <code>
            <a href={generated} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {generated}
            </a>
          </code>
        </>
      )}
    </div>
  );
};

export default shorten; 