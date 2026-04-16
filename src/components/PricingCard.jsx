import React from "react";
const PricingCard = ({ plan }) => {
  
  return (
    <div className="card">
        <h4>{plan.title}</h4>
        <h2>{plan.price}</h2>
        <ul>
            {
                plan.features.map((feature) => (
                    <li className={feature.available ? "true" : "false"}>
                    <i className={`fa-solid ${feature.available ? "fa-check" : "fa-xmark"}`}>
                    </i> {feature.text}
                    </li>
                ))
           }
        </ul>
        <button className="button">BUTTON</button>
    </div>
  )
}   
export default PricingCard
          