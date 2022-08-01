const scheduleReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SCHEDULE_CURRENT_ADD':
      return { ...payload };
    default:
      return state;
  }
};

export default scheduleReducer;
