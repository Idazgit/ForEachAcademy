import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="page404">
      <img className="img404" src="./img404.png" alt="image 404" />
      <Link to="/">
        <button className="button404">Revenir à l'acceuil</button>
      </Link>
    </div>
  );
}
export default Page404;
