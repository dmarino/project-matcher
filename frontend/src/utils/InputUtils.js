class InputUtils {
    static onEnterPress(e, callback) {
        const keyCode = e.keyCode || e.which;
        if (keyCode !== 13) {
            return;
        }
        const value = e.currentTarget.value;
        callback(value);
        e.currentTarget.value = '';
    }

    static getTextValueAndExecute(e, callback) {
        const textValue = e.currentTarget.value;
        callback(textValue);
    }
}

export default InputUtils;