import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const Music = () => (
  <Layout>
    <div className="relative">
      <div className="h-[calc(100vh-80px)] rounded-3xl overflow-hidden relative my-2 mx-4">
        <div className="w-full h-full bg-black/50 rounded-3xl">
          <StaticImage
            src="../images/music1.png"
            alt="hero image"
            className=" h-full w-full object-cover rounded-3xl grayscale"
          />
        </div>
        <div className="absolute w-full h-full bg-black/50 top-0 left-0 flex items-start pt-48 sm:pt-32 sm:pl-24 pl-6">
          <div className="flex relative">
            <span className="uppercase text-white text-6xl sm:text-8xl lg:text-9xl font-black z-20">
              Music
            </span>
            <div className="bg-blue-800/50 sm:w-52 w-32 h-32  sm:h-52 md:w-72 md:h-72 absolute right-1/2 left-1/2 -top-10 sm:-right-36 md:-right-56 lg:-right-52 rounded-full z-10 sm:-top-14 md:-top-24 lg:-top-20"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[72vh]  w-full flex flex-col items-center">
        <span className="uppercase text-white text-sm mb-2">
          scroll to discover
        </span>
        <div className="w-[2px] h-28 bg-blue-700 items"></div>
      </div>
      <div className="w-full flex flex-col px-4 pt-16 sm:pt-24 items-center">
        <p className="md:w-[65%] uppercase text-xl font-light text-slate-700">
          Welcome to my musical realm. I approach music with a passion to play
          and to rhythmically express myself. My music is a reflection of my
          life experiences, as I draw inspiration from the events happening in
          my world. Through my lyrics, I am able to channel the emotions that
          arise from the circumstances and injustices that I or my community
          have faced. My repertoire includes songs about peace, the impact of
          war, anti-war music, displacement, and the hardships that I have
          endured while living on the streets, in ghettos, and refugee camps. I
          also sing about the trials and tribulations of living in extreme
          poverty, and the hopes that I have for a better future. Moreover, my
          music delves into the nuances of community life, love, and raising
          awareness for the struggles of the oppressed.
        </p>
        <p className="md:w-[65%] uppercase text-xl font-light text-slate-700 mt-8">
          As a community activist, I use my art to amplify the voices of those
          who have been silenced, and to bring their issues to the forefront. My
          music is a call to action, a rallying cry for change. Come, take a
          listen, and let us explore the highs and lows of life, and the rhythm
          that unites us all. - <b>Barnabas Samuel</b>
        </p>
      </div>
      <div className="w-full flex flex-col items-center my-4">
        <div className="w-[2px] h-40 bg-blue-700 items"></div>
      </div>

      <div className="w-full items-center my-4 flex flex-col">
        <div className="uppercase text-3xl font-bold flex gap-2">
          <span>featured</span>
          <span className="text-goodBlue">albums</span>
        </div>
        <div className="flex w-full justify-center mt-6">
          <div className="md:w-1/2 lg:w-1/3 w-2/3">
            <div className="">
              <div className="">
                <StaticImage
                  src="../images/musiccover01.png"
                  alt="sambara music cover"
                />
              </div>
              <div className="flex flex-col mt-4">
                <span className="text-2xl uppercase font-bold  ">Sambara</span>
                <span className="font-medium">2nd September, 2021</span>
              </div>
              <div className="flex flex-col mt-3">
                <span className="capitalize text-goodBlue">listen on</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Music" />

export default Music
