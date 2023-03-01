import React from 'react'
import Table from './table'

function ProductsTable() {
    return (
        <>
            <a id="tabla-productos">
            <h2 className="h3 mb-2 text-gray-800">Productos</h2>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <Table />
                </div>
            </div>
            </a>
        </>
    )
}

export default ProductsTable;