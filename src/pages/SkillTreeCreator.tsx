import {pickAxe} from "../model/PickAxe.ts";
import SkillTreeVisualization from "../components/skill-tree/SkillTreeVisualization.tsx";

function SkillTreeCreator() {

  return (
    <>
      <span>Skill Tree Page</span>
      <span>{JSON.stringify(pickAxe.tiers[0][0].id)}</span>
      <SkillTreeVisualization skillTree={pickAxe} />
    </>

  )
}

export default SkillTreeCreator

// Idea: Use the blog post, just use a svg. You can probably make a class for node (circle object), then we will need to draw all of the lines
// Could maybe use animations for doing things but maybe not
// Drag and drop could be hard, would want to drag between svg elements probably ...
// Just get display / panning / zooming working first