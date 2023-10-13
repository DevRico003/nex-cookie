import React from "react"

//Upgrades bekommen die Funktion handleUpgrade als "prop" (Argument)
//Somit kann die Funktion hier als onClick gesetzt werden
// !! Muss hier als Funktion gesetzt werden (mit () =>...), da sonst sofortige auswertung
// Die Upgrades-Komponente, die verschiedene Zustände und Setter-Funktionen als Props erhält.
function Upgrades({
    cookieCount, 
    clickPower, 
    autoClickerCount,
    setCookieCount, 
    setClickPower, 
    setAutoClickerCount
  }) {
    
    // Diese Funktion wird aufgerufen, wenn ein Upgrade-Button geklickt wird.
    // Sie prüft, welches Upgrade gewählt wurde und ob der Nutzer genug Cookies hat, um es zu kaufen.
    const handleUpgrade = (id) => {
      // Upgrade für zusätzlichen Klick pro Cookie (Kosten: 10 Cookies)
      if (id === 1 && cookieCount >= 10) {
        setCookieCount(cookieCount - 10)
        setClickPower(clickPower + 1)
      }
      // Upgrade für 10 zusätzliche Klicks pro Cookie (Kosten: 100 Cookies)
      if (id === 2 && cookieCount >= 100) {
        setCookieCount(cookieCount - 100)
        setClickPower(clickPower + 10)
      }
      // Upgrade für den Kauf eines automatischen Klickers (Kosten: 500 Cookies)
      if (id === 3 && cookieCount >= 500) {
        setCookieCount(cookieCount - 500)
        setAutoClickerCount(autoClickerCount + 1)
      }
    }
  
    return (
      <div className="flex flex-col space-y-2 max-w-xs">
          <button onClick={() => handleUpgrade(1)} className="p-2 bg-orange-500 text-white rounded">1 More cookie per click (Cost: 10)</button>
          <button onClick={() => handleUpgrade(2)} className="p-2 bg-orange-500 text-white rounded">10 More cookie per click (Cost: 100)</button>
          <button onClick={() => handleUpgrade(3)}className="p-2 bg-orange-500 text-white rounded">Buy auto clicker (Cost: 500)</button>
      </div>
    )
  }

  
  export default Upgrades