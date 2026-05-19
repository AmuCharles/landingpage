function Testimonials (){
    const reviews = [
        {
            quote: "This Company is amazing! They Provide excellent service and support. I highly recommend them to anyone looking for top-notch solutions.",
            name: "Amufasaiye Charles",
            role: "CEO, Tech Innovators Inc."
        }
    ];
    return(
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-900">
            <div className="text-center  mb-16">
                <span className= "text-blue-500 font-semibold text-sm tracking-widest uppercase">Testimonials</span>
                <h2 className="text-4xl font-extrabold mt-2 tracking-tight">What Our Customers Say</h2>
            </div>

            <div className="max-w-xl mx-auto">
                {reviews.map((review, index)=>(
                    <div key={index} className="bg-slate-900/50 backdrop-blr-sm border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition flex flex-col justify-between shadow-xl">
                        <p className="text-slate-300 italic mb-8 leading-relaxed text-lg">"{review.quote}"</p>
                        

                        <div className="flex items-center gap-4 mt-6">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 items-center justify-center font-bold text-sm text-white shadow-md">
                              {review.initials}
                              </div>
                              <div>
                                <h4 className="font-semibold text-white text-base">{review.name}</h4>
                                <p className="text-slate-500 text-xs mt-0.5">{review.role}</p>
                              </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Testimonials;