const capitalize = (text) => {
    const text = 'hello';
    const firstChar = text[0].toUpperCase();
    const restSubstring = text.slice(1);
    return `${firstChar}${restSubstring}`;
  };
  export default capitalize;