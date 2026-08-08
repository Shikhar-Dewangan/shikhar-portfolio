const Experience = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-sky-500">Experience</span>
        </h2>
        <div className="border-l-4 border-sky-500 pl-6 space-y-12">
          <div>
            <h3 className="text-2xl font-bold">Full Stack MERN Developer</h3>
            <p className="text-sky-400 text-sm">Independent Developer | 2026 – Present</p>
            <p className="text-slate-300 mt-2">
              Building and deploying full-stack web applications using React.js, Node.js, Express.js, MongoDB, and related technologies.

              Developed Stream-Hub, a full-stack video-sharing platform with JWT authentication, video uploads, comments, likes, subscriptions, watch history, and Cloudinary media management.

              Built responsive React applications using Tailwind CSS and integrated Appwrite for authentication and backend services in additional projects.

              Focused on developing REST APIs, database integration, authentication, file handling, and production-ready web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;