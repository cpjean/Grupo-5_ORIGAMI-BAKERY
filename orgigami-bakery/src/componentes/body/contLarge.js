import React from 'react'

function contLarge(props) {
    return (
        <>					
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
                </div>
                {props.children}
            </div>      
        </>
    )
}

export default contLarge