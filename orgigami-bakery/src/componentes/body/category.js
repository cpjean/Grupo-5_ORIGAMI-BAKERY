import React from 'react'


function Category(props) {
    return (
        <>
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <a href={props.link} style={{textDecoration: 'none', color: 'white'}}>
                        <div className="card-body">       
                            {props.title}: {props.count} productos
                        </div>
                    </a>
                </div>
            </div>          
        </>
    )
}

export default Category