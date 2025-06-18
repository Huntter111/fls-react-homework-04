export function getRandomNum(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1))
}

export function generateRandomArr() {
	const numbers = new Set()
	while (numbers.size < 3) {
		const num = getRandomNum(0, 9)
		if (numbers.size === 0 && num === 0) continue
		numbers.add(num)
	}
	return Array.from(numbers)
}
