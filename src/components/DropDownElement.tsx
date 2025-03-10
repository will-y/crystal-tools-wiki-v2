import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import React from "react";
interface DropDownElementProps {
  title: string,
  url: string,
  children?: React.ReactNode
}

function DropDownElement(props: DropDownElementProps) {
  return (
    <a href={props.url} target="_blank" className="flex justify-start mx-2 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-white hover:cursor-pointer">
      {props.children}
      <div className="ps-1">{props.title}</div>
      <ArrowTopRightOnSquareIcon className="ms-1 mt-1" width={20} height={20} />
    </a>
  )
}

export default DropDownElement