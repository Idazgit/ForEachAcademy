export function Button({ value, buttonClass, onClick, type = "button" }) {
  return (
    <button
      className={`custom-button ${buttonClass}`}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  );
}

// Le type="button" permet de clarifier au niveau du navigateur, car sinon il peut se dire que c'est un submit.
// Donc, on le met de base sur button, ensuite avec la prop type on peut lui ajouter submit.
