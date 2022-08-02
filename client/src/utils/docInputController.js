const docInputController = (type, input) => {
  console.log(input);
  switch (type) {
    case 'experience':
      return { type: 'experience', input };
    case 'categories':
      return { type: 'Categories', input: input.split(',').map((el) => el.trim()) };
    case 'profiles':
      return { type: 'Profiles', input: input.split(',').map((el) => el.trim()) };
    default:
      return null;
  }
};

export default docInputController;
