export const formatDate = (isoDate: string) => {
    const parts = isoDate.split("T");
    const dateParts = parts[0].slice(1).split("-");
    const year = parseInt(dateParts[0]);
    const month = dateParts[1];
    const day = dateParts[2];
    return `${parseInt(day) + 1}-${month}-${year}`;
};