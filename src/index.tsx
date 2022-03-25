import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance WebSite",
          amount: 3400.00,
          type: "deposit",
          category: 'Work Dev',
          createdAt: new Date('2022-11-11 12:30:00')
        },
        {
          id: 2,
          title: "Despesas de casa",
          amount: 1200,
          type: "withdraw",
          category: 'Casa',
          createdAt: new Date('2022-11-11 14:00:00')
        },
        {
          id: 3,
          title: "Carro",
          amount: 900,
          type: "withdraw",
          category: 'Locamoção',
          createdAt: new Date('2021-11-11 17:45:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);