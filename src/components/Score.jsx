/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Score({ Techstack }) {
  return (
    <div className='text-3xl pb-10 text-center'>
      <motion.h2
        initial={{ y: '-20vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='text-9xl font-semibold uppercase py-5'
      >
        summary
      </motion.h2>
      <motion.p
        initial={{ x: '-20vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
        className='py-2 capitalize'
      >
        app type: <span className="text-red-500 font-semibold">{Techstack.medium}</span>
      </motion.p>
      <motion.p
        initial={{ x: '20vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.6 }}
        className='py-2 capitalize'
      >
        main language: <span className="text-red-500 font-semibold">{Techstack.language}</span>
      </motion.p>
      <motion.p
        initial={{ x: '-20vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.9 }}
        className='py-2 capitalize'
      >
        database used:<span className="text-red-500 font-semibold"> {Techstack.database}</span>
      </motion.p>
      <ul>
        <motion.h2
          initial={{ y: '20vh', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            delay: 0.12,
            staggerChildren: 0.4,
            when: 'beforeChildren',
          }}
          className='py-2 capitalize'
        >
          features in the app
        </motion.h2>
        {Techstack.features.map((item) => (
          <motion.li
            initial={{ y: '-10vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
            key={item}
            className='text-xl capitalize py-2'
          >
          {">>"} {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
