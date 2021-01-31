import React,{useState,useEffect} from 'react'
import {gsap} from "gsap"
import { Timeline } from 'gsap/gsap-core'
import { random } from 'gsap/gsap-core'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown'
gsap.registerPlugin(CSSRulePlugin, Draggable, EaselPlugin, MotionPathPlugin, PixiPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);


const LessonsNav = (props) => {
 const {dataset} = props
 const [id, setid] = useState(0)
 useEffect(() => {
  const tl = new Timeline()
  tl
  .from(".video",{duration:2,y:-100,opacity:0,ease:"elastic.out"})
 }, [])
 return (
  <div>
  <div className="page-flex">

<Nav className="nav-animate" justify variant="tabs" defaultActiveKey="/home">
      <NavDropdown  title="اختر الدرس" id="nav-dropdown">
        {dataset.map(lesson=><NavDropdown.Item eventKey={lesson.id} onClick={()=>setid(lesson.id-1)}>{lesson.title}</NavDropdown.Item>)}
      </NavDropdown>
</Nav>   
<div className="video">
      <iframe width="850" height="400" src={dataset[id].url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen="true"></iframe>
   </div>
  </div>

  </div>
 )
}

export default LessonsNav
