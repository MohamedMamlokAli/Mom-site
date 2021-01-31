import React,{useEffect} from 'react'
import computer from "./computer.svg"
import keyboard from "./keyboard.svg"
import mouse from "./mouse.svg"
import minster from "./minister.svg"
import govern from "./govern.svg"
import {NavLink} from "react-router-dom"
import gsap from "gsap"
import { Timeline } from 'gsap/gsap-core'
const Home = () => {
useEffect(() => {
  const tl = new Timeline()
  const logotl= new Timeline({repeat:-1})
  tl.from(".head",{duration:1,opacity :0,x:-100,ease: "sine.out",stagger:.2})
  .from(".btn",{duration:1,y:100,opacity:0,stagger:.25,overflow:"hidden"},"-=.5")
  tl.from(".pc-img",{duration:1,opacity:0,y:-100},"-=2.5")
  .from(".keyboard",{duration:1,opacity:0,x:-100},"-=2")
  .from(".mouse",{duration:1,opacity:0,x:100},"-=1.5")
  logotl.from(".swap",{duration:2,opacity:0,display:"block"},"")
  .to(".swap",{duration:2,opacity:0,display:"block"},"+=2").from(".swap1",{duration:2,opacity:0,display:"block"},)
  .to(".swap1",{duration:2,opacity:0,display:"block"},"+=2")
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
      <div className="swap">
      <img className="swap" src={govern} alt=""/>
      </div>
      <div className="swap1">
        <img className="swap1" src={minster} alt=""/>
      </div>
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
