import React from "react";
import "./styles.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Details from "./components/ResDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <Switch>
      <Route path="/res_details/:id" component={Details}/> 
      <Route exact path="/" component={Home}/>
      <Route path = "/" render={()=> (<div style={{paddingTop:"10vh"}}><h1>404 Not Found</h1></div>)} />
      
      </Switch>
    </div>
    </Router>
  );
}
