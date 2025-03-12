import {pickAxe} from "../model/PickAxe.ts";
import SkillTreeVisualization from "../components/skill-tree/SkillTreeVisualization.tsx";
import SkillTreeSettings from "../components/skill-tree/SkillTreeSettings.tsx";
import {useState} from "react";

function SkillTreeCreator() {
  const [showOr, setShowOr] = useState(false);
  const [showNot, setShowNot] = useState(true);
  const [showAnd, setShowAnd] = useState(true);
  const [xSpacing, setXSpacing] = useState(40);
  const [ySpacing, setYSpacing] = useState(40);

  const booleanSettings = [
    {name: "Show Or Dependencies", value: showOr, set: setShowOr},
    {name: "Show Not Dependencies", value: showNot, set: setShowNot},
    {name: "Show And Dependencies", value: showAnd, set: setShowAnd}
  ]

  const numberSettings = [
    {name: "X Spacing", value: xSpacing, set: setXSpacing, min: 0, max: 100},
    {name: "Y Spacing", value: ySpacing, set: setYSpacing, min: 0, max: 100}
  ]

  return (
    <div className="flex flex-col md:flex-row w-full gap-10 p-4">
      <SkillTreeSettings booleanSettings={booleanSettings} numberSettings={numberSettings} />
      <SkillTreeVisualization skillTree={pickAxe} showOrDependencies={showOr} showNotDependencies={showNot}
                              showAndDependencies={showAnd} xSpacing={xSpacing} ySpacing={ySpacing} />
    </div>
  )
}

export default SkillTreeCreator

// Idea: Use the blog post, just use a svg. You can probably make a class for node (circle object), then we will need to draw all of the lines
// Could maybe use animations for doing things but maybe not
// Drag and drop could be hard, would want to drag between svg elements probably ...
// Just get display / panning / zooming working first