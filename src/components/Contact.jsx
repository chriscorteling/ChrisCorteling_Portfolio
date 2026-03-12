

"use client";

import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import CountUp from "react-countup";
import SectionTitle from "./SectionTitle";



export default function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <SectionTitle title="Contact Me" subtitle="Let's Connect" />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left card */}
          <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col justify-between min-h-[650px]">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Interested in working together?
              </h3>

              <p className="mt-5 text-gray-300 leading-8">
                I’m currently building my skills in Software Engineering,
                AI/ML, and Fullstack Development, and I’m open to internship
                opportunities, collaborations, and meaningful tech conversations.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="mailto:crcorteling@gmail.com"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-black transition duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <MdEmail size={22} />
                </a>

                <a
                  href="tel:+94762622867"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-cyan-400 hover:text-cyan-300"
                  aria-label="Call"
                >
                  <FaPhoneAlt size={18} />
                </a>

                <a
                  href="https://github.com/chriscorteling"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-cyan-400 hover:text-cyan-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/chris-corteling"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-cyan-400 hover:text-cyan-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>

              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <p>
                  <span className="text-cyan-300">Phone:</span> +94 76 262 2867
                </p>
                <p>
                  <span className="text-cyan-300">Email:</span>{" "}
                  crcorteling@gmail.com
                </p>
                <p>
                  <span className="text-cyan-300">Location:</span> Colombo, Sri Lanka
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-300">
                <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
                Available for internships & collaborations
              </div>
            </div>

            {/* Bigger vertical counters */}
            <div className="mt-10 space-y-8 border-t border-white/10 pt-8">
              <div className="text-left">
                <p className="text-5xl md:text-6xl font-extrabold text-cyan-400 leading-none text-center">
                  <CountUp end={4} duration={2} enableScrollSpy scrollSpyOnce scrollSpyDelay={300} />+
                </p>
                <p className="mt-2 text-base text-gray-400 text-center">Projects Built</p>
              </div>

              <div className="text-left">
                <p className="text-5xl md:text-6xl font-extrabold text-cyan-400 leading-none text-center">
                  <CountUp end={15} duration={2} enableScrollSpy scrollSpyOnce scrollSpyDelay={300} />+
                </p>
                <p className="mt-2 text-base text-gray-400 text-center">Technologies Used</p>
              </div>

              <div className="text-left">
                <p className="text-5xl md:text-6xl font-extrabold text-cyan-400 leading-none text-center">
                  <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce scrollSpyDelay={300} />+
                </p>
                <p className="mt-2 text-base text-gray-400 text-center">Commits & Contributions</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white">
              Book an Appointment
            </h3>

            <p className="mt-3 text-gray-400 leading-7">
              Send your details and preferred time. I’ll get back to you soon.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your request"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

