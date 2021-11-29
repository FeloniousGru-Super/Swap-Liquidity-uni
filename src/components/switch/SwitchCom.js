import React from 'react'

export default function Switch({allow, onClick}) {
  return (
    <>
      {
        allow ? (
          <div className="rounded-full py-2 px-2 flex items-center border bg-white cursor-pointer" onClick={onClick}>
            <div className="w-10 text-center text-sm">
              ON
            </div>
            <div className="rounded-full w-6 h-6 bg-gray-500">
            </div>
          </div>
        ) : (
          <div className="rounded-full py-2 px-2 flex items-center border bg-white cursor-pointer" onClick={onClick}>
            <div className="rounded-full w-6 h-6 bg-gray-500">
            </div>
            <div className="w-10 text-center text-sm">
              OFF
            </div>
          </div>
        )
      }
    </>
  )
}
