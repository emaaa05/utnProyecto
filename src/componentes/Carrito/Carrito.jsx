import React, { useContext, useState } from 'react';
import { CartContext } from './CarritoContext';
import Swal from 'sweetalert2';
import { addOrder } from '../../firebase/repository'; 

const Carrito = () => {
    const { cart, clearCart, incrementQuantity, decrementQuantity } = useContext(CartContext);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: ''
    });


    const calcularTotal = () => {
        if (cart.length === 0) {
            return 0;
        }
        const total = cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0);
        return total;
    };

    const handleOrder = async () => {
        console.log("Entrando en handleOrder()");
        const { value: formValues } = await Swal.fire({
            title: 'Ingrese sus datos',
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Email" type="email" required>
                <input id="swal-input2" class="swal2-input" placeholder="Nombre" type="text" required>
                <input id="swal-input3" class="swal2-input" placeholder="Teléfono" type="tel" required>
            `,
            focusConfirm: false,
            preConfirm: () => {
                const email = document.getElementById('swal-input1').value;
                const name = document.getElementById('swal-input2').value;
                const phone = document.getElementById('swal-input3').value;
                setFormData({ email, name, phone });
    
                const order = {
                    buyer: { email, name, phone },
                    items: cart.map(item => ({
                        id: item.id,
                        price: item.price,
                        quantity: item.quantity,
                        title: item.title,
                    })),
                    total: calcularTotal()
                };
    
                return addOrder(order).then(orderId => ({ orderId }));
            }
        });
    
        if (formValues && formValues.orderId) {
            Swal.fire({
                icon: 'success',
                title: 'Orden Añadida',
                text: `Tu orden ha sido añadida con el ID: ${formValues.orderId}`,
                confirmButtonText: 'OK',
            }).then(() => {
                clearCart();
            });
        }
    };
    
    const handleCancelOrder = () => {
        Swal.fire({
            icon: 'info',
            title: 'Orden Cancelada',
            text: 'La orden ha sido cancelada y el carrito vaciado.',
            confirmButtonText: 'OK',
        }).then(() => {
            clearCart();
        });
    };
    

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2 className="mb-5">Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <ul className="d-flex flex-wrap">
                        {cart.map((product, index) => (
                            <li key={index} className="list-group-item d-flex flex-column me-3 mb-3" style={{ maxWidth: '200px' }}>
                                <img src={product.img} alt={product.title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                                <div>{product.title} - ${product.price}</div>
                                <div>
                                    <button className="btn btn-sm btn-primary me-1" onClick={() => decrementQuantity(product.id)}>-</button>
                                    {product.quantity}
                                    <button className="btn btn-sm btn-primary ms-1" onClick={() => incrementQuantity(product.id)}>+</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-light p-3 mt-3">
                        <h3>Precio Total</h3>
                        <p>${calcularTotal()}</p>

                        <button className="btn btn-success btn-lg me-2" onClick={handleOrder}>
                            Añadir nueva orden
                        </button>

                        <button className="btn btn-danger btn-lg" onClick={handleCancelOrder}>
                            Cancelar orden
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carrito;
