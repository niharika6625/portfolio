/* eslint-disable prettier/prettier */
const CONSTANTS = {
    FILTE_TYPE: ['jpeg', 'png'],
    USER_STATUS: ['Acitve', 'Blocked', 'Freez'],
    STATUS: ['Active', 'Inactive'],
    NUMBER_GAME: {
        GAME_TYPE: {
            START: 3,
            WIN: 2,
            PLAY: 1,
        }
    },
    WEATHER: {

    }
};

const URL = {

    HOME: '/',
    NUMBER_HISTORY: '/number-arrange-history',
    NUMBER_DASHBOARD: '/number-arrange',
    WEATHER: '/weather',
    WEATHER_DETAILS: '/weather/details',
    TODO_LIST: '/todolist',
    CALCULATOR: '/calculator',
    ECOMMERCE: '/ecommerce'
};

const BASENAME = '/portfolio';

const addBaseNameToURL = (urlObject, baseName) => {
    const updatedURL = {
    };
    for (const key in urlObject) {
        updatedURL[key] = `${baseName}${urlObject[key]}`;
    }
    return updatedURL;
};

const URL_WITH_BASENAME = addBaseNameToURL(URL, BASENAME)

export {
    BASENAME,
    CONSTANTS,
    URL,
    URL_WITH_BASENAME,
}