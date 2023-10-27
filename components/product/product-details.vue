<template>
    <article class="rounded-lg bg-light">
      <div class="flex flex-col md:flex-row border-b border-border-200 border-opacity-70">
        <div class="md:w-1/2 p-6 pt-8 lg:p-14 xl:p-16">
          <div class="flex items-center justify-between mb-8 lg:mb-10">
            <BackButton />
            <div v-if="discount" class="rounded-full text-xs leading-6 font-semibold px-3 bg-yellow-500 text-light">
              {{ discount }}
            </div>
          </div>

          <div class="product-gallery h-full">
            <Carousel v-if="product.gallery && product.gallery.length" :gallery="product.gallery" />
            <div v-else class="w-full h-full flex items-center justify-center">
                <Image
                  :src="product.image.original || '/product-placeholder.svg'"
                  :alt="product.name"
                  :width="450"
                  :height="450"
                />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start md:w-1/2 p-5 lg:p-14 xl:p-16">
          <div class="w-full">
            <h1 class="font-semibold text-lg md:text-xl xl:text-2xl tracking-tight text-heading">
              {{ product.name }}
            </h1>

            <span v-if="product.unit && _isEmpty(variations)" class="text-sm font-normal text-body mt-2 md:mt-3 block">
                {{ product.unit }}
            </span>
            <div v-if="product.description" class="mt-3 md:mt-4 text-body text-sm leading-7">
                <TruncateScroll :character="450" :value="product.description" :on-click="scrollDetails" />
            </div>
            <div class="my-5 md:my-10 flex items-center">
                <ProductVariantPrice
                  v-if="!_isEmpty(variations)"
                  :selected-variation="selectedVariation"
                  :min-price="product.min_price"
                  :max-price="product.max_price"
                />
                <span v-else class="flex items-center">
                  <ins class="text-2xl md:text-3xl font-semibold text-accent no-underline">
                    {{ basePrice ? basePrice : price }}
                  </ins>
                  <del v-if="discount" class="text-sm md:text-base font-normal text-muted ms-2">
                    {{ price }}
                  </del>
                </span>
            </div>
            <div>
                <ProductAttributes 
                  :variations="variations" 
                  :attributes="attributes"
                  :set-attributes="setAttributes"
                />
            </div>
            <div class="mt-4 md:mt-6 flex flex-col lg:flex-row items-center">
                <div class="mb-3 lg:mb-0 w-full lg:max-w-[400px]">
                    <AddToCart 
                      :data="product" 
                      variant="big" 
                      :variation="selectedVariation" 
                      :disabled="(selectedVariation ? selectedVariation.is_disable : null) || !isSelected"
                    />
                </div>
                <template v-if="product.quantity > 0">
                    <span v-if="_isEmpty(variations)" class="text-base text-body whitespace-nowrap lg:ms-7">
                      {{ product.quantity }} {{ $t("text-pieces-available") }}
                    </span>
                    <span v-if="!_isEmpty(selectedVariation)" class="text-base text-body whitespace-nowrap lg:ms-7">
                      {{ selectedVariation.is_disable || selectedVariation.quantity === 0
                        ? $t('text-out-stock')
                        : `${selectedVariation.quantity} ${$t('text-pieces-available')}`
                      }}
                    </span>
                </template>
                <div v-else class="text-base text-red-500 whitespace-nowrap lg:ms-7">
                  {{ $t("text-out-stock") }}
                </div>
            </div>
          </div>

          <ProductCategories
            v-if="!!product.categories.length"
            :categories="product.categories"
            :basePath="`/${product.type.slug}`"
          />

          <div v-if="product.shop && product.shop.name" class="flex items-center mt-2">
            <span class="text-sm font-semibold text-heading capitalize me-6 py-1">
              {{ $t("common:text-sellers") }}
            </span>

            <button
              @click="navigate(`${ROUTES.SHOPS}/${product.shop.slug}`)"
              class="text-sm text-accent tracking-wider transition underline hover:text-accent-hover hover:no-underline"
            >
              {{ product.shop.name }}
            </button>
          </div>
        </div>
      </div>

      <div
        ref="details"
        class="py-4 px-5 lg:px-16 lg:py-14 border-b border-border-200 border-opacity-70"
      >
        <h2 class="text-lg text-heading tracking-tight font-semibold mb-4 md:mb-6">
          {{ $t('text-details') }}
        </h2>
        <p class="text-sm text-body">{{ description }}</p>
      </div>
    </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ROUTES } from "@utils/routes";
import { getVariations } from "@utils/get-variations";
import usePrice from "@utils/use-price";
import BackButton from "@components/ui/back-button";
import Image from "@components/ui/image";
import Carousel from "@components/ui/carousel";
import TruncateScroll from "@components/ui/truncate-scroll";
import ProductVariantPrice from "@components/product/product-details/product-variant-price";
import ProductAttributes from "@components/product/product-details/product-attributes";
import AddToCart from "@components/product/add-to-cart/add-to-cart";
import ProductCategories from "@components/product/product-details/product-categories";

const props = defineProps({
  product: {
    type: Object,
    default: () => { }
  }
})

const router = useRouter();

const { name, image, description, unit, categories, gallery, type, quantity, shop } = props.product ?? {};

const details = ref(null);
const attributes = ref({});

const setAttributes = (variationName, attribute) => {
    attributes.value = Object.assign(attributes.value, {
      [variationName]: attribute.value
    });
};

const { price, basePrice, discount } = usePrice({
  amount: props.product ? (props.product.price || 0) : 0,
  baseAmount: props.product ? (props.product.sale_price || null) : null,
});

const navigate = (path) => {
    router.push(path);
}

const variations = getVariations(props.product.variations);

const isSelected = computed(() => !_isEmpty(variations)
  ? !_isEmpty(attributes.value) &&
    Object.keys(variations).every((variation) =>
      attributes.value.hasOwnProperty(variation)
    )
  : true
);

const selectedVariation = computed(() => isSelected
  ? (props.product.variation_options 
    ? props.product.variation_options.find((o) =>
      _isEqual(
        o.options.map((v) => v.value).sort(),
        Object.values(attributes.value).sort()
      )
    )
    : []
  )
  : {}
);

const scrollDetails = () => {
    const element = details.value;
    console.log(element);
    const dims = element.getBoundingClientRect();
    console.log(dims);
    element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'start', 
        top: dims.top - 80 
    });
};

</script>
