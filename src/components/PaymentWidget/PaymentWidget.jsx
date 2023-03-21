import { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { paymentMethod } from 'constans';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = method => {
    this.setState({
      selectedMethod: method,
    });
  };

  render() {
    const { selectedMethod } = this.state;

    return (
      <Container>
        <PaymentMethods
          selected={selectedMethod}
          onSelect={this.selectPaymentMethod}
        />
        {selectedMethod === paymentMethod.visa && <div> Visa form </div>}
        {selectedMethod === paymentMethod.mastercard && (
          <div> Mastercard form</div>
        )}
        {selectedMethod === paymentMethod.applepay && <div>ApplePay form </div>}
      </Container>
    );
  }
}
