function stringConcat({ delimeter = "", refObj = {}, fieldset = [] }) {
    let mainString = "", fieldSetLen = 0;
    if (JSON.stringify(refObj) === '{}' && fieldset?.length > 0) {
        fieldSetLen = fieldset?.length - 1;
        fieldset.forEach((field, index) => {
            if (field !== "" && field !== null && field !== undefined) {
                mainString += String(field);
                if (delimeter !== null && delimeter !== undefined)
                    if (index < fieldSetLen)
                        mainString += String(delimeter)
            }
        })
    }
    return mainString;
}
// let obj = {
//     delimeter: "*",
//     fieldset: ["john", "j", undefined, null],
// }
// a = stringConcat(obj)
// console.log(a)