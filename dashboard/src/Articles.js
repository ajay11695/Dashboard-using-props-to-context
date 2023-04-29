import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './UserContext';
function Articles() {
  let { state } = useContext(UserContext);
  if (!state.isLogin) {
  throw new Error("Auth Failed");
  }

  return (
    <ul className="articles">
      {state.data.map((article, index) => (
        <li key={index}>
          <Link to={"/articles/" + article.slug}>
            <h3>{article.title}</h3>
          </Link>
          <small>{article.author}</small>
        </li>
      ))}
    </ul>
  );
}

export default Articles;
