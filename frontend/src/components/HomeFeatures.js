import React from 'react'
import "../style/home.css";
import { Link } from 'react-router-dom';

export default function HomeFeatures(props) {
  return (
    <>
        <div class="card cardConatiner cardSize">
  <img class="card-img-top cardImg" src={props.img} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title branch">{props.Branch}</h5>
    <p class="card-text tColor">{props.Tittle}</p>
    <Link to="/availability" class="btn btn-primary branchBtn px-3">View</Link>
  </div>
    </div>
    </>
  )
}
