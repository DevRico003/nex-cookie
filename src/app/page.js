"use client"
import { useState, useEffect } from "react"
import Upgrades from "./upgrades"

export default function Home() {

  const [cookieCount, setCookieCount] = useState(0)

  const [clickPower, setClickPower] = useState(1)

  const [autoClickerCount, setAutoClickerCount] = useState(0)

  // useEffect wird aufgerufen, wenn sich der Wert von autoClickerCount ändert.
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClickerCount > 0) {
        // Aktualisiere die Cookie-Anzahl
        setCookieCount(prev => prev + autoClickerCount)
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [autoClickerCount])

  return (
    <div className="flex flex-col space-y-2 max-w-xs">
      <h1 className="text-xl font-bold">Cookie Clicker</h1>
      <img 
        src="/cookie.png" 
        alt="Cookie" 
        onClick={() => setCookieCount(cookieCount + clickPower)}
        style={{cursor: "pointer"}}
      ></img>
      <p className="text-xl font-bold bg-gray-100 p-4 rounded shadow-md">Cookies: {cookieCount}</p>
      <p className="text-xl font-bold bg-gray-100 p-4 rounded shadow-md">Click Power: {clickPower}</p>
      <p className="text-xl font-bold bg-gray-100 p-4 rounded shadow-md">Auto Clickers: {autoClickerCount}</p>
      <Upgrades 
          cookieCount={cookieCount}
          clickPower={clickPower}
          autoClickerCount={autoClickerCount}
          setCookieCount={setCookieCount}
          setClickPower={setClickPower}
          setAutoClickerCount={setAutoClickerCount}
      />
    </div>
  )
}
