import CarouselCourse from './CarouselCourse';
import Banner from './Banner';

const Section_1 = () => {
  return (
    <section className="lg:h-150 px-4 bg-gradient-to-b from-blue-950 via-blue-800 to-blue-950">
      <div className="pt-6 pb-8">
        {/* <h2 className="text-2xl font-semibold mb-4">Our Courses</h2> */}

        <CarouselCourse />
      </div>

      <div className="flex justify-center">
        <div className="w-98/100 rounded-lg mb-4 bg-cover lg:bg-[url('/best-learning-platform-back-desk-crop.webp')] bg-[url('/best-learning-platform-back-mob.webp')] shadow-md">
          <div className="lg:ml-15 flex max-lg:justify-center">
            <Banner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
