import ToggleSwitch from "../ToggleSwitch.tsx";

interface SkillTreeSettingsProps {
  booleanSettings: BooleanSetting[],
  numberSettings: NumberSetting[]
}

interface BooleanSetting {
  value: boolean,
  name: string,
  set: (val: boolean) => void
}

interface NumberSetting {
  value: number,
  min: number,
  max: number,
  name: string,
  set: (val: number) => void
}

export default function SkillTreeSettings(props: SkillTreeSettingsProps) {
  return (
    <div className="flex flex-row md:flex-col gap-2">
      {props.booleanSettings.map((setting: BooleanSetting) => {
        return <ToggleSwitch name={setting.name} checked={setting.value} setChecked={() => setting.set(!setting.value)} />
      })}
      {props.numberSettings.map((setting: NumberSetting) => {
        return (<>
          <label>{setting.name}</label>
          <input type="range" min={setting.min} max={setting.max} value={setting.value}
                 onChange={e => setting.set(+e.target.value)} className="accent-cyan-300" />
        </>)
      })}
    </div>
  )
}