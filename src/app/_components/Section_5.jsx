'use client';
import { useForm } from 'react-hook-form';

const Section_5 = () => {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;

  function onSubmit() {
    // console.log(getValues());
    // reset();
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <section className="w-7/10 max-lg:w-11/12 mx-auto max-sm:px-2 px-6 mt-20 mb-10">
      <div className="flex max-md:flex-col items-center gap-20">
        <img
          src="/uncram-contact-us-1.webp"
          alt="contact us"
          className="size-70 max-sm:hidden"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-2">Contact or Visit Us</h2>
          <p className="text-3xl text-stone-300 mb-5">
            Feel free to Call uncram.
          </p>
          <div>
            <p>📞 62392-93497</p>
            <p>📞 62392-93497</p>
            <p>📞 62392-93497</p>

            <p>📍 uncram, green city road, Bathinda, Punjab-151001</p>
            <div>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="flex mt-5">
                  <input
                    type="text"
                    id="mobile"
                    onInput={e => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                    placeholder="Your Mobile Number"
                    {...register('mobile', {
                      required: 'Required',
                      validate: val =>
                        val.length === 10 ||
                        'Please enter 10 digit mobile number',
                    })}
                    className="border-1 border-stone-400 rounded-s px-2 py-1 outline-none"
                  />

                  <button
                    className={`bg-[#05bcfe] text-sm px-4 py-2 rounded-e hover:bg-sky-500/90 ${
                      errors?.mobile?.message === undefined
                        ? 'cursor-pointer'
                        : 'cursor-not-allowed'
                    }`}
                  >
                    📞 Request Callback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_5;
