import { Link } from "react-router-dom"

export default function Three({addDatabase, Techstack}) {
  const database = ['mongodb', 'my sql', 'postgres', 'firebase', 'supabase']
  return (
    <div>
      <h2>what database do you what to use in your project?</h2>

      <ul>
        {database.map(item=>(
          <li key={item} onClick={()=> addDatabase(item)} >{item}</li>
        ))}
      </ul>


      {Techstack.database && (
        <Link to='/features'>
          <button>next</button>
        </Link>
      )}
    </div>
  )
}
