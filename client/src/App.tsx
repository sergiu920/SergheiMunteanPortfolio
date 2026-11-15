import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash, pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
          }
        />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route
          path="*"
          element={
            <main className="mx-auto max-w-6xl px-4 py-20">
              <p className="text-sm font-semibold text-indigo-600">404</p>
              <h1 className="mt-3 text-3xl font-bold text-gray-950">Page not found</h1>
              <a className="mt-6 inline-block text-indigo-600 underline" href="/">
                Back to portfolio
              </a>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}