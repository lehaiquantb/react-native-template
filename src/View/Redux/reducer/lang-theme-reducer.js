import { CHANGE_LANG, CHANGE_THEME } from '../type';
import vi from '../../Lang/vi';
import en from '../../Lang/en';
import defaultTheme from '../../Theme/DefaultTheme/theme';
import darkTheme from '../../Theme/DarkTheme/theme';

const changeLangThemeReducer = (state = {}, action) => {
    //debugger
    if (action.type === CHANGE_LANG) {
        switch (action.value) {
            case 'en':
                return en;
            default:
                return vi;
        }
    }
    else if (action.type === CHANGE_THEME) {
        switch (action.value) {
            case 'dark_theme':
                return darkTheme;
            default:
                return defaultTheme;
        }
    }
    return state;
}

export default changeLangThemeReducer;