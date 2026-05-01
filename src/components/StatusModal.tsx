import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import CustomButton from "./CustomButton";

export type Status = "idle" | "loading" | "error";

interface StatusModalProps {
  show: boolean;
  status: Status;
  error: string | null;
  onAccept: () => void;
}
export function StatusModal({
  show,
  status,
  error,
  onAccept,
}: StatusModalProps) {
  return (
    <Modal
      show={show}
      centered
      backdrop={status === "loading" ? "static" : undefined}
      keyboard={status === "loading" ? false : undefined}
      aria-label="Operation status"
    >
      <Modal.Body className="text-center py-4 px-4">
        {status === "loading" && (
          <>
            <Spinner
              animation="border"
              variant="primary"
              className="mb-3"
              style={{ width: "3rem", height: "3rem" }}
            />
            <p className="mb-0 text-muted">Processing...</p>
          </>
        )}

        {status === "error" && (
          <>
            <Alert variant="danger" className="mb-3 text-start">
              <strong>Operation failed</strong>
              <p className="mb-0 mt-1">
                {error ?? "An unknown error occurred."}
              </p>
            </Alert>
            <CustomButton text="Accept" onClick={onAccept} />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}
