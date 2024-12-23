import { CiStar } from "react-icons/ci";

interface props {
  skill: string,
  rating: number
}

export default function Rating({skill, rating}: props) {

  const rates = Array.from({ length : rating}, (_, index) => (
    <CiStar key={index} color="#FFD700"/>
  ))

  const blankRates = Array.from({ length : 5 - rating}, (_, index) => (
    <CiStar key={index}/>
  ))

  return (
    <div>
      <p>{skill}</p>
      <div className="flex flex-row">
        {rates}
        {blankRates}
      </div>
    </div>
  )
}