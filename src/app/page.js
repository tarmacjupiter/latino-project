"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] relative overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative corner elements */}
      <div className="fixed top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#8b7355] opacity-20" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#8b7355] opacity-20" />

      {/* Navigation Bar */}
      <nav className="relative border-b border-[#8b7355]/20 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-lg font-light text-[#2c2416] hover:text-[#8b7355] transition-colors"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Journeys of Belonging
            </Link>
            <div className="flex gap-8">
              <Link
                href="/"
                className="text-sm text-[#2c2416] font-semibold border-b-2 border-[#8b7355] pb-1"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                Home
              </Link>
              <Link
                href="/research"
                className="text-sm text-[#5c4f3d] hover:text-[#2c2416] transition-colors"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                Research Paper
              </Link>
              <Link
                href="https://github.com/tarmacjupiter/latino-project"
                className="text-sm text-[#5c4f3d] hover:text-[#2c2416] transition-colors"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="border-b border-[#8b7355]/30 pb-8 mb-8">
            <h1
              className="text-5xl md:text-7xl font-light tracking-tight text-[#2c2416] mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Journeys of Belonging
            </h1>
            <p
              className="text-xl md:text-2xl text-[#5c4f3d] font-light italic"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Egyptian Immigration & Identity in Post-9/11 America
            </p>
          </div>

          <div className="text-sm text-[#6d5d4b] space-y-1">
            <p style={{ fontFamily: "'Source Serif Pro', serif" }}>
              A Digital Archive Project
            </p>
            <p style={{ fontFamily: "'Source Serif Pro', serif" }}>
              LATINO 392 • Fall 2025
            </p>
            <p style={{ fontFamily: "'Source Serif Pro', serif" }}>
              Anthony Behery
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 border border-[#d4c4b0] shadow-lg">
              <h2
                className="text-3xl font-light text-[#2c2416] mb-6 pb-4 border-b border-[#d4c4b0]"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                About This Project
              </h2>
              <div
                className="space-y-4 text-[#3d3428] leading-relaxed"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                <p className="text-lg">
                  This digital archive documents the personal narratives of
                  Coptic Egyptian immigrants navigating life in the United
                  States during and after September 11, 2001. Centered on an
                  in-depth oral history interview, the project traces how
                  national trauma and racialized suspicion reshaped immigrant
                  identities, belonging, and everyday experiences for Middle
                  Eastern and Muslim-perceived communities.
                </p>
                <p>
                  Combining personal memory with diaspora and cultural identity
                  theory, this project illuminates how immigrants were compelled
                  to renegotiate who they were—and how they were seen—in a
                  rapidly shifting American racial landscape. By preserving
                  these stories, the archive highlights the intimate, often
                  overlooked experiences that connect global politics to family,
                  faith, and the ongoing search for home.
                </p>
              </div>
            </div>

            <div className="bg-[#e8dfd0]/50 backdrop-blur-sm p-6 border-l-4 border-[#8b7355]">
              <h3
                className="text-sm uppercase tracking-wider text-[#5c4f3d] mb-3 font-semibold"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                Theoretical Framework
              </h3>
              <p
                className="text-sm text-[#3d3428] leading-relaxed"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                This project uses Stuart Hall’s theory of cultural identity and
                diaspora to examine how identity is not fixed but continually
                reshaped through history and power. It also draws on post-9/11
                scholarship, especially Sunaina Maira’s work on racialization,
                to understand how Arab and Middle Eastern immigrants were
                reimagined within the American racial landscape after 2001.
              </p>
            </div>
          </div>

          {/* Right Column - Video */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-white p-4 border-2 border-[#8b7355] shadow-2xl">
              <div className="mb-4 pb-3 border-b border-[#d4c4b0]">
                <h3
                  className="text-2xl font-light text-[#2c2416]"
                  style={{ fontFamily: "'Crimson Text', serif" }}
                >
                  Oral History Interview
                </h3>
                <p
                  className="text-sm text-[#6d5d4b] mt-1"
                  style={{ fontFamily: "'Source Serif Pro', serif" }}
                >
                  A conversation with my mom about her journey
                </p>
              </div>
              <div className="aspect-video bg-black shadow-inner">
                <LiteYouTubeEmbed
                  id="iZoyhS0V6LI"
                  title="LATINO392FINALVIDEO"
                />
              </div>
            </div>

            {/* Research Statement */}
            <div className="bg-white/50 backdrop-blur-sm p-6 border border-[#d4c4b0] shadow-lg">
              <h3
                className="text-sm uppercase tracking-wider text-[#5c4f3d] mb-3 font-semibold"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                Core Argument
              </h3>
              <p
                className="text-[#3d3428] leading-relaxed italic"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                This project argues that the post-9/11 moment fundamentally
                reshaped Egyptian and Arab immigrant identity in the United
                States by producing new racialized boundaries of belonging.
                These boundaries—formed through suspicion, surveillance, and
                public narratives about the Middle East—forced immigrants to
                continually re-articulate what “home,” citizenship, and
                Americanness meant in a transformed social landscape.
              </p>
            </div>

            {/* Link to Research Paper */}
            <Link href="/research">
              <div className="bg-[#8b7355] hover:bg-[#6d5d4b] transition-colors p-6 text-center cursor-pointer border border-[#6d5d4b] shadow-lg">
                <p
                  className="text-white font-semibold mb-1"
                  style={{ fontFamily: "'Source Serif Pro', serif" }}
                >
                  Read the Full Research Paper
                </p>
                <p
                  className="text-[#e8dfd0] text-sm"
                  style={{ fontFamily: "'Source Serif Pro', serif" }}
                >
                  Critical analysis and theoretical framework →
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <footer
          className={`mt-20 pt-12 border-t border-[#8b7355]/30 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p
            className="text-center text-sm text-[#6d5d4b] italic"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            This project seeks to preserve an overlooked personal history while
            critically reflecting on the politics of memory, identity, and
            diaspora.
          </p>
          <div className="mt-4 text-center">
            <div className="inline-block w-16 h-px bg-[#8b7355]/40" />
          </div>
        </footer>
      </div>

      {/* Add custom fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Source+Serif+Pro:wght@300;400;600&display=swap");

        .lty-playbtn {
          background-color: rgba(139, 115, 85, 0.9) !important;
          border-radius: 4px !important;
        }

        .lty-playbtn:hover {
          background-color: rgba(139, 115, 85, 1) !important;
        }
      `}</style>
    </div>
  );
}
