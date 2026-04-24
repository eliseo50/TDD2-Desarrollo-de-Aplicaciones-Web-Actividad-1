import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigationStore } from "../context/navigationStore";
import "./CustomNavbar.scss";

export function CustomNavbar() {
  const { setActiveTab, activeTab } = useNavigationStore();

  const handleTabChange = (tab: string) => {
    if (tab === "tasks" || tab === "goals") {
      setActiveTab(tab);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container fluid>
        <Navbar.Brand href="#goals" onClick={() => handleTabChange("goals")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
          </svg>
          To Do List
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav activeKey={activeTab} onSelect={handleTabChange}>
            <Nav.Link href="#goals" eventKey="goals">
              Metas
            </Nav.Link>
            <Nav.Link href="#tasks" eventKey="tasks">
              Tareas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
