import React from 'react'

function Alert(props) {
    return (
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible m-3 fade show`} role="alert">
                <strong >{props.alert.type==='danger'?'ERROR':(props.alert.type).toUpperCase()}</strong> : {props.alert.msg} 
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
} 

export default Alert