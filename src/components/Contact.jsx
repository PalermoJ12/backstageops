import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── Fill these in from your EmailJS dashboard ───────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_jpbhlei';
const EMAILJS_TEMPLATE_ID = 'template_tccjvyb';
const EMAILJS_PUBLIC_KEY  = 'ZH1Ox78t1ZC_6BVSg';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__left">
          <span className="section-label">Get in Touch</span>
          <h2 className="contact__headline">Let's Connect</h2>
          <p className="contact__sub">
            Ready to hand off the back office? Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="from_name">Full Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Jane Smith"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="reply_to">Email Address</label>
              <input
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="jane@example.com"
                required
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="business">Business Name</label>
            <input
              id="business"
              name="business"
              type="text"
              placeholder="Your Business"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your business and what you need help with..."
              required
            />
          </div>

          <button
            type="submit"
            className="btn-primary contact__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="contact__feedback contact__feedback--success">
              Message sent! We'll be in touch within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__feedback contact__feedback--error">
              Something went wrong. Please email us directly at bckstg.ops@gmail.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
