import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID  = 'service_jpbhlei';
const EMAILJS_TEMPLATE_ID = 'template_tccjvyb';
const EMAILJS_PUBLIC_KEY  = 'ZH1Ox78t1ZC_6BVSg';

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
    <section className="inquire section" id="contact">
      <div className="container inquire__inner">
        <div className="inquire__intro reveal">
          <span className="eyebrow">Request Partnership</span>
          <h2 className="display inquire__title">
            Let's run the<br /><em>backstage together.</em>
          </h2>
          <p className="lede inquire__sub">
            We take on a limited number of partners at a time. Tell us about your
            work and where the backlog builds, and we'll respond within 24 hours.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="inquire__form reveal">
          <div className="inquire__row">
            <div className="inquire__field">
              <label htmlFor="from_name">Full Name</label>
              <input id="from_name" name="from_name" type="text" placeholder="Your name" required />
            </div>
            <div className="inquire__field">
              <label htmlFor="reply_to">Email</label>
              <input id="reply_to" name="reply_to" type="email" placeholder="you@studio.com" required />
            </div>
          </div>

          <div className="inquire__field">
            <label htmlFor="business">Business</label>
            <input id="business" name="business" type="text" placeholder="Label, studio, or business name" />
          </div>

          <div className="inquire__field">
            <label htmlFor="message">What should we take off your plate?</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your work and where the backlog builds up…"
              required
            />
          </div>

          <button type="submit" className="btn btn--solid inquire__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit Inquiry'}
          </button>

          {status === 'success' && (
            <p className="inquire__feedback inquire__feedback--ok">
              Received. We'll be in touch within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="inquire__feedback inquire__feedback--err">
              Something went wrong. Please email us directly at admin@backstageops.com
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
