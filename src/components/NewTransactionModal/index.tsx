import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalOpenProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModalOpen({
  isOpen,
  onRequestClose,
}: NewTransactionModalOpenProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number"/>
        <input placeholder="Categoria"/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}