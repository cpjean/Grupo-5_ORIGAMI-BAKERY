import React, { useEffect, useState } from 'react'
import CategoryCard from './category'
import Cont from './cont'
import ContLarge from './contLarge'


function Body() {
    const [productos, setProductos] = useState({count:"", categories: []})
    useEffect(() => {
       fetch("http://localhost:3030/api/products/")
       .then(res => res.json())
       .then(data =>{
            const categories = [{count: 5, name:'Panaderia'},{count: 4, name:'Pasteleria'},{count: 2, name:'Eventos'}]
            const count = data.count
            setProductos({count:count, categories:categories})
        })
    }, [])

    const [usuarios, setUsuarios] = useState({total:""})
    useEffect(() => {
       fetch("http://localhost:3030/api/users/")
       .then(res => res.json())
       .then(data =>
        {
            /*console.log(data)*/
            const total = data.meta.total
            setUsuarios({total:total})
        })
    }, [])

    const [ultProd, setUltProd] = useState({data:{}})
    useEffect(() => {
       fetch("http://localhost:3030/api/products/producto/ultimo")
       .then(res => res.json())
       .then(ultimo =>
        {
            const data = ultimo.data
            
            setUltProd({data:data})
        })
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Origami Bakery</h1>
            </div>
            <div className="row">
                <Cont title="Productos en Base de Datos" number={productos.count} icon="fas fa-clipboard-list fa-2x text-gray-300" color="card border-left-primary shadow h-100 py-2" colorText="text-xs font-weight-bold text-primary text-uppercase mb-1"/>
                <Cont title="Usuarios en Base de Datos" number={usuarios.total} icon="fas fa-user-check fa-2x text-gray-300" color="card border-left-warning shadow h-100 py-2" colorText="text-xs font-weight-bold text-warning text-uppercase mb-1"/>
                <Cont title="Categorías en Base de Datos" number={productos.categories.length} icon="fas fa-list fa-2x text-gray-300" color="card border-left-success shadow h-100 py-2" colorText="text-xs font-weight-bold text-success text-uppercase mb-1"/>
            </div>
            <div className="row">

                <div className="col-lg-6 mb-4">
                    <ContLarge title="Último producto en Base de Datos">
                        <div className="card-body">
                            <div className="text-center">
                                <h3>{ultProd.data.name}</h3>
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={ultProd.data.image} alt="dummy"/>
                            </div>
                            <p>{ultProd.data.description}</p>
                            <a  rel="nofollow" href={ultProd.data.detail}>Ver detalle de producto</a>
                        </div>
                    </ContLarge>
                </div>  
                
                <div className="col-lg-6 mb-4">
                    <ContLarge title="Categorías de productos">
                        <div className="card-body">
                            <div className="row">
                                {productos.categories.map(category => (
                                    <CategoryCard link={'http://localhost:3030/productos/'+category.name} count={category.count} title={category.name} />
                                ))}              
                            </div>
                        </div>
                    </ContLarge>       
                </div>
            </div>
        </>
    )
}

export default Body