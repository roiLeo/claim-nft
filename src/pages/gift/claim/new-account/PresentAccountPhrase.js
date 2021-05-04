import { Row, Col, Form, Card } from 'react-bootstrap';
import CardHeader from '../../../../components/CardHeader';
import Button from '../../../../components/CustomButton';

export default function CreateNewAccount({
  mnemonicWords,
  nextStepHandler,
  prevStepHandler,
}) {
  const label = 'I have stored my seed phrase in a safe place.';

  return (
    <>
      <Card.Body>
        <CardHeader
          title={'Account Seed Phrase'}
          backClickHandler={() => prevStepHandler()}
        />
        <div className="p-4">
          <Row className="justify-content-center align-items-center">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <p className="text-center">
                <span className="d-block">
                  Write down the following words in order and store them
                  somewhere safe. This seed phrase allows you to recover your
                  account and funds.
                </span>
              </p>
            </Col>
          </Row>
          <Row className="p-5 justify-content-center align-items-center">
            {mnemonicWords.map((word, index) => (
              <Col md={4}>
                <div className="border-bottom border-dark">{`${word}`}</div>
              </Col>
            ))}
          </Row>
          <Row className="flex-column justify-content-center align-items-center">
            <Col>
              <Form.Check type="checkbox" label={label} />
            </Col>
            <Col className="pt-5 d-flex justify-content-center">
              <Button onClick={() => nextStepHandler()}>Next</Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </>
  );
}
