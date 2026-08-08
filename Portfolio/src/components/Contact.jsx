import { FaEnvelope, FaPhone, FaMapMarker, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In <span className="text-sky-500">Touch</span>
        </h2>
        <p className="text-slate-300 mb-12 max-w-xl mx-auto">
          Have a project, job opportunity, or collaboration in mind? Feel free to get in touch. I’m always open to discussing web development opportunities and interesting projects.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-left">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-sky-400 text-2xl" />
            <div>
              <p className="text-sm text-slate-400">Email</p>
              <a href="mailto:you@example.com" className="hover:text-sky-400 transition">
                shikhardewangan0@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-sky-400 text-2xl" />
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <a href="tel:+919999999999" className="hover:text-sky-400 transition">
                +91 6266636316
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarker className="text-sky-400 text-2xl" />
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p>Bhilai,Chhattisgarh, India</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-3xl mt-10 text-slate-400">
          <a href="https://github.com/Shikhar-Dewangan" className="hover:text-sky-400 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shikhar-dewangan-519405332" className="hover:text-sky-400 transition"><FaLinkedin /></a>
          <a href="https://www.instagram.com/shikhar_.dewangan_/" className="hover:text-sky-400 transition"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;