const app = document.getElementById("app");
const productsToRate = [
  { id: "cellphone", rate: 0 },
  { id: "computer", rate: 0 },
  { id: "smartTv", rate: 0 },
];

function ProductsList({onSelectProduct}) {
  return (
    <section>
      <h1>Products available</h1>
      <ul>
        {productsToRate.map((product) => (
          <li key={product.id } className="product">
            {product.id} Calification: {product.rate}
            <button onClick={()=> onSelectProduct(product)}></button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function RatingButtons({ value, onClick }) {
  return (
    <button value={value} onClick={() => onClick(value)}>
      {" "}
      {value}{" "}
    </button>
  );
}

function RateComponent({ elementToRate, onClose }) {
  let [calification, setCalification] = React.useState(5);

  function handleClick(v) {
    setCalification(v);
  }

  return (
    <div className={`rateComponent ${!elementToRate? "hide": ""}`}>
      {/* <h1>Rate this {elementToRate.id}</h1> */ console.log(elementToRate+ "to rate")}
      <p>Please let us know your calification for this product</p>
      <form>
        <div className="rating-btns">
          <RatingButtons value={1} onClick={handleClick} />
          <RatingButtons value={2} onClick={handleClick} />
          <RatingButtons value={3} onClick={handleClick} />
          <RatingButtons value={4} onClick={handleClick} />
          <RatingButtons value={5} onClick={handleClick} />
        </div>
      </form>
      <button onClick={onClose}> close</button> 
    </div>
  );
}

function Main() {

  let [selectedProduct, setSelectedProduct]= React.useState(null)

  function handleSelectProduct(product){
    setSelectedProduct(product)
  }

  function handelCloseRateComponent(){
    setSelectedProduct(null)
  }

  return (
    <>
      <ProductsList onSelectProduct= {handleSelectProduct}/>
      <RateComponent elementToRate={selectedProduct} onClose={handelCloseRateComponent}  />
    </>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<Main />);
