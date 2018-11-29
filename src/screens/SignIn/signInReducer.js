import * as types from '../../constants';

const initialState = {
  loading: false,
  data: null,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_IN:
      return { ...state, loading: true };

    case types.SIGN_IN_SUCCESS:
      return { ...state, loading: false, data: payload };

    case types.SIGN_IN_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
