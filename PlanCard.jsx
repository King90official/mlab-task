import React from 'react'

const PlanCard = ({plan}) => {
    return(
<div className={`plan-card ${plan.color}`}>
<h3>{plan.strategy}</h3>
<p>{plan.description}</p>
<div className="plan-details">
    <span>{plan.duration}</span>
    <span>{plan.rate}</span>    
</div>

</div>
 );
}

export default PlanCard