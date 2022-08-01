const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_LOG_IN':
      return { ...payload };
    case 'USER_LOG_OUT':
      return {};
    case 'DOC_UPDATE':
      if (payload.type === 'experience') {
        console.log(payload);
        return { ...state, Doc_info: { ...state.Doc_info, [payload.type]: payload.input } };
      }
      return { ...state, [payload.type]: payload.input };

    default:
      return state;
  }
};

export default userReducer;
