import axios from "axios";

export const GET_PROVINSI_LIST = "GET_PROVINSI_LIST";

export const getProvinsiList = () => {
  return (dispatch) => {
    axios
      .get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then(function (response) {
        dispatch({
          type: GET_PROVINSI_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_PROVINSI_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

