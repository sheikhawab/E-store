// const getCategories = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.in/api/products/category');
        
//         if (!response.ok) {
//             const text = await response.text();
//             console.error('API Error:', text);
//             return [];
//         }
        
//         const contentType = response.headers.get('content-type');
//         if (!contentType || !contentType.includes('application/json')) {
//             const text = await response.text();
//             console.error('Response is not JSON:', text);
//             return [];
//         }
        
//         const data = await response.json();
//         return data.categories || [];
//     } catch(err) {
//         console.error('Error fetching categories:', err.message);
//         return [];
//     }
// }

// const getProducts = async (product_id = null) => {
//     try {
//         let API = "https://fakestoreapi.in/api/products";
//         if (product_id != null) {
//             API += "/" + product_id
//         }
        
//         const response = await fetch(API);
        
//         if (!response.ok) {
//             const text = await response.text();
//             console.error('API Error:', text);
//             return null;
//         }
        
//         const contentType = response.headers.get('content-type');
//         if (!contentType || !contentType.includes('application/json')) {
//             const text = await response.text();
//             console.error('Response is not JSON:', text);
//             return null;
//         }
        
//         const data = await response.json();
//         return product_id == null ? data.products : data.product;
//     } catch(err) {
//         console.error('Error fetching products:', err.message);
//         return null;
//     }
// }

// export {getCategories, getProducts}

const getCategories = async () => {
const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
console.log(data, "awab kese ho 2");
return data;

}
// console.log(getCategories());






const getProducts = async (product_id = null) => {
    try{
        // return new Error('s  mething went wrong')
    let API = "https://fakestoreapi.com/products";
    if (product_id != null) {
          API += "/" + product_id
    }
    const response = await fetch(API);
    const data = await response.json();
    // console.log(data, "awab kese ho 4");
    // return product_id == null ? data.products : data.product;
    return data;
    } catch(err){
        console.log(err.message);
        return null;
    }
}


export {getCategories, getProducts}