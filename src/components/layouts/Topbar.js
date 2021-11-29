import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';

import {
  useLocation,
  useNavigate
} from 'react-router-dom'
 
export default function Topbar() {
  const pathname = useLocation().pathname
  const navigate = useNavigate()

  return (
    <div className="bg-purple-100 topbar fixed p-4 w-full flex justify-between items-center">
      <div className="flex-1">
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-white p-1 rounded-2xl">
          <button className={classNames('font-bold', 'py-1', 'px-4', 'rounded-2xl', 'hover:text-gray-800', {'bg-gray-300': pathname === '/' || pathname === '/swap'}, {'hover:bg-gray-200': pathname === '/' || pathname === '/swap'})} onClick={() => navigate('/swap')}>Swap</button>
          <button className={classNames('font-bold', 'py-1', 'px-4', 'rounded-2xl', 'hover:text-gray-800', {'bg-gray-300': pathname === '/liquidity'}, {'hover:bg-gray-200': pathname === '/liquidity'})} onClick={() => navigate('/liquidity')}>Liquidity</button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <button className="py-2 px-4 mr-7 rounded-2xl bg-red-100 text-orange hover:bg-red-200 hover:border-red-300 border-transparent border-2 hover:border-current">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}
