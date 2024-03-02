import React from "react"
import { motion } from "framer-motion"

const HeroWords = () => {
  return (
    <div className="absolute left-2 sm:left-4 mx-6 text-slate-200">
      <div className="flex justify-between items-center flex-wrap gap-8">
        <div className="flex flex-col uppercase font-black gap-10 text-5xl">
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="sm:text-6xl text-xl flex items-start flex-col"
          >
            community activist
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 2 }}
              className=" bg-goodBlue h-2 sm:h-4"
            ></motion.div>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="sm:text-6xl text-xl flex items-start flex-col"
          >
            musician
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 1, delay: 4 }}
              className=" bg-goodBlue h-2 sm:h-4"
            ></motion.div>
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default HeroWords
