const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-3">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Sahil <span className="text-indigo-400">Sharma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-slate-300 mb-6">
              Software Developer &amp; Cybersecurity Enthusiast
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
              B.Tech CSE student passionate about network security, ethical hacking, and AI/ML.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a
                href="/assets/sahil_sharma_Resume.pdf"
                download
                className="px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-5 justify-center md:justify-start">
              <a href="https://github.com/sahilsharma-ss/" target="_blank" rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200">
                <img src="/assets/github.png" alt="GitHub" className="w-7 h-7 invert opacity-70 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://linkedin.com/in/sahilsharma-ss/" target="_blank" rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200">
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-7 h-7 opacity-70 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl opacity-30 scale-110"></div>
              <img
                src="/assets/sahil.png"
                alt="Sahil Sharma"
                className="relative w-full h-full object-cover rounded-full border-4 border-indigo-500/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
