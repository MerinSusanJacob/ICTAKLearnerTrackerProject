import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TrainerHome from './components/TrainerHome';
import TrainerAdd from './components/TrainerAdd';

import PlacementHome from './components/PlacementHome'

import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/home" element={<Main child={<Home />} />} />
        <Route path="/admin" element={<Main child={<Admin />} />} />
        <Route path="/thome" element={<Main child={<TrainerHome />} />} />
        <Route path="/phome" element={<Main child={<PlacementHome />} />} />
        <Route path="/tadd" element={<Main child={<TrainerAdd method="post" data={
          {
            learnerid: "",
            name: "",
            course: "",
            project: "",
            batch: "",
            cstatus: ""
          }
        } />} />} />
      </Routes>


    </div>
  );
}

export default App;
