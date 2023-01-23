import { useState, useEffect } from "react";
import {
  Button,
  Box,
  TextField,
  Container,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Divider,
  Alert,
  Stack,
  FormControl,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";

import InputMask from "../../components/InputMask";
import submitRules from './submitRules';
import validator from '../../helpers/formValidator';

const FormValidation = () => {
  // States
  const inicialFormData = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    postcode: '',
    tshirtSize: '',
    description: '',
    tshirtColour: 'white',
    acceptCondition: false,
  }

  const [formData, setFormData] = useState(inicialFormData);
  const [errors, setErrors] = useState({});
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const onSubmit = () => {
    //Update errors state
    const updateErrors = data => { setErrors(data) };

    // Apply submit rules and validate
    const validated = validator(submitRules(formData), updateErrors);
    setFormValidated(validated);
  }

  const resetForm = () => {
    setFormData(inicialFormData);
    setErrors({});
    setFormValidated(false);
  }

  return (
    <Container>
      <FormControl sx={{ mb: 5 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '33ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            autoFocus
            label="First name *"
            helperText={errors.firstName}
            placeholder="John"
            error={'firstName' in errors}
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
          />
          <TextField
            label="Middle name"
            helperText={errors.middleName}
            placeholder="Doe"
            error={'middleName' in errors}
            value={formData.middleName}
            onChange={e => setFormData({ ...formData, middleName: e.target.value })}
          />
          <TextField
            label="Last name *"
            helperText={errors.lastName}
            placeholder="Stark"
            error={'lastName' in errors}
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
          />
          <TextField
            label="E-mail *"
            helperText={errors.email}
            placeholder="johndoe@mail.com"
            error={'email' in errors}
            value={formData.email}
            type='email'
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <InputMask
            maskType="phone"
            label="Phone *"
            helperText={errors.phone}
            placeholder="(999) 999-9999"
            error={'phone' in errors}
            value={formData.phone}
            onChange={value => setFormData({ ...formData, phone: value })}
          >
            <TextField />
          </InputMask>
          <TextField
            label="Age *"
            helperText={errors.age}
            placeholder="20"
            error={'age' in errors}
            value={formData.age}
            onChange={e => setFormData({ ...formData, age: e.target.value })}
          >
          </TextField>
          <InputMask
            maskType="postcode"
            label="Postcode *"
            helperText={errors.postcode}
            placeholder="X0X 0X0"
            error={'postcode' in errors}
            value={formData.postcode}
            onChange={value => setFormData({ ...formData, postcode: value })}
          >
            <TextField />
          </InputMask>
          <TextField
            select
            label="T-shirt size *"
            helperText={errors.tshirtSize}
            placeholder="M"
            error={'tshirtSize' in errors}
            value={formData.tshirtSize}
            onChange={e => setFormData({ ...formData, tshirtSize: e.target.value })}
          >
            <MenuItem value={''}><em>None</em></MenuItem>
            <MenuItem value={'xl'}>XS</MenuItem>
            <MenuItem value={'s'}>S</MenuItem>
            <MenuItem value={'m'}>M</MenuItem>
            <MenuItem value={'l'}>L</MenuItem>
            <MenuItem value={'xl'}>XL</MenuItem>
            <MenuItem value={'xxl'}>XXL</MenuItem>
          </TextField>
        </Box>
        <Box p={1}>
          <TextField
            label="Description *"
            helperText={errors.description || 'Required | Min 150 characters'}
            placeholder="Type in here the description of this post with at least 150 characters."
            multiline
            minRows={2}
            sx={{ width: '100%', mb: 3 }}
            error={'description' in errors}
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          >
          </TextField>
          <Box sx={{ mb: 3 }}>
            <FormLabel>T-shirt colour</FormLabel>
            <RadioGroup
              row
              name="tshirtColour"
              value={formData.tshirtColour}
              onChange={e => setFormData({ ...formData, tshirtColour: e.target.value })}
            >
              <FormControlLabel value="white" control={<Radio />} label="White" />
              <FormControlLabel value="black" control={<Radio />} label="Black" />
              <FormControlLabel value="orange" control={<Radio />} label="Orange" />
              <FormControlLabel value="blue" control={<Radio />} label="Blue" />
              <FormControlLabel value="red" control={<Radio />} label="Red" />
            </RadioGroup>
          </Box>
          <Divider sx={{ my: 3 }} />
          <FormControl
            error={'acceptCondition' in errors}
            sx={{ mb: 3 }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="Accept condition."
              checked={formData.acceptCondition}
              onChange={e => setFormData({ ...formData, acceptCondition: e.target.checked })}
            />
            <FormHelperText>{errors.acceptCondition}</FormHelperText>
          </FormControl>
        </Box>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            onClick={onSubmit}
          >
            Validate
          </Button>
          <Button
            variant="outlined"
            onClick={resetForm}
          >
            Clear form
          </Button>
        </Stack>
      </FormControl>
      {formValidated &&
        <Alert severity="success">The form was validated successfully!</Alert>
      }
    </Container >
  )
}

export default FormValidation;