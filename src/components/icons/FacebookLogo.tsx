import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#fff" viewBox="-3.2 -3.2 38.4 38.4" {...props}>
    <rect width={38.4} height={38.4} x={-3.2} y={-3.2} fill="#4267B2" stroke="none" strokeWidth={0} rx={19.2} />
    <path d="m21.95 5.005-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
  </svg>
);
export { SvgComponent as FacebookLogo };
