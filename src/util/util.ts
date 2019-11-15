export function randomInt(digitCount?: number): number {
    digitCount = digitCount || 6;
    const random = Math.random() * Math.pow(10, digitCount);
    return Math.round(random);
}

export function prettyJson(value: any): string {
    return JSON.stringify(value, null, 2);
}
