
"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import me from '../images/me.jpg'
import html from '../images/html.png'
import react from '../images/react.png'
import css from '../images/css.png'
import firebase from '../images/firebase.svg'
import tailwind from '../images/tailwind-logo.png'
import next from '../images/next.webp'
import javascript from '../images/js.webp'
import bootstrap from '../images/bootstrap.png'
import sass from '../images/sass.svg'
import git from '../images/git.png'
import node from '../images/icon-node.png'
import express from '../images/express.webp'
import projectBox from "@/helper/projectBox";
import Navbar from "@/components/Navbar";
import emailjs from '@emailjs/browser';



export default function Home() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSendStatus({ success: true, message: "Message sent successfully! I'll get back to you soon." });
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      setSendStatus({
        success: false,
        message: "Failed to send message. Please try again later or contact me directly at dassidieudonne@gmail.com"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-[6rem]">
      {/* Navigation Section */}
      <Navbar />
      <div className="container mx-auto px-4 py-12 md:px-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hello, I am  Dassi Dieudonne
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Front-End Developer
            </h2>
            <p className="text-slate-300 max-w-lg">
              <span className="font-medium text-white">Specializing in</span>{" "}
              <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-blue-400">React</span>{" "}
              <span className="text-green-400">Firebase</span>{" "}
              <span className="text-purple-400">Tailwind CSS</span>
            </p>
            <p className="text-slate-300 max-w-lg">
              <span className="font-medium text-white">Practical developer</span> who turns ideas into{" "}
              <span className="text-cyan-400 font-semibold">working solutions</span>. I create{" "}
              <span className="text-blue-400 font-semibold">reliable applications</span> with{" "}
              <span className="text-green-400">clean code</span> and{" "}
              <span className="text-purple-400">simple user interfaces</span>.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
              <Image
                src={me}
                alt="Dassi Dieudonne"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20 pt-20">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b border-slate-700">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                I am <span className="text-cyan-400 font-medium">Dassi Dieudonne</span>, a passionate <span className="text-blue-400">Front-End Developer</span> specializing in <span className="text-purple-400">React</span>, <span className="text-amber-400">Next.js</span>, and <span className="text-green-400">TypeScript</span>. I build performant web applications with <span className="text-red-400">Firebase</span> backends and <span className="text-cyan-400">Tailwind CSS</span>, delivering seamless user experiences that solve real business problems.
              </p>

              <p className="text-slate-300 leading-relaxed">
                As a lifelong learner, I constantly enhance my skills to stay at technologys cutting edge. Currently expanding my expertise into backend development with <span className="text-emerald-400">Node.js</span> and <span className="text-gray-400">Express.js</span>, while maintaining a strong focus on creating <span className="italic">type-safe, scalable frontend architectures</span>.
              </p>
            </div>

            {/* Skills Section */}
            <div id="skills">
              <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { icon: html, name: "HTML" },
                  { icon: css, name: "CSS" },
                  { icon: javascript, name: "JavaScript" },
                  { icon: react, name: "React" },
                  { icon: next, name: "Next.js" },
                  { icon: tailwind, name: "Tailwind" },
                  { icon: sass, name: "SASS" },
                  { icon: bootstrap, name: "Bootstrap" },
                  { icon: node, name: "Node.js" },
                  { icon: express, name: "Express.js" },
                  { icon: firebase, name: "Firebase" },
                  { icon: git, name: "Git" }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/50 hover:bg-slate-800 p-4 rounded-lg flex flex-col items-center transition-all duration-200 hover:scale-105"
                  >
                    <div className="w-12 h-12 relative mb-2">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20 pt-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-slate-700">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectBox.map((project) => (
              <Link key={project.id} href={`/${project.id}`} className="group relative block overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-full h-60 object-cover">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(' ').map((tech, i) => (
                          tech && (
                            <span
                              key={i}
                              className="text-xs bg-black/70 text-white px-3 py-1 rounded-full border border-white/20 hover:bg-amber-500 hover:border-amber-500 transition-colors"
                            >
                              {tech}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl pb-2 border-b border-slate-700 md:text-4xl font-bold mb-6">CONTACT ME</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                Feel free to reach out and discover how I can bring value to your team! With a passion for front-end
                development and a keen eye for design, I am committed to delivering solutions that not only meet but exceed
                expectations.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Let us connect and explore how my skills and experience align with your company goals. Drop me a message
                below, and let us take the first step towards building something great together!
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">SOCIAL MEDIA:</h4>
                <div className="flex space-x-6">
                  <Link
                    href="https://www.linkedin.com/in/dassi-dieudonne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                    </svg>
                  </Link>

                  <Link
                    href="https://github.com/dascomsoft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clipRule="evenodd" />
                    </svg>
                  </Link>

                  <Link
                    href="https://wa.me/237673916778?text=Hello%20Dassi,%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">CONTACT FORM</h3>
              {sendStatus && (
                <div className={`mb-4 p-3 rounded-md ${sendStatus.success ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
                  {sendStatus.message}
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    minLength="3"
                    maxLength="50"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    cols="10"
                    rows="5"
                    placeholder="Message"
                    required
                    minLength="10"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`px-6 py-2 ${isSending ? 'bg-amber-600 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600'} text-white font-medium rounded-md transition-colors duration-300`}
                >
                  {isSending ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </section>
    </div>
    </div>
  )
    

            }















