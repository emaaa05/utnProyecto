import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsr2Az72uvZUmzRcAuEz7kLd2PC_rk6Gg",
  authDomain: "urban-trade.firebaseapp.com",
  projectId: "urban-trade",
  storageBucket: "urban-trade.appspot.com",
  messagingSenderId: "106021865752",
  appId: "1:106021865752:web:a22eac5035e149eba0b66d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export async function getProducts() {
  try {
    const response = await getDocs(collection(db, 'products'));
    const listaProds = [];
    response.forEach(docu => listaProds.push({ id: docu.id, ...docu.data() }));
    console.log("Productos recuperados:", listaProds); 
    return listaProds;
  } catch (error) {
    console.error("Error al recuperar productos:", error);
  }
}

export async function addOrder(order){
  const ordersCollection = collection(db, 'orders');
  const docRef = await addDoc(ordersCollection, order);
  console.log('Doc ref generado: '+docRef);
  console.log('Id generado:', docRef.id);
  return docRef.id;
}