
const formatValue = (input: string | number | boolean) => {
    if (typeof input === 'string') {
        return input = input.toUpperCase()
    } else if (typeof input === 'number') {
        return input = input * 10
    } else {
        return !input
    }
}

const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    } else {
        return 0
    }
}

