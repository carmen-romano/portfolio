const Circle = () => {
  return (
    <div className="circle-container" id="circle">
      <svg className="circle-svg" viewBox="0 0 200 200">
        <defs>
          <path
            id="textPath"
            d="M 100, 100
                 m -75, 0
                 a 75,75 0 1,1 150,0
                 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="#333" className="rotating-text">
          <textPath href="#textPath" className="circle-text-path">
            <tspan>CARMEN ROMANO | DEVELOPER | </tspan>
          </textPath>
        </text>
        <text fill="#333" className="center-text" x="100" y="105" id="simbol">
          {"</>"}
        </text>
      </svg>
    </div>
  );
};

export default Circle;
