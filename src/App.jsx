import React from 'react'
import "./App.css"
import PricingCard from "./components/PricingCard"
import PricingPlans from "./data/PricingData"

const App = () => {
  return (
    <div className="container">
      {PricingPlans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default App


