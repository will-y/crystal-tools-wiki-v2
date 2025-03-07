import React, {ButtonHTMLAttributes, Children, useState} from "react"
import {Bars3Icon} from "@heroicons/react/24/outline";

interface DropDownProps {
  children?: React.ReactNode,
  height: string,
  className?: string,
  title?: string,
  icon?: boolean
}

function DropDown(props: DropDownProps) {
  const [open, setOpen] = useState(false)
  const childArray = Children.toArray(props.children)
  const dropDownButton: ButtonHTMLAttributes<HTMLButtonElement> =
    <button className={props.className + " cursor-pointer"} onClick={() => setOpen(!open)} onBlur={() => setOpen(false)} >
      {!props.icon ? props.title : <Bars3Icon width={24} height={24} />}
    </button>
  return (
    <>
      {dropDownButton}
      <div className={"absolute flex flex-col top-[56px] md:right-[0px] rounded-es-md overflow-hidden transition-[height] ease-in-out duration-300 bg-gray-800 w-full md:w-auto " + (open ? props.height : "h-0")}>
        {childArray.map((child, i) =>
          (<button key={i} onFocus={(e) => {
            // This is a little hacky, but I want the dropdown to stay open, but then close after you leave the page
            setOpen(true)
            if (e.relatedTarget instanceof HTMLButtonElement) {
              e.relatedTarget?.focus()
            }
            setTimeout(() => setOpen(false), 100)
          }}>
            {child}
          </button>)
        )}
      </div>
    </>
  )
}

export default DropDown