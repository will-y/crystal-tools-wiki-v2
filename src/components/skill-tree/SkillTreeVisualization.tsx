import SkillTreeV2, {SkillNodeV2, toGraphNodes} from "../../model/SkillTreeV2.ts";
import {WheelEvent, MouseEvent, useState, useEffect, Fragment} from "react";
import {clamp} from "../../util/Math.ts";
import SkillTreeGraphNode from "../../model/SkillTreeGraphNode.ts";

interface SkillTreeVisualizationProps {
  skillTree: SkillTreeV2
}

const width = 150
const height = 40
const spacing = 40

function SkillTreeVisualization(props: SkillTreeVisualizationProps) {
  const [nodes, setNodes] = useState(new Map<number, SkillTreeGraphNode<SkillNodeV2>>)
  const [mouseIn, setMouseIn] = useState(false)
  const [grabbing, setGrabbing] = useState(false)
  const [svgWidth, setSvgWidth] = useState(1000)
  const [svgHeight, setSvgHeight] = useState(1000)
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    setNodes(toGraphNodes(props.skillTree))
  }, [props.skillTree])

  function onMouseMove(event: MouseEvent) {
    if (mouseIn && event.buttons != 0) {
      event.preventDefault()
      setXOffset(xOffset + event.movementX * (svgWidth / 1000))
      setYOffset(yOffset + event.movementY * (svgHeight / 1000))
    }
  }

  function onScroll(event: WheelEvent) {
    event.preventDefault()
    setSvgWidth(clamp(svgWidth + event.deltaY, 100, 2000))
    setSvgHeight(clamp(svgHeight + event.deltaY, 100, 2000))
  }

  function getNodePosition(node: SkillTreeGraphNode<SkillNodeV2>): [number, number] {
    const xI = (svgWidth - (node.tierSize * (width + spacing) - spacing)) / 2
    const yI = (svgHeight - (props.skillTree.tiers.length * (height + spacing) - spacing)) / 2
    const x = xOffset + xI + node.index * (width + spacing)
    const y = yOffset + yI + node.tierIndex * (height + spacing)

    return [x, y]
  }

  return (
    <svg viewBox={`0 0 ${svgHeight} ${svgWidth}`} width={750} height={750} onWheelCapture={onScroll}
         onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => {setMouseIn(false); setGrabbing(false)}} onMouseMove={onMouseMove}
         onMouseDown={() => setGrabbing(true)} onMouseUp={() => setGrabbing(false)}
         className={"border-1 border-gray-600 cursor-grab " + (grabbing ? "cursor-grabbing" : "")}>
      {Array.from(nodes.entries()).map((entry) => {
        const [x, y] = getNodePosition(entry[1]);
        return (<Fragment key={entry[0] + "-div"}>
          <rect key={entry[0] + "-rect"} x={x} y={y} width={width} height={height} fill="#FFFFFF" />
          {/*TODO: Fix the positioning*/}
          <text key={entry[0] + "-text"} x={x} y={y + height / 2} className="select-none">{entry[1].skillNode.name}</text>
        </Fragment>)
      })}
    </svg>
  )
}

function getLink(node1: SkillNodeV2, node2: SkillNodeV2) {

}

export default SkillTreeVisualization