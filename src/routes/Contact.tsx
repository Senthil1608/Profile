import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1700);
    return () => clearTimeout(t);
  }, [copied]);

  // simple tilt effect controlled by pointer movement
  const handlePointer = (e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (y - 0.5) * -8; // rotateX
    const ry = (x - 0.5) * 10; // rotateY
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };
  const resetPointer = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
  };

  const copyText = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
    } catch {
      setCopied(id); // still show feedback even when clipboard fails (graceful)
    }
  };

  return (
    <>
      <NavBar />

      <section className="contact-hero">
        {/* animated background blobs */}
        <div className="bg-blobs" aria-hidden="true">
          <svg className="blob b1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0ea5a4" d="M43.6,-68.7C56.7,-60.7,67.7,-50.7,74.6,-38.1C81.4,-25.6,84.1,-10.4,81.6,3.1C79,16.6,71.2,29.5,61,39.6C50.8,49.7,38.2,56.9,24.8,63.1C11.3,69.3,-3,74.6,-16.8,72.9C-30.6,71.1,-44,62.2,-53.1,50.3C-62.1,38.5,-66.9,23.8,-68.6,8.6C-70.3,-6.6,-69,-21.2,-62,-33.2C-55.1,-45.3,-42.5,-54.7,-29,-62.2C-15.5,-69.7,-0.8,-75.1,12.8,-77.8C26.4,-80.5,43.6,-76.8,43.6,-68.7Z" transform="translate(100 100)" />
          </svg>
          <svg className="blob b2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6366f1" d="M49.1,-65.6C62.6,-55.6,73.5,-42.6,78.9,-27.8C84.3,-13,84.1,3.7,78.8,19.2C73.5,34.7,63,48.9,49.3,58.9C35.6,68.9,18.8,74.6,3.4,70.3C-12,66,-24,51.8,-36.7,40.1C-49.4,28.3,-62.8,19,-67,6.7C-71.2,-5.6,-66.3,-20.8,-57.1,-33.7C-47.9,-46.6,-34.4,-57.1,-19.4,-66.1C-4.4,-75.2,11.1,-82.9,26.9,-82.2C42.7,-81.6,57.9,-72.6,49.1,-65.6Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container py-6 d-flex justify-content-center">
          <div
            ref={cardRef}
            className="contact-card glass"
            onPointerMove={handlePointer}
            onPointerLeave={resetPointer}
            role="region"
            aria-label="Contact card"
          >
            <h3 className="card-title">Get in touch</h3>

            <div className="contacts">
              <button
                className="contact-item"
                onClick={() => copyText('+919092573000', 'phone')}
                aria-label="Copy phone number"
                title="Click to copy"
              >
                <FaPhone className="ci-icon phone" />
                <div className="ci-body">
                  <div className="ci-title">Phone</div>
                  <div className="ci-sub">+91 90925 73000</div>
                </div>
                <div className={`ci-action ${copied === 'phone' ? 'show' : ''}`} aria-hidden="true">
                  <FaCheck /> Copied
                </div>
              </button>

              <a
                className="contact-item"
                href="mailto:senthind26@gmail.com"
                onClick={(e) => { e.preventDefault(); copyText('senthind26@gmail.com', 'email'); }}
                aria-label="Copy email address"
                title="Click to copy email"
              >
                <FaEnvelope className="ci-icon mail" />
                <div className="ci-body">
                  <div className="ci-title">Email</div>
                  <div className="ci-sub">senthind26@gmail.com</div>
                </div>
                <div className={`ci-action ${copied === 'email' ? 'show' : ''}`} aria-hidden="true">
                  <FaCheck /> Copied
                </div>
              </a>

              <a
                className="contact-item"
                href="https://www.linkedin.com/in/senthil-srinivas-p-s-30b903230/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <FaLinkedin className="ci-icon linkedin" />
                <div className="ci-body">
                  <div className="ci-title">LinkedIn</div>
                  <div className="ci-sub">linkedin.com/in/senthil-srinivas-p-s</div>
                </div>
                <div className="ci-action hint">Open</div>
              </a>

              <div className="contact-item disabled" aria-hidden="true">
                <FaMapMarkerAlt className="ci-icon map" />
                <div className="ci-body">
                  <div className="ci-title">Location</div>
                  <div className="ci-sub">Chennai, India</div>
                </div>
                <div className="ci-action hint">—</div>
              </div>
            </div>

            <div className="foot-note">I respond quickly on LinkedIn / Email. Finalist — SIH 2024. Worked on software from 3rd year.</div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        /* layout & background */
        .contact-hero {
          min-height: calc(100vh - 92px);
          display: grid;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #001827 0%, #021b2b 45%, #041927 100%);
          color: #fff;
        }
        .bg-blobs { position: absolute; inset: -10% -20% auto auto; pointer-events: none; z-index: 0; }
        .blob { width: 360px; height: 360px; opacity: 0.12; filter: blur(26px); position: absolute; transform-origin: center; }
        .b1 { left: -6%; top: -4%; animation: floatA 10s ease-in-out infinite; }
        .b2 { right: -8%; bottom: -6%; animation: floatB 14s ease-in-out infinite; opacity: 0.16; }

        @keyframes floatA { 0%{ transform: translateY(0) rotate(0deg)} 50%{ transform: translateY(-18px) rotate(6deg)} 100%{ transform: translateY(0) rotate(0deg)} }
        @keyframes floatB { 0%{ transform: translateY(0) rotate(0deg)} 50%{ transform: translateY(20px) rotate(-6deg)} 100%{ transform: translateY(0) rotate(0deg)} }

        /* glass card */
        .contact-card {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 680px;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 12px 48px rgba(2,6,23,0.6);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          backdrop-filter: blur(8px) saturate(120%);
          transition: transform 220ms ease, box-shadow 220ms ease;
          will-change: transform;
          transform-origin: center;
          border: 1px solid rgba(255,255,255,0.04);
          animation: entrance 650ms cubic-bezier(.2,.9,.2,1) both;
        }
        @keyframes entrance { from { opacity: 0; transform: translateY(18px) scale(.99);} to { opacity: 1; transform: translateY(0) scale(1);} }

        .card-title { font-size: 1.55rem; margin: 0 0 6px 0; letter-spacing: -0.2px; }
        .card-sub { color: rgba(255,255,255,0.82); margin-bottom: 18px; }

        .contacts { display: grid; gap: 12px; margin-top: 6px; }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
          border: 1px solid rgba(255,255,255,0.03);
          transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease, background 260ms ease;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          position: relative;
          overflow: visible;
        }
        .contact-item.disabled { cursor: default; opacity: 0.9; pointer-events: none; }
        .contact-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(2,6,23,0.5);
          background: linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        }

        .ci-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 10px; flex-shrink:0; font-size: 1.15rem; color: #fff; }
        .ci-icon.phone { background: linear-gradient(90deg,#06b6d4,#0891b2); color:#021827; }
        .ci-icon.mail { background: linear-gradient(90deg,#fb7185,#f97316); color:#fff; }
        .ci-icon.linkedin { background: linear-gradient(90deg,#60a5fa,#4f46e5); color:#fff; }
        .ci-icon.map { background: linear-gradient(90deg,#34d399,#059669); color:#fff; }

        .ci-body { display:flex; flex-direction:column; min-width: 0; }
        .ci-title { font-weight:700; letter-spacing: -0.2px; }
        .ci-sub { font-size: .85rem; color: rgba(255,255,255,0.78); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .ci-action {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%) translateX(8px);
          background: rgba(0,0,0,0.5);
          color: #fff;
          padding: 6px 9px;
          border-radius: 999px;
          font-size: 0.82rem;
          display: inline-flex;
          gap: 8px;
          align-items: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease, transform 180ms ease;
        }
        .contact-item:hover .ci-action,
        .ci-action.show {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
          pointer-events: auto;
        }

        .ci-action.show { background: linear-gradient(90deg,#10b981,#059669); }

        .foot-note {
          color: rgba(255,255,255,0.72);
          margin-top: 14px;
          font-size: .9rem;
        }

        /* small screen tweaks */
        @media (max-width: 576px) {
          .contact-card { padding: 18px; margin: 0 12px; }
          .ci-icon { width: 40px; height: 40px; }
          .ci-action { right: 8px; }
        }
      `}</style>
    </>
  );
}

export default Contact;
