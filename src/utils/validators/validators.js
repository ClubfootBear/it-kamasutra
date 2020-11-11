export const required = (value) => {
    // debugger
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => value =>
    value && value.length > maxLength ? `Max Length ${maxLength} symbols` : undefined;
