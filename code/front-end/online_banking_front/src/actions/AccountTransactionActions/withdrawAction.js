import axios from "axios";
export const withdrawAction = (userName, amount) => {
    return (dispatch) => {
      dispatch({
        type: "WITHDRAW_REQUEST",
      });
  
      const header = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = {
        userName,
        amount,
      };
  
      const url = "http://localhost:8080/account/withdraw"+userName;
      axios
        .post(url, body, header)
        .then((response) => {
          alert("Amount Withdrawn Successfully")
          dispatch({
            type: "WITHDRAW_SUCCESS",
            payload: response.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "WITHDRAW_FAIL",
            payload: error,
          });
        });
    };
  };