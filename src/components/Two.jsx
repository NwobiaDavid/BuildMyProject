/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Two({Techstack, addLanguage}) {
  const languages = ['python', 'javascript', 'Go', 'c#', 'PHP'];
  return (
    <div>
      <h2>choose our main language for the project</h2>

      <ul>
        {languages.map((lang)=>(
          <li key={lang} onClick={()=> addLanguage(lang)}> {lang} </li>
        ))}
      </ul>

      {Techstack.language && (
        <Link to="/three">
          <button>next</button>
        </Link>
      )}
    </div>
  )
}
