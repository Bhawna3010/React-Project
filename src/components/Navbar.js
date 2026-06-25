import React from "react";

function Navbar({cart,showCart,setShowCart}){
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="data:image/jpeg;base64,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"
          alt="Logo"
          style={{
            width: "55px",
            height: "55px",
            cursor: "pointer",
          }}
        />
      </div>

      {/* Categories */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "25px",
            fontWeight: "bold",
            margin: 0,
            padding: 0,
            cursor: "pointer",
          }}
        >
          <li>MEN</li>
          <li>WOMEN</li>
          <li>KIDS</li>
          <li>HOME</li>
          <li>BEAUTY</li>
          <li>GENZ</li>
          <li>STUDIO</li>
        </ul>

        {/* Search */}
        <input
          type="text"
          placeholder="Search for products, brands and more"
          style={{
            width: "320px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            outline: "none",
          }}
        />

        {/* Icons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          <span>Profile</span>
          <span> Wishlist</span>
          
          <span onClick={() => setShowCart(!showCart)}>
          Bag ({cart.length})</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;