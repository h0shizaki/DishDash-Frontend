import * as yup from 'yup';
import { Gender } from './Gender';

export const RegisterSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	firstname: yup.string().required('Firstname is required'),
	lastname: yup.string().required('Lastname is required'),
	email: yup.string().email().required('Email is required'),
	password: yup.string().required('Password is required')
	.test('is-secure', 'Password is not secure', (value) => (value ? value.length > 5 : true)),
	confirm_password: yup.string().required('Confirm Password is required').oneOf([yup.ref('password')], 'Passwords must match'),
	gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required()
});

