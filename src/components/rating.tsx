

interface props {
  skill: string,
  rating: number
}

export default function Rating({skill}: props) {

  return (
    <div>
      <p>{skill}</p>
    </div>
  )
}