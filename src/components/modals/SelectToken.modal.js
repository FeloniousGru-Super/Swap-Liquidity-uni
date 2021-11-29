import React, {useState, useEffect} from 'react'
import BTC from '../../assets/images/BTC.png'
import Tether from '../../assets/images/Tether.png'
import Lite from '../../assets/images/Lite.png'
import Xpocket from '../../assets/images/Xpocket.png'

export default function SelectToken({setModalName, setPayToken, setGetToken, tokenType}) {
  const [tokens, setTokens] = useState(
    [
      {
        name: 'XPocket',
        unit: 'POCKET',
        icon: Xpocket
      },
      {
        name: 'Bitcoin',
        unit: 'BTC',
        icon: BTC
      },
      {
        name: 'Tether',
        unit: 'USDT',
        icon: Tether
      },
      {
        name: 'Litecoin',
        unit: 'LTC',
        icon: Lite
      },
    ]
  )
  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="selectTokenModal"
      onClick={(e) => {
        if (e.target.id == "selectTokenModal") 
          setModalName('none')
      }}
    >
      <div
        className="relative top-20 mx-auto border w-96 shadow-lg rounded-lg bg-white"
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-lg">
              Select a token
            </span>
            <span className="font-semibold text-lg cursor-pointer">
              <svg onClick={() => setModalName('none')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </span>
          </div>
          <input className="text-lg border rounded-2xl p-3 w-full focus:border-pink-600" placeholder="Search name or paste address" />
          <div className="mt-5 overflow-auto max-h-96">
            {
              tokens.map((token, index) => (
                <div
                  key={'token' + index}
                  onClick={() => {
                    setModalName('none')
                    if (tokenType === 'pay') {
                      setPayToken(token)
                    } else {
                      setGetToken(token)
                    }
                  }}
                  className="flex items-center justify-between font-semibold py-3 px-5 my-2 cursor-pointer hover:bg-red-100 rounded-lg"
                >
                  <div className="flex items-center">
                    <img src={token.icon} className="mr-2" />
                    {token.name}
                  </div>
                  <div>
                    0 {token.unit}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div onClick={() => setModalName('manageTokenModal')} className="p-5 cursor-pointer text-center text-pink-600 flex items-center justify-center font-semibold" style={{borderTop: '1px solid #d7d2d2'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          <span className="ml-1">Manage Token Lists</span>
        </div>
      </div>
    </div>
  )
}
