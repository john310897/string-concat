export default function stringConcat({ delimeter = "", refObj = {}, fieldset = [] }) {
    let fieldSetLen = 0, isDelimeterValid = false;
    if (fieldset?.length > 0) {
        fieldSetLen = fieldset?.length - 1;
        isDelimeterValid = checkIfFieldValid(delimeter)
        if (JSON.stringify(refObj) === '{}') {
            return getMainString(fieldset, delimeter, isDelimeterValid, fieldSetLen);
        }
        if (Object.keys(refObj)?.length > 0) {
            return getMainString(fieldset, delimeter, isDelimeterValid, fieldSetLen, refObj);
        }
    }
    return null;
}
function getMainString(fieldset, delimeter, isDelimeterValid, fieldSetLen, refObj = false) {
    let mainString = ""
    fieldset?.forEach((field, index) => {
        if (refObj !== false) {
            field = refObj[field]
        }
        if (checkIfFieldValid(field)) {
            mainString += String(field)
            if (isDelimeterValid) {
                if (index < fieldSetLen) {
                    mainString += String(delimeter)
                }
            }
        }
    })
    return mainString;
}
function checkIfFieldValid(field) {
    if (field !== "" && field !== undefined && field !== null) {
        return true
    }
    return false
}
