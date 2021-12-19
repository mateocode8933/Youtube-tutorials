<template>
  <Form autocomplete="off" @submit="onSubmit" :validation-schema="schema">
    <div class="form-header">Join us!</div>
    <div class="form-field-container">
      <div class="form-field">
        <label for="username">Username</label>
        <Field name="username" type="text" />
        <ErrorMessage class="error" name="username" />
      </div>
      <div class="form-field">
        <label for="email">Email</label>
        <Field name="email" type="text" />
        <ErrorMessage class="error" name="email" />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <Field v-model="password" name="password" type="password" />
        <ErrorMessage class="error" name="password" />
      </div>
      <div class="form-field">
        <label for="repeat-password">Repeat password</label>
        <Field name="repeat-password" type="password" />
        <ErrorMessage class="error" name="repeat-password" />
      </div>
    </div>
    <StrengthBar v-if="password.length >= 2" :value="password.length" />
    <button>Register</button>
  </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import StrengthBar from '../components/StrengthBar.vue';
import * as yup from 'yup';
import axios from 'axios';
export default {
  name: 'RegisterForm',

  components: {
    Field,
    Form,
    ErrorMessage,
    StrengthBar,
  },

  data() {
    return {
      password: '',
      schema: yup.object({
        username: yup.string().required().min(5),
        email: yup.string().required().email(),
        password: yup.string().required(),
        'repeat-password': yup
          .string()
          .required()
          .oneOf(
            [yup.ref('password'), null],
            'Passwords must match each other'
          ),
      }),
    };
  },

  methods: {
    onSubmit(values, { resetForm }) {
      const url = 'http://localhost:3000/users';

      try {
        axios.post(url, values).then((res) => {
          if (res.status === 201) {
            alert(JSON.stringify(values, null, 2));
            resetForm();
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
<style scoped>
.form-header {
  font-size: 50px;
  margin-bottom: 20px;
  color: #385a64;
}

.form-field-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 15px 0px 0px 4px;
  width: 350px;
  border: 1px solid #385a646e;
  color: #385a64;
  outline: none;
  border-radius: 5px;
  font-size: 17px;
}

label {
  display: block;
  font-size: 15px;
  margin-bottom: 3px;
  color: #385a64;
}

button {
  background: #a952a3;
  color: white;
  display: block;
  font-size: 18px;
  margin: 20px auto;
  padding: 8px 70px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: #d268cc;
}

.error {
  display: block;
  margin-top: 3px;
  color: red;
  font-size: 15px;
}
</style>
