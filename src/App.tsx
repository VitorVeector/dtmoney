import {Header} from './components/Header'
import {GlobalStyle} from './styles/global'
import { Dashboard } from './components/Dashboard/';
import Modal from 'react-modal'
import { useContext, useState } from 'react';
import { NewTransactionModalOpen } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  const data = useContext(TransactionsContext)
  console.log(data)

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>


      <Dashboard/>
      <NewTransactionModalOpen isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle/>
    </TransactionsContext.Provider>
  );
}