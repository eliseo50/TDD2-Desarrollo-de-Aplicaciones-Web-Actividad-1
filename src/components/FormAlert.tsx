import Alert from "react-bootstrap/Alert";
import "./FormAlert.scss";

export function FormAlert({ errors }: { errors: string[] }) {
  return (
    <Alert variant="danger">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </Alert>
  );
}
