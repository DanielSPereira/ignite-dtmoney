import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Notebook para trabalho",
          amount: 4500,
          type: "withdraw",
          category: "Trabalho",
          createdAt: new Date('2022-10-02 05:00'),
        },
        {
          id: 2,
          title: "Freelance de website",
          amount: 10000,
          type: "deposit",
          category: "Desenvolvimento",
          createdAt: new Date('2022-10-10 11:00')
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

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
