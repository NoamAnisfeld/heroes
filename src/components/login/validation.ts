export function validatePasswordShape(password: string) {
    if (password.length < 8 // length at least 8
        || !(/[A-Z]/.test(password)) // includes a capital letter
        || !(/[0-9]/.test(password)) // includes a digit
        || !(/[^A-Za-z0-9]/).test(password) // includes a non-alphanumeric char
    ) return false;
    return true;
}