import React, { Fragment } from "react"
import Head from 'next/head'
import Breakpoints from "../components/Breakpoints/Breakpoints"

const Home = () => (
  <Fragment>
    <Head>
      <title>TailwindCSS Starter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Breakpoints />
    <div className="container px-8 mt-20">
      <div className="card w-full mt-5 tracking-widest">
        <h1 className="font-bold text-gray-600 text-4xl sm:text-6xl italic">STARTER KIT</h1>
      </div>
      <div className="flex flex-wrap mt-5 -mx-2 tracking-wider">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="card">
            <h2 className="font-bold text-4xl m-auto text-blue-300">TailwindCSS</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="card">
            <h2 className="font-bold text-4xl m-auto text-green-300">Next.js</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2">
          <div className="card">
            <h2 className="font-bold text-4xl m-auto text-pink-300 flex">Sass</h2>
          </div>
        </div>
      </div>
      <div className="flex-wrap flex -mx-2">
        <div className="w-full md:w-1/2 px-2 ">
          <div className="card flex-col">
            <h3 className="mb-2 font-bold text-2xl m-auto text-gray-500 uppercase italic tracking-wide">Dox</h3>
            <ul className="flex flex-col text-gray-800 font-semibold tracking-wide">
              <a href="https://tailwindcss.com/">
                <li className="bg-blue-200">TailwindCSS</li>
              </a>
              <a href="https://nextjs.org/">
                <li className="bg-blue-400">Next.js</li>
              </a>
              <a href="https://sass-lang.com/">
                <li className="bg-blue-600">Sass</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 ">
          <div className="card flex-col">
            <h3 className="mb-2 font-bold text-2xl m-auto text-gray-500 uppercase italic tracking-wide">Tailwind Resources</h3>
            <ul className="flex flex-col text-gray-800 font-semibold tracking-wide">
              <a href="https://youtu.be/J_7_mnFSLDg">
                <li className="bg-green-200">Best Practices Talk</li>
              </a>
              <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
                <li className="bg-green-400">VSCode Intellisense Plugin</li>
              </a>
              <a href="https://dev.to/notrab/get-up-and-running-with-tailwind-css-and-next-js-3a73">
                <li className="bg-green-600">Tailwind With Next Blog-post</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Fragment >
)

export default Home
