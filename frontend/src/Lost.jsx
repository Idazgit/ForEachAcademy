import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lost() {
  const navigate = useNavigate();

  // Redirection sur la page 1 au bout de 5 seconde
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    // on clear le timeout si l'utilisateur veut revenir sur la page
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="LostPage">
      <h1>I'm Lost</h1>
      <img
        className="gifLost"
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmtia3U0a2ZhZjBxYm9zM3pyMzNkcWNpcm0yb3RpNWF6b2dxNzZuaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8GTKaetBL5IVBMr18A/giphy.gif"
        alt="Lost gif de G2"
      />
    </div>
  );
}

export default Lost;
