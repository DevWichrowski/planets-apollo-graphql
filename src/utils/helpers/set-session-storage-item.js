export const setSessionStorageItem = (name, value) => {
    if (name == null || value == null) {
        return;
    }

    return sessionStorage.setItem(name, value);
};