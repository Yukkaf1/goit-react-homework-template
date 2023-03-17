import PropTypes from 'prop-types';
import { Recipe } from '../Recipe/Recipe';
import { ListItem } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe, idx) => (
        <ListItem key={idx}>
          <Recipe recipe={recipe} />
        </ListItem>
      ))}
    </ul>
  );
};

RecipeList.propType = {
  recipe: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.String.isRequired,
    })
  ),
};
