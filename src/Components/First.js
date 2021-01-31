import React ,{useState}from 'react'
import LessonsNav from "./LessonsNav"
import {data} from "./firstData"
const First = () => {
const [lessons, setLessons] = useState(data)
 return (
  <section className="first-section">
       <h1 className="lessons-header">الصف الاول</h1>

   <LessonsNav dataset={lessons}/>
  </section>
 )
}

export default First
