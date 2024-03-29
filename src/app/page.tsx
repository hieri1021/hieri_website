"use client"

import Head from 'next/head';
import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub as IconDefinition);
library.add(faTwitter as IconDefinition);

export default function Home() {

  return (
    <div>
      <Head>
        <title>hieri.net</title>
        <meta name="description" content="website" />
      </Head>

      <main className="container mx-auto">
        <h1 className="text-5xl mt-3">hieri.net</h1>

        <div className="text-4xl mt-10 mb-10">
          <h1 className="text-center mb-5">
            <a href="https://www.lovelive-anime.jp/otonokizaka/member/member02.html" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">絢瀬絵里</a>
            を推せ！！！！！！！！！！
          </h1>
          <h4 className="text-center mb-5">南條愛乃さんも推しましょう。約束。</h4>
          <h1 className="text-center mb-5">
            南條さんが
            <a href="https://www.dlsite.com/home/work/=/product_id/RJ01080844.html" target="_blank" rel="noopener noreferrer" className="underline decoration-blue-300">ASMR作品</a>
            を出してくださったぞ！！全人類聞け！！！！
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-end mb-5">
          <div className='grid justify-items-satrt'>
            <img src="https://spotify-recently-played-readme.vercel.app/api?user=31upypeuqy2n3urisvkknr7gh2ra"
              alt="recently spotify"
              loading='lazy'
              className='right-0' />
          </div>
          
          <div className='grid justify-items-center lg:justify-items-end'>
            <img src="https://moe-counter-cf.yude.workers.dev/hieri"
              alt="表示カウンター"
              loading='lazy'
              className='w-1/2' />
          </div>
        </div>

        <hr/>
        <div className='text-center'>
          <img alt="hieribanner" src="./website_banner.png" className='h-12 inline' />
          <img alt="happybanner" src="./busy_banner.webp" className='h-12 inline' />
        </div>
        <p className='text-center text-xl'>
          <FontAwesomeIcon icon={faGithub as IconDefinition} width={18} height={18} transform="down-1" /> Github : <a href="https://Github.com/hieri1021/hieri.net" target="_blank" rel="noopener noreferrer" className='underline decoration-blue-300'>hieri1021/hieri.net</a> / <FontAwesomeIcon icon={faTwitter as IconDefinition} width={18} height={18} transform="down-1" /> Twitter : <a href="https://twitter.com/yamahi_5028" target="_blank" rel="noopener noreferrer" className='underline decoration-blue-300'>@yamahi_5028</a> / Scrapbox : <a href="https://scrapbox.io/hieri-scrapbox" target="_blank" rel="noopener noreferrer" className='underline decoration-blue-300'>hieri-scrapbox</a>
        </p>
      </main>
    </div >    
    )
  }
