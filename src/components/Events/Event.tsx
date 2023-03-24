import { FC } from 'react'
type Im = {
  i1: string
  i2: string
}
export const Event = (props: Im) => {
  return (
    <div className="flex xl:w-1/4 sm:w-1/2 m-2 h-extra sm:m-4  bg-white border-2 border-purple-400  rounded-3xl xl:m-12 sm:pb-6 xl:pb-3 sm:flex hover:-translate-y-4 sm:justify-center sm:align-center ">
      <div className="flex-col w-full h-full sm:h-90  ">
        <div className="w-full h-3/4 bg-black">
          <img
            src={props.i1}
            className="h-full w-full"
          ></img>
        </div>
        <div className="w-full h-1 ">
          <div className=" flex m-4 items-center justify-center b  ">
            <img src={props.i2} />
          </div>
          <div className=" flex mb-4 items-center justify-center ">
            <img src="register.png" />
          </div>
        </div>
      </div>
    </div>
  )
}