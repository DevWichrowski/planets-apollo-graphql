export const getPages = totalCount => {
    return Math.ceil(totalCount / 10);
};