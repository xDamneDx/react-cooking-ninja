import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// Styles:
import "./Search.css";

// Components:
import RecipeList from "../../components/RecipeList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes?q=${query}`);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
