import React, { useEffect, useState } from 'react'
import Body from './body'
import Title from './title'


function Table() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
       fetch("http://localhost:3030/api/products/")
       .then(res => res.json())
       .then(data =>
        {
            /*console.log(data.data)*/
            setProductos(data.products)
        })
    }, [])
    console.log(productos)


    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <Title />
                    </thead>
                    <tbody>
                        {productos.map(product => (
                            <Body link={product.link} title={product.name} description={product.description} price={product.price} category={product.id_category}/>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table