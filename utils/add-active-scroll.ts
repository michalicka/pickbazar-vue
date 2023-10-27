import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  props: {
    topOffset: {
      type: Number,
      default: 80
    }
  },
  setup(props) {
    const elementRef = ref<HTMLElement | null>(null)

    onMounted(() => {
      const listener = () => {
        if (window.scrollY > props.topOffset) {
          elementRef.value?.classList.add('is-scrolling')
        } else {
          elementRef.value?.classList.remove('is-scrolling')
        }
      }
      document.addEventListener('scroll', listener)

      onBeforeUnmount(() => {
        document.removeEventListener('scroll', listener)
      })
    })

    return {
      elementRef
    }
  }
}
