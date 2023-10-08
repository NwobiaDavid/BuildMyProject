/* eslint-disable react/prop-types */


export default function Score({Techstack}) {
  return (
    <div>
      <h2>summary</h2>
      <p>app type: {Techstack.medium}</p>
      <p>main language: {Techstack.language}</p>
      <p>database used: {Techstack.database}</p>
      <ul>
      <h2>features in the app</h2>
        {Techstack.features.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
