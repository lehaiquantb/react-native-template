import { CHANGE_LANG, CHANGE_THEME } from '../type';

export const onChangeLang = (lang) => {
    //debugger
    return {
        type: CHANGE_LANG,
        value: lang,
    }
}

export const onChangeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        value: theme,
    }
}