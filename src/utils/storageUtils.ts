// export const getStatuses = () => {
//     return localStorage.getItem('status') || '[]';
// }

// export const setStatuses = (statuses: string) => {localStorage.setItem('status', statuses)}

export const getCards = () => {
    return localStorage.getItem('cards') || '{}';
}

export const setCards = (cards: string) => {
    localStorage.setItem('cards', cards);
}