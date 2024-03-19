import store from '../store';
import { changeLang } from '../store/slices/locale-slice';

let langFile = require(`../helpers/langs/en.json`);

export const langs = [
    { name: 'English', code: 'en', country: 'gb' },
    { name: 'Deutsch', code: 'de', country: 'de' },
    { name: 'Türkçe', code: 'tr', country: 'tr' },
];

export const getCurrentLang = () => {
    return store.getState().locale.lang;
};

export const setLang = (lang) => {
    langFile = require(`../helpers/langs/${lang.code}.json`);
    store.dispatch(changeLang(lang));
};

export const $t = (key) => {
    return langFile[key];
};
