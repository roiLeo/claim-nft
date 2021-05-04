import { useContext, useState } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Button from '../../../components/CustomButton';
import { ClaimContext } from './ClaimMain';
import CardHeader from '../../../components/CardHeader';
export default function VerifySecret({ claimGiftHandler }) {
  const { prevStep } = useContext(ClaimContext);
  const [redeemSecret, setRedeemSecret] = useState('');
  const redeemHandler = () => {
    // ToDO: add better input validation to verify redeemSecret is not empty,
    // and is indeed a valid mnemonic phrase
    if (redeemSecret) {
      claimGiftHandler(redeemSecret);
    }
  };
  return (
    <>
      <Card.Body>
        <CardHeader title={'Claim Your Gift'} backClickHandler={prevStep} />
        <div className="p-3">
          <Row className="justify-content-center align-items-center">
            <Col className="text-center">
              <p>
                Every Polkadot account needs a minimum balance to be active on
                the network.
              </p>
              <p className="pt-2">
                Enter the secret hash you have received
                <br />
                to claim your gift and fund your account.
              </p>
            </Col>
          </Row>
          <Row className="pt-4 justify-content-center align-items-center">
            <Col>
              <Form autoComplete="off" className="w-100">
                <Form.Group controlId="formGroupWord1">
                  <Form.Label>Secret Gift Hash</Form.Label>
                  <Form.Control
                    type="input"
                    placeholder="0x4rt6..."
                    onChange={(e) => setRedeemSecret(e.target.value)}
                    value={redeemSecret}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className=" pt-5 justify-content-center align-items-center">
            <Col className="d-flex justify-content-center">
              <Button onClick={() => redeemHandler()}>Claim Gift</Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </>
  );
}
