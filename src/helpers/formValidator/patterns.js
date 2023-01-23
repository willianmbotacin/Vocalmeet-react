/**
 * @returns { Boolean } true for valid | false for invalid
 */
export default {
  required: (value = '') => {
    return value !== '' && value !== false;
  },
  minLength: (value, minlength) => {
    return value.length >= minlength;
  },
  maxLength: (value, maxlength) => {
    return value.length <= maxlength;
  },
  min: (value, min) => {
    return value >= min;
  },
  max: (value, max) => {
    return value <= max;
  },
  email: (value) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);
  },
}