import React, {SVGAttributes} from 'react';

const Loading = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx={30} cy={50} fill="#1e90ff" r={20}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.1627906976744184s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5813953488372092s"
        />
      </circle>
      <circle cx={70} cy={50} fill="#6fa5fc" r={20}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.1627906976744184s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="0s"
        />
      </circle>
      <circle cx={30} cy={50} fill="#1e90ff" r={20}>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="1.1627906976744184s"
          keyTimes="0;0.5;1"
          values="30;70;30"
          begin="-0.5813953488372092s"
        />
        <animate
          attributeName="fill-opacity"
          values="0;0;1;1"
          calcMode="discrete"
          keyTimes="0;0.499;0.5;1"
          dur="1.1627906976744184s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default Loading;
