export default function fixErrorsMessage(data) {

    const regex = (value) => value.map(string => string.replace(/input./, ""))

    return Object.fromEntries(Object.entries(data).map(e => e.flat()).map(field => regex(field)))

}
