const INITIAL_STATE = {};

const loading = (state = INITIAL_STATE, action) => {
  const matches = /(.*)_(LOADING|SUCCESS|FAILURE)/.exec(action.type);
  if (!matches) return state;
  const [, requestName, requestStatus] = matches;
  return {
    ...state,
    [requestName]: requestStatus === "LOADING"
  };
};

export default loading;
