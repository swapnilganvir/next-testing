import ScrollAnimationImage from './ScrollAnimationImage';

const ICIA_logo = '/uncram-test-series-ICAI-logo.webp';

const Section_2 = () => {
  return (
    <section className="lg:pt-30 pt-15 pb-10 bg-[#fafafa]">
      <div className="flex flex-col items-center px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Online Test Series - Start Tyaari Exam Ki
        </h2>

        <div className="lg:flex justify-center gap-10 mb-10">
          <div className="bg-[#eee] text-center px-15 py-5 w-75">
            <div className="flex justify-center">
              <ScrollAnimationImage
                image="/ca-test-series.png"
                size="size-15"
              />
            </div>
            <p className="text-lg mb-1">Test Checking Within</p>
            <p className="text-4xl font-semibold mb-2">36 HOURS</p>
            <p className="text-2xl">
              Otherwise{' '}
              <span className="text-lime-500 font-semibold">FREE</span>
            </p>
          </div>

          <div className="bg-[#eee] text-center px-15 py-5 w-75">
            <div className="flex justify-center">
              <ScrollAnimationImage image="/CLOCK.png" size="size-15" />
            </div>
            <p className="text-lg mb-1">Service</p>
            <p className="text-4xl font-semibold mb-2">24 X 7</p>
            <p className="text-xl">For 365 DAYS</p>
          </div>

          <div className="bg-[#eee] text-center px-15 py-5 w-75">
            <div className="flex justify-center">
              <ScrollAnimationImage
                image="/ca-test-series.png"
                size="size-15"
              />
            </div>
            <p className="text-lg mb-1">Subject Revision</p>
            <p className="text-4xl font-semibold mb-2">3 Times</p>
            <p className="text-2xl">Guranteed</p>
          </div>
        </div>

        <div className="lg:max-w-54/100 w-8/10 flex max-sm:flex-wrap justify-center items-center gap-5 p-5 border-1 border-stone-100 rounded-lg bg-white">
          <p className="text-center text-2xl text-red-500 font-semibold min-w-27 w-33 md:ml-3 mr-1">
            Click here to Join
          </p>
          <div className="lg:max-w-9/10 flex justify-between gap-5 px-24 py-5 border-1 border-stone-100 rounded overflow-x-auto">
            <div className="flex items-center gap-1 shrink-0 bg-lime-200 px-3 py-2 rounded">
              <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
              <p className="text-sm font-medium">CA Foundation Test Series</p>
            </div>

            <div className="flex items-center gap-1 shrink-0 bg-lime-200 px-3 py-2 rounded">
              <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
              <p className="text-sm font-medium">CA Inter Test Series</p>
            </div>

            <div className="flex items-center gap-1 shrink-0 bg-lime-200 px-3 py-2 rounded">
              <img src={ICIA_logo} alt="ICIA logo" className="size-7" />
              <p className="text-sm font-medium">CA Final Test Series</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
