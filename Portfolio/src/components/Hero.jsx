import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* Photo - yahan apni photo daal */}
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-sky-500 shadow-xl shadow-sky-500/30">
          <img
            src="/Shikhar-Dewangan.png" // <-- YAHAN APNI PHOTO DAAL
            alt="Your Name"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-sky-400">Shikhar</span> Dewangan
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-slate-300 mt-2">
            Full Stack Developer | MERN Stack
          </p>
          <p className="text-base md:text-lg text-slate-400 mt-4 max-w-xl mx-auto md:mx-0">
            I build scalable and production-ready web applications using React.js, Node.js, Express.js, and MongoDB, with a strong focus on clean architecture and real-world functionality.
          </p>


          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/Shikhar_Dewangan_Resume.pdf" // <-- YAHAN APNI RESUME DAAL
              download
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="border border-slate-600 hover:border-sky-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Hire Me
            </a>
          </div>


          <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl text-slate-400">
            <a href="https://github.com/Shikhar-Dewangan" className="hover:text-sky-400 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shikhar-dewangan-519405332" className="hover:text-sky-400 transition"><FaLinkedin /></a>
            <a href="https://www.instagram.com/shikhar_.dewangan_/" className="hover:text-sky-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;