import React from 'react'
import "../style/home.css"

export default function HomeFeatures(props) {
  return (
    <>
        <div class="card cardConatiner" style={{width: "18rem"}}>
  <img class="card-img-top cardImg" src={props.img} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title branch">{props.Branch}</h5>
    <p class="card-text tColor">{props.Tittle}</p>
    <a href="#" class="btn btn-primary branchBtn">View</a>
  </div>
    </div>
    </>
  )
}
