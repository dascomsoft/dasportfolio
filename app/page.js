"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import projectBox from "@/helper/projectBox";
import emailjs from "@emailjs/browser";

import me from "../images/me.jpg";

export default function Home() {
  const formRef = useRef(null);
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

      setSendStatus({ success: true, message: "Message sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      setSendStatus({ success: false, message: "Error sending message." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-[6rem]">
      <Navbar />

      <div className="container mx-auto px-4 py-12">

        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-16 mb-28">

          <div className="md:w-1/2 space-y-6">

            <p className="text-cyan-400 tracking-widest uppercase text-sm">
              Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              I build modern <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                web experiences
              </span>
              <br />
              that scale.
            </h1>

            <p className="text-slate-400 max-w-md text-lg">
              Specialized in Next.js, React and Node.js.
              I design and develop fast, clean and scalable applications for real-world use.
            </p>

            <p className="text-amber-400">
              Currently building Boch237 — an education platform connecting students and tutors in Cameroon.
            </p>

            <div className="flex gap-4 pt-2">
              <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-medium transition">
                View Projects
              </a>

              <a href="#contact" className="border border-slate-600 hover:border-cyan-400 px-6 py-3 rounded-lg transition">
                Contact Me
              </a>
            </div>

          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

              <Image
                src={me}
                alt="Dassi"
                width={280}
                height={280}
                className="rounded-full border-4 border-cyan-400 relative z-10"
              />
            </div>
          </div>

        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-28">

          <h2 className="text-3xl font-bold mb-8">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projectBox.map((project) => (
              <Link key={project.id} href={`/${project.id}`}>
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:scale-[1.03] transition duration-300 shadow-lg">

                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover"
                  />

                  <div className="p-5 space-y-2">

                    <h3 className="text-lg font-semibold">
                      {project.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {project.tech}
                    </p>

                    <span className="text-xs text-cyan-400">
                      View Project →
                    </span>

                  </div>

                </div>
              </Link>
            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mb-20">

          <h2 className="text-3xl font-bold mb-4">
            Let’s Work Together
          </h2>

          <p className="text-slate-400 mb-6 max-w-md">
            Available for remote collaborations and freelance opportunities worldwide.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4 max-w-lg bg-slate-900 p-6 rounded-xl border border-slate-800"
          >

            <input
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="w-full p-3 bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              rows="5"
              className="w-full p-3 bg-slate-800 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-medium transition"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {sendStatus && (
              <p className="text-sm text-slate-300">
                {sendStatus.message}
              </p>
            )}

          </form>

        </section>

      </div>
    </div>
  );
}