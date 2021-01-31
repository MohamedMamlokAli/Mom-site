import React,{useState,useEffect} from 'react'
import gsap from "gsap"
import { Timeline } from 'gsap/gsap-core'
import { random } from 'gsap/gsap-core'

const LessonsNav = (props) => {
 const {dataset} = props
 const [id, setid] = useState(0)
 useEffect(() => {
  const tl = new Timeline()
  tl.from(".lesson",{duration:1,opacity :0,x:random(-100,100),y:random(-100,100),ease: "sine.out",stagger:.2})
  .from(".video",{duration:2,y:100,opacity:0,ease:"elastic.out"},"-=1")
 }, [])
 return (
  <div>
    <h1 className="lessons-header">المراجعة النهائية</h1>
  <div className="page-flex">

   <div className="lesson-content">
    <ul className="lessons-list">
     {dataset.map(lesson=><li className="lesson" key={lesson.id} onClick={()=>{setid(lesson.id-1)}}>{lesson.title}</li>)}
    </ul>
   </div>
   <div className="video">
      <iframe width="560" height="315" src={dataset[id].url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen="true"></iframe>
   </div>
  </div>

  </div>
 )
}

export default LessonsNav
