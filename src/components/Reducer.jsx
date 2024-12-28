// reducer.js
import { SHOW_POPUP, HIDE_POPUP, SUBMIT_FORM, SHOW_MOBILE_MENU, HIDE_MOBILE_MENU, SHOW_OVERLAY, HIDE_OVERLAY} from "./Action";

const initialState = {
    isPopupVisible: false,
    formData: null,
    overlay: false,
    // FOR MOBILE MENU
    isMobileMenuOpen: false,
    isOverlayVisible: false,
};

const leadFormReducer = (state = initialState, action) => {
    switch (action.type) {
        // Mobile Menu popup
        case SHOW_MOBILE_MENU:
            return{...state, isMobileMenuOpen: true, isOverlayVisible:true};
        case HIDE_MOBILE_MENU:
            return{...state, isMobileMenuOpen: false, isOverlayVisible:false};
        case SHOW_OVERLAY:
            return{...state, isOverlayVisible: true};
        case HIDE_OVERLAY:
            return{...state, isOverlayVisible: false};
        // leadform popup
        case SHOW_POPUP:
            return { ...state, isPopupVisible: true };
        case HIDE_POPUP:
            return { ...state, isPopupVisible: false };
        case SUBMIT_FORM:
            return { ...state, formData: action.payload };
        default:
            return state;
    }
};

export default leadFormReducer;
