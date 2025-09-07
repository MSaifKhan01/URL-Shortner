// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import Navbar from "./components/navbar";
// import GenerateUrl from "./components/GenerateUrl";
// import './index.css';

// function App() {
//   const [activeTab, setActiveTab] = useState('home');
  
//   return (
//     <div className="App">
//       <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <Routes>
//         <Route path="/" element={<GenerateUrl />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/navbar";
import GenerateUrl from "./components/GenrateURL";
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/" element={<GenerateUrl />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;