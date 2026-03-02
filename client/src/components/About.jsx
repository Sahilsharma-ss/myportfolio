const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-2">Get To Know More</p>
          <h2 className="text-4xl font-extrabold text-slate-900">About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 rotate-6"></div>
              <img
                src="/assets/sahil_2.png"
                alt="Sahil Sharma"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100 hover:border-indigo-200 transition-colors">
                <img src="/assets/experience.png" alt="Experience" className="w-8 h-8 mx-auto mb-2 opacity-70" />
                <h3 className="font-bold text-slate-900 text-lg">Experience</h3>
                <p className="text-indigo-600 font-semibold">1+ Year</p>
                <p className="text-slate-500 text-sm">Frontend Development</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-5 text-center border border-slate-100 hover:border-indigo-200 transition-colors">
                <img src="/assets/education.png" alt="Education" className="w-8 h-8 mx-auto mb-2 opacity-70" />
                <h3 className="font-bold text-slate-900 text-lg">Education</h3>
                <p className="text-indigo-600 font-semibold">B.Tech CSE</p>
                <p className="text-slate-500 text-sm">Graphic Era University</p>
              </div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              I'm a passionate B.Tech CSE student at Graphic Era Deemed to be University, Dehradun. My interests span across
              <span className="text-indigo-600 font-medium"> cybersecurity, ethical hacking, and network security</span>,
              as well as modern software development and <span className="text-indigo-600 font-medium">AI/ML</span>.
              I enjoy building secure and intelligent systems that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
