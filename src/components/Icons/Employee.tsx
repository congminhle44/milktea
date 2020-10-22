import React, {SVGAttributes} from 'react';

const Employee = (props: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg width={14} height={10} viewBox="0 0 14 10" fill="none" {...props}>
      <path
        d="M10 5c.92 0 1.66-.747 1.66-1.667S10.92 1.667 10 1.667A1.667 1.667 0 0010 5zm-5-.667a1.992 1.992 0 001.993-2 1.997 1.997 0 10-3.993 0c0 1.107.893 2 2 2zm5 2c-1.22 0-3.667.614-3.667 1.834v1.5h7.334v-1.5c0-1.22-2.447-1.834-3.667-1.834zm-5-.666C3.447 5.667.333 6.447.333 8v1.667H5v-1.5c0-.567.22-1.56 1.58-2.314A8.189 8.189 0 005 5.667z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Employee;
