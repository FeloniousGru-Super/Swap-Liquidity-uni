import React, {useState, useEffect} from 'react'

export default function Confirm({setModalName}) {
  
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="confirmModal"
      onClick={(e) => {
        if (e.target.id == "confirmModal") 
          setModalName('none')
      }}
    >
      <div
        className="relative top-20 mx-auto border w-96 shadow-lg rounded-lg bg-white"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-lg">
              Confirm
            </span>
            <span className="font-semibold text-lg cursor-pointer">
              <svg onClick={() => setModalName('none')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </span>
          </div>
        </div>
        <div>
          <div
            className="flex items-center justify-between font-semibold py-5 px-5"
            style={{borderBottom: '1px solid #eee'}}
          >
            <div>
              You pay
            </div>
            <div>
              0.0041 BTC
            </div>
          </div>
          <div
            className="flex items-center justify-between font-semibold py-5 px-5"
            style={{borderBottom: '1px solid #eee'}}
          >
            <div>
              Max slippage
            </div>
            <div>
              1%
            </div>
          </div>
          <div
            className="flex items-center justify-between font-semibold py-5 px-5"
            style={{borderBottom: '1px solid #eee'}}
          >
            <div>
              Network fee
            </div>
            <div>
              0.00005 BTC ($0.0)
            </div>
          </div>
          <div
            className="flex items-center justify-between font-semibold py-5 px-5"
            style={{borderBottom: '1px solid #eee'}}
          >
            <div>
              You get
            </div>
            <div>
              0.5 POCKET
            </div>
          </div>
        </div>
        <div className="p-4 mt-10" style={{borderTop: '1px solid #eee'}}>
          <button
            className="p-4 bg-orange text-white font-bold w-full rounded-lg"
          >
            Confirm Swap
          </button>
        </div>
      </div>
    </div>
  )
}
