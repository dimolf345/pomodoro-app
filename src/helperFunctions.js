export function createTimers(phasesArr) {
  const timers = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const phase of phasesArr) {
    const keyName = phase.name.replace(" ", "");
    timers[keyName] = phase.defaultValue;
  }
  return timers;
}

export function createPhasesNames(phasesArr) {
  return phasesArr.map((phase) => phase.name);
}

export function calcMinsAndSeconds(timeInSeconds) {
  let seconds = String(Math.floor(timeInSeconds % 60));
  if (seconds < 10) seconds = `0${seconds}`;
  const minutes = String(Math.floor(timeInSeconds / 60));

  return [minutes, seconds];
}
