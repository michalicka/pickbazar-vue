export const useWindowSize = {
    width: process.client && window ? window.innerWidth : Infinity,
    height: process.client && window ? window.innerHeight : Infinity,
}
