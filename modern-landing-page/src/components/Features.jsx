import {Zap, ShieldCheck, Layers} from 'lucide-react';
function Features() {
    return(
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 ">
         {[
            { icon: <Zap />, title: 'Lighting Fast', desc: "Experience blazing fast performance with our optimized architecture, ensuring your apps run smoothly and efficiently."},
            { icon: <ShieldCheck />, title: 'Secure by Design', desc: "Built with security in mind, our platform provides robust protection against threats and vulnerabilities."},
            { icon: <Layers />, title: 'Modern', desc: "Designed with the latest technologies to ensure your apps are always up-to-date." }
         ].map((feature, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500 transition-colors group">
                <div className ="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
         ))}
        </section>
    );
}
export default Features;