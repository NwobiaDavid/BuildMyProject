/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import {motion} from "framer-motion"


export default function One({Techstack, addMedium}) {

  const containerVar = {
    hidden: {
      y: '3vw',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.3,
        stiffness: 120,
        staggerChildren: 0.3,
        when: "beforeChildren",
      }
    },
    exit: {
      x: "-100vw",
      transition: {
        type: 'spring'
      }
    }
  }

  const listItem = {
  hidden: { opacity: 0, y: '5vw' },
  visible: { opacity: 1, y: 0 , transition:{
    type: 'spring',
    stiffness: 120,
    damping: 4
  }}
};

  const btnVar = {
    hidden: {
      x: '-100vw'
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        delay: 0.3,
        stiffness: 120,
      }
    },
   
  }

  const types = ['mobile app', 'desktop app', 'web app', 'service']
  return (
    <motion.div variants={containerVar} initial="hidden" animate="visible" exit="exit">
      <h2 className="text-5xl py-5 capitalize font-semibold">what are you trying to build</h2>
      <ul>
        {types.map((item)=>{
          let isActive = Techstack.medium === item ? 'text-red-500 font-semibold before:content-["_>>"] ease-out duration-150' : '';
          return(
          <motion.li key={item} variants={listItem} onClick={()=> addMedium(item)} className={`${isActive} hover:text-red-500 duration-200 hover:font-semibold text-3xl cursor-pointer py-3 capitalize`} > {item} </motion.li>
          )
        })} 
      </ul>

      {Techstack.medium && (
        <Link to="/two">
          <motion.button  variants={btnVar} whileHover={{color: 'white', backgroundColor: 'black', transition: {type: 'tween', duration: 2 }}} className="border-2 duration-150 uppercase hover:font-semibold border-black w-full my-5 py-3 rounded-xl px-4 " >next</motion.button>
        </Link>
      )}

    </motion.div>
  )
}
