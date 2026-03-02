const ProjectCard = ({ title, description, image, github, live, tags }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
    <div className="overflow-hidden h-48 bg-slate-100">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        onError={(e) => { e.target.style.display='none'; }}
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map(tag => (
          <span key={tag} className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-1 rounded-full font-medium">{tag}</span>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={github} target="_blank" rel="noreferrer"
          className="flex-1 text-center py-2 px-4 border-2 border-slate-200 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 rounded-lg font-semibold text-sm transition-all duration-200">
          GitHub
        </a>
        <a href={live} target="_blank" rel="noreferrer"
          className="flex-1 text-center py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm transition-all duration-200">
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = ({ projects }) => {
  const items = projects || [];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-600 font-semibold tracking-widest uppercase text-sm mb-2">What I've Built</p>
          <h2 className="text-4xl font-extrabold text-slate-900">My Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
