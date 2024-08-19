import React from 'react';
import image1 from '../images/jefferson-santos.jpg'; // Make sure the path is correct
import resume from '../assets/resume.pdf'
const About = () => {
  return (
    <main className="dark:bg-black flex-auto">
    <div className="sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <img
                    alt="Elmotaouakkil"
                    loading="lazy"
                    width="800"
                    height="800"
                    decoding="async"
                    className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.79754e9e.jpg&amp;w=3840&amp;q=75 3840w"
                    src={image1}
                    style={{ color: 'transparent' }}
                    />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  I’m Elmotaouakkil Abderrahmane. I live in Casablanca City.
                </h1>
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p>
                  A passionate and versatile developer with expertise in both backend and frontend technologies. My experience spans across a range of frameworks and tools, including Django, React Native, Quasar, Vue.js, and Wagtail CMS.                  </p>
                  <p>
                  With a solid foundation in Django, I've built robust and scalable server-side solutions that power dynamic and high-performing web applications. My work involves implementing complex functionalities, ensuring efficient database interactions, and crafting reliable APIs using Django Rest Framework.                  </p>
                  <p>
                  On the frontend side, I've utilized React Native to create seamless mobile experiences and Quasar to design responsive, high-quality web interfaces. My skills extend to Vue.js, where I've developed engaging and interactive user interfaces.</p>
                  <p>
                  In the realm of content management, I leverage Wagtail CMS to deliver flexible and user-friendly content editing experiences, enabling clients to manage their web content effortlessly.</p>
                  <p>I am committed to writing clean, maintainable code and adopting best practices to build scalable applications. My goal is to create intuitive, high-quality solutions that meet user needs and drive business success.</p>
                  <p>Feel free to explore my portfolio to see examples of my work and how I can contribute to your next project!</p>
                </div>

              <div className='mt-5'>
              <a class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full" href={resume} download="resume">Download CV<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"><path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
       
            </div>

              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  </main>

  );
  };
  
  export default About;
  
  