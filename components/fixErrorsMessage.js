export default function fixErrorsMessage(data) {

    const regex = (value) => value.map(string => string.replace(/input./, "")).toString()

    const array = [
        {
            [regex(Object.keys(data))]: [Object.values(data).map(e => regex(e))]
        }
    ]

    return array

}
