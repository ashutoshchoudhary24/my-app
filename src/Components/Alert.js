import React from 'react'

export default function Alert(props) {
//for captilising the first letter of Success while alert show

const capitalise= (word) =>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
}



  return (
    // props.alert &&- and operator under js- firstly props.alert this will be evaluated-if true then only next thing will be evealuated

    //One issue is there after dismissing the alert it doesn't reapper when again action is performed. So here we will remove the dismiss button and set a timer for the alert to disappear after the time ends
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* {props.alert.type} {props.alert.msg} */}
            
            {capitalise(props.alert.type)}: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
 
  )
}

