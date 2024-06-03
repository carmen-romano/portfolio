const Cursor = () => {
  document.addEventListener("mousemove", e => {
    const circle = document.querySelector(".cursor");
    circle.style.top = e.clientY + "px";
    circle.style.left = e.clientX + "px";
  });
  return <div>ciao</div>;
};

export default Cursor;
