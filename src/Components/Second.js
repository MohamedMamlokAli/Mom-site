import React ,{useState}from 'react'
import LessonsNav from "./LessonsNav"
import {data} from "./secondData"
const Second = () => {
const [lessons, setLessons] = useState(data)
 return (
  <section className="section">
   <LessonsNav dataset={lessons}/>
  </section>
 )
}

export default Second
