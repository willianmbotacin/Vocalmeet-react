/**
 * Calculate age from the birthday
 * @param { String } date birth date in the format: YYYY/MM/DD
 * @returns { Integer } the calculated age
 */
const getAge = (date) => {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export {
  getAge,
}