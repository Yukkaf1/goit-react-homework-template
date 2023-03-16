import { Wrapper, Title, BadgeList } from './RecipeDifficulty.styled';

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>Difficulty</Title>
      <BadgeList>
        <span>Easy {difficulty === 'easy' && ''}</span>
        <span>Medium</span>
        <span>Hard</span>
      </BadgeList>
    </Wrapper>
  );
};
