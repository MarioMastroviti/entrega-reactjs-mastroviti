const misProductos = [
{id: "1" , idCat: "1", nombre: "Aceite de thc", precio: 2000, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/369/182/products/2-x-101-42c1d0601a0b2c706016634228149416-640-0.jpg" },

{id: "2" , idCat: "1", nombre: "Aceite de cbd", precio: 2000, img: "https://img.sensiseeds.com/es/productos-de-cbd/aceite-cbd-xl.png"},

{id: "3" , idCat: "1", nombre: "Aceite de thc/cbd", precio: 2000, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/369/182/products/ama11-66b217d50131e2d8f416633618239296-640-0.jpg" },

{id: "4" , idCat: "2", nombre: "Crema de thc", precio: 1500, img: "https://d22fxaf9t8d39k.cloudfront.net/3c93fb272f0ca89ba2202f4c2b9d9a70b1ece45e9a6786c9c29529f182e798c496447.png" },

{id: "5" , idCat: "2", nombre: "Crema de cbd", precio: 1500, img: "https://d22fxaf9t8d39k.cloudfront.net/ab8cc4326d05ad19d88a678bb2f8e2464c3742c17a091f036a1400ea8447faf396447.png" },
];

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() =>{
            res(misProductos);

        },100)
    })
}
  
export const getUnProducto = (id) =>{
    return new Promise((resolve,reject) => {
      
            const producto = misProductos.find(prod => prod.id === id);

            if(producto){
                resolve(producto)
            }else{
                reject({
                    error: "No se encontro el producto"
                })
            }
           })
    }

    export const getProductosCategoria = (idCategoria) =>{
        return new Promise(resolve => {
            setTimeout(() =>{          
                const productoPorCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
                resolve(productoPorCategoria);
            },100)                    
               })
        }