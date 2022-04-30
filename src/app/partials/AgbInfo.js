
import React from 'react'
import '../App.css';
import { Button, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function ModalExampleDimmer() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  return (
    <div>
      {/* <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Default</Button>
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'inverted' })}
      >
        Inverted
      </Button> */}
      <Button className=''
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
      >
        AGB
      </Button>

      <Modal className='agbmodbody'
        dimmer={dimmer}
        open={open}
        center
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header image scrolling>AGB / GENERAL TERMS AND CONDITIONS</Modal.Header>
        <Modal.Content className='agbbody'>
            § 18 : Data Protection Notification
            1. M24You GmbH electronically stores uses and processes personal data of all customers and future customers for purpose of executing the contract in accordance the provisions of the European General Data Protection Regulation (GDPR), and the Telemedia Act. Without consent of the customer or future customer, M24You, will not store or process any data in so far as necessary for executing of the contract and invoicing.
            2. M24You GmbH will not pass any personal data on to any third parties, without consent of the customer or future customer.
            3. M24You GmbH will not use personal data for purpose of market research or advertisement, without consent of the customer or future customer.

            1. Scope
            1.1 Any delivery, service and offer effected by us shall exclusively be executed on the basis of the present terms of sale They shall also apply to any future business, even if not expressly stipulated otherwise. We herewith oppose any counter-confirmation made by the purchaser referring to his terms of business and sale.
            1.2 Any provision made between us and the purchaser in order to execute a contract shall be stipulated in a contract in writing.

            2. Offer and conclusion of contract
            2.1 Our offers are not binding, provided the binding force of the offer was not definitely stipulated in writing.
            2.2 A contract shall only be concluded if the declaration of acceptance is confirmed by us in writing.
            2.3 Drawings, illustrations, weights and measures, and other performance data shall only be binding if definitely stipulated in writing.
            2.4 Our salesmen are not be entitled to make subsidiary verbal agreements or give verbal warranties exceeding the content of the contract concluded in writing.

            3. Prices
            3.1 Unless otherwise specified, we consider ourselves bound by the prices of our offers for four weeks beginning at the date of the offer. The prices specified in our confirmation of order plus the respective legal turnover tax shall be authoritive. Any additional delivery and service shall be invoiced separately.
            3.2 The prices are to be understood from factory, unless otherwise agreed upon.

            4. Time of delivery and performance
            4.1 The date of or the term for the delivery require a written confirmation in order to be binding. In any other case the date of or the term for the delivery shall not be binding.
            4.2 We will not be responsible for any delay in delivery or of performance being due to circumstances amounting to force majeure and events essentially impeding or rendering impossible the delivery, even if they occur with regard to our suppliers or their sub-suppliers. This shall also apply if term and date were bindingly stipulated. We shall hereby be entitled to postpone the delivery or service by the duration of the impediment plus an appropriate starting period or completely withdraw from the contract in whole or in part for the part not yet fulfilled.
            4.3 Force majeure shall be an extraordinary, unforeseen or inevitable event (e.g. natural disaster, war, revolution, kidnapping, and fire), the consequences of which cannot be prevented by arrangements economic reasonable. This shall also apply to any official measure and act of government, provided they were not foreseeable or caused, also by contributory fault, by act or failure imputed to the supplier. Force majeure shall not apply to natural occurences periodically recurring, or illegal lockouts.
            4.4 If the impediment under 4.3 takes a time exceeding three months, the purchaser shall be entitled to withdraw from the part of the contract not yet performed after having granted an additional period of time of reasonable length. In case the term for the delivery is prolonged or we are released from our obligation, the purchaser cannot derive any claim for damages. We can only invoke the aforementioned circumstances if we inform the purchaser hereof immediately.
            4.5 We are entitled to perform part deliveries or services at any time.
            4.6 Precondition for the adherence to our delivery and service commitments shall be that the purchaser performs his obligations properly and in time.
            4.7 If the purchaser gets in default of acceptance, we shall be entitled to demand compensation for expenses incurred by us. On the occurrence of the default of acceptance the risk of the accident worsening and the accident loss passes to the purchaser.

            5. Passing of risk
            2. Offer and conclusion of contract
            2.1 Our offers are not binding, provided the binding force of the offer was not definitely stipulated in writing.
            2.2 A contract shall only be concluded if the declaration of acceptance is confirmed by us in writing.
            2.3 Drawings, illustrations, weights and measures, and other performance data shall only be binding if definitely stipulated in writing.
            2.4 Our salesmen are not be entitled to make subsidiary verbal agreements or give verbal warranties exceeding the content of the contract concluded in writing.
        </Modal.Content>
        <Modal.Actions>
          {/* <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Disagree
          </Button> */}
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            I've Read it
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default ModalExampleDimmer