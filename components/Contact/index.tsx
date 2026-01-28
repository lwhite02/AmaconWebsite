

'use client'
import Head from "next/head";
import React from 'react';
import { useForm } from 'react-hook-form';
const Contact = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        'https://7aladc8c77.execute-api.af-south-1.amazonaws.com/Prod/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        alert('Form submission successful!');
        reset();
      } else {
        alert('Form submission failed: ' + (result.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form submission error: ' + error.message);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <h3 className="pb-2 pt- text-lg font-bold text-[#017dc5] ">
          <span className="border-b-2 border-[#017dc5]">Contact Us </span>
        </h3>
        <p className="text-4xl font-bold text-[black] mb-10 md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Want to find out more?</p>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-[#E1E1E1] py-11 px-8  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
             <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-sm md:text-base lg:text-base xl:text-base 2xl:text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-[#61AE4A] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-500">Name is required.</p>}
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-[#61AE4A] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...register('email', { required: true })}
                        />
                        {errors.email && <p className="text-red-500">Email is required.</p>}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="contact"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Contact Number
                        </label>
                        <input
                          type="text"
                          id="contact"
                          placeholder="Enter your contact number"
                          className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-[#61AE4A] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...register('contact', { required: true })}
                        />
                        {errors.contact && <p className="text-red-500">Contact number is required.</p>}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark"
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-[#61AE4A] focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          {...register('message', { required: true })}
                        ></textarea>
                        {errors.message && <p className="text-red-500">Message is required.</p>}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button type="submit" className="rounded-md bg-[#017dc5] py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                        Submit 
                      </button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
  <div className="mb-12 rounded-md bg-[#E1E1E1] py-11 px-8  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
    <div className="mb-8" style={{ width: "100%", height: "400px" }}>
      {/* Replace this div with your Google Maps component */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5783002918547!2d27.98724747631516!3d-26.112680960254703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574c8a90f2cfd%3A0xfb54ad0c53f22c6d!2siControl%20Consulting%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1714958364072!5m2!1sen!2sza"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
      ></iframe>
    </div>
    <div>
      <p className="text-lg font-semibold mb-2">Contact Information</p>
      <p className="mb-2">Phone: (011) 782 3450 </p>
      <p className="mb-2">Address: Unit 7, Verona Office Park, cnr Malibonge Drive and McArthur Ave, Randburg, Guateng</p>
      <p>Email: info@iControlConsulting.co.za</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
