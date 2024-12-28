// actions.js
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const showPopup = () => ({ type: SHOW_POPUP });
export const hidePopup = () => ({ type: HIDE_POPUP });
export const submitForm = (formData) => ({
    type: SUBMIT_FORM,
    payload: formData,
});


// Action creators for mobile menu and overlay

export const SHOW_MOBILE_MENU = "SHOW_MOBILE_MENU";
export const HIDE_MOBILE_MENU = "HIDE_MOBILE_MENU";
export const SHOW_OVERLAY = "SHOW_OVERLAY";
export const HIDE_OVERLAY = "HIDE_OVERLAY";

export const showMobileMenu = () => ({ type: SHOW_MOBILE_MENU });
export const hideMobileMenu = () => ({ type: HIDE_MOBILE_MENU });
export const showOverlay = () => ({ type: SHOW_OVERLAY });
export const hideOverlay = () => ({ type: HIDE_OVERLAY });





