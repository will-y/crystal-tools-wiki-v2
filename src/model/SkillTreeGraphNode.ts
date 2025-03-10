export default interface SkillTreeGraphNode<T> {
  skillNode: T,
  tierIndex: number,
  tierSize: number,
  index: number,
  requirements: Map<"OR" | "AND" | "NOT", number[]>
}