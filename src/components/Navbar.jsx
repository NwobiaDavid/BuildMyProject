import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const navbarVar = {
        hidden: {
            x: '-3vw',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.48,
                ease: 'easeIn'
            }
        }
    }
  return (
    <div className="p-4 border-b-2  border-b-gray-300  bg-gray-300 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <Link to="/"><motion.h2 variants={navbarVar} animate="visible" initial="hidden" className="text-3xl font-semibold">Navbar</motion.h2></Link>
    </div>
  )
}
