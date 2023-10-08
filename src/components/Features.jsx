import { Link } from "react-router-dom";

export default function Features({addFeatures, Techstack}) {
  const features = ['authentication', 'payment', 'AI', 'CMS', 'animations'];
  return (
    <div>
      <h2>what features do you want in your app?</h2>
      <ul>
        {features.map(func=>{
          let isActive = Techstack.features.includes(func) ? 'text-red-500' : '';
          return(
            <li key={func} className={isActive} onClick={()=> addFeatures(func)}>{func}</li>
          )
        })}
      </ul>

      <Link to="/score">
        <button> finish </button>
      </Link>
    </div>
  )
}
