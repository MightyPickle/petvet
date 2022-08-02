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
      if (payload.type === 'Categories_add' || payload.type === 'Profiles_add') {
        const cleanType = payload.type.replace('_add', '');
        console.log(cleanType);
        return { ...state, [cleanType]: [...state[cleanType], payload.input] };
      }
      if (payload.type === ('Categories_remove' || 'Profiles_remove')) {
        const cleanType = payload.type.replace('_remove', '');
        return { ...state, [cleanType]: state[cleanType].filter((el) => el.id !== payload.input) };
      }
      return { ...state, [payload.type]: payload.input };
    default:
      return state;
  }
};

export default userReducer;
