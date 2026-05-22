import {useState} from "react"
import {Mail, Lock, User, ArrowRight} from "lucide-react"

 function AuthPage({mode, setAuthMode}){
        const isSignIn  = mode === "signin";
        const [formData, setFormData] = useState ({name:"", email:"", password:""});

        const handleChange = (e) => {
            e.preventDefault();
            alert(`Form submitted for ${isSignIn ? "Sign In" : "Sign Up"} with Email: ${formData.email}`);
        };

        return(
            <div className =" w-full max-w-md bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-center">

           { /* Header */}
            <div className="text-sm text-slate-400">
                <h2 className ="text-3xl font-extrabold tracking-tight mb-2">
                    {isSignIn ? "Welcome Back" : "Create Account"}
                    </h2>
                <p className="text-sm text-slate-400">
                    {isSignIn ? "Enter your credentials to access your Mode3" : "Get started with your free account"}
                </p>
            </div>

            {/* Form */}

            <form onSubmit={handleChange} className="space-y-5">
                {/* full name input on signup */}
                {!isSignIn &&(
                    <div className = " space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase"> Full Name</label>
                        <div className="relative flex items-center">
                            <User className="absolute left-3 text-slate-500" size={18} />
                            <input
                            type="text" required
                            placeholder= "John Doe"
                            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm py-3.5 pl-12 pr-4 rounded-xl outline-none text-slate-100 transition-colors placeholder:text-slate-600"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        </div>
                    </div>
                )}

                {/* email input */}


                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Email Address</label>
                    <div className="relative flex items-center">
                        <Mail className ="absolute left-4 text-slate-500" size={18}/>
                        <input 
                        type="email" required
                        placeholder="you@example.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm py-3.5 pl-12 pr-4 rounded-xl outline-none text-slate-100 transition-colors placeholder:text-slate-600"
                        
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                </div>


                    {/* password input */}

                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label className ="text-xs font-semibold text-slate-400 tracking-wider uppercase">Password</label>
                            {isSignIn && (
                                <a href="#" className="text-xstext-blue-500 hover:underline"> Forgot password?</a>
                            )}
                        </div>
                        <div className="relative flex items-center">
                            <lock className="absolute left-4 text-slate-500" size={18} />
                            <input
                             type="password" required
                             placeholder ="**********"
                             className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm py-3.5 pl-12 pr-4 rounded-xl outline-none text-slate-100 transition-colors placeholder:text-slate-600"
                             value={formData.password}
                             onChange={(e) => setFormData({...formData, password: e.target.value})}
                            />
                        </div>
                    </div>

                    {/* action button*/}

                    <button type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-smtransition-all shadow-blue-600/15 group mt-2" >
                        {isSignIn ? "Sign In" : "Register"}
                        <ArrowRight size={16} className="group-hover:translate-x-l transition-transform"  />
                    </button>
                    </form>

                    {/* switch form type wrapper */}

                    <div className ="text-center mt-6 pt-6 border-slate-800/60 text-sm text-slate-400">
                    {isSignIn ? "Don't have an account?": "Already have an account"}{" "}
                    <button
                    onClick={() => setAuthMode(isSignIn ? "signup": "signin")}
                    className ="text-blue-500 font-semibold hover:underline" > 
                    {isSignIn ? "Sign Up Here":"Sign In Here"}
                    </button>
                </div>

            </div>
                 );  
               }

 export default AuthPage;