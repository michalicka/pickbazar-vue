import { defineStore } from 'pinia'
import { SELECTED_KEY } from "@utils/constants";
import { loggedIn } from "@utils/is-loggedin";

export const useUIStore = defineStore(UI_KEY, () => {

  const isAuthorize = ref(loggedIn());
  const setIsAuthorize = (value) => {
    isAuthorize.value = value;
  }

  const sidebarView = ref('');
  const setSidebarView = (value) => {
    sidebarView.value = value;
  }

  const displaySidebar = ref(false);
  const setDisplaySidebar = (value) => {
    displaySidebar.value = value;
  }

  const displayHeaderSearch = ref(false);
  const setDisplayHeaderSearch = (value) => {
    displayHeaderSearch.value = value;
  }

  const displayMobileSearch = ref(false);
  const setDisplayMobileSearch = (value) => {
    displayMobileSearch.value = value;
  }
  const toggleMobileSearch = () => {
    displayMobileSearch.value = !displayMobileSearch.value;
  }

  const displayModalStickyBar = ref(false);
  const setDisplayModalStickyBar = (value) => {
    displayModalStickyBar.value = value;
  }

  return { 
    isAuthorize, setIsAuthorize, 
    sidebarView, setSidebarView,
    displaySidebar, setDisplaySidebar,
    displayHeaderSearch, setDisplayHeaderSearch,
    displayMobileSearch, setDisplayMobileSearch, toggleMobileSearch,
    displayModalStickyBar, setDisplayModalStickyBar
  }
})
