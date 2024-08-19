import React from 'react';
import imgageIt from '../images/It-LEARNING.png'
import imgageLogo from '../images/cropped-logo.jpg'
import workLogoImg from '../images/yan.jpg'
// import emailjs from 'emailjs-com';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState, [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
  //     .then((result) => {
  //       console.log(result.text);
  //       // Optionally reset the form after successful submission
  //       setFormData({ name: '', email: '', message: '' });
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  return (
    <div className="sm:px-8 mt-24 md:mt-28">
  <div className="mx-auto w-full max-w-7xl lg:px-8">
    <div className="relative px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <form action="/thank-you" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  />
                  <path
                    d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                    className="stroke-zinc-400 dark:stroke-zinc-500"
                  />
                </svg>
                <span className="ml-3">Stay up to date</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Get notified when I publish something new, and unsubscribe at any time.
              </p>
              <div className="mt-6 flex">
                <input
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
                  type="email"
                />
                <button
                  className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </form> */}

            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  />
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    className="stroke-zinc-400 dark:stroke-zinc-500"
                  />
                </svg>
                <span className="ml-3">Work</span>
              </h2>
              <ol className="mt-6 space-y-4">
              
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      alt=""
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="h-7 w-7"
                      src={workLogoImg}
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Yanvision</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">Junior Full-stack developer</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2014 until 2019">
                      <time dateTime="2014">Feb-2024</time> <span aria-hidden="true">—</span> <time dateTime="2019">current</time>
                    </dd>
                  </dl>
                </li>
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      alt=""
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="h-7 w-7"
                      src={workLogoImg}
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Yanvision</dd>
                    <dt className="sr-only">Role</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">Full-stack developer intern</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2012 until 2014">
                      <time dateTime="2012">Aug-2023</time> <span aria-hidden="true">—</span> <time dateTime="2014">Feb-2024</time>
                    </dd>
                  </dl>
                </li>
              </ol>
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                    className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                  />
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    className="stroke-zinc-400 dark:stroke-zinc-500"
                  />
                </svg>
                <span className="ml-3">Education</span>
              </h2>
              <ol className="mt-6 space-y-4">
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      alt=""
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      // className="h-7 w-7"
                      src={imgageIt}
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Institution</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">IT Learning campus (FST)</dd>
                    <dt className="sr-only">Degree</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">Bachelor degree of Application Design and Development Engineering</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2011 until 2012">
                      <time dateTime="2011">2022</time> <span aria-hidden="true">—</span> <time dateTime="2012">2023</time>
                    </dd>
                    
                  </dl>

                </li>
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <img
                      alt=""
                      loading="lazy"
                      width="28"
                      height="28"
                      decoding="async"
                      data-nimg="1"
                      className="w-7"
                      src={imgageLogo}
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Institution</dt>
                    <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Hassan University || of letters and human sciences Casablanca</dd>
                    <dt className="sr-only">Degree</dt>
                    <dd className="text-xs text-zinc-500 dark:text-zinc-400">Bachelor of English cultural studies</dd>
                    <dt className="sr-only">Date</dt>
                    <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2011 until 2012">
                      <time dateTime="2011">2016</time> <span aria-hidden="true">—</span> <time dateTime="2012">2019</time>
                    </dd>
                    
                  </dl>

                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    // <section id="contact" className="py-20 bg-gray-900 text-white">
    //   <div className="container mx-auto px-4">
    //     <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
    //     <div className="flex flex-col lg:flex-row items-start">
    //       {/* Contact Info */}
    //       <div className="lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 flex flex-col items-center lg:items-start">
    //         <div>
    //           <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
    //           <p className=" mb-4">
    //             <span className="font-bold">Email:</span> your.email@example.com
    //           </p>
    //           <p className="mb-4">
    //             <span className="font-bold">Phone:</span> +123-456-7890
    //           </p>
    //         </div>
    //       </div>

    //       {/* Contact Form */}
    //       <div className="lg:w-2/3">
    //         <div className="bg-white text-gray-900 p-8 rounded-lg">
    //           <form onSubmit={handleSubmit}>
    //             <div className="mb-4">
    //               <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
    //                 Name
    //               </label>
    //               <input
    //                 type="text"
    //                 id="name"
    //                 name="name"
    //                 value={formData.name}
    //                 onChange={handleChange}
    //                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    //                 required
    //               />
    //             </div>
    //             <div className="mb-4">
    //               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
    //                 Email
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 name="email"
    //                 value={formData.email}
    //                 onChange={handleChange}
    //                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    //                 required
    //               />
    //             </div>
    //             <div className="mb-4">
    //               <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
    //                 Message
    //               </label>
    //               <textarea
    //                 id="message"
    //                 name="message"
    //                 value={formData.message}
    //                 onChange={handleChange}
    //                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
    //                 rows="5"
    //                 required
    //               ></textarea>
    //             </div>
    //             <div className="text-center">
    //               <button
    //                 type="submit"
    //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //               >
    //                 Send Message
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contact;
