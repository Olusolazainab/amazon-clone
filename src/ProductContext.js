import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
	const [products, setProduct] = useState([]);

	const addToBasket = (id, title, image, price, rating) => {
		setProduct((prevState) => [
			...prevState,
			{ id, title, image, price, rating },
		]);
	};

	const removeFromBasket = (id) => {
        
		// setProduct(products.filter((product) => product.id !== id));
        const index = products.findIndex((product) => product.id === id)
	
    let newProduct = [...products];
    if(index >= 0){
        newProduct.splice(index, 1);
    }else{
        console.warn(`Cant remove product (id: ${id} as its not in the basket`)
    }
    setProduct(newProduct)
};
	return (
		<ProductContext.Provider value={{ products, addToBasket, removeFromBasket }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContext;
