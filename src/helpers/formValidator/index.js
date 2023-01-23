import patterns from './patterns';

/**
 * @param { String } field the field to be validated
 * @param { Object } rule data for validation
 * @returns { Boolean } true for valid | false for invalid
 */
const checkErrors = (field, rule) => {
  if (field === 'required') return patterns.required(rule.value)
  if (field === 'minLength') return patterns.minLength(rule.value, rule.minlength)
  if (field === 'maxLength') return patterns.maxLength(rule.value, rule.maxlength)
  if (field === 'min') return patterns.min(rule.value, rule.min)
  if (field === 'max') return patterns.max(rule.value, rule.max)
  if (field === 'email') return patterns.email(rule.value)
}

/**
 * @param { Object } rules all inputs data and rules
 * @param { Function } callback callback function to receive the errors list
 * @returns { Boolean } true when passed the validation test
 */
export default (rules, callBack) => {
  let hasErrors = true;
  let newErrors = {};

  for (const field in rules) {
    for (const rule of rules[field]) {
      if (!checkErrors(rule.type, rule.data)) {
        newErrors[field] = rule.message;
        hasErrors = false;
        break;
      }
    }
  }

  if (callBack) callBack(newErrors);
  return hasErrors;
}