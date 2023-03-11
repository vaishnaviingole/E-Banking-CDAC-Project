import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawAction } from "../../../actions/AccountTransactionActions/withdrawAction";
// import { withdraw } from "../../actions/AccountTransactionActions/withdrawAction";

const WithdrawScreen = (props) => {
  const userSignin = useSelector((store) => store.userSignin);
  const { userName } = userSignin;

  const withdrawReducer = useSelector((store) => store.withdraw);
  const { loading, response, error } = withdrawReducer;

  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect called: ");
    console.log("loading: ", loading);
    console.log("response: ", response);
    console.log("error: ", error);

    if (response && response.status === 200) {
      // withdrawal was successful
      alert("Amount Withdrawn Successfully");
      props.history.push("/userhome");
    } else if (error) {
      // there is an error while making the API call
      alert("Error while making API call");
    }
  }, [loading, response, error, props.history]);

  const onWithdraw = () => {
    console.log(userName);
    dispatch(withdrawAction(userName, amount));
  };

  const onCancel = () => {
    props.history.push('/userhome')
  };


  return (
    <div>
      <div>
        <br />
        <center>
          <h2>Withdraw Screen</h2>
        </center>
      </div>
      <hr />
      <br />
      <br />
      <br />
      <Form.Group>
        <div>
          <h5>Please specify the amount you would like to withdraw : </h5>
        </div>
        <Col>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </Col>
        <br />
        <center>
          <Button variant="success" onClick={onWithdraw}>Withdraw</Button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Back
          </button>
        </center>
      </Form.Group>
    </div>
  );
};

export default WithdrawScreen;