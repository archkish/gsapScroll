gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scroll = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: "+=10000",
  },
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: sections,
      containerAnimation: scroll,
      pin: true,
      scrub: true,
      start: "top top",
      end: `+=10000`,
    },
  })
  .to(".block", {
    rotation: 180 * 5,
    duration: 1,
    ease: "linear",
  });
