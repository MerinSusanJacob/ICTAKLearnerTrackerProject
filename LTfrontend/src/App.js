import './App.css';
import { Route, Routes } from 'react-router-dom';
import TrainerHome from './components/TrainerHome';
import TrainerAdd from './components/TrainerAdd';
import Header from './components/Header';
import PlacementHome from './components/PlacementHome'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/thome" element={<TrainerHome/>}/>
        <Route path="/phome" element={<PlacementHome/>}/>

        

        <Route path="/tadd" element={<TrainerAdd method="post" data={
          {learnerid:"",
          name:"",
          course:"",
          project:"",
          batch:"",
          cstatus:""}
          }/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
