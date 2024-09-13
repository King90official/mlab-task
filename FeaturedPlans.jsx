import React from 'react'
import PlanCard from './PlanCard'

const FeaturedPlans = () => {

const plans =[
    {
       strategy: 'Money momentum',
       description: 'Tract Premuim helps you start saver insight coverings.',
       duration: '3 years CAGR',
       rate: '7.20%',
       color: 'green',
    },

   {
    strategy: 'Long-Term',
    description: 'Create a vision. To get started, imagine your dream life.',
    duration: '25 years CAGR',
    color: 'black',
   },

   
   {
    strategy: 'Focussed',
    description: 'Be focused Life planning,however,can serve as a roadmap or guide.',
    duration: '1 years returns',
    color: 'purple',
    rate: '11.20%',

   },

   {
    strategy: 'Fixed Income',
    description: 'Get multiple benefits and lump sum option & gauranteed Returns.',
    duration: '5 years CAGR',
    color: 'yellow',
    rate: '8.20%',

   },


];

return (
<section className="featured-plans">
<h2>Featured Plans</h2>
<div className="plans">
    {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
    ))}
</div>

</section>

);


}

export default FeaturedPlans