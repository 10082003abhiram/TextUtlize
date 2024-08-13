import React from 'react'

export default function Alert( props) {

  
  return (
          <div style={{height:"50px"}}>
          { props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong  style={{fontFamily:'Cursive'}}>{(props.alert.message)}</strong> <strong  style={{fontFamily:'Cursive'}}>{props.alert.type}</strong>
            
            </div>
          }
          </div>
      
  )
}


