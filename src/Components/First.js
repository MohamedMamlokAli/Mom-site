import React ,{useState}from 'react'
import LessonsNav from "./LessonsNav"
import {data} from "./firstData"
const First = () => {
const [lessons, setLessons] = useState(data)
 return (
  <section className="first-section">
   <LessonsNav dataset={lessons}/>
  </section>
 )
}

export default First
