import React, { Component } from 'react';
import Jam from './Jam';
import JamClient from '../../clients/JamClient';

import './jam.scss';

class JamViewer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jams: [],
      amount: 0
    };

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  componentDidMount() {
    new JamClient().getJams().then(jams => {
      this.setState({ jams: jams.data });
    });
  }

  addProduct() {
    this.setState({ amount : this.state.amount + 1});
  }

  buyProducts() {
    window.Onepay.checkout({
      endpoint: 'http://localhost:8080/create-transaction',
      commerceLogo: 'http://localhost:3000/assets/images/logo-lekker-jar-30.png',
      callbackUrl: './onepay-result',
      transactionDescription: 'Valor total de las mermeladas',
      onclose: function (status) {
          console.log('el estado recibido es: ', status);
      }
    });
  }

  removeProduct() {
    if (this.state.amount > 0) {
      this.setState({ amount : this.state.amount - 1});
    }
  }

  render() {
    return (
      <div>
        <div className="jam-viewer">
          {this.state.jams.map(jam => (
            <Jam key={jam.name} name={jam.name} image={jam.image} action={this.addProduct} />
          ))}
        </div>
        <div className="cart">
          <img src="/assets/images/cart.png" alt="cart" />
          <h1 className="amount">{this.state.amount}</h1>

          <button onClick={this.buyProducts} className="cart-buy-button">
            <img src="/assets/images/buy.png" alt="buy" />
          </button>
          <button onClick={this.removeProduct} className="cart-remove-button">
            <img src="/assets/images/remove.png" alt="remove" />
          </button>
        </div>
      </div>
    );
  }

}

export default JamViewer;
