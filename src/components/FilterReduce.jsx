import React from "react";

const FilterReduce = ({ shopping }) => {
  
    const handleSubmit = (e) => {
    const category = e.target.value;
    console.log("Selected Category:", category);

    const filteredItems = shopping.filter((item) => item.category === category);
    console.log("Filtered Items:", filteredItems);

    const totalprice = filteredItems.reduce(
      (total, element) => total + element.price,
      0
    );
    console.log("Total Price:", totalprice);
  };

  return (
    <div>
      <h1>FilterReduce</h1>
      {shopping.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
              width: "200px",
              display: "inline-block",
            }}
          >
            <h3>Product: {item.product}</h3>
            <p>Price: ${item.price}</p>
          </div>
        );
      })}
      <p>
        <button value="electronics" onClick={(e) => handleSubmit(e)}>
          Filter Electronics
        </button>
        <button value="clothing" onClick={(e) => handleSubmit(e)}>
          Filter Clothing
        </button>
        <button value="home appliances" onClick={(e) => handleSubmit(e)}>
          Filter Home Appliances
        </button>
      </p>
    </div>
  );
};

export default FilterReduce;
