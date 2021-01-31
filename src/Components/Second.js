import React ,{useState}from 'react'
import LessonsNav from "./LessonsNav"
import {data} from "./secondData"
const Second = () => {
const [lessons, setLessons] = useState(data)
 return (
  <section className="section">
       <h1 className="lessons-header">الصف الثانى</h1>

   <LessonsNav dataset={lessons}/>
  </section>
 )
}

export default Second
