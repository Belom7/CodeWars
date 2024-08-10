const adviseBefore = (target, advice) => (...args) => {
    const adviceResult = advice(...args);
    if (Array.isArray(adviceResult))
        return target(...adviceResult);
    return target(...args);
};