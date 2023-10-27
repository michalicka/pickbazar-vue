// import Waypoint from "vue-waypoint"; //TODO
import Waypoint from '~/components/ui/waypoint'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Waypoint', Waypoint)
})
