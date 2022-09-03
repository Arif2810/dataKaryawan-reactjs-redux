import {
  GET_PROVINSI_LIST,
} from "../actions/domicileAction";

let initialState = {
  getProvinsiList: false,
};

const domicile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROVINSI_LIST:
      return {
        ...state,
        getProvinsiList: action.payload.data,
        errorProvinsiList: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default domicile;