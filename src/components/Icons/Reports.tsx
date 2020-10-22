import React, {SVGAttributes} from 'react';

const Reports = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99999 0H1.33332C0.965323 0 0.666656 0.298667 0.666656 0.666667V15.3333C0.666656 15.7013 0.965323 16 1.33332 16H14.6667C15.0347 16 15.3333 15.7013 15.3333 15.3333V5.33333H10.6667C10.2987 5.33333 9.99999 5.03467 9.99999 4.66667V0ZM3.33332 11.3333H12.6667V12.6667H3.33332V11.3333ZM3.33332 8H12.6667V9.33333H3.33332V8ZM7.33332 6H3.33332V4.66667H7.33332V6Z"
        fill="currentColor"
      />
      <path
        d="M14.9426 3.99999H11.3333V0.390656L14.9426 3.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Reports;
