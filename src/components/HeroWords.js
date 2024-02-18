import React from "react"
import { motion } from "framer-motion"

const HeroWords = () => {
  return (
    <div className="absolute left-4 right-0 mx-6 text-slate-200">
      <div className="flex justify-between items-center flex-wrap gap-8">
        <div className="flex flex-col uppercase font-black gap-10 text-5xl">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="sm:text-6xl text-3xl flex items-start flex-col"
          >
            community activist
            <motion.div
              initial={{ height: 16, width: 0 }}
              animate={{ height: 16, width: 128 }}
              transition={{ duration: 1, delay: 2 }}
              className=" bg-goodBlue"
            ></motion.div>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="sm:text-8xl text-4xl flex items-start flex-col"
          >
            musician
            <motion.div
              initial={{ height: 16, width: 0 }}
              animate={{ height: 16, width: 60 }}
              transition={{ duration: 1, delay: 4 }}
              className=" bg-goodBlue"
            ></motion.div>
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default HeroWords
