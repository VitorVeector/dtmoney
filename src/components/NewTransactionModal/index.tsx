import Modal from "react-modal";
import {FormEvent, useState} from 'react'

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useTransaction } from "../../hooks/useTransaction";

interface NewTransactionModalOpenProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModalOpen({
  isOpen,
  onRequestClose,
}: NewTransactionModalOpenProps) {
  const [title, setTitleForm] = useState('')
  const [amount, setValueForm] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategoryForm] = useState('')

  const {createTransaction} = useTransaction();

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      type,
      category,
    })

    setTitleForm('')
    setValueForm(0)
    setType('')
    setCategoryForm('')
    onRequestClose()
   }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <Container  onSubmit={handleCreateNewTransaction}>
        <button className="react-modal-close" onClick={onRequestClose}><img src={closeImg} alt="Fechar tela para adicionar transação"/></button>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título"
          value={title}
          onChange={e => setTitleForm(e.target.value)} />
        <input placeholder="Valor" 
          type="number"
          value={amount}
          onChange={e => setValueForm(Number(e.target.value))}/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={()=> {setType('deposit')}}
            isActive={type === 'deposit'}
            isColor="green">
              <img src={incomeImg} alt="Entrada de valores" />
              <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={()=> {setType('withdraw')}}
            isActive={type === 'withdraw'}
            isColor="red">
              <img src={outcomeImg} alt="Saída de valores" />
              <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={e => setCategoryForm(e.target.value)}/>
        <button 
          type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
