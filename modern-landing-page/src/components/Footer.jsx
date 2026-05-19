function Footer(){
    return(
        <footer className ="w-full bg-slate-950 border-t border-slate-900 text-white mt-24">
           <div className ="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-start gap-12">

            <div className="md:max-w-xs">
              <h2 className ="text-2xl font-bold tracking-tighter text-white mb-4">
                 Mode<span className ="text-blue-500">3</span>
                 <p className ="text-slate-400 text-sm leading-relaxed mt-2">
                    Building the future of app development, one line of code at a time
                 </p>
              </h2>
              </div>
              
           
           
           <div className="flex flex-row gap-16 md:gap-24">
            <div> 
            <h4 className ="text-slate-200 font-semibold text-sm mb-4 tracking-wide uppercase ">Company</h4>
            <ul className ="space-y-3 text-sm text-slate-400">
             <li><a href="#" className =" hover:text-blue-400 transition">About</a></li>
             <li><a href="#" className =" hover:text-blue-400 transition">Blog</a></li>
             <li><a href="#" className =" hover:text-blue-400 transition">Careers</a></li>
            </ul>
           </div>

           <div>
            <h4 className ="text-slate-200 font-semibold text-sm mb-4 tracking-wide uppercase ">Support</h4>
            <ul className ="space-y-3 text-sm text-slate-400">
             <li><a href="#" className =" hover:text-blue-400 transition">Documentation</a></li>
             <li><a href="#" className =" hover:text-blue-400 transition">Guides</a></li>
             <li><a href="#" className =" hover:text-blue-400 transition">API Reference</a></li>
            </ul>
           </div>
           </div>
           </div>

           <div className="max-w-6xl mx-auto px-6 py-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy;{new Date().getFullYear()} Mode<span className ="text-blue-500">3</span>. All rights reserved.</p>
            <div className = "flex gap-6">
                <a href="#" className ="hover:text-slate-400 transition">Privacy Policy</a>
                <a href="#" className ="hover:text-slate-400 transition">Terms of Service</a>
            </div>
           </div>

        </footer>
    );

}
export default Footer;