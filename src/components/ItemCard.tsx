import CustomButton from "./CustomButton";
import Card from "react-bootstrap/Card";
import "./ItemCard.scss";

export interface ItemCardProps {
  id: string;
  name: string;
  description: string;
  date: string;
  onRemoveTask: (id: string) => void;
}

function ItemCard({
  id,
  name,
  description,
  date,
  onRemoveTask,
}: ItemCardProps) {
  const handleRemove = () => {
    onRemoveTask(id);
  };
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <CardSection title="Descripción" value={description} />
          <CardSection title="Fecha" value={date} />
        </Card.Text>
        <CustomButton text="Remover" onClick={handleRemove} />
      </Card.Body>
    </Card>
  );
}

function CardSection({ title, value }: { title: string; value: string }) {
  return (
    <span className="card__section">
      <strong>{title}:</strong> {value}
    </span>
  );
}

export default ItemCard;
