function Navbar({setAuthMode, currentMode}){
    return(
     <nav className = "w-full flex justify-between items-center px-6 md:px-12 py-6 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">

        <h1 
        onClick ={() => setAuthMode("landing")}
        className= "text-2xl font-bold tracking-tighter cursor-pointer select-none"
        >  MODE <span className="text-blue-500">3</span>
        </h1>

        <div className =" flex items-center gap-6 text-sm text-slate-300">
          {currentMode === "landing" && (
            <>
            <a href="#features" className="text-slate-400 hover:text-white transition hidden sm:inline">Features</a>
            <button onClick ={() => setAuthMode("signin")} className="text-slate-400 hover:text-white transition">
              Sign In
            </button>
            </>
          )}

        { currentMode !== "landing" ? (
          <button onClick={() => setAuthMode ("landing")}
          className ="text-slate-400 hover:text-white transition">
            Back to Home
          </button>
        ) : ( 
          <button onClick={() => setAuthMode ("signup")}
          className ="text-slate-400 hover:text-white transition">
            Get Started
          </button>
        )}
        </div>
        </nav>
    );
}

export default Navbar;