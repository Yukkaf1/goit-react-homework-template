import { Recipe } from './Recipe/Recipe';
import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recepies.json';

export const App = () => {
  return (
    <div>
      <RecipeList recipes={recipes} />

      {/* <Recipe recipe={recipes[0]} />
      <Recipe recipe={recipes[1]} /> */}
      {/* <Recipe name={recipes[0].name} time={recipes[0].time}/> */}
    </div>
  );
};
