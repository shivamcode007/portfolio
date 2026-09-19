import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import salva from "../assets/salva.jpg";
import salva2 from "../assets/salva2.jpg";
import login from "../assets/y-sathee-login.png";
import profile from "../assets/y-sathee-profile.png";

const projects = [
  {
    title: "Salva",
    description:
      "A modern ecommerce website built with React and Tailwind CSS featuring authentication, cart management, wishlist, search functionality and a fully responsive design.",
    image:
      salva,
    image2:
      salva2,  
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/shivamcode007",
    live: "https://yuvrajcode1.github.io/ecommerce/",
    features: [
      "Login & Signup",
      "Add To Cart",
      "Wishlist",
      "Product Search",
      "Responsive Design",
    ],
  },
];


const project2 = [
  {
    title: "Y-sathee (Work in Under Process)",
    description:
      "A modern Task Menegment website built with React Node Express and MongoDB  featuring authentication, Task Add,Delete, and a fully responsive design.",
    image:
      login,
    image2:
      profile,  
    tech: ["React","Node.js","Express.js","MongoDB","Tailwind CSS"],
    github: "https://github.com/Yuvrajcode1",
    live: "https://y-sathee.vercel.app/",
    features: [
      "Login & Signup",
      "Forgot-Password & Logout",
      "Edit Profile features",
      "Intractive Dashboard",
      "Responsive Design",
    ],
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Here are some projects I've built using modern web technologies.
          </p>
        </div>

        {/* Featured Project */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-1/2 object-contain transition duration-700 group-hover:scale-105"
                />
                <img
                  src={project.image2}
                  alt={project.title}
                  className="w-full h-1/2 object-contain transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-400 transition"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Featured Project */}
        {project2.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-1/2 object-contain transition duration-700 group-hover:scale-105"
                />
                <img
                  src={project.image2}
                  alt={project.title}
                  className="w-full h-1/2 object-contain transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:border-cyan-400 transition"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}