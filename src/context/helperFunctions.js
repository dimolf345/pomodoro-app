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
