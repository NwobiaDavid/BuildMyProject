import { Link } from "react-router-dom"
import {motion} from 'framer-motion'


export const Home = () => {
  const containerVariant = {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.55,
        stiffness: 120,
        staggerChildren: 0.5,
      }
    },
    exit: {
      y: '-100vw',
      transition: {
        ease: 'easeInOut',
        type: 'tween'
      }
    }
  }


  return (
    <motion.div variants={containerVariant} initial="hidden" animate="visible" exit="exit" className="text-center mb-10">
      <motion.div className="text-9xl font-semibold">Home</motion.div>
      <Link to="/one"><motion.button whileHover="whileHover" className="border-2 hover:bg-black hover:font-semibold hover:text-white duration-200 border-black mt-14 w-full uppercase rounded-xl p-2">go</motion.button></Link>
    </motion.div>
  )
}
