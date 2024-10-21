import { useState, useEffect } from "react";
import { getProducts } from '../firebase/repository';
import { useCart } from './Carrito/CarritoContext'; 

export default function ItemListContainer({ selectedBrand }) {
    const { addToCart } = useCart(); 
    const [myProds, setMyProds] = useState([]);
    const [filteredProds, setFilteredProds] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            const sortedProducts = products.sort((a, b) => a.brand.localeCompare(b.brand));
            setMyProds(sortedProducts);
            setFilteredProds(sortedProducts);
        });
    }, []);

    useEffect(() => {
        if (selectedBrand) {
            setFilteredProds(myProds.filter(prod => prod.brand === selectedBrand));
        } else {
            setFilteredProds(myProds);
        }
    }, [selectedBrand, myProds]);

    return (
        <div className="container mt-4">
            <div className="row">
                {filteredProds.map(prod => (
                    <div key={prod.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={prod.img} className="card-img-top" alt={prod.title} />
                            <div className="card-body">
                                <h5 className="card-title">{prod.title}</h5>
                                <p className="card-text">Price: ${prod.price}</p>
                                    <button
                                        className='btn btn-primary btn-lg'
                                        onClick={() => addToCart({ ...prod, quantity: 1 })} 
                                    >
                                        Añadir al Carrito
                                    </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
