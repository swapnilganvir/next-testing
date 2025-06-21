import ScrollAnimationImage from './ScrollAnimationImage';

const heart_img = './study-dil-se.png';

const Section_3 = () => {
  return (
    <section className="flex flex-col items-center px-6 mt-10">
      <div className="lg:w-6/10 w-8/10 text-center max-sm:p-5 p-10 bg-lime-50 rounded mb-20">
        <p className="text-2xl font-medium">
          Not Claiming Anything!{' '}
          <span className="text-darkBlue">We are only Committing</span>
          <br />
          <span className="text-3xl font-medium">
            <span className="text-lightBlue">#</span>ServiceDilSe
            <span>
              <img
                src={heart_img}
                alt="red heart"
                className="size-6 inline-block"
              />
            </span>
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center mb-15">
        <h2 className="text-4xl text-center font-bold mb-5">
          Process to Attempt Subjective Test Series
        </h2>
        <div className="w-15 border-b-5 rounded"></div>
      </div>

      <div className="w-75/100 flex max-md:flex-col justify-between max-md:items-center space-y-5 mb-15">
        <div className="flex flex-col items-center w-70">
          <ScrollAnimationImage image="/uncram-test-series-process-step-1.webp" />
          <p className="text-center text-sky-800 font-medium mt-2">
            Buy then Download or View Test Paper
          </p>
        </div>
        <div className="flex flex-col items-center w-70">
          <ScrollAnimationImage image="/uncram-test-series-process-step-2.webp" />
          <p className="text-center text-sky-800 font-medium mt-2">
            Write answer on your notebook
          </p>
        </div>
        <div className="flex flex-col items-center w-70">
          <ScrollAnimationImage image="/uncram-test-series-process-step-3.webp" />
          <p className="text-center text-sky-800 font-medium mt-2">
            Click and Upload images or PDF
          </p>
        </div>
        <div className="flex flex-col items-center w-70">
          <ScrollAnimationImage image="/uncram-test-series-process-step-4.webp" />
          <p className="text-center text-sky-800 font-medium mt-2">
            Get checked sheets with recommendation within 36 hours
          </p>
        </div>
      </div>

      <div className="lg:w-6/10 w-8/10 text-center p-10 bg-[#e7edff] rounded mb-5">
        <p className="text-2xl font-medium">
          1 Free Surprise Test Per Subject
          <br />
          <span className="text-2xl font-medium text-darkBlue">
            <span className="text-3xl relative top-0.5">#</span>
            uncramKaSacha<span className="sm:hidden block"></span>Saath
            <span>
              <img
                src={heart_img}
                alt="red heart"
                className="size-7 inline-block relative -top-1"
              />
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Section_3;
