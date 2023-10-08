import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { One } from './components/One';
import { Two } from './components/Two';
import { Three } from './components/Three';
import { Score } from './components/Score';
import { Features } from './components/Features';

function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One addMedium={addMedium} Techstack={Techstack} />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/features" element={<Features />} /> 
        <Route path="/score" element={<Score />} />
      </Routes>
    </>
  );
}

export default App;
