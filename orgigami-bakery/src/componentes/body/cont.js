import React from 'react'

function cont(props) {
    return (
        <>
            <div className="col-md-4 mb-4">
                <div className={props.color}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={props.colorText}>{props.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
                            </div>
                            <div className="col-auto">
                                <i className={props.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default cont