import React, { useState } from "react";

const products = [
  { id: 1, title: "iphone15", category: "Smartphone", rating: 4.8, stock: 15, image: "https://tse4.mm.bing.net/th/id/OIP.sfIDgyb7Tj5h23MbGTf2EgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Latest Iphone", quantity: 0 },
  { id: 2, title: "macbook air", category: "Laptop", rating: 4.3, stock: 45, image: "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Air-13-Inch-22502.jpg", description: "Latest MacBook Air M5", quantity: 0 },
  { id: 3, title: "washing machine", category: "Electric", rating: 4.9, stock: 25, image: "https://www.lg.com/in/images/washing-machines/md07540887/gallery/FHM1408BDL-Washing-Machines-Right-View-MZ-04-v1.jpg", description: "Washing machine with great features", quantity: 0 },
  { id: 4, title: "notebook", category: "Book", rating: 4.6, stock: 19, image: "https://tse4.mm.bing.net/th/id/OIP.d1zn4wh1mqI_AchwGzjGBgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Notebook with great paper", quantity: 0 },
  { id: 5, title: "tshirt", category: "Clothes", rating: 4.8, stock: 145, image: "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_1280.jpg", description: "Oversized T-shirt", quantity: 0 },
  { id: 6, title: "shoes", category: "Shoes", rating: 4.9, stock: 94, image: "https://www.solereview.com/wp-content/uploads/2019/07/Best_Nike_Running-shoes-2019.jpg", description: "Comfortable Shoes", quantity: 0 },
  { id: 7, title: "jeans", category: "Clothes", rating: 4.5, stock: 100, image: "https://tse3.mm.bing.net/th/id/OIP.IJHz-jxqM4F0NDBHnoN8QQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Jeans for young professionals", quantity: 0 },
  { id: 8, title: "table", category: "Home Appliance", rating: 4.6, stock: 150, image: "https://m.media-amazon.com/images/I/91KHeoJb2cL.jpg", description: "Table for family use", quantity: 0 },
  { id: 9, title: "fan", category: "Electric", rating: 4.7, stock: 176, image: "https://tse1.explicit.bing.net/th/id/OIP.nLZWF2XNFjclzVudqprGuAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", description: "Fan with Zero noise", quantity: 0 },
  { id: 10, title: "kurta", category: "Clothes", rating: 4.9, stock: 37, image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21947052/2023/2/11/57c0de23-260d-4fb2-bd0c-3e5c7ecab6fc1676136352445JanasyaWomensLavenderChinonEmbellishedKurtawithPantandDupatt1.jpg", description: "Light weight Kurta", quantity: 0 },
  { id: 11, title: "LED Light", category: "Electric", rating: 4.2, stock: 99, image: "https://m.media-amazon.com/images/I/71u8GDUX0ZL._AC_SL1500_.jpg", description: "LED light with zero emission", quantity: 0 },
  { id: 12, title: "Smart Cycle", category: "Vehicles", rating: 4.7, stock: 200, image: "https://m.media-amazon.com/images/I/71+pjpdEJiL._AC_UF894,1000_QL80_.jpg", description: "Smartest Cycle", quantity: 0 },
];

const MainLoanding = ({ cart, setCart }) => {
  const [productList, setProductList] = useState(products);

  function increaseQuantity(id) {
    const updatedProducts = productList.map((product) => {
      if (product.id === id && product.quantity < product.stock) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });

    setProductList(updatedProducts);
  }

  function addToCart(product) {
    setCart((cart)=>[...cart, product]);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {productList.map((product) => (
        <div
          key={product.id}
          style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 10px gray",
            padding: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <h2>{product.title}</h2>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>{product.description}</p>

          <p>
            <strong>Rating:</strong> {product.rating}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>

          <button
            onClick={() => increaseQuantity(product.id)}
            style={{
              marginBottom: "10px",
              marginRight: "10px",
            }}
          >
            +
          </button>

          <button
            onClick={() => addToCart(product)}
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#667eea,#764ba2)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainLoanding;