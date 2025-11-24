"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Research() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const googleDocsUrl =
    "https://docs.google.com/document/d/1bxba9donRlnLIgPIDPzdqU_xdvgAuJaFDCEfzivPYgs/edit?usp=sharing";

  // Convert the Google Docs link to embed format
  const embedUrl = googleDocsUrl.includes("/edit")
    ? googleDocsUrl.replace("/edit", "/preview")
    : googleDocsUrl + "/preview";

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
                className="text-sm text-[#5c4f3d] hover:text-[#2c2416] transition-colors"
                style={{ fontFamily: "'Source Serif Pro', serif" }}
              >
                Home
              </Link>
              <Link
                href="/research"
                className="text-sm text-[#2c2416] font-semibold border-b-2 border-[#8b7355] pb-1"
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

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="text-center border-b border-[#8b7355]/30 pb-8">
            <h1
              className="text-4xl md:text-5xl font-light tracking-tight text-[#2c2416] mb-3"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Research Paper
            </h1>
            <p
              className="text-lg text-[#5c4f3d] font-light italic"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Critical Analysis & Theoretical Framework
            </p>
          </div>
        </header>

        {/* Document Embed Container */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white border-2 border-[#8b7355] shadow-2xl overflow-hidden">
            {/* Google Docs Embed */}
            <div
              className="relative"
              style={{ height: "calc(100vh - 300px)", minHeight: "600px" }}
            >
              {googleDocsUrl !== "YOUR_GOOGLE_DOCS_LINK_HERE" ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full border-0"
                  title="Research Paper"
                  allow="autoplay"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-[#f8f5f0]">
                  <div className="text-center p-8">
                    <p
                      className="text-2xl text-[#5c4f3d] mb-4"
                      style={{ fontFamily: "'Crimson Text', serif" }}
                    >
                      Research paper will appear here
                    </p>
                    <p
                      className="text-sm text-[#6d5d4b]"
                      style={{ fontFamily: "'Source Serif Pro', serif" }}
                    >
                      Follow the setup instructions above to display your
                      document
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-[#8b7355] hover:bg-[#6d5d4b] transition-colors px-8 py-3 text-white border border-[#6d5d4b] shadow-lg"
              style={{ fontFamily: "'Source Serif Pro', serif" }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Add custom fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Source+Serif+Pro:wght@300;400;600&display=swap");
      `}</style>
    </div>
  );
}
