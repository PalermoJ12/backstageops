import { useState, useEffect, useRef } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    text: "One of the best virtual assistants I've ever worked with, she completes every task on time and consistently delivers high-quality work. Thanks to her, I've been able to boost my productivity by threefold and free up my schedule. I'm currently working with her and plan to continue for the long term.",
    name: 'El Hussein Saad Allah',
    role: 'Google Review',
    initial: 'E',
  },
  {
    text: 'You are a perfect person to work with. Her dedicated to my business, flexible with time, and very easy to communicate with.',
    name: 'J. Anwar',
    role: 'Event DJ',
    initial: 'J',
  },
  {
    text: 'She took responsibility off of me for some things.',
    name: 'N. Mathis',
    role: 'Wig Designer',
    initial: 'N',
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const go = (next) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 300);
  };

  const prev = () => go((index - 1 + testimonials.length) % testimonials.length);
  const next = () => go((index + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="testimonial">
      <div className="container">
        <span className="section-label">Trust & Social Proof</span>

        <div className="testimonial__stage">
        <div className="testimonial__card">
          <div className={`testimonial__inner ${visible ? 'testimonial__inner--visible' : ''}`}>
            <div className="testimonial__quote-mark">"</div>
            <p className="testimonial__text">{t.text}</p>
            <div className="testimonial__author">
              <div className="testimonial__avatar">{t.initial}</div>
              <div>
                <p className="testimonial__name">{t.name}</p>
                <p className="testimonial__role">{t.role}</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="testimonial__nav">
          <button className="testimonial__nav-btn" onClick={prev}>&#8592;</button>
          <div className="testimonial__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonial__dot ${i === index ? 'testimonial__dot--active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button className="testimonial__nav-btn" onClick={next}>&#8594;</button>
        </div>

        <p className="testimonial__subtext">
          Proudly supporting businesses across the US East Coast.
        </p>
      </div>
    </section>
  );
}
