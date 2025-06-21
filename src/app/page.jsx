import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import Section_1 from './_components/Section_1';
import Section_2 from './_components/Section_2';
import Section_3 from './_components/Section_3';
import Section_4 from './_components/Section_4';
import Section_5 from './_components/Section_5';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
      </main>

      <Footer />
    </div>
  );
}
