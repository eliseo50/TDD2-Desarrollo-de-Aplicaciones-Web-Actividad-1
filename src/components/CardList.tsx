import Stack from "react-bootstrap/Stack";
import ItemCard from "./ItemCard";
import type { ItemCardProps } from "./ItemCard";

function CardList({
  cards,
  onRemoveTask,
}: {
  cards: ItemCardProps[];
  onRemoveTask: (id: string) => void;
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
          onRemoveTask={onRemoveTask}
        />
      ))}
    </Stack>
  );
}

export default CardList;
