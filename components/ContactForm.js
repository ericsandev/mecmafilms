import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import {
  Button,
  Container,
} from '@/components';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (e) => {
    emailjs.sendForm(
      'service_l5ngo74',
      'template_1pz7nnh',
      'form',
      'vEWfOVnvJVo_BpYjo')
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  return (
    <Container className="w-full flex justify-center pt-4">
      <form className="bg-white w-[340px] shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input placeholder="Your name" {...register('name', { required: true, minLength: 3 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          {errors.name && <p className='text-red-700 '>Please check the username</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Twitter username without @
          </label>
          <input placeholder="@username" {...register('twitter', { required: true, minLength: 4, maxLength: 50, pattern: /^[a-zA-Z0-9_.-]*$/ })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          {errors.twitter && <p className='text-red-700 '>Please check the username</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input placeholder="hello@myemail.com" {...register('email', {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          {errors.email && <p className='text-red-700 '>Please check the email</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tell us more about you
          </label>
          <textarea placeholder="hello@myemail.com" {...register('message', {
            required: true, minLength: 10
          })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="textarea" />
          {errors.message && <p className='text-red-700 '>Please share with us. Min. 10 characters</p>}
        </div>
        <div className="flex items-center">
          <Button className="w-full" type='submit'>Submit</Button>
        </div>
      </form>
    </Container >
  );
};

export default ContactForm;

