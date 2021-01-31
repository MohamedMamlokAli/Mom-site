import React,{useEffect} from 'react'
import computer from "./computer.svg"
import keyboard from "./keyboard.svg"
import mouse from "./mouse.svg"
import {NavLink} from "react-router-dom"
import gsap from "gsap"
import { Timeline,SplitText } from 'gsap/gsap-core'
import { random } from 'gsap/gsap-core'
const Home = () => {
 useEffect(() => {
  const tl = new Timeline()
  tl.from(".head",{duration:1,opacity :0,x:-100,ease: "sine.out",stagger:.2})
  .from(".btn",{duration:1,y:100,opacity:0,stagger:.25,overflow:"hidden"},"-=.5")
  tl.from(".pc-img",{duration:1,opacity:0,y:-100},"-=2.5")
  .from(".keyboard",{duration:1,opacity:0,x:-100},"-=2")
  .from(".mouse",{duration:1,opacity:0,x:100},"-=1.5")
 }, [])
 return (
  <section className="section">
   <div className="main">
    <div className="right-content">
     <h1 className="head">أ/ سحر فراج</h1>
     <h3 className="head">معلم كبير حاسب الى</h3>
     <h4 className="head">المدرسة الثانوية الفنية العسكرية بعابدين</h4>
     <h4 className="head">محافظة القاهرة</h4>
     <h3 className="head">شاهد المحاضرات</h3>
     <div className="right-buttons">
         <button type="button" class="btn">
           <NavLink className="nav-link text-white" to="/second" >الصف الثانى</NavLink>
         </button>
         <button type="button " class="btn">
             <NavLink className="nav-link text-white" to="/first" >الصف الاول</NavLink>
         </button>   

     </div>
    </div>
    <div className="left-content">
     <div className="pc-img">
      <img src={computer} alt=""/>
      </div>
     <div className="mouse_keyboard">
      <img className="keyboard" src={keyboard} alt=""/>
      <img className="mouse" src={mouse} alt=""/>
      </div>
    </div>
   </div>
  </section>
 )
}

export default Home
