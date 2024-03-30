import React from 'react'
import emptySvg from "./assets/empty.svg"

const EmptyList = () => {
  return (
    <div className="mt-3 hidden last:flex flex-col gap-3 items-center justify-center">
      <img src={emptySvg} className=" w-40" alt="" />
      <h1 className="">There is no lists.</h1>
    </div>
  )
}

export default EmptyList
