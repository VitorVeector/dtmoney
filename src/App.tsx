import {Header} from './components/Header'
import {GlobalStyle} from './styles/global'
import { Dashboard } from './components/Dashboard/';
import Modal from 'react-modal'
import { NewTransactionModalOpen } from './components/NewTransactionModal';
import {  TransactionsProvider, useTransaction } from './hooks/useTransaction';
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  const data = useTransaction()

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


      <Dashboard/>
      <NewTransactionModalOpen isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
