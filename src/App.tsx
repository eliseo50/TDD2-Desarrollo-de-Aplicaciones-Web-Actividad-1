import "./styles/index.scss";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import CardList from "./components/CardList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useIsMobile } from "./hooks/useIsMobile";
import { CustomNavbar } from "./components/CustomNavbar";
import { AddTaskForm } from "./components/AddTaskForm";
import { AddTaskModal } from "./components/AddTaskModal";
import { useTheme } from "./hooks/useTheme";
import { useTasksAndGoals } from "./hooks/useTasksAndGoals";
import { FloatButton } from "./components/FloatButton";

import type { ItemCardProps } from "./components/ItemCard";

function App() {
  const [showModal, setShowModal] = useState(false);
  const isMobile = useIsMobile();
  const { currentItems, addItem, removeItem } = useTasksAndGoals();
  const { theme, toggleTheme } = useTheme();

  const handleAddTask = (data: ItemCardProps) => {
    setShowModal(false);
    addItem(data);
  };

  return (
    <>
      <CustomNavbar />
      <Container fluid className="px-2 py-2 gap-2">
        <Row>
          {!isMobile ? (
            <Col>
              <AddTaskForm onAddTask={handleAddTask} />
            </Col>
          ) : (
            <AddTaskModal show={showModal} onHide={() => setShowModal(false)}>
              <AddTaskForm onAddTask={handleAddTask} />
            </AddTaskModal>
          )}
          <Col>
            <CardList cards={currentItems} onRemoveTask={removeItem} />
          </Col>
        </Row>
      </Container>
      {isMobile && (
        <FloatButton
          text="Agregar"
          position="bottom-right"
          callback={() => setShowModal(true)}
        />
      )}
      <FloatButton
        text="Cambiar Tema"
        position="bottom-left"
        callback={() => toggleTheme(theme === "original" ? "dark" : "original")}
      />
    </>
  );
}

export default App;
