export default function sum(...numbers: number[]) {

    let sum = 0;
    numbers.forEach((it) => {
        sum = sum + it;
    })

    return sum;

}