/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


export default function One({Techstack, addMedium}) {
  const types = ['mobile app', 'desktop app', 'web app', 'service']
  return (
    <div>
      <h2>what are you trying to build</h2>
      <ul>
        {types.map((item)=>(
          <li key={item} onClick={()=> addMedium(item)} > {item} </li>
        ))} 
      </ul>

      {Techstack.medium && (
        <Link to="/two">
          <button>next</button>
        </Link>
      )}
      
    </div>
  )
}
