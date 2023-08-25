import React from 'react'

export default function HomeBenefits(props) {
  return (
    <>
      <div class="card benefitContainer">
      <div className='headerColor'>
        <h5 class="card-header headBenefits">{props.head}</h5>
      </div>
  <div class="card-body">
    <ul>
        <li className=' benefitsList'>{props.friendlySystem.data1}</li>
        <li className='benefitsList'>{props.friendlySystem.data2}</li>
        <li className='benefitsList'>{props.friendlySystem.data3}</li>
    </ul>
  </div>
</div>
    </>
  )
}
