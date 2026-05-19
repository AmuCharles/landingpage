import {ArrowRight} from 'lucide-react';
function Hero (){
    return(
    <header className ="max-w-4xl mx-auto text-center py-24 px-6">
        <span className ="text-blue-400 font-semibold text-sm tracking-widest uppercase">Version 2.0 is live</span>
        <h1 className="text-6xl font-extrabold md:text-7xl mt-4 mb-6 tracking-tight">Discover the future of  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">MODE3 App development</span></h1>
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">The utimate toolkit to build, deploy and scale your apps, Designed for Performance, Built for speed.</p>

        <button className="flex items-center gap-2 mx-auto bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Get Started <ArrowRight size={20} />
        </button>

    </header>
    );
}
export default Hero;