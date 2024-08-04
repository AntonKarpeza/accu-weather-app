export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
};

export const getFavoriteByKey = (locationKey) => {
    const favorites = getFavorites();
    return favorites.find(fav => fav.locationKey === locationKey);
};

export const addFavorite = (locationKey, locationName) => {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.locationKey === locationKey)) {
        favorites.push({ locationKey, locationName });
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
};

export const removeFavorite = (locationKey) => {
    let favorites = getFavorites();
    favorites = favorites.filter(fav => fav.locationKey !== locationKey);
    localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const isFavorite = (locationKey) => {
    const favorites = getFavorites();
    return favorites.some(fav => fav.locationKey === locationKey);
};