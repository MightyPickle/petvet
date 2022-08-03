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
      if (payload.type === 'Categories_add' || payload.type === 'Profiles_add' || payload.type === 'Price_lists_add') {
        const cleanType = payload.type.replace('_add', '');
        console.log(cleanType);
        return { ...state, [cleanType]: [...state[cleanType], payload.input] };
      }
      if (payload.type === 'Categories_remove' || payload.type === 'Profiles_remove' || payload.type === 'Price_lists_remove') {
        const cleanType = payload.type.replace('_remove', '');
        return { ...state, [cleanType]: state[cleanType].filter((el) => el.id !== payload.input) };
      }
      // if (payload.type === 'Price_lists_add') {
      //   console.log(payload);
      //   return { ...state, [payload.type]: [...state[payload.type], payload.input] };
      // }

      return { ...state, [payload.type]: payload.input };

    case 'PET_ADD':
      return { ...state, Pets: [...state.Pets, payload] };

    default:
      return state;
  }
};

export default userReducer;
