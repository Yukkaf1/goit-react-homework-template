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
    const { selectedMethod } = this.state;
    return (
      <Container>
        <Button
          selected={selectedMethod === 'mastercard'}
          onClick={() => this.selectPaymentMethod('mastercard')}
        >
          <FaCcMastercard /> Mastercard
        </Button>

        <Button
          selected={selectedMethod === 'visa'}
          onClick={() => this.selectPaymentMethod('visa')}
        >
          <FaCcVisa /> Visa
        </Button>

        <Button
          selected={selectedMethod === 'applepay'}
          onClick={() => this.selectPaymentMethod('applepay')}
        >
          <FaCcApplePay /> Apple Pay
        </Button>
      </Container>
    );
  }
}
