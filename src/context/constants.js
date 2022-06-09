export const FONTS = ["Kumbh Sans", "Roboto Slab", "monospace"];

export const COLORS = ["#F87070", "#70F3F8", "#D881F8"];

export const ACTIONS = {
  SET_TIMERS: "SET_TIMERS",
  SET_COLOR: "SET_COLOR",
  SET_FONT: "SET_FONT",
};

export const TIMERS = [
  {
    name: "pomodoro",
    duration: 25,
    min: 5,
    max: 50,
  },
  {
    name: "short break",
    duration: 5,
    min: 1,
    max: 10,
  },
  {
    name: "long break",
    duration: 15,
    min: 3,
    max: 30,
  },
];
