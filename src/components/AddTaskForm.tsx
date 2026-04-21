import Form from "react-bootstrap/Form";
import CustomButton from "./CustomButton";
import type { ItemCardProps } from "./ItemCard";
import { useState } from "react";
import { getItemData } from "../utils/getItemData";
import { isItemValid } from "../utils/isItemValid";
import { FormAlert } from "./FormAlert";

interface AddTaskFormProps {
  onAddTask: (
    data: Pick<ItemCardProps, "id" | "name" | "description" | "date">,
  ) => void;
}

export function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getItemData(e.currentTarget);
    const errors = isItemValid(data);
    if (!errors.isValid) {
      setErrors(errors.errors);
      return;
    }
    onAddTask(data);
  };

  return (
    <Form
      className="d-flex flex-column gap-2 form-add-task"
      onSubmit={handleSubmit}
      method="POST"
    >
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" name="name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          type="text"
          placeholder="Descripcion"
          name="description"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha</Form.Label>
        <Form.Control type="date" placeholder="Fecha" name="date" />
      </Form.Group>
      <CustomButton className="mt-2" text="Agregar" type="submit" />
      {errors.length > 0 && <FormAlert errors={errors} />}
    </Form>
  );
}
