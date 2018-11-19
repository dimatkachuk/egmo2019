export function validateNumericInput(string) {
    var reg = /^[0-9]*$/g;
    return string.match(reg);
}

export function isEmpty(string) {
    return string === "";
}