import './App.css'
import {Routes, Route} from "react-router";
import Home from "./pages/Home.tsx";
import DataPackDocs from "./pages/DatapackDocs.tsx";
import SkillTreeCreator from "./pages/SkillTreeCreator.tsx";
import Wiki from "./pages/Wiki.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path = "wiki" element={<Wiki />} />
        <Route path = "datapack-docs" element={<DataPackDocs />} />
        <Route path = "skill-tree" element={<SkillTreeCreator />} />
      </Routes>
    </div>
  )
}

export default App
