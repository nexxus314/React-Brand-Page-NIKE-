const Shoe = () => {
  return (
    <main className="Shoe container">
      <div className="Shoe-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shoe-btn">
          <button>Shop Now</button>
          <button className="category-btn"> Category </button>
        </div>
        <div className="shopping">
            <p> Also Availale on</p>
            <div className="shopping-icons">
                <img src="/images/amazon.png" alt="amazon" />
                <img src="/images/flipkart.png" alt="flipkart" />            </div>
        </div>
      </div>
      <div className="Shoe-image"></div>
      <img src="/images/shoe_image.png" alt="Shoe-image" />
    </main>
  );
};

export default Shoe;
