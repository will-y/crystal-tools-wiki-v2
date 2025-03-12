interface ToggleSwitchProps {
  name: string,
  checked: boolean,
  setChecked: (checked: boolean) => void
}

export default function ToggleSwitch(props: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-2">
      <label className="relative inline-block w-[60px] h-[34px] shrink-0">
        <input type="checkbox" className="opacity-0 w-0 h-0" checked={props.checked} onChange={() => props.setChecked(!props.checked)} />
        <span className={"absolute cursor-pointer top-0 left-0 right-0 bottom-0  duration-300 rounded-full " + (props.checked ? "bg-cyan-500" : "bg-gray-700")} />
        <span className={"absolute h-[26px] w-[26px] left-[4px] bottom-[4px] duration-300 rounded-full " + (props.checked ? "translate-x-[26px] bg-cyan-200" : "bg-gray-500")}/>
      </label>
      {props.name}
    </div>
  )
}