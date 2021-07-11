export const getCards = () => {
    return localStorage.getItem('cards') || '{}';
}

export const setCards = (cards: string) => {
    localStorage.setItem('cards', cards);
}