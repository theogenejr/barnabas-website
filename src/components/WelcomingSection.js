import { Link } from "gatsby"
import React from "react"

const WelcomingSection = () => {
  return (
    <div className="flex flex-col gap-12 tracking-wider leading-tight text-gray-300 font-bold text-xl">
      <p>
        Welcome to my website, where I share my passion for music, community
        activism, and making a positive impact in the world. My name is Barnabas
        Samuel, and my life's journey has been shaped by various challenges,
        including being a refugee twice and living on the streets. But despite
        these struggles, I remain committed to changing the narrative for people
        like me and uplifting those in need.
      </p>
      <p>
        Through my foundation, I engage in philanthropic work, creating
        opportunities for all to lead fulfilling lives. By sharing my story and
        experiences, I aim to inspire others and raise awareness about the
        plight of refugees. I firmly believe that by working together and
        supporting one another, we can create a brighter future for all.
      </p>
      <p>
        I invite you to take a look around and explore my website. Here, you'll
        find information about my music, my community work, and my personal
        journey. I hope you'll stay a while and join me on this journey of
        growth, learning, and making a difference.
      </p>
      <p>Thank you for stopping by. I think you'll like it here.</p>

      <Link to="/about" className="underline text-white">
        <div>Read more about my story.</div>
      </Link>
    </div>
  )
}

export default WelcomingSection
