const Footer = () => {
  const year = new Date().getFullYear();
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-indigo-400 font-bold text-lg">Sahil Sharma</span>
          <nav className="flex gap-6">
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm hover:text-indigo-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
          <p className="text-sm">© {year} Sahil Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
