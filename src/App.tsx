import './App.css'
import {Routes, Route, Link} from "react-router";
import Home from "./pages/Home.tsx";
import DataPackDocs from "./pages/DatapackDocs.tsx";
import SkillTreeCreator from "./pages/SkillTreeCreator.tsx";
import Wiki from "./pages/Wiki.tsx";

function App() {

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="flex justify-between">
          <div className="flex justify-between items-center max-w-7xl my-2">
            <Link to="/wiki" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Wiki</Link>
            <Link to="/datapack-docs" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Datapack Docs</Link>
            <Link to="/skill-tree" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Create a Skill Tree</Link>
          </div>
          <div className="flex justify-between items-center max-w-7xl my-2">
            <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white">Download</button>
          </div>
        </div>
      </nav>
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
