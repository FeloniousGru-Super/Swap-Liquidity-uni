import React, {useState, useEffect} from 'react'
import BTC from '../../assets/images/BTC.png'
import Tether from '../../assets/images/Tether.png'
import Lite from '../../assets/images/Lite.png'
import Xpocket from '../../assets/images/Xpocket.png'
import classNames from 'classnames'
import Switch from '../switch/SwitchCom'

export default function ManageToken({setModalName}) {

  const [manangeType, setManageType] = useState('tokens')
  const [lists, setLists] = useState([
    {
      icon: BTC,
      name: 'Coinmarketcap',
      tokenNum: '5775',
      allow: true
    },
    {
      icon: Xpocket,
      name: 'CoinGecko',
      tokenNum: '5126',
      allow: false
    },
    {
      icon: Lite,
      name: 'Kleros Tokens',
      tokenNum: '2016',
      allow: false
    },
    {
      icon: Tether,
      name: 'Aave token list',
      tokenNum: '2546',
      allow: false
    }
  ])

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="manageTokenModal"
      onClick={(e) => {
        if (e.target.id == "manageTokenModal") 
          setModalName('none')
      }}
    >
      <div
        className="relative top-20 mx-auto border w-96 shadow-lg rounded-lg bg-white"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-lg cursor-pointer">
              <svg onClick={() => setModalName('selectTokenModal')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </span>
            <span className="font-bold text-lg">
              Manage
            </span>
            <span className="font-semibold text-lg cursor-pointer">
              <svg onClick={() => setModalName('none')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </span>
          </div>
          <div className="bg-gray-300 p-2 rounded-lg mb-4">
            <button className={classNames('w-2/4', 'font-bold', 'p-2', 'rounded-lg', 'hover:text-gray-800', {'bg-white': manangeType == 'lists'}, {'hover:bg-gray-200': manangeType == 'lists'})} onClick={() => setManageType('lists')}>Lists</button>
            <button className={classNames('w-2/4', 'font-bold', 'p-2', 'rounded-lg', 'hover:text-gray-800', {'bg-white': manangeType == 'tokens'}, {'hover:bg-gray-200': manangeType == 'tokens'})} onClick={() => setManageType('tokens')}>Tokens</button>
          </div>
          {
            manangeType === 'lists' ? (
              <div>
                <input className="text-lg border rounded-2xl p-3 w-full focus:border-pink-600" placeholder="https:// or ipfs:// or ENS name" />
                <div className="my-5 font-semibold text-lg max-h-92 overflow-auto">
                  {
                    lists.sort((a, b) => a.allow < b.allow ? 1 : -1).map((list, index) => (
                      <div key={'list' + index} className={classNames('flex', 'justify-between', 'items-center', 'py-1', 'px-3', 'my-2', 'rounded-3xl', {'bg-blue-600': list.allow})}>
                        <div className={classNames('flex', 'items-center', 'my-2')}>
                          <img src={list.icon} className="mr-2" />
                          <div>
                            <p className={classNames({'text-gray-600': !list.allow}, {'text-gray-200': list.allow})}>
                              {list.name}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {list.tokenNum}  tokens
                            </p>
                          </div>
                        </div>
                        <Switch allow={list.allow} onClick={() => {
                          let temp = []
                          lists.forEach((item, iIndex) => {
                            if (iIndex === index) {
                              item.allow = !item.allow
                            }
                            temp.push(item)
                          })
                          setLists(temp)
                        }} />
                      </div>
                    ))
                  }
                </div>
              </div>
            ) : (
              <div>
                <input className="text-lg border rounded-2xl p-3 w-full focus:border-pink-600" placeholder="0x0000" />
                <div className="my-5 font-semibold max-h-92 overflow-auto">
                  0 Custom Tokens
                </div>
              </div>
            )
          }
        </div>
        {
          manangeType === 'tokens' && (
            <div className="p-4 cursor-pointer text-center text-gray-600 flex items-center justify-center font-semibold" style={{borderTop: '1px solid #d7d2d2'}}>
              Tip: Custom tokens are stored locally in your browser                    
            </div>
          )
        }
      </div>
    </div>
  )
}
