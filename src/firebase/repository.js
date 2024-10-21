const localProducts = [
    { id: 1, title: "Graphic Set In Neck Fill Batwing", price: 500, brand: "Ropa", img: "https://levisarg.vtexassets.com/arquivos/ids/876217/2249135860_1.jpg?v=638641639782070000" },
    { id: 2, title: "Graphic Set In Neck Retro Sport", price: 500, brand: "Ropa", img: "https://levisarg.vtexassets.com/arquivos/ids/876214/2249135740_1.jpg?v=638641626161800000" },
    { id: 3, title: "Ss Relaexd Fit Tee Checkboard", price: 500, brand: "Ropa", img: "https://levisarg.vtexassets.com/arquivos/ids/876267/8737320040_1.jpg?v=638641850783870000" },
    { id: 4, title: "Graphic Set In Neck The Original", price: 500, brand: "Ropa", img: "https://levisarg.vtexassets.com/arquivos/ids/874990/2249135880_1.jpg?v=638596957762100000" },
    { id: 5, title: "Nike Air Max Dn SE", price: 1200, brand: "Zapatillas", img: "https://nikearprod.vtexassets.com/arquivos/ids/1118623-1000-1000?v=638634046824600000&width=1000&height=1000&aspect=true" },
    { id: 6, title: "Nike Full Force Low", price: 1200, brand: "Zapatillas", img: "https://nikearprod.vtexassets.com/arquivos/ids/810370-1000-1000?v=638382427179100000&width=1000&height=1000&aspect=true" },
    { id: 7, title: "Nike Air Max Plus Premium", price: 1200, brand: "Zapatillas", img: "https://nikearprod.vtexassets.com/arquivos/ids/1151799-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 8, title: "Nike Dunk High Retro SE", price: 1200, brand: "Zapatillas", img: "https://nikearprod.vtexassets.com/arquivos/ids/1077405-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 9, title: "Graphic Set In Neck Coastal Ford", price: 700, brand: "Ropa Deportiva", img: "https://levisarg.vtexassets.com/arquivos/ids/873979/2249135650_1.jpg?v=638502765625100000" },
    { id: 10, title: "Graphic Set In Neck Ketchup", price: 700, brand: "Ropa Deportiva", img: "https://levisarg.vtexassets.com/arquivos/ids/873974/2249135590_1.jpg?v=638502761743230000" },
    { id: 11, title: "Graphic Set In Neck 501 Circle Black", price: 700, brand: "Ropa Deportiva", img: "https://levisarg.vtexassets.com/arquivos/ids/874109/2249135460_1.jpg?v=638507034743970000" },
    { id: 12, title: "Ss Relaxed Fit Mountain", price: 700, brand: "Ropa Deportiva", img: "https://levisarg.vtexassets.com/arquivos/ids/873719-1200-auto?v=638488674066970000&width=1200&height=auto&aspect=true" },

  ];
  
  let localOrders = [];
  
  export async function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(localProducts); 
      }, 500);
    });
  }
  
  export async function addOrder(order) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newOrderId = localOrders.length + 1; 
        localOrders.push({ id: newOrderId, ...order });
        console.log('Orden agregada localmente:', { id: newOrderId, ...order });
        resolve(newOrderId);
      }, 500);
    });
  }
  