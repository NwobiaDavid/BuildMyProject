import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import { Home } from './components/Home';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Score from './components/Score';
import Features from './components/Features';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();

  const [Techstack, setTechstack] = useState({
    medium: "",
    language: "",
    database: "",
    features: []
  })

  const addMedium = (medium) =>{
      setTechstack({...Techstack, medium});
  }

  const addLanguage = (language) =>{
    setTechstack({...Techstack, language});
}

const addDatabase = (database) =>{
  setTechstack({...Techstack, database});
}

const addFeatures = (features) =>{
  let newfeatures;
  if(!Techstack.features.includes(features)){
    newfeatures=[...Techstack.features, features];
  }else{
    newfeatures = Techstack.features.filter(x=> x!== features);
  }
  setTechstack({...Techstack, features: newfeatures})
}


  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
          <Navbar />
        <div className="flex h-[90%] flex-col justify-center items-center ">
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/one" element={<One addMedium={addMedium} Techstack={Techstack} />} />
              <Route path="/two" element={<Two addLanguage={addLanguage} Techstack={Techstack} />} />
              <Route path="/three" element={<Three addDatabase={addDatabase}  Techstack={Techstack}/>} />
              <Route path="/features" element={<Features addFeatures={addFeatures}  Techstack={Techstack}/>} />
              <Route path="/score" element={<Score Techstack={Techstack} />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
