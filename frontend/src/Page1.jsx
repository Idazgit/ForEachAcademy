import { useState, useEffect, useRef } from "react";
import { Menu } from "./../components/Menu";
import { Button } from "../components/Button";
import { ModalPost } from "../components/ModalPost";

function Page1() {
  const [excuses, setExcuses] = useState([]);
  const listRef = useRef(null);
  const [showModal, setShowModal] = useState(false); // Modal pas visible grâce au useState

  // fonction qui ouvre ma modal en passant le useState sur true, j'appelle sur le click du bouton de suggestion
  const clickShowModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  // fonction qui ferme le modal que j'appelle sur ma div avec react icons
  const closeModal = (event) => {
    event.preventDefault();
    setShowModal(false);
  };

  // j'utilise une boucle while pour chercher une excuse qui n'est pas sortie
  // je met un maxAttempts pour éviter une boucle infinie

  const fetchRandomExcuse = async () => {
    let attempt = 0;
    const maxAttempts = 10;

    while (attempt < maxAttempts) {
      const res = await fetch("http://localhost:5000/excuses/random");
      const data = await res.json();

      // on vérifie si l'excuse à déjà était tirée
      const alreadyExists = excuses.some(
        (event) => event.http_code === data.http_code
      );

      if (!alreadyExists) {
        // on ajoute la nouvelle excuse a la liste
        setExcuses((prev) => [...prev, data]);
        return;
      }

      attempt++;
    }

    alert(
      "Toutes les excuses ont été affichées ou pas de nouvelles disponibles !"
    );
  };
  useEffect(() => {
    fetchRandomExcuse(); // On affiche un première erreur au chargement de la page (mieux pour L'UX)
  }, []);
  // Permet le scroll sur le nouvel élément de la liste pour ne pas avoir a scroll soi même
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [excuses]);
  return (
    <div className="app">
      <div className="excuse-list" ref={listRef}>
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
        <Button
          buttonClass="button-generate"
          onClick={fetchRandomExcuse}
          value={"Nouvelle Excuse"}
        />
        <Button
          buttonClass={"button-suggest"}
          onClick={clickShowModal}
          value={"Suggérer une Excuse"}
        />
      </div>
      {showModal && (
        <div className="overlay-modal">
          <ModalPost text={"Suggérer une Excuse"} onClick={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Page1;
