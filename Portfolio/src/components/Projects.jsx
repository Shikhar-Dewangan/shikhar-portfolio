import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Stream Hub",
      desc: "Full-stack video sharing platform with secure authentication, video uploads, comments, likes, subscriptions, and watch history. Built with a scalable MERN architecture and Cloudinary for media management.",
      image : "/Stream-hub.png",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "Cloudinary", "Multer"],
      live: "https://stream-hub-dojw.vercel.app/",
      github: "https://github.com/Shikhar-Dewangan/Stream-Hub.git",
    },
    {
      title: "Task Zen",
      desc: "Responsive task management application built with React and Appwrite. Users can create, manage, update, and organize their tasks through a clean and simple interface.",
      image : "/Task-Zen.png",
      tech: ["React.js", "JavaScript", "Appwrite", "Tailwind CSS"],
      live: "https://taskzen-app-seven.vercel.app/",
      github: "https://github.com/Shikhar-Dewangan/Taskzen-App.git",
    },
    {
      title: "Blog-App",
      desc: "Full-stack blogging application with React and Appwrite. Includes user authentication, blog creation and management, and rich-text editing for creating formatted content.",
      image : "/Blog-App.png",
      tech: ["React.js", "JavaScript", "Appwrite", "Tailwind CSS", "TinyMCE",],
      live: "https://react-appwrite-blog-rouge.vercel.app/",
      github: "https://github.com/Shikhar-Dewangan/React-Appwrite-Blog.git",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          My <span className="text-sky-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-slate-200"
            >
              <div className="h-48 bg-slate-300 flex items-center justify-center text-slate-500">
                  <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="text-slate-600 mt-2 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-200 text-slate-800 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={project.live} className="flex items-center gap-1 text-sky-500 hover:underline">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a href={project.github} className="flex items-center gap-1 text-slate-700 hover:underline">
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;