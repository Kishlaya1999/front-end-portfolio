const EXPERIENCE_START = new Date("2023-05-01");

export function getExperienceYearsMonths() {
  const now = new Date();
  let years = now.getFullYear() - EXPERIENCE_START.getFullYear();
  let months = now.getMonth() - EXPERIENCE_START.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}

export function getExperienceLabel() {
  const { years, months } = getExperienceYearsMonths();
  return `${years} years ${months} months`;
}

export function getExperienceShort() {
  const { years } = getExperienceYearsMonths();
  return `${years}+`;
}

export function getExperienceText() {
  const { years } = getExperienceYearsMonths();
  return `${years}+`;
}
