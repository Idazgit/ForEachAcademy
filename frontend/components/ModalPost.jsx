import { Button } from "./Button";
import { useState } from "react";
import { GoScreenNormal } from "react-icons/go";

export function ModalPost({ text, onClick }) {
  // useState qui permet de stocker ce que l'utilisateur va taper
  const [formData, setFormData] = useState({
    http_code: "",
    tag: "",
    message: "",
  });
  // useState qui permet de stocker les messages d'erreur
  const [errors, setErrors] = useState({});

  // message de succes quand requête reussie
  const [successMessage, setSuccesMessage] = useState("");

  // fonction pour mettre à jour les champs de mon formulaire
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // Fonction async car on utilise "await" pour le fetch
  async function handleSubmit(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire

    // On crée un objet newErrors pour récupérer les différentes erreurs du formulaire
    const newErrors = {};

    // On refait une validation front pour éviter d'envoyer de fausses données au serveur (et pour la sécurité aussi)
    if (!/^\d+$/.test(formData.http_code)) {
      newErrors.http_code = "Le code HTTP doit être un nombre.";
    }

    if (!formData.tag.trim()) {
      newErrors.tag = "Le tag est requis.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis.";
    }

    // On vérifie si l'objet newErrors n'est pas vide, si oui on stocke les erreurs dans le state pour les afficher sous les inputs
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si toutes les données sont valides, on peut envoyer la requête au serveur sur ma route POST
    try {
      const response = await fetch("http://localhost:4000/excuses/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // On envoie les données du formulaire en JSON comme testé avec postman
      });

      // Si la réponse n'est pas OK, on affiche une erreur générale (venant potentiellement du backend)
      if (!response.ok) {
        const errorData = await response.json();
        setErrors({
          general:
            errorData.message || errorData.error || "Une erreur est survenue.",
        });
        return;
      }

      console.log("Excuse ajoutée !");
      setSuccesMessage("🥳 Excuse ajoutée avec succès");
      setFormData({ http_code: "", tag: "", message: "" }); // On réinitialise les inputs une fois l'excuse ajouté
      setErrors({}); // On vide les erreurs

      // Petit timer pour faire disparaitre le msg d'ajout au bout de 3sec
      setTimeout(() => setSuccesMessage(""), 3000);
    } catch (error) {
      // Si le backend ne répond pas ou qu'il y a un souci réseau
      console.error("Erreur réseau :", error);
      setErrors({
        general: "Impossible d’envoyer l’excuse. Réessayez plus tard.",
      });
    }
  }

  return (
    <div className="ModalPost">
      <div className="closeModal">
        <GoScreenNormal onClick={onClick} />
      </div>
      <div className="topModal">
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {text}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="midModal">
          <div className="httpModal">
            <label htmlFor="http_code">Http Code</label>
            <div className="rightHttp">
              <input
                id="http_code"
                name="http_code"
                onChange={handleChange}
                type="text"
                value={formData.http_code} // Ne pas oublié la value qui c'est grâce a lui qu'on va vider les inputs
              />
              {errors.http_code && (
                <div className="error">{errors.http_code}</div>
              )}
              {errors.general && <div className="error">{errors.general}</div>}
            </div>
          </div>
          <div className="tagModal">
            <div className="leftTag">Tag</div>
            <div className="rightTag">
              <input
                id="tag"
                name="tag"
                onChange={handleChange}
                type="text"
                value={formData.tag}
              />
              {errors.tag && <div className="error">{errors.tag}</div>}
            </div>
          </div>
          <div className="msgModal">
            <div className="leftMsg">Message</div>

            <div className="rightMsg">
              <input
                id="message"
                name="message"
                onChange={handleChange}
                type="text"
                value={formData.message}
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </div>
          </div>
        </div>
        <div className="bottomModal">
          <Button
            buttonClass={"button-post-excuse"}
            type="submit"
            value={"Valider"}
          />
        </div>
      </form>
    </div>
  );
}
