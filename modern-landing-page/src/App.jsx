import {useState} from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AuthPage from "./components/AuthPage";

 function App(){
 const [authMode,  setAuthMode] = useState("landing");
  return(
   <div className="min-h-screen bg-slate-900 text-white font-sans">
    <Navbar setAuthMode ={setAuthMode} currentMode={authMode}/>

    {authMode === "landing"? (
      <main className="flex-grow">
        <Hero setAuthMode = {setAuthMode} />
        <Features />
        <Testimonials />
      </main>
    ) : ( 
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <AuthPage mode={authMode} setAuthMode={setAuthMode} />
      </main>
    )}

    <Footer />


   </div>
  );
}
export default App;