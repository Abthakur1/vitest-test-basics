export default function multiply(...numbers: number[]) {
    let mul = 1;
    numbers.forEach((it) => {
        mul = mul * it;
    });

    return mul;
}

if (import.meta.vitest) {

    const {describe, expect, it} = import.meta.vitest;

    describe("#multiplication", () => {
        it('returns 1 with no numbers', () => {
            expect(multiply()).toBe(1);
        });
        it('returns some numbers with 1 number', () => {
            expect(multiply(2)).toBe(2);
        });
        it('returns some numbers with more numbers', () => {
            expect(multiply(2, 5, 6)).toBe(60);
        });
    })

}