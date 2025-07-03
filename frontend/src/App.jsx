import { useState, useEffect } from "react";
import { Menu } from "./../components/Menu";
function App() {
  const [excuses, setExcuses] = useState([]);

  const fetchRandomExcuse = async () => {
    // On fetch la route random pour ne pas charger toutes les excuses directement
    const res = await fetch("http://localhost:5000/excuses/random");
    const data = await res.json();

    // 💡 Ajouter la nouvelle excuse à la liste
    setExcuses((prev) => [...prev, data]);
  };

  useEffect(() => {
    fetchRandomExcuse(); // On affiche un première erreur au chargement de la page (mieux pour L'UX)
  }, []);
  return (
    <div className="app">
      <div className="excuse-list">
        <div className="attribut">
          <div className="a1">http_code</div>
          <div className="a2">tag</div>
          <div className="a3">message</div>
        </div>
        {excuses.map((excuse, index) => (
          <Menu
            key={index}
            http_code={excuse.http_code}
            tag={excuse.tag}
            message={excuse.message}
          />
        ))}
      </div>
      <div className="button-div">
        <button onClick={fetchRandomExcuse}>Nouvelle excuse</button>
        <button onClick={fetchRandomExcuse}>
          Suggérer une nouvelle excuse
        </button>
      </div>
    </div>
  );
}

export default App;
