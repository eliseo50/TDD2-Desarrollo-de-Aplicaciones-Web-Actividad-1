import Modal from "react-bootstrap/Modal";

interface AddTaskModalProps {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
}

export function AddTaskModal({ show, onHide, children }: AddTaskModalProps) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      title="Agregar Tarea"
      centered
      className="w-100"
    >
      <Modal.Header closeButton>
        <Modal.Title>Agregar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
