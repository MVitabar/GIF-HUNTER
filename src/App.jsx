import { useState } from "react";
import { Searcher } from "./components/Searcher/Searcher";
import { GifGrid } from "./components/Grid/GifGrid";
import "./styles.css";

function App() {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nLMOhjPgEEs9KLOEXQP4cv1AX3mhnmYx&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };

  return (
    <div className="App">
      <Searcher
        onSubmit={onSubmit}
        valorInput={valorInput}
        onChange={onChange}
      />
      <GifGrid gifs={gifs} />
    </div>
  );
}

export default App;
