

"use client"

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
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-24">
          <div className="md:w-1/2 space-y-5">

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hello, I am Dassi Dieudonne
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Full Stack Developer (Frontend-Focused)
            </h2>

            <p className="text-slate-300">
              <span className="text-cyan-400">Next.js</span>,{" "}
              <span className="text-blue-400">React</span>,{" "}
              <span className="text-green-400">Node.js/Express.js</span>,{" "}
              <span className="text-yellow-400">MongoDB</span>,{" "}
              <span className="text-purple-400">Tailwind CSS</span>
            </p>

            <p className="text-slate-300 max-w-lg">
              I build scalable and high-performance applications with clean code and intuitive UI.
            </p>

            <p className="text-amber-400">
              Currently building Boch237 — connecting students, parents, and tutors in Cameroon.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="bg-cyan-500 px-5 py-2 rounded">
                Projects
              </a>
              <a href="#contact" className="border px-5 py-2 rounded">
                Contact
              </a>
            </div>

          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src={me}
              alt="me"
              width={250}
              height={250}
              className="rounded-full border-4 border-cyan-400"
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectBox.map((project) => (
              <Link key={project.id} href={`/${project.id}`}>
                <div className="bg-slate-800 rounded overflow-hidden hover:scale-105 transition">

                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-bold">{project.name}</h3>
                    <p className="text-sm text-slate-400">{project.tech}</p>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-lg">

            <input
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 bg-slate-800 rounded"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 bg-slate-800 rounded"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full p-2 bg-slate-800 rounded"
            />

            <button className="bg-cyan-500 px-6 py-2 rounded">
              {isSending ? "Sending..." : "Send"}
            </button>

            {sendStatus && <p>{sendStatus.message}</p>}

          </form>
        </section>

      </div>
    </div>
  );
}