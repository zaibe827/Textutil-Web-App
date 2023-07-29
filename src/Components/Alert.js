import React from 'react'

export default function Alert(props) {

  const captalize = (word) => {             //function for captalizing the 'S' of success
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // for solving Cumulative Layout Shift (CLS) problem we give a fix height for alert so that out layout doesn't shift 
    <div style={{height:'50px'}}>   

    {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show `} role="alert">
    {/* //if props.alert is null the code after '&&' will not run, if it is not null the code aftwards will return/execute */}

      {/* <strong>{props.alert}</strong> */}
      <strong>{captalize(props.alert.typ)}</strong> :{captalize(props.alert.msg)}

      {/* cross button */}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>}
    </div>
  )
}

