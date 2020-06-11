var socialsTimeline = anime.timeline({
  easing: "spring(1, 80, 10, 0)",
  duration: 1000,
  loop: true,
});

socialsTimeline
  .add({
    targets: "#discord",
    opacity: 1,
    translateX: 100,
  })
  .add({
    targets: "#discord",
    delay: 15000,
    translateX: -100,
    opacity: 0,
  })
  .add(
    {
      targets: "#instagram",
      opacity: 1,
      translateX: 100,
    },
    "-=1500"
  )
  .add({
    targets: "#instagram",
    delay: 15000,
    translateX: -100,
    opacity: 0,
  })
  .add(
    {
      targets: "#snapchatMatt",
      opacity: 1,
      translateX: 100,
    },
    "-=1500"
  )
  .add({
    targets: "#snapchatMatt",
    delay: 15000,
    translateX: -100,
    opacity: 0,
  })
  .add(
    {
      targets: "#snapchatCorey",
      opacity: 1,
      translateX: 100,
    },
    "-=1500"
  )
  .add({
    targets: "#snapchatCorey",
    delay: 15000,
    translateX: -100,
    opacity: 0,
  })
  .add(
    {
      targets: "#twitter",
      opacity: 1,
      translateX: 100,
    },
    "-=1500"
  )
  .add({
    targets: "#twitter",
    delay: 15000,
    translateX: -100,
    opacity: 0,
  })
  .add(
    {
      targets: "#youtube",
      opacity: 1,
      translateX: 100,
    },
    "-=1500"
  )
  .add({
    targets: "#youtube",
    delay: 15000,
    translateX: -100,
    opacity: 0,
  });
