const app = document.getElementById("app");

// inspiration quotes
const quotes=[
  {type: 'quote', value: "Don’t let yesterday take up too much of today.” — Will Rogers"},
  {type: 'quote', value: "Ambition is putting a ladder against the sky."},
  {type: 'quote', value: "A joy that's shared is a joy made double."},
  
];

// copyRight


function CopyRight({year}) {
  return <p className='small'>©️ {year}</p>;
}

// fancy text 
function FancyText({title, text}){
  return title
  ? <h1 className= "fancy title">{text}</h1>
  : <h3 className= "fancy cursive">{text}</h3>
}

// inpiration element generator 
function Generator ({children}){
  const [index, setIndex]= React.useState(0)
  const quote= quotes[index]
  const next= ()=> setIndex((index+1) % quotes.length);

  return (
    <>
    <p>Your inspirational quote is:</p>
    <FancyText text={quote.value} />
    <button onClick={next}>Inspire me again</button>
    {children}
    </>
  )
}
// 

function App (){
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <Generator>
        <CopyRight year={2004} />
      </Generator> 
    </>
  )
}

const root = ReactDOM.createRoot(app);
root.render(<App />);
