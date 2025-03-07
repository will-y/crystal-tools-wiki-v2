import {NavLink} from "react-router";
import DropDown from "./DropDown.tsx";
import DropDownElement from "./DropDownElement.tsx";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

function NavBar() {
  return (
    <nav className="bg-gray-800">
      {/*Mobile UI*/}
      <div className="flex justify-between items-center sm:hidden">
        <DropDown height="h-[144px]" icon className="rounded-md px-3 py-2 mx-1 my-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >
          <NavLink to="/" className = {({ isActive }) => "flex rounded-md px-3 py-2 mx-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white " + (isActive ? "bg-gray-900 text-cyan-300" : "")} >Home</NavLink>
          <NavLink to="/wiki" className={({ isActive }) => "flex rounded-md px-3 py-2 mx-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white " + (isActive ? "bg-gray-900 text-white" : "")}>Wiki</NavLink>
          <NavLink to="/datapack-docs" className={({ isActive }) => "flex rounded-md px-3 py-2 mx-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white " + (isActive ? "bg-gray-900 text-white" : "")}>Datapack Docs</NavLink>
          <NavLink to="/skill-tree" className={({ isActive }) => "flex rounded-md px-3 py-2 mx-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white " + (isActive ? "bg-gray-900 text-white" : "")}>Create a Skill Tree</NavLink>
        </DropDown>
        <span className="text-md font-medium text-cyan-400">Crystal Tools Wiki</span>
        <button className="rounded-md px-3 py-2 mx-1 my-2 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer">
          <MagnifyingGlassIcon width={24} height={24} />
        </button>
      </div>
      {/*Desktop UI*/}
      <div className="justify-between hidden sm:flex">
        <div className="flex justify-between items-center max-w-7xl my-2 ">
          <NavLink to="/" className = {({ isActive }) => "ms-1 rounded-md px-3 py-2 text-md font-medium text-cyan-400 hover:bg-gray-700 hover:text-cyan-100 " + (isActive ? "bg-gray-900 text-cyan-200" : "")} >Crystal Tools</NavLink>
          <NavLink to="/wiki" className={({ isActive }) => "mx-2 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer " + (isActive ? "bg-gray-900 text-white" : "")}>Wiki</NavLink>
          <NavLink to="/datapack-docs" className={({ isActive }) => "mx-2 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer " + (isActive ? "bg-gray-900 text-white" : "")}>Datapack Docs</NavLink>
          <NavLink to="/skill-tree" className={({ isActive }) => "mx-2 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer " + (isActive ? "bg-gray-900 text-white" : "")}>Create a Skill Tree</NavLink>
        </div>
        <div className="flex justify-between items-center max-w-7xl my-2 pe-2">
          <DropDown height="h-[128px]" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" title="Download">
            <DropDownElement title="CurseForge" url="https://www.curseforge.com/minecraft/mc-mods/upgradable-crystal-tools">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px"><path fill="#f16436" d="M14.01,16l0.63,2H0v1c0,4.6,7.97,8.37,18.27,8.73l2,6.27h1.69l-2.07,7.62h17.65L36.02,34h1.71l0.22-0.69 c1.78-5.52,6.42-10.18,11.28-11.34L50,21.79V16H14.01z M33.29,30.1c-0.68,0.81-1.57,1.08-2.18,1.08c-0.54,0-0.81,0.14-0.95,0.82 c0,0-0.81-1.36-1.9-1.22C27.17,30.91,25,30.37,25,27.92c0-1.35,1.63-2.17,1.63-2.17s-0.68,2.31,1.09,2.31 c1.68,0,1.52-1.86,0.95-2.72c-0.55-0.81-0.68-0.95-0.41-2.04c0.27,0.82,1.36,1.09,1.22,0.55c-0.13-0.55-0.81-1.5-0.27-2.58 c0.41-0.83,2.05-1.6,2.39-1.74c-0.27,0.18-1.42,0.97-1.3,2.28c0.13,1.49,1.49,2.72,1.49,2.72s-1.48,1.09-0.68,1.63 c0.82,0.54,1.23-0.27,1.23-0.27s0.54,0.95-0.68,1.35c-1.23,0.41-0.46,1.77,0.27,1.77c0.54,0,2.04-0.13,1.77-2.44 C34.24,27.38,34.58,28.55,33.29,30.1z"/></svg>
            </DropDownElement>
            <DropDownElement title="Modrinth" url="https://modrinth.com/mod/crystal-tools">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px"><path fill="#16ae55" d="M12.252 0.004a11.78 11.768 0 0 0 -8.92 3.73 11 10.999 0 0 0 -2.17 3.11 11.37 11.359 0 0 0 -1.16 5.169c0 1.42 0.17 2.5 0.6 3.77 0.24 0.759 0.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c0.44 0.05 2.54 0.07 2.76 0.02 0.2 -0.04 0.22 0.1 -0.26 -1.7l-0.36 -1.37 -1.01 -0.06a8.5 8.489 0 0 1 -5.18 -1.8 5.34 5.34 0 0 1 -1.3 -1.26c0 -0.05 0.34 -0.28 0.74 -0.5a37.572 37.545 0 0 1 2.88 -1.629c0.03 0 0.5 0.45 1.06 0.98l1 0.97 2.07 -0.43 2.06 -0.43 1.47 -1.47c0.8 -0.8 1.48 -1.5 1.48 -1.52 0 -0.09 -0.42 -1.63 -0.46 -1.7 -0.04 -0.06 -0.2 -0.03 -1.02 0.18 -0.53 0.13 -1.2 0.3 -1.45 0.4l-0.48 0.15 -0.53 0.53 -0.53 0.53 -0.93 0.1 -0.93 0.07 -0.52 -0.5a2.7 2.7 0 0 1 -0.96 -1.7l-0.13 -0.6 0.43 -0.57c0.68 -0.9 0.68 -0.9 1.46 -1.1 0.4 -0.1 0.65 -0.2 0.83 -0.33 0.13 -0.099 0.65 -0.579 1.14 -1.069l0.9 -0.9 -0.7 -0.7 -0.7 -0.7 -1.95 0.54c-1.07 0.3 -1.96 0.53 -1.97 0.53 -0.03 0 -2.23 2.48 -2.63 2.97l-0.29 0.35 0.28 1.03c0.16 0.56 0.3 1.16 0.31 1.34l0.03 0.3 -0.34 0.23c-0.37 0.23 -2.22 1.3 -2.84 1.63 -0.36 0.2 -0.37 0.2 -0.44 0.1 -0.08 -0.1 -0.23 -0.6 -0.32 -1.03 -0.18 -0.86 -0.17 -2.75 0.02 -3.73a8.84 8.839 0 0 1 7.9 -6.93c0.43 -0.03 0.77 -0.08 0.78 -0.1 0.06 -0.17 0.5 -2.999 0.47 -3.039 -0.01 -0.02 -0.1 -0.02 -0.2 -0.03Zm3.68 0.67c-0.2 0 -0.3 0.1 -0.37 0.38 -0.06 0.23 -0.46 2.42 -0.46 2.52 0 0.04 0.1 0.11 0.22 0.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 0.4 2.8c0 1.07 0 1.27 -0.1 1.73a9.37 9.369 0 0 1 -1.76 3.769c-0.32 0.4 -0.98 1.06 -1.37 1.38 -0.38 0.32 -1.54 1.1 -1.7 1.14 -0.1 0.03 -0.1 0.06 -0.07 0.26 0.03 0.18 0.64 2.56 0.7 2.78l0.06 0.06a12.07 12.058 0 0 0 7.27 -9.4c0.13 -0.77 0.13 -2.58 0 -3.4a11.96 11.948 0 0 0 -5.73 -8.578c-0.7 -0.42 -2.05 -1.06 -2.25 -1.06Z" stroke-width="1"></path></svg>
            </DropDownElement>
            <DropDownElement title="Github" url="https://github.com/will-y/crystal-tools/releases">
              <svg width="24px" viewBox="0 0 98 96" height="24px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#000000"/></svg>
            </DropDownElement>
          </DropDown>
        </div>
      </div>
    </nav>
  )
}

export default NavBar