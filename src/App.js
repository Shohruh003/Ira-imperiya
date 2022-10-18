import { Route, Routes } from "react-router-dom";
import { Buy } from "./Pages/Buy/Buy";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/buy' element={<Buy/>}/>
      </Routes>
    </div>
  )
}

export default App;
