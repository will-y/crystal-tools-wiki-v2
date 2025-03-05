import React, {ButtonHTMLAttributes, Children, useState} from "react"

interface DropDownProps {
  children?: React.ReactNode,
  className?: string,
  title: string
}

function DropDown(props: DropDownProps) {
  const [open, setOpen] = useState(false)
  const childArray = Children.toArray(props.children)
  const dropDownButton: ButtonHTMLAttributes<HTMLButtonElement> =
    <button className={props.className + " cursor-pointer"} onClick={() => setOpen(!open)} onBlur={() => {
      setOpen(false)
      console.log("losing focus")
    }} >
      {props.title}
    </button>
  return (
    <>
      {dropDownButton}
      <div className={"absolute flex flex-col top-[52px] right-[0px] rounded-es-md overflow-hidden transition-[height] duration-200 bg-gray-900 w-auto " + (open ? "h-[128px]" : "h-0")}>
        {childArray.map((child) =>
          (<button onFocus={(e) => {
            // This is a little hacky, but I want the dropdown to stay open, but then close after you leave the page
            setOpen(true)
            if (e.relatedTarget instanceof HTMLButtonElement) {
              e.relatedTarget?.focus()
            }
          }}>
            {child}
          </button>)
        )}
      </div>
    </>
  )
}

export default DropDown