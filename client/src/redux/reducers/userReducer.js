import docUpdateController from '../../utils/docUpdateController';

const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_LOG_IN':
      return { ...payload };
    case 'USER_LOG_OUT':
      return {};
    case 'DOC_UPDATE':
      return docUpdateController(payload, state);

    case 'PET_ADD':
      return { ...state, Pets: [...state.Pets, payload] };

    case 'USER_UPDATE':
      console.log(payload);
      return { ...state, [payload.type]: payload.input };
    default:
      return state;
  }
};

export default userReducer;
