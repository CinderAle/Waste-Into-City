export const API = {
    YMAPS_KEY: import.meta.env.VITE_YANDEX_MAP_API,
    YMAPS_LANG: 'ru_RU',
    BACKEND_URI: import.meta.env.VITE_BACKEND_API_URI,
    BACKEND_OPERATIONS_URI: `${import.meta.env.VITE_BACKEND_API_URI}/api/trashcan`,
    POST_METHOD: 'POST',
    DELETE_METHOD: 'DELETE',
    PUT_METHOD: 'PUT',
};
