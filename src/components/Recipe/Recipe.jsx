import { Title, Wrapper } from './Recipe.styled';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { RecipeDifficulty } from '../RecipeDifficulty/RecipeDifficulty';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficulty, image },
}) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <RecipeInfo time={time} servings={servings} calories={calories} />
      <RecipeDifficulty difficulty={difficulty} />
    </Wrapper>
  );
};