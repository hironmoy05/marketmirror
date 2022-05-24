export const filteredInput = (e, setChangeText) => {
    const re = /^[0-9\b]+$/;
    if (e.nativeEvent.text === '' || re.test(e.nativeEvent.text)) {
        setChangeText({ value: e.nativeEvent.text });
    }
};
