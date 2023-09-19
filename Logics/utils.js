
const getIndexes = (length, index) => {
    if (Number.isInteger(index)) {

        if (index < 0) {
            return [length + index];
        }

        return [index]
    }

    if (["all", "some"].includes(index)) {
        return [...Array(length).keys()];
    }

    throw "not a valid index"
}

export const getRelevantRoutes = (nodes, routes, { index, condition }) => {
    return routes.filter(
        (route) => {

            const indexes = getIndexes(route.length, index)

            return route[index == "some" ? "some" : "every"](

                (nodeName, i) => {
                    if (!indexes.includes(i)) {
                        return true;
                    }

                    const node = nodes[nodeName]

                    return Object.entries(condition).every(([key, value]) => {
                        if (Array.isArray(value)) {
                            return value.includes(node?.[key])
                        }

                        if (typeof value === 'function') {
                            return value(node?.[key])
                        }

                        return node?.[key] == value
                    })
                }
            )
        }
    )
}