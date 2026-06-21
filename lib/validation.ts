const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+\d][\d\s().-]{6,}$/

export interface ApplicationPayload {
  name: string
  age: string
  location: string
  email: string
  phone: string
  education: string
  occupation: string
  why: string
  goals: string
}

export interface ContactPayload {
  name: string
  email: string
  message: string
}

export type ValidationErrors<T> = Partial<Record<keyof T, string>>

function isBlank(value: string) {
  return value.trim().length === 0
}

export function isValidEmail(email: string) {
  return EMAIL_PATTERN.test(email.trim())
}

export function isValidPhone(phone: string) {
  const trimmed = phone.trim()
  return trimmed.length === 0 || PHONE_PATTERN.test(trimmed)
}

export function validateApplication(data: ApplicationPayload): ValidationErrors<ApplicationPayload> {
  const errors: ValidationErrors<ApplicationPayload> = {}
  const age = Number(data.age)

  if (isBlank(data.name)) errors.name = 'Please enter your full name.'
  if (isBlank(data.location)) errors.location = 'Please enter your location.'
  if (isBlank(data.email)) errors.email = 'Please enter your email address.'
  else if (!isValidEmail(data.email)) errors.email = 'Please enter a valid email address.'

  if (!isBlank(data.age) && (!Number.isFinite(age) || age < 16 || age > 40)) {
    errors.age = 'Age must be between 16 and 40.'
  }

  if (!isValidPhone(data.phone)) errors.phone = 'Please enter a valid phone number.'
  if (isBlank(data.education)) errors.education = 'Please enter your highest education.'
  if (isBlank(data.occupation)) errors.occupation = 'Please enter your current occupation.'
  if (isBlank(data.why)) errors.why = 'Please tell us why you want to join.'
  if (isBlank(data.goals)) errors.goals = 'Please share the goals you hope to achieve.'

  return errors
}

export function getApplicationStepErrors(data: ApplicationPayload, step: number): ValidationErrors<ApplicationPayload> {
  const errors = validateApplication(data)

  if (step === 0) {
    return {
      name: errors.name,
      age: errors.age,
      location: errors.location,
      email: errors.email,
      phone: errors.phone,
    }
  }

  if (step === 1) {
    return {
      education: errors.education,
      occupation: errors.occupation,
    }
  }

  if (step === 2) {
    return {
      why: errors.why,
      goals: errors.goals,
    }
  }

  return errors
}

export function validateContact(data: ContactPayload): ValidationErrors<ContactPayload> {
  const errors: ValidationErrors<ContactPayload> = {}

  if (isBlank(data.name)) errors.name = 'Please enter your name.'
  if (isBlank(data.email)) errors.email = 'Please enter your email address.'
  else if (!isValidEmail(data.email)) errors.email = 'Please enter a valid email address.'
  if (isBlank(data.message)) errors.message = 'Please enter a message.'
  else if (data.message.trim().length < 10) errors.message = 'Please enter a message with at least 10 characters.'

  return errors
}

export function hasErrors<T extends Record<string, unknown>>(errors: Partial<Record<keyof T, string | undefined>>) {
  return Object.values(errors).some(Boolean)
}
