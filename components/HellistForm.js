import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import {
  Button,
  Container,
} from '@/components';
import emailjs from '@emailjs/browser';


const HellistForm = () => {
  const [statusMessage, setStatusMessage] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (e) => {

    emailjs.sendForm(
      'service_l5ngo74',
      'template_lkmw4rk',
      'form',
      'vEWfOVnvJVo_BpYjo')
      .then(res => {
        setStatusMessage(`👍 Email sent success`);
        console.log(res)
        form.reset();
      })
      .catch(error => {
        setStatusMessage(`${error.text} happened`);
        console.log(error)
      });
  }

  return (
    <Container className="w-full flex flex-col justify-center pt-4">
      <form id="form" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(sendEmail)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Name
          </label>
          <input onChange={event => setFirst(event.target.value)} placeholder="Your name" {...register('name', { required: true, minLength: 3 })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          {errors.name && <p className='text-[#f00]'>Please check the name</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Twitter username without @
          </label>
          <input placeholder="@username" {...register('twitter', { required: true, minLength: 4, maxLength: 50, pattern: /^[a-zA-Z0-9_.-]*$/ })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          {errors.twitter && <p className='text-[#f00]'>Please check the username</p>}
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
          {errors.email && <p className='text-[#f00]'>Please check the email</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Solana Wallet
          </label>
          <input placeholder="0xasd023..." {...register('solana', {
            required: true,
          })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
          {errors.email && <p className='text-[#f00]'>Please check the solana wallet</p>}
        </div>
        <div className="flex items-center">
          <Button className="w-full" type='submit'>Submit</Button>
        </div>
      </form>
      <p className='text-2xl text-center'>{statusMessage}</p>
    </Container >
  );
};

export default HellistForm;

