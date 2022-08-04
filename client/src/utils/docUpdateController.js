export default function docUpdateController(payload, state) {
  if (payload.type === 'experience' || payload.type === 'clinic_address') {
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
  return state;
}
