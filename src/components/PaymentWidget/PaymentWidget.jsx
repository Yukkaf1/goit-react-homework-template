import { Component } from 'react';
import { Container, Button } from './PaymentWidget.styled';
import { FaCcMastercard, FaCcVisa, FaCcApplePay } from 'react-icons/fa';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = metod => {
    this.setState({
      selectedMethod: metod,
    });
  };

  render() {
    return (
      <Container>
        <Button onClick={() => this.selectPaymentMethod('mastercard')}>
          <FaCcMastercard /> Mastercard
        </Button>

        <Button onClick={() => this.selectPaymentMethod('visa')}>
          <FaCcVisa /> Visa
        </Button>

        <Button onClick={() => this.selectPaymentMethod('applepay')}>
          <FaCcApplePay /> Apple Pay
        </Button>
      </Container>
    );
  }
}
