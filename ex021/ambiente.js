let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`A ordem crescente do nosso vetor é ${num.sort()}`)
console.log(`O nosso vetor de posição zero é o ${num[0]}`)

for( let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}