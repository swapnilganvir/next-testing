import CarouselReview from './CarouselReview';

const ICIA_logo = '/uncram-test-series-ICAI-logo.webp';

const Section_4 = () => {
  return (
    <section className="flex flex-col items-center mt-10 mb-10">
      <div className="w-8/12 max-sm:w-11/12 flex flex-col items-center mb-10">
        <h2 className="text-center text-4xl font-bold mb-5">
          UNCRAM Test Series Results and Reviews
        </h2>
        <div className="w-10 border-b-5 rounded"></div>
      </div>

      <CarouselReview />

      <div className="w-8/12 max-sm:w-11/12 border-1 border-stone-300 rounded-lg overflow-hidden mb-10">
        <h2 className="text-2xl font-semibold p-4 bg-[#dff7ff]">
          Why Test Papers are important for better learning?
        </h2>
        <div className="p-4 text-darkBlue text-lg">
          <p>See, you have to exams after preparation, Right?</p>
          <p>
            So, the test paper is a way to check the level of your preparation
            and to feel the pressure of that exam hall. After the test
            evaluaton, you can work on your weakness as well on the basis of
            feedback. One of the cool points is that the test papers are
            designed by experts; so, there are very fair chances that you will
            get almost the same or similar questions in the final exam and it
            will increase the chances of better performance.
          </p>
          <p>
            Further test series is a way of writing practice to increase speed
            and improve presentation.
          </p>
          <p>It will increase retention and recall rate of concepts s well</p>
          <strong>Let me explain by an example</strong>
          <strong>Do you rememeber Yes or No?</strong>
          <p>
            Further test series is a way of writing practice to increase speed
            and improve presentation.
          </p>
          <p>
            Further test series is a way of writing practice to increase speed
            and improve presentation.
          </p>
        </div>
      </div>

      <div className="w-8/12 max-sm:w-11/12  border-1 border-stone-300 rounded mb-10 flex max-sm:flex-col flex-wrap justify-center items-center gap-3 p-7 max-sm:px-3 max-sm:py-5 ">
        <p className="text-center text-2xl text-red-500 min-w-40 mr-5">
          Click here to Join
        </p>
        <div className="flex items-center gap-1 shrink-0 bg-[#d4e6c1] max-sm:w-full px-5 py-2 rounded-xs hover:shadow-md">
          <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
          <p className="text-sm font-medium">CA Foundation Test Series</p>
        </div>

        <div className="flex items-center gap-1 shrink-0 bg-[#d4e6c1] max-sm:w-full px-5 py-2 rounded-xs hover:shadow-md">
          <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
          <p className="text-sm font-medium">CA Inter Test Series</p>
        </div>

        <div className="flex items-center gap-1 shrink-0 bg-[#d4e6c1] max-sm:w-full px-5 py-2 rounded-xs hover:shadow-md">
          <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
          <p className="text-sm font-medium">CA Final Test Series</p>
        </div>
      </div>

      <div className="w-8/12 max-sm:w-11/12 border-1 border-stone-300 rounded-lg overflow-hidden mb-10">
        <h2 className="text-2xl font-semibold p-4 bg-[#dff7ff]">
          Reasons of Success of UNCRAM Test Series
        </h2>
        <div className="p-4 text-darkBlue text-lg">
          <p>See, you have to exams after preparation, Right?</p>
          <p>
            So, the test paper is a way to check the level of your preparation
            and to feel the pressure of that exam hall. After the test
            evaluaton, you can work on your weakness as well on the basis of
            feedback. One of the cool points is that the test papers are
            designed by experts; so, there are very fair chances that you will
            get almost the same or similar questions in the final exam and it
            will increase the chances of better performance.
          </p>
          <p>
            Further test series is a way of writing practice to increase speed
            and improve presentation.
          </p>
          <p>It will increase retention and recall rate of concepts s well</p>
          <strong>Let me explain by an example</strong>
          <strong>Do you rememeber Yes or No?</strong>
          <p>
            Further test series is a way of writing practice to increase speed
            and improve presentation.
          </p>
          <p>
            Further test series is a way of writing practice to increase speed
            and improve presentation.
          </p>
        </div>
      </div>

      <div className="w-8/12 max-sm:w-11/12  border-1 border-stone-300 rounded flex max-sm:flex-col flex-wrap justify-center items-center gap-3 p-7 max-sm:px-3 max-sm:py-5 ">
        <p className="text-center text-2xl text-red-500 min-w-40 mr-5">
          Click here to Join
        </p>
        <div className="flex items-center gap-1 shrink-0 bg-[#d4e6c1] max-sm:w-full px-5 py-2 rounded-xs hover:shadow-md">
          <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
          <p className="text-sm font-medium">CA Foundation Test Series</p>
        </div>

        <div className="flex items-center gap-1 shrink-0 bg-[#d4e6c1] max-sm:w-full px-5 py-2 rounded-xs hover:shadow-md">
          <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
          <p className="text-sm font-medium">CA Inter Test Series</p>
        </div>

        <div className="flex items-center gap-1 shrink-0 bg-[#d4e6c1] max-sm:w-full px-5 py-2 rounded-xs hover:shadow-md">
          <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
          <p className="text-sm font-medium">CA Final Test Series</p>
        </div>
      </div>
    </section>
  );
};

export default Section_4;
