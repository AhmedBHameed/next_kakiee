import {memo} from 'react';

const Email: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="currentColor"
    height="1em"
    id="Capa_1"
    viewBox="0 0 433.664 433.664"
    width="1em"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    y="0px"
    {...props}
  >
    <g>
      <g>
        <path d="M229.376,271.616c-4.096,2.56-8.704,3.584-12.8,3.584s-8.704-1.024-12.8-3.584L0,147.2v165.376c0,35.328,28.672,64,64,64 h305.664c35.328,0,64-28.672,64-64V147.2L229.376,271.616z" />
      </g>
    </g>
    <g>
      <g>
        <path d="M369.664,57.088H64c-30.208,0-55.808,21.504-61.952,50.176l215.04,131.072l214.528-131.072 C425.472,78.592,399.872,57.088,369.664,57.088z" />
      </g>
    </g>
  </svg>
);

const EmailSvg = memo(Email);
export {EmailSvg};
