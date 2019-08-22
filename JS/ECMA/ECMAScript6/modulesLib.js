export function multi(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return false;
    }
}