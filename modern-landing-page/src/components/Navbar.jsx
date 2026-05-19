function Navbar(){
    return(
      <nav className = "flex justify-between items-center px-12 py-6 border-b border-slate-800 ">

        <h1 className= "text-2xl font-bold tracking-tighter">  MODE <span className="text-blue-500">3</span>
        </h1>
        <div className ="flex gap-8 text-sm text-slate-300">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </div>

        <button className="bg-blue-600  text-white font-medium py-2 px-5  hover:bg-blue-700 rounded-full transition">
          Let's Get Started!
        </button>
      </nav>
    );
}

export default Navbar;