"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
const links = [{ label: "About", href: "#about" }, { label: "Expertise", href: "#expertise" }, { label: "Projects", href: "#projects" }, { label: "Experience", href: "#experience" }, { label: "Contact", href: "#contact" }];
export default function Navigation() {
  const [active, setActive] = useState("#about"); const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); }), { rootMargin: "-35% 0px -55% 0px" });
    links.forEach(link => { const el = document.querySelector(link.href); if (el) observer.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><nav className="nav-shell container" aria-label="Main navigation">
    <a href="#top" className="brand" aria-label="Vivek Surati home"><span className="brand-mark">V<span>.</span></span><span className="brand-name">VIVEK SURATI</span></a>
    <div className={`nav-links ${open ? "nav-open" : ""}`}>{links.map(link => <a key={link.href} href={link.href} className={active === link.href ? "active" : ""} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="nav-connect" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent("Let’s connect")}`} target="_blank" rel="noopener noreferrer">Let&apos;s talk <ArrowUpRight size={14}/></a></div>
    <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </nav></header>;
}
