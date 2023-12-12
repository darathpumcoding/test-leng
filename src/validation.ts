export function validatePhone(phone?: string): string | undefined {
    if (!phone) return "Phone is required";
    if (phone.length < 8) return "Phone must be at least 8 characters";
}

export function validatePassword(password?: string): string | undefined {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
}
export function validateEmail(email?: string): string | undefined {
    if (!email) return "Email is required";
    if (email =='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/') return "Email must be invalid";
}