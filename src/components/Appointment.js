import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com'

import DogImg from '../assets/img/dogs/dog-appointment.png';

const Appointment = () => {
  
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_acln43y',
      'template_2epbnfz',
      form.current,
      'jLNEVLj93MFbOqsAl'


    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed To Send Appointment, Try Again!');
    } );


  };








  return (
  <section id='appointment' className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative
  min-h-[584px]'>
    <div className='container mx-auto'>
      <div>
        {/* image */}
        <div className='hidden w-full max-w-[790px] mx-auto lg:flex
        justify-center'>
          <img src={DogImg} alt='' />
        </div>
        {/* form */}
        <form 
        ref={form}
        onSubmit={sendEmail}
        
        className='bg-yellow py-8 px-6 w-full max-w-[790px]
         h-[500px] mx-auto lg:-mt-5 rounded-[60px] text-center 
         flex flex-col justify-start items-center gap-y-4'>
          <h2 className='h2 my-4'>Get an appointment</h2>
          <input className='input-control' type='text' name='name' placeholder='Full name' />
          <input className='input-control' type='text' name='email' placeholder='Email address'/>
          <input className='input-control' type='text' name='phone' placeholder='Phone number'/>
          <button className='btn w-full max-w-[514px]'>Send</button>
          {/* Thank you message */}
          {submitted && (
            <p className='text-orange text-xl mt-2'>
              Thank you! We will contact you as soon as possible!
            </p>
          ) 
          
          }
        </form>
      </div>
    </div>
  </section>
  );
   
};

export default Appointment;
