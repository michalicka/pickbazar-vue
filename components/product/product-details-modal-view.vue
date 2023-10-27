<template>
    <div v-if="loading" class="w-96 flex justify-center items-center h-96 bg-light relative">
        <Spinner :text="$t('common:text-loading')" />
    </div>
    <article v-else class="bg-light w-full max-w-6xl relative z-[51]">
        <div :class="{ 'max-w-6xl h-auto hidden md:block bg-light fixed top-0 start-1/2 transform -translate-x-1/2 z-50 px-8 py-6 shadow-350 transition-all duration-300': true, 'invisible opacity-0 -translate-y-1/2': !ui.displayModalStickyBar, 'visible opacity-100 translate-y-0': ui.displayModalStickyBar }" style="width: calc(100% - 40px);">
            <div class="flex items-center">
                <div :class="{ 'border border-border-200 border-opacity-70 rounded relative flex items-center justify-center overflow-hidden flex-shrink-0': true, 'w-28 h-28': _isEmpty(variations), 'w-40 lg:w-52 h-40 lg:h-52': !_isEmpty(variations) }">
                    <Image :src="product.image.original || '/product-placeholder.svg'" :alt="product.name" layout="fill" object-fit="contain" class="product-image" />
                </div>
                <div class="px-8 flex flex-col justify-center me-auto overflow-hidden">
                    <h3 class="font-semibold text-lg lg:text-xl tracking-tight text-heading truncate cursor-pointer transition-colors hover:text-accent" :title="product.name" @click="handleTitleClick(`/products/${product.slug}`)">
                      {{ product.name }}
                    </h3>
                    <span v-if="product.unit && _isEmpty(variations)" class="text-sm font-normal text-body mt-2 block">
                      {{ product.unit }}
                    </span>
                    <span v-else-if="!_isEmpty(variations)" class="flex items-center mt-2">
                        <ProductVariantPrice
                          :selected-variation="selectedVariation"
                          :min-price="product.min_price"
                          :max-price="product.max_price"
                        />
                    </span>
                </div>
                <div :class="{ 'w-full flex flex-shrink-0': true, 'max-w-max': _isEmpty(variations), 'max-w-[40%]': !_isEmpty(variations) }">
                    <span v-if="_isEmpty(variations)" class="me-8 flex items-center ">
                      <ins class="text-xl lg:text-2xl font-semibold text-accent no-underline">
                        {{ basePrice ? basePrice : price }}
                      </ins>
                      <del v-if="discount" class="text-sm lg:text-base font-normal text-muted ms-2">
                        {{ price }}
                      </del>
                    </span>

                    <div class="w-full">
                        <div :class="{ 'flex flex-col overflow-y-auto justify-center': true, 'h-[140px]': !_isEmpty(variations) }">
                            <ProductAttributes 
                              :variations="variations" 
                              :attributes="attributes"
                              :set-attributes="setAttributes"
                            />
                        </div>
                        <div :class="{ 'mt-4': !_isEmpty(variations) }">
                            <AddToCart 
                              v-if="product.quantity > 0" 
                              :data="product" 
                              variant="big" 
                              :variation="selectedVariation" 
                              :disabled="(selectedVariation ? selectedVariation.is_disable : null) || !isSelected"
                            />
                            <div v-else class="bg-red-500 rounded text-sm text-light px-3 py-2">
                                {{ $t("text-out-stock") }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row border-b border-border-200 border-opacity-70">
            <div class="md:w-1/2 p-5 md:pt-10 lg:p-14 xl:p-16">
                <div class="product-gallery h-full relative">
                    <div v-if="discount" class="rounded-full text-xs leading-6 font-semibold px-3 bg-yellow-500 text-light absolute top-4 end-4 z-10">
                        {{ discount }}
                    </div>
                    <Carousel v-if="product.gallery && product.gallery.length" :gallery="product.gallery" />
                    <div v-else class="w-full h-[90%] flex items-center justify-center">
                        <Image
                          :src="product.image.original || '/product-placeholder.svg'"
                          :alt="product.name"
                          :width="450"
                          :height="450"
                        />
                    </div>
                </div>
            </div>
            <Waypoint class="flex justify-start md:w-1/2 p-5 md:pt-10 lg:p-14 xl:p-16" @change="onWaypointPositionChange">
                <div class="flex flex-col items-start overflow-hidden">
                    <div class="w-full">
                        <h1 class="font-semibold text-lg md:text-xl xl:text-2xl tracking-tight text-heading cursor-pointer transition-colors hover:text-accent" :title="product.name" @click="handleTitleClick(`/products/${product.slug}`)">
                          {{ product.name }}
                        </h1>
                        <span v-if="product.unit && _isEmpty(variations)" class="text-sm font-normal text-body mt-2 md:mt-3 block">
                            {{ product.unit }}
                        </span>
                        <div v-if="product.description" class="mb-5 md:mb-10 mt-3 md:mt-4 text-body text-sm leading-7">
                            <Truncate :character="450" :value="product.description" />
                        </div>
                        <div class="mb-5 md:mb-10 flex items-center">
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
                                <span v-if="_isEmpty(variations)" class="text-base text-body whitespace-nowrap ms-7">
                                  {{ product.quantity }} {{ $t("text-pieces-available") }}
                                </span>
                                <span v-if="!_isEmpty(selectedVariation)" class="text-base text-body whitespace-nowrap ms-7">
                                  {{ selectedVariation.is_disable || selectedVariation.quantity === 0
                                    ? $t('text-out-stock')
                                    : `${selectedVariation.quantity} ${$t('text-pieces-available')}`
                                  }}
                                </span>
                            </template>
                            <div v-else class="text-base text-red-500 whitespace-nowrap ms-7">
                              {{ $t("text-out-stock") }}
                            </div>
                        </div>
                    </div>
                    
                    <ProductCategories
                      v-if="!!product.categories.length"
                      :categories="product.categories"
                      :basePath="`/${product.type.slug}`"
                      :on-close="closeModal"
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
            </Waypoint>
        </div>
        <div v-if="(product.related_products || relatedProducts).length > 1" class="p-5 md:pb-10 lg:p-14 xl:p-16">
            <RelatedProducts :products="product.related_products || relatedProducts" :currentProductId="product.id" />
        </div>
    </article>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ROUTES } from "@utils/routes";
import { products } from "@data/products"; //TODO
import { useUIStore } from '@/stores/ui';
import { useSelectedStore } from '@/stores/selected';
import { getVariations } from "@utils/get-variations";
import usePrice from "@utils/use-price";
import Spinner from "@components/ui/loaders/spinner/spinner";
import Image from "@components/ui/image";
import ProductVariantPrice from "@components/product/product-details/product-variant-price";
import ProductAttributes from "@components/product/product-details/product-attributes";
import AddToCart from "@components/product/add-to-cart/add-to-cart";
import Carousel from "@components/ui/carousel";
import Truncate from "@components/ui/truncate";
import ProductCategories from "@components/product/product-details/product-categories";
import RelatedProducts from "@components/product/product-details/related-products";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  variations: {
    type: Array,
    default: () => []
  },
  name: {
    type: String,
    default: ''
  },
})

const loading = ref(false); //TODO

const ui = useUIStore();
const store = useSelectedStore();
const { product } = store;

const { price, basePrice, discount } = usePrice({
  amount: product ? (product.price || 0) : 0,
  baseAmount: product ? (product.sale_price || null) : null,
});

const attributes = ref({});

const setAttributes = (variationName, attribute) => {
    attributes.value = Object.assign(attributes.value, {
      [variationName]: attribute.value
    });
};

const variations = getVariations(product.variations);

const isSelected = computed(() => !_isEmpty(variations)
  ? !_isEmpty(attributes.value) &&
    Object.keys(variations).every((variation) =>
      attributes.value.hasOwnProperty(variation)
    )
  : true
);

const selectedVariation = computed(() => isSelected
  ? (product.variation_options 
    ? product.variation_options.find((o) =>
      _isEqual(
        o.options.map((v) => v.value).sort(),
        Object.values(attributes.value).sort()
      )
    )
    : []
  )
  : {}
);

const router = useRouter();
const { $eventBus } = useNuxtApp();

const closeModal = () => {
    $eventBus.emit('modal:close');
}

const navigate = (path) => {
    router.push(path);
    closeModal();
}

const handleTitleClick = (path) => {
    router.push(path);
    closeModal();
}

const route = useRoute();

const relatedProducts = products[ route.params.category || 'grocery' ].data.slice(Math.floor(Math.random() * 10), 10 + Math.floor(Math.random() * 10)); //TODO

const onWaypointPositionChange = (waypointState) => {
    ui.setDisplayModalStickyBar(waypointState.going === 'OUT');
}

</script>
