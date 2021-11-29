import React, {useState, useEffect} from 'react'
import Exchange from '../assets/images/exchange.png'
import SelectToken from '../components/modals/SelectToken.modal'
import Confirm from '../components/modals/Confirm.modal'
import ManageToken from '../components/modals/ManageToken.modal'
import Topbar from '../components/layouts/Topbar'

export default function Swap() {
  const [modalName, setModalName] = useState('none')
  const [payToken, setPayToken] = useState(null)
  const [getToken, setGetToken] = useState(null)
  const [tokenType, setTokenType] = useState('pay')

  return (
    <div className="fixed inset-0 overflow-auto bg-purple-100 text-theme">
      <div className="w-full h-full relative" onScroll={e => {
      console.log(e)
    }}>
        <Topbar />
        <div className="p-4 pt-32 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg" style={{minWidth: 400, width: 450}}>
            <div className="flex justify-between mb-5">
              <span className="text-lg font-bold">Currency swap</span>
            </div>
            <div className="p-4">
              <div>
                <p className="font-bold">You pay</p>
                <div className="flex justify-between items-center mt-1 mb-1">
                  <input className="text-xl p-1 border-transparent focus-visible:outline-none" placeholder="0.00" type="number" />
                  <div
                    className="flex w-44 items-center cursor-pointer"
                    onClick={() => {
                      setModalName('selectTokenModal')
                      setTokenType('pay')
                    }}
                  >
                    {
                      payToken ? (
                        <>
                        <img src={payToken.icon} width="45" className="mr-2" />
                        <div className="">
                          <p className="font-bold">{payToken.name}</p>
                          <p className="text-sm text-gray-500">{payToken.unit}</p>
                        </div>
                        </>
                      ) : (
                        <button className="py-2 px-4 text-white font-semibold bg-orange rounded-2xl">Select a Token</button>
                      )
                    }
                  </div>
                </div>
                {
                  payToken ? (
                    <p className="text-sm text-gray-500">Balance: 0.4803 {payToken.unit}</p>
                  ) : (
                    <p className="text-sm text-gray-500">Balance: ?</p>
                  )
                }
              </div>
              <div className="relative mt-4 mb-4" style={{height: 1, background: '#033C6C1A'}}>
                <img
                  src={Exchange}
                  onClick={() => {
                    const temp = payToken
                    setPayToken(getToken)
                    setGetToken(temp)
                  }}
                  className="cursor-pointer absolute right-0 transform -translate-x-1/4 -translate-y-2/4" 
                />
              </div>
              <div>
                <p className="font-bold">You get</p>
                <div className="flex justify-between items-center mt-1">
                  <input className="text-xl p-1 border-transparent focus-visible:outline-none" placeholder="0.00" type="number" />
                  <div
                    className="flex w-44 items-center cursor-pointer"
                    onClick={() => {
                      setModalName('selectTokenModal')
                      setTokenType('get')
                    }}
                  >
                    {
                      getToken ? (
                        <>
                        <img src={getToken.icon} width="45" className="mr-2" />
                        <div className="">
                          <p className="font-bold">{getToken.name}</p>
                          <p className="text-sm text-gray-500">{getToken.unit}</p>
                        </div>
                        </>
                      ) : (
                        <button className="py-2 px-4 text-white font-semibold bg-orange rounded-2xl">Select a Token</button>
                      )
                    }
                  </div>
                </div>
                {
                  getToken ? (
                    <p className="text-sm text-gray-500">Balance: 0.4803 {getToken.unit}</p>
                  ) : (
                    <p className="text-sm text-gray-500">Balance: ?</p>
                  )
                }
              </div>
            </div>
            <button className="rounded-md w-full text-white font-bold mt-3 bg-orange py-3" onClick={() => setModalName('confirmModal')}>SWAP</button>
          </div>
        </div>
      </div>
      {
        modalName == 'selectTokenModal' && 
        <SelectToken 
          setModalName={setModalName}
          setPayToken={setPayToken}
          setGetToken={setGetToken}
          tokenType={tokenType}
        />
      }
      {
        modalName == 'manageTokenModal' && 
        <ManageToken 
          setModalName={setModalName}
        />
      }
      {
        modalName == 'confirmModal' && 
        <Confirm 
          setModalName={setModalName}
        />
      }
      
    </div>
  )
}
