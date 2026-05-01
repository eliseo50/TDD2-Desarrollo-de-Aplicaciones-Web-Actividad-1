import Stack from "react-bootstrap/Stack";
import ItemCard from "./ItemCard";
import type { Item } from "../types/Item";

function CardList({
  cards,
  onRemove,
}: {
  cards: Item[];
  onRemove: (id: string) => void;
}) {
  return (
    <Stack gap={3}>
      {cards.map((card) => (
        <ItemCard
          key={card.id}
          id={card.id}
          name={card.name}
          description={card.description}
          date={card.date}
          onRemove={onRemove}
        />
      ))}
    </Stack>
  );
}

export default CardList;
