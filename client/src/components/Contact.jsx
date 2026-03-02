const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
        <h2 className="text-4xl font-extrabold mb-4">Contact Me</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:sahilsharma-ss@outlook.com"
            className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-indigo-400 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <img src="/assets/email.png" alt="Email" className="w-6 h-6 invert" />
            <span className="font-semibold">sahilsharma-ss@outlook.com</span>
          </a>
          <a
            href="https://linkedin.com/in/sahilsharma-ss/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-indigo-400 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            <span className="font-semibold">LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
