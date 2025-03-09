import SkillTreeGraphNode from "./SkillTreeGraphNode.ts";

export default interface SkillTreeV2 {
  tiers: SkillNodeV2[][]
}

export interface SkillNodeV2 {
  id: number,
  name: string,
  description: string,
  limit: number,
  requirements: RequirementV2[],
  key: string,
  value: number,
  subtext?: SubTextV2
}

export type RequirementV2 = ItemRequirementV2 | NodeRequirementV2 | OrNodeRequirementV2 | NotNodeRequirementV2

export interface ItemRequirementV2 {
  item: string[]
}

export interface NodeRequirementV2 {
  node: number[]
}

export interface OrNodeRequirementV2 {
  or_node: number[]
}

export interface NotNodeRequirementV2 {
  not_node: number[],
  unless: number[]
}

export interface SubTextV2 {
  text: string,
  color: string
}

export function toGraphNodes(skillTree: SkillTreeV2): Map<number, SkillTreeGraphNode<SkillNodeV2>> {
  return new Map(skillTree.tiers.flatMap((tier, tierIndex) =>
    tier.map((node, nodeIndex) => {
    return [
      node.id,
      {
        skillNode: node,
        tierIndex: tierIndex,
        tierSize: tier.length,
        index: nodeIndex
      }
    ]
  })))
}