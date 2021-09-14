import { Box } from "components/Box/Box";
import {
  StyledCard,
  StyledDate,
  StyledSummary,
  StyledTitle,
} from "./Card.style";

interface CardProps {
  category: string;
  title: string;
  summary: string;
  date: string;
}

export function Card({ category, title, summary, date }: CardProps) {
  return (
    <Box margin="5px">
      <StyledCard>
        <StyledTitle>
          <p> {category}</p> {title}
        </StyledTitle>

        <StyledSummary>{summary}</StyledSummary>
        <StyledDate>{date}</StyledDate>
      </StyledCard>
    </Box>
  );
}
