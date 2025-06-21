import Navbar from '@/app/_components/Navbar';
import Footer from '@/app/_components/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
