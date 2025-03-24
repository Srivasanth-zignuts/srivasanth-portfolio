import About from '@/components/About';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Portfolio />
			<Skills />
			<ContactUs />
			<Footer />
		</>
	);
}
