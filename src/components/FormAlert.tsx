import Alert from "react-bootstrap/Alert";

export function FormAlert({ errors }: { errors: string[] }) {
  return (
    <Alert variant="danger" className="form-add-task__alert">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </Alert>
  );
}
