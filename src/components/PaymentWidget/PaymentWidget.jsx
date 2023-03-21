import { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { paymentMethod } from 'constans';
import { VisaPaymentForm } from 'components/VisaPaymentForm/VisaPaymentForm';

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
        {selectedMethod === paymentMethod.visa && <VisaPaymentForm />}
        {selectedMethod === paymentMethod.mastercard && (
          <div> Mastercard Form</div>
        )}
        {selectedMethod === paymentMethod.applepay && <div>ApplePay Form </div>}
      </Container>
    );
  }
}
