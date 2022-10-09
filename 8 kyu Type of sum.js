function typeOfSum(a, b) {
    return typeof a === 'string' && typeof b === 'string'? 'string'
        : typeof a === 'number' && typeof b === 'string'? 'string'
            : typeof a === 'string' && typeof b === 'number'? 'string'
                : typeof a === 'string' && typeof b === 'boolean'? 'string'
                    : typeof a === 'boolean' && typeof b === 'string'? 'string'
                        : typeof a === 'object' && typeof b === 'string'? 'string'
                            : typeof a === 'string' && typeof b === 'object'? 'string'
                                : typeof a === 'undefined' && typeof b === 'string'? 'string'
                                    : typeof a === 'string' && typeof b === 'undefined'? 'string'
                                        : 'number'
}