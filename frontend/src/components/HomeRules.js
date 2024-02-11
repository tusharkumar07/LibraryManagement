import React from 'react'
export default function HomeRules() {
  return (
    <>
      <h3 className="containerHead" style={{backgroundColor:'#43766C',color:"white",marginBottom:"2rem"}}>Rule and Regulations</h3>
      <div className='RulesContainer'>
      <div class="list-group rules">
  <button type="button" class="list-group-item list-group-item-action">Be a registered member of the library.</button>
  <button type="button" class="list-group-item list-group-item-action">Check the condition of the book before taking it out</button>
  <button type="button" class="list-group-item list-group-item-action" >Pay any fines that may be incurred for overdue books.</button>
  <button type="button" class="list-group-item list-group-item-action">In some cases, a library may charge an additional processing fee.</button>
  <button type="button" class="list-group-item list-group-item-action">There may be a limit on the number of times a book can be renewed.</button>
<button type="button" class="list-group-item list-group-item-action">The number of books that a user can borrow at one time may be limited to 3</button>

</div>
      </div>
    </>
  )
}
