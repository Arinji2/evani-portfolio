import { IconProps, IconSvg } from "./base";

const BaseCornerPath = (
  <path
    d="M0.376953 0.788208C16.1187 3.81035 28.176 17.1856 29.1885 33.5538V0.788208H0.376953Z"
    fill="currentColor"
  />
);

export const CornerTopLeft = (props: IconProps) => (
  <IconSvg viewBox="0 0 30 34" {...props}>
    {BaseCornerPath}
  </IconSvg>
);

export const CornerTopRight = (props: IconProps) => (
  <IconSvg viewBox="0 0 30 34" {...props}>
    <g transform="scale(-1,1) translate(-30,0)">{BaseCornerPath}</g>
  </IconSvg>
);

export const CornerBottomLeft = (props: IconProps) => (
  <IconSvg viewBox="0 0 30 34" {...props}>
    <g transform="scale(1,-1) translate(0,-34)">{BaseCornerPath}</g>
  </IconSvg>
);

export const CornerBottomRight = (props: IconProps) => (
  <IconSvg viewBox="0 0 30 34" {...props}>
    <g transform="scale(-1,-1) translate(-30,-34)">{BaseCornerPath}</g>
  </IconSvg>
);
