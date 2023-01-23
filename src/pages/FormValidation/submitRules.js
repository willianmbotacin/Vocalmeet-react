export default (formData) => {
  return {
    firstName: [
      {
        type: "required",
        data: { value: formData.firstName },
        message: "First name is required.",
      },
    ],
    lastName: [
      {
        type: "required",
        data: { value: formData.lastName },
        message: "Last name is required.",
      },
    ],
    email: [
      {
        type: "required",
        data: { value: formData.email },
        message: "E-mail is required.",
      },
      {
        type: "email",
        data: { value: formData.email },
        message: "This e-mail is invalid.",
      },
    ],
    phone: [
      {
        type: "required",
        data: { value: formData.phone },
        message: "Phone is required.",
      },
      {
        type: "minLength",
        data: {
          value: formData.phone,
          minlength: 10,
        },
        message: "This phone number is incomplete.",
      },
    ],
    age: [
      {
        type: "required",
        data: { value: formData.age },
        message: "Age is required.",
      },
      {
        type: "min",
        data: {
          value: formData.age,
          min: 16,
        },
        message: "The minimum value for age is 16.",
      },
      {
        type: "max",
        data: {
          value: formData.age,
          max: 65,
        },
        message: "The maximum value for age is 65.",
      },
    ],
    postcode: [
      {
        type: "required",
        data: { value: formData.postcode },
        message: "Postcode is required.",
      },
      {
        type: "minLength",
        data: {
          value: formData.postcode,
          minlength: 6,
        },
        message: "This postcode is incomplete.",
      },
    ],
    tshirtSize: [
      {
        type: "required",
        data: { value: formData.tshirtSize },
        message: "T-shirt size is required.",
      },
    ],
    description: [
      {
        type: "required",
        data: { value: formData.description },
        message: "Description is required.",
      },
      {
        type: "minLength",
        data: {
          value: formData.description,
          minlength: 150,
        },
        message: "Description requires at least 150 characters.",
      },
    ],
    acceptCondition: [
      {
        type: "required",
        data: { value: formData.acceptCondition },
        message: "Accept condition is required.",
      },
    ],
  }
}