// Sur cette page JSX vous pourrez retrouver le code que j'ai utilisé de base mais qui ne me convenait pas
// avec le pourquoi je l'ai changé

// Pour cette partie je cherchais à ne pas renvoyer plusieurs fois la même excuse dans ma liste
// le problème c'est qu'avec cette méthode je dois cliquer plusieurs fois sur le bouton
// quand il trouve une excuse qui est déjà sortie

const fetchRandomExcuse = async () => {
  // On fetch la route random pour ne pas charger toutes les excuses directement
  const res = await fetch("http://localhost:5000/excuses/random");
  const data = await res.json();

  // on vérifie si l'excuse à déjà était tirée
  const alreadyExists = excuses.some(
    (event) =>
      event.http_code === data.http_code && event.message === data.message
  );
  if (!alreadyExists) {
    // on ajoute la nouvelle excuse a la liste
    setExcuses((prev) => [...prev, data]);
  } else {
    console.log("Excuse déjà affiché !");
  }
};

// dans la nvl version je change aussi la verif de message car un utilisateur peut écrire un message qui est déjà en bdd
// aussi je rajoute une vérification dans mon controller pour qu'on ne puisse pas écrire deux fois le même http_code
