import { Title, Wrapper } from './Recipe.styled';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficulty, image },
}) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <RecipeInfo time={time} servings={servings} calories={calories} />
    </Wrapper>
  );
};
