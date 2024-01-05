import Link from 'next/link';
import React from 'react';

export default function NavBarStarted() {
  return (
    <section id='home' className='relative  overflow-hidden z-10  pt-[210px] '>
      <div className='container'>
        <div className='flex flex-wrap mx-[-16px]'>
          <div className='w-full px-4'>
            <div
              className='mx-auto max-w-[570px] text-center wow fadeInUp'
              data-wow-delay='.2s'
            >
              <h1 className='text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-5'>
                Tasky a better way to Manage Task
              </h1>
              <p className='font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mb-12'>
                Simplify Development: Streamline Issues, Accelerate Sprints, and
                Navigate Tasks with Ease. Let&apos;s Get Started!
              </p>
              <div className='flex items-center justify-center'>
                <Link
                  href={'/register'}
                  className='text-base font-semibold text-white bg-primary py-4 px-8 hover:bg-opacity-80 mx-2 rounded-md transition duration-300 ease-in-out'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-0 right-0 z-[-1]'>
        <svg
          width='450'
          height='556'
          viewBox='0 0 450 556'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='277'
            cy='63'
            r='225'
            fill='url(#paint0_linear_25:217)'
          ></circle>
          <circle
            cx='17.9997'
            cy='182'
            r='18'
            fill='url(#paint1_radial_25:217)'
          ></circle>
          <circle
            cx='76.9997'
            cy='288'
            r='34'
            fill='url(#paint2_radial_25:217)'
          ></circle>
          <circle
            cx='325.486'
            cy='302.87'
            r='180'
            transform='rotate(-37.6852 325.486 302.87)'
            fill='url(#paint3_linear_25:217)'
          ></circle>
          <circle
            opacity='0.8'
            cx='184.521'
            cy='315.521'
            r='132.862'
            transform='rotate(114.874 184.521 315.521)'
            stroke='url(#paint4_linear_25:217)'
          ></circle>
          <circle
            opacity='0.8'
            cx='356'
            cy='290'
            r='179.5'
            transform='rotate(-30 356 290)'
            stroke='url(#paint5_linear_25:217)'
          ></circle>
          <circle
            opacity='0.8'
            cx='191.659'
            cy='302.659'
            r='133.362'
            transform='rotate(133.319 191.659 302.659)'
            fill='url(#paint6_linear_25:217)'
          ></circle>
          <defs>
            <linearGradient
              id='paint0_linear_25:217'
              x1='-54.5003'
              y1='-178'
              x2='222'
              y2='288'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0'></stop>
            </linearGradient>
            <radialGradient
              id='paint1_radial_25:217'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(17.9997 182) rotate(90) scale(18)'
            >
              <stop
                offset='0.145833'
                stop-color='#4A6CF7'
                stop-opacity='0'
              ></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0.08'></stop>
            </radialGradient>
            <radialGradient
              id='paint2_radial_25:217'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(76.9997 288) rotate(90) scale(34)'
            >
              <stop
                offset='0.145833'
                stop-color='#4A6CF7'
                stop-opacity='0'
              ></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0.08'></stop>
            </radialGradient>
            <linearGradient
              id='paint3_linear_25:217'
              x1='226.775'
              y1='-66.1548'
              x2='292.157'
              y2='351.421'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0'></stop>
            </linearGradient>
            <linearGradient
              id='paint4_linear_25:217'
              x1='184.521'
              y1='182.159'
              x2='184.521'
              y2='448.882'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='white' stop-opacity='0'></stop>
            </linearGradient>
            <linearGradient
              id='paint5_linear_25:217'
              x1='356'
              y1='110'
              x2='356'
              y2='470'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='white' stop-opacity='0'></stop>
            </linearGradient>
            <linearGradient
              id='paint6_linear_25:217'
              x1='118.524'
              y1='29.2497'
              x2='166.965'
              y2='338.63'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#4A6CF7'></stop>
              <stop offset='1' stop-color='#4A6CF7' stop-opacity='0'></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
