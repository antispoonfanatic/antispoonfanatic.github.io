const backgroundThingy = document.getElementById("background-thingy");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  backgroundThingy.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 6000, fill: "forwards" }
  );
};
