import styled from "styled-components";

export const SvgWrapper = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: rotate(270deg);
  stroke-linecap: round;
`;

export const Circle = styled.circle`
  transition: all 0.25s ease;
  height: 100%;
  width: 100%;
  fill: none;
  stroke-width: 8;
  stroke: ${(props) => `var(--color-${props.fillColor})`};
`;
