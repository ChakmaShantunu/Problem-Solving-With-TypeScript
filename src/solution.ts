
const formatValue = (input: string | number | boolean) => {
    if (typeof input === 'string') {
        return input = input.toUpperCase()
    } else if (typeof input === 'number') {
        return input = input * 10
    } else {
        return !input
    }
}
