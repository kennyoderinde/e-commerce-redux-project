import './App.css';
import { Routes, Route } from  "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import MultiplicationTable  from "./pages/MultiplicationTable"
import Survey  from "./pages/Survey/Survey"
import Header from "./Components/Header/Header"


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/multiplication-table' element={<MultiplicationTable />}/>
        <Route path='/survey' element={<Survey />}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
