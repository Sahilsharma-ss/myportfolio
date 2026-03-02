const levelColor = (level) => {
  switch (level) {
    case 'Experienced': return 'bg-green-100 text-green-700 border-green-200';
    case 'Intermediate': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Basic': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const SkillCard = ({ name, level }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200">
    <div className="flex items-center gap-3">
      <img src="/assets/checkmark.png" alt="" className="w-5 h-5 opacity-60" />
      <span className="font-semibold text-slate-800">{name}</span>
    </div>
    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColor(level)}`}>{level}</span>
  </div>
);

const Skills = ({ skills }) => {
  const languages = skills?.languages || [];
  const cybersecurity = skills?.cybersecurity || [];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-2">What I Know</p>
          <h2 className="text-4xl font-extrabold text-slate-900">My Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-1 bg-indigo-500 rounded-full inline-block"></span>
              Programming Languages
            </h3>
            <div className="space-y-3">
              {languages.map(skill => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-1 bg-purple-500 rounded-full inline-block"></span>
              Cybersecurity
            </h3>
            <div className="space-y-3">
              {cybersecurity.map(skill => <SkillCard key={skill.name} {...skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
