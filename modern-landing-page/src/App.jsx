import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

 function App(){
  return(
   <div className="min-h-screen bg-slate-900 text-white font-sans">
    <Navbar />

    <Hero />

    <Features />

    <Testimonials />

    <Footer />


   </div>
  );
}
export default App;