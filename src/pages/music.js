import * as React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Subscription from "../components/Subscription"
import MusicIcons from "../components/MusicIcons"

import bandcampLogo from "../images/Bandcamp Black.svg"
import deezerLogo from "../images/Deezer Music New.svg"
import spotifyLogo from "../images/spotify.svg"
import tidalLogo from "../images/Tidal.svg"
import amazonLogo from "../images/Amazon Music.svg"
const Music = () => {
  const tracks = [
    {
      trackNumber: "01",
      title: "sabella",
      duration: "05:30",
      album: "sambara",
    },
    {
      trackNumber: "02",
      title: "sawa",
      duration: "03:22",
      album: "sambara",
    },
    {
      trackNumber: "03",
      title: "sabi",
      duration: "03:33",
      album: "sambara",
    },
    {
      trackNumber: "04",
      title: "stakalu",
      duration: "04:00",
      album: "sambara",
    },
    {
      trackNumber: "05",
      title: "suluta wa fata",
      duration: "05:26",
      album: "sambara",
    },
    {
      trackNumber: "06",
      title: "sejerina",
      duration: "03:57",
      album: "sambara",
    },
    {
      trackNumber: "07",
      title: "sambara",
      duration: "03:55",
      album: "sambara",
    },
    {
      trackNumber: "08",
      title: "saba al ker",
      duration: "04:00",
      album: "sambara",
    },
    {
      trackNumber: "09",
      title: "setetu",
      duration: "04:31",
      album: "sambara",
    },
  ]
  return (
    <Layout>
      <div className="relative mx-4">
        <div className="h-[calc(100vh-80px)] rounded-3xl overflow-hidden relative my-2 ">
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
            <div className="absolute right-4 bottom-14 z-30">
              <MusicIcons />
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
            endured while living on the streets, in ghettos, and refugee camps.
            I also sing about the trials and tribulations of living in extreme
            poverty, and the hopes that I have for a better future. Moreover, my
            music delves into the nuances of community life, love, and raising
            awareness for the struggles of the oppressed.
          </p>
          <p className="md:w-[65%] uppercase text-xl font-light text-slate-700 mt-8">
            As a community activist, I use my art to amplify the voices of those
            who have been silenced, and to bring their issues to the forefront.
            My music is a call to action, a rallying cry for change. Come, take
            a listen, and let us explore the highs and lows of life, and the
            rhythm that unites us all. - <b>Barnabas Samuel</b>
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
                  <span className="text-2xl uppercase font-bold  ">
                    Sambara
                  </span>
                  <span className="font-medium">2nd September, 2021</span>
                </div>
                <div className="flex flex-col mt-4">
                  <span
                    className="capitalize text-goodBlue font-semibold text-2xl"
                    id="music-links"
                  >
                    listen on
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 place-items-center *:cursor-pointer justify-center w-full place-content-center">
                  <a
                    href="https://music.apple.com/ug/album/sambara/1581694430"
                    target="_blank"
                  >
                    <div>
                      <StaticImage
                        src="../images/Apple Music.png"
                        alt="apple"
                      />
                    </div>
                  </a>

                  <a
                    href="https://barnabassamuel.bandcamp.com/album/sambara"
                    target="_blank"
                  >
                    <div>
                      <img src={bandcampLogo} alt="bandcamp" />
                    </div>
                  </a>

                  <a
                    href="https://www.deezer.com/album/252744982"
                    target="_blank"
                  >
                    <div>
                      <img src={deezerLogo} alt="deezer" className="w-full" />
                    </div>
                  </a>

                  <a
                    href="https://music.apple.com/ug/album/sambara/1581694430"
                    target="_blank"
                  >
                    <div>
                      <StaticImage src="../images/iTunes.png" alt="itunes" />
                    </div>
                  </a>

                  <a
                    href="https://tidal.com/browse/album/194484748"
                    target="_blank"
                  >
                    <div>
                      <img src={tidalLogo} alt="tidal" className="w-full" />
                    </div>
                  </a>
                  <a
                    href="https://open.spotify.com/album/3uaO0KE3UxzPRf7C7j1UQC?si=8Hnf6UO-SDG-7hfdO95jMQ"
                    target="_blank"
                  >
                    <div>
                      <img src={spotifyLogo} alt="spotify" className="w-full" />
                    </div>
                  </a>

                  <a
                    href="https://amazon.com/music/player/albums/B09CX1SNQT?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Mbn7Kyhv0HDuCYhqlYPre4Vb7"
                    target="_blank"
                  >
                    <div>
                      <img src={amazonLogo} alt="amazon" className="w-full" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center my-4">
          <div className="w-[2px] h-40 bg-blue-700 items"></div>
        </div>
        <div className="w-full justify-center uppercase text-3xl font-bold flex gap-2">
          <span>album</span>
          <span className="text-goodBlue">tracks</span>
        </div>
        <div className="w-full bg-goodBlue/5 my-4 rounded-3xl py-8 px-4">
          <div className="border-t-[1px] flex flex-col border-goodBlue/50">
            {tracks.map(track => (
              <div
                onClick={() => scrollTo("#music-links")}
                key={track.trackNumber}
                className="flex justify-between border-b-[1px] border-goodBlue/50 py-4 cursor-pointer hover:bg-goodBlue/10 sm:px-4 px-2"
              >
                <div className="w-1/2">
                  <span className="font-bold mr-4 sm:mr-16">
                    {track.trackNumber}
                  </span>
                  <span className="font-bold text-xl text-slate-700 mr-2 whitespace-nowrap text-ellipses overflow-hidden">
                    {track.title}
                  </span>
                  <span className="text-gray-700 text-sm">
                    {track.duration}
                  </span>
                </div>
                <div className="w-1/2 hidden  md:flex justify-end whitespace-nowrap">
                  <span className="uppercase">
                    <span className="font-semibold mr-[2px]">
                      {track.album}
                    </span>{" "}
                    <span className="text-sm">album</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <div className="w-[2px] h-40 bg-blue-700 items"></div>
        </div>
        <div className="w-full items-center flex flex-col">
          <span className="uppercase font-extrabold text-6xl my-2">live!</span>
          <span className="capitalize text-3xl text-goodBlue">
            Get notified
          </span>
        </div>

        <div className="flex w-full justify-center gap-2 mb-10 sm:gap-8 ">
          <a href="https://www.bandsintown.com/a/15517139" target="_blank">
            <button className="bg-black p-4 text-white text-2xl mt-4 font-extrabold hover:bg-black/80 rounded-full">
              BandsInTown
            </button>
          </a>
          <a
            href=" https://www.songkick.com/artists/10231266-barnabas-samuel"
            target="_blank"
          >
            <button className="bg-blue-700 p-4 text-white text-2xl mt-4 font-extrabold hover:bg-blue-700/80 rounded-full">
              SongKick{" "}
            </button>
          </a>
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <div className="w-[2px] h-40 bg-blue-700 items"></div>
        </div>
        <div className="flex flex-col">
          <div className="w-full justify-center uppercase text-3xl font-bold flex gap-2">
            <span>latest</span>
            <span className="text-goodBlue">video</span>
          </div>{" "}
          <div className="mt-8 flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YqLHZJYuvrU?si=WswghfRfX0OJhWEG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full flex justify-center mt-4 ">
            <a
              href="https://www.youtube.com/channel/UCbyqFOyo4p8528wrdt_D2hw "
              target="_blank"
            >
              <span className="uppercase text-xl cursor-pointer hover:text-goodBlue flex items-start font-bold border-2 p-2 border-black hover:border-goodBlue rounded-full mt-4">
                <span className="pr-2">explore More</span> <span>&#10230;</span>
              </span>
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <div className="w-[2px] h-40 bg-blue-700 items"></div>
        </div>
        <Subscription />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Music" />

export default Music
