import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import First from "./Components/First"
import Second from "./Components/Second"
import Exams from "./Components/Exams"
const App = () => {
  return (
<BrowserRouter>
<main className="site-body">
  <Navbar/>
  <Switch>
    <Route component={Home} path="/" exact></Route>
    <Route component={First} path="/first" ></Route>
    <Route component={Second} path="/second" ></Route>
    <Route component={Exams} path="/exams" ></Route>
  </Switch>

</main>
</BrowserRouter>  )
}

export default App
