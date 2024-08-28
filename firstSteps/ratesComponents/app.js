const app = document.querySelector("#app");

let dbProducts = [
  { id: "cellphone", rate: [] },
  { id: "smartPhone", rate: [] },
  { id: "laptop", rate: [] },
];

function RateInformation({ product }) {
  return (
    <div className="modal flex-full-center" id="modal">
      <div className="rateInfo">
        <h1>Product: {product.id}</h1>
        <ul>
          {product.rate.length === 0 ? (
            <h3>0 REVIEWS</h3>
          ) : (
            product.rate.map((r, idx) => <li key={idx + "review"} className="reviewItem">{r} <img src="imgs/star-regular.svg" /></li>)
          )}
        </ul>
      </div>
    </div>
  );
}

function ProductsList({ list, OnClick }) {
  let [productInModal, setProductInModal] = React.useState(null);

  function handleModal(product) {
    setProductInModal(product);
  }

  return (
    <>
      <ul>
        {list.map((el, idx) => (
          <li key={el.id + idx} className="product">
            {el.id} let your review
            <button onClick={() => OnClick(idx)}></button>
            <a
              href="#modal"
              onClick={() => {
                handleModal(el);
              }}
            >
              total reviews: {el.rate.length}
            </a>
          </li>
        ))}
      </ul>

      {!productInModal ? "" : <RateInformation product={productInModal} />}
    </>
  );
}

function RatesBtns({ submited, product }) {
  let range = [1, 2, 3, 4, 5];
  return (
    <div className="rating-btns">
      {range.map((val, idx) => (
        <button
          onClick={() => submited(product, val)}
          key={idx + "btn"}
          value={val}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

function RatesForm({ product, submit }) {
  return (
    <div className={`rateComponent ${product ? "" : "hide"}`}>
      <h1>how good do you think our {product ? product.id : ""} is?</h1>
      <p>It is important for us to know your calification </p>
      <div>
        <RatesBtns submited={submit} product={product} />
      </div>
    </div>
  );
}

function RatesModule() {
  const [products, setProductsRates] = React.useState(dbProducts);
  const [selectProduct, setSelectProduct] = React.useState(null);

  function addNewRate(pr, value) {
    const updatedProducts = products.map((product) => {
      if (product.id === pr.id) {
        return { ...product, rate: [...product.rate, value] };
      }
      return product;
    });

    setProductsRates(updatedProducts);
  }

  function handleSelectedProduct(idx) {
    console.log(idx);
    setSelectProduct(products[idx]);
  }

  return (
    <section>
      <ProductsList list={products} OnClick={handleSelectedProduct} />
      <RatesForm product={selectProduct} submit={addNewRate} />
    </section>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<RatesModule />);
