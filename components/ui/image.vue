<template>
  <div style="display: inline-block; max-width: 100%; overflow: hidden; position: relative; box-sizing: border-box; margin: 0px;">
    <div style="box-sizing: border-box; display: block; max-width: 100%;">
      <img 
        :alt="alt"
        aria-hidden="true" 
        role="presentation" 
        :src="defaultImage" 
        style="max-width: 100%; display: block; margin: 0px; border: none; padding: 0px;"
      />
    </div>
    <img
      :alt="alt"
      :sizes="width ? '' : '100vw'"
      :src="defaultImage"
      decoding="async"
      :style="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String,
      required: true 
    },
    alt: {
      type: String,
      required: false,
      default: () => ''
    },
    layout: {
      type: String,
      required: false,
      default: () => 'fill'
    },
    objectFit: {
      type: String,
      required: false,
      default: () => 'cover'
    },
    sizes: {
      type: Array,
      required: false,
      default: () => [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    },
    quality: {
      type: Number,
      required: false,
      default: () => 75
    },
    width: {
      type: Number,
      required: false,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: null
    }
  },
  computed: {
    srcSetString() {
      return this.sizes
        .map(width => `${this.generateImageLink(width)} ${width}w`)
        .join(', ');
    },
    defaultImage() {
      return this.width ? this.generateImageLink(this.width) : this.src; //TODO this.generateImageLink(3840);
    },
    styles() {
      return { 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0, 
        'box-sizing': 'border-box', 
        padding: 0, 
        border: 'none', 
        margin: 'auto', 
        display: 'block', 
        width: 0, 
        height: 0, 
        'min-width': '100%', 
        'max-width': '100%', 
        'min-height': '100%', 
        'max-height': '100%', 
        'object-fit': this.objectFit 
      };
    }
  },
  methods: {
    generateImageLink(width) {
        return `/_next-image?url=${encodeURIComponent(this.src)}&w=${width}&q=${this.quality}`;
    }
  }
}
</script>
