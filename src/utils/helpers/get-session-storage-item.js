export const getSessionStorageItem = value => {
    if (value == null) {
        return null;
    }

    if (value == 'page' && sessionStorage.getItem(`${value}`) == null) {
        return 1;
    }

    return value === 'page' ? parseInt(sessionStorage.getItem(`${value}`)) : sessionStorage.getItem(`${value}`)
};