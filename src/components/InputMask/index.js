import { useState } from "react";

import Wrapper from "./Wrapper";



const InputMask = (props) => {
  const [value, setValue] = useState('');
  const {
    maskType,
    children,
    onChange,
  } = props;

  const charType = (char) => isNaN(parseFloat(char)) ? 'letter' : 'number';

  const phoneFormat = (text) => {
    text = text.replace(/\D/g, "");
    text = text.replace(/^(\d\d\d)(\d)/g, "($1) $2");
    text = text.replace(/(\d{3})(\d)/, "$1-$2");
    text = text.replace(/(\d{3})(\d){2}/, "$1$2");

    onChange(text.replace(/\D/g, ""));
    setValue(text);
  }

  const postcodeFormat = (text) => {
    text = text.replace(/\s/g, '').toUpperCase().slice(0, 6);

    let isValid = true;
    const placeholder = 'X0X0X0'

    for (const key in text) {
      if (placeholder[key] === 'X' && charType(text[key]) !== 'letter') {
        isValid = false;
      }

      if (placeholder[key] === '0' && charType(text[key]) !== 'number') {
        isValid = false;
      }
    }

    if (isValid) {
      let newText = text;

      if (newText.length > 3) {
        newText = newText.slice(0, 3) + ' ' + newText.slice(3, 6);
      }

      onChange(text);
      setValue(newText);
    }
  }

  // Remove props that won't be passed to the wrapper
  const filteredProps = (({
    maskType,
    ...o
  }) => o)(props)

  const inputProps = {
    ...filteredProps,
    value,
    onChange: (e) => {
      // Formatters
      if (maskType === 'phone') phoneFormat(e.target.value);
      if (maskType === 'postcode') postcodeFormat(e.target.value);

      // Update field when text is deleted
      if (e.target.value.length === 0) {
        props.onChange(e.target.value);
        setValue(e.target.value);
      }
    },
  }
  // const inputProps = {
  //   ...props,
  //   value: value,
  //   onChange: (e) => {
  //     const v = e.target.value.replace(/\s/g, '');

  //     if (v.length > 0) {
  //       let newValue = phoneFormat(v);

  //       if (newValue) {
  //         let text = v.toUpperCase().slice(0, 7)

  //         if (text.length > 3) {
  //           text = text.slice(0, 3) + ' ' + text.slice(3, 6);
  //         }

  //         props.onChange(v.toUpperCase().slice(0, 7));
  //         setValue(text);
  //       }
  //     } else {
  //       props.onChange(e.target.value);
  //       setValue(e.target.value);
  //     }
  //   },
  // }

  return (
    <Wrapper {...inputProps}>{children}</Wrapper>
  )
}

export default InputMask