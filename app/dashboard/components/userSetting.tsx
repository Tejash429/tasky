'use client';

export default function UserSetting() {
  return (
    <main className='py-1 bg-[#191A23] h-screen'>
      <div className='w-full lg:w-8/12 px-4 mx-auto mt-6'>
        <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
          <div className='rounded-t bg-[#181920] mb-0 px-6 py-6'>
            <div className='text-center flex justify-between'>
              <h6 className='text-blueGray-700 text-xl font-bold'>
                My account
              </h6>
              <button
                className='bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                type='button'
              >
                Save
              </button>
            </div>
          </div>
          <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
            <form action=''>
              <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
                User Information
              </h6>
              <div className='flex flex-wrap'>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Username
                    </label>
                    <input
                      type='text'
                      placeholder='Username'
                      className='border-b-white border-b-2 px-3 py-3 text-white bg-transparent rounded text-sm shadow focus:ring w-full ease-linear transition-all duration-150'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Email address
                    </label>
                    <input
                      type='email'
                      placeholder='Email address'
                      className='border-b-white border-b-2 px-3 py-3 text-white bg-transparent rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      placeholder='First Name'
                      className='border-b-white border-b-2 px-3 py-3  text-white bg-transparent rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      placeholder='Last Name'
                      className='border-b-white border-b-2 px-3 py-3  text-white bg-transparent rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
