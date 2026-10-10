function createLoginTracker(userInfo) {
    let attemptCount = 0;
    const maxAttempts = 3;

    return (passwordAttempt) => {
        // 1. Check if the account was already locked from previous attempts
        if (attemptCount >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }

        // 2. Validate password
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            // Increment count on failure
            attemptCount++;
            
            // Allow the 3rd attempt to show its failure message normally
            return `Attempt ${attemptCount}: Login failed`;
        }
    };
}

module.exports = { createLoginTracker };
