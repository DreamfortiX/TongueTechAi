// Utils/validation.ts

// Email regex pattern
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

// Password regex pattern
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Password validation logic
export const validatePassword = (password: string): string[] => {
  const requirements: string[] = [];

  if (password.length < 8) requirements.push('At least 8 characters');
  if (!/[A-Z]/.test(password)) requirements.push('One uppercase letter');
  if (!/[a-z]/.test(password)) requirements.push('One lowercase letter');
  if (!/\d/.test(password)) requirements.push('One number');
  if (!/[@$!%*?&]/.test(password)) requirements.push('One special character (@$!%*?&)');

  return requirements;
};
