import React from "react";
import LandPage from "./components/LandPage";
import {  Route, Switch } from "react-router"; 
import { BrowserRouter as Router } from 'react-router-dom';
import MusicPage from "./components/MusicPage";
import MusicList from "./components/SongsList";
import "./styles.css";
import MyPlayList from "./components/MyPlayList";
function App()
{
   
     return  <Router>   
       <div> 
      <Switch>
         <Route path="/" exact component={LandPage}></Route>
         <Route path="/home" exact component={MusicPage}></Route>
      <Route path="/list/:clickid/:albumid" exact component={MusicList}></Route>
      <Route path="/myplaylist" exact  component={MyPlayList}></Route>
      </Switch>
   </div>
   </Router>
   
}
export default App;