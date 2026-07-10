import { useEffect } from 'react';

// Reveals any `.reveal` element once its top edge scrolls into the lower ~88%
// of the viewport. Uses a scroll/resize check (rAF-throttled) rather than a
// transient IntersectionObserver so that fast scrolling and anchor jumps can
// never leave a section stuck invisible.
export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (els.length === 0) return;

    let ticking = false;

    const reveal = () => {
      ticking = false;
      const trigger = window.innerHeight * 0.9;
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add('reveal--in');
          els.splice(i, 1);
        }
      }
      if (els.length === 0) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(reveal);
      }
    };

    // Initial pass (covers above-the-fold and no-scroll pages)
    reveal();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}
