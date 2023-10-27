<template>
    <div>
      <div class="bg-light min-h-screen">
        <ProductDetails :product="product" />

        <div v-if="(product.related_products || relatedProducts).length > 1" class="p-5 lg:p-14 xl:p-16">
          <RelatedProducts
            :products="product.related_products || relatedProducts"
            :currentProductId="product.id"
            grid-class-name="lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
          />
        </div>
      </div>

      <CartCounterButton />
    </div>
</template>

<script setup>
import { products } from "@data/products"; //TODO
import ProductDetails from "@/components/product/product-details";
import RelatedProducts from "@components/product/product-details/related-products";
import CartCounterButton from "@components/cart/cart-counter-button";

const route = useRoute();

const data = _flatMap(Object.values(products), (product) => [ ...product.data ]); //TODO
const product = _find(data, { slug: route.params.slug });

if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found' });
}

const relatedProducts = products[ route.params.category || 'grocery' ].data.slice(Math.floor(Math.random() * 10), 10 + Math.floor(Math.random() * 10)); //TODO

</script>
