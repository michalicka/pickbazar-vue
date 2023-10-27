<template>
    <div class="w-full bg-light">
      <div class="flex flex-col xl:flex-row items-start max-w-1920 w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14  min-h-screen">
        <ProfileSidebar class="flex-shrink-0 hidden xl:block xl:w-80 me-8" />

        <div class="w-full hidden overflow-hidden lg:flex">
          <div
            class="pe-5 lg:pe-8 w-full md:w-1/3"
            :style="{ height: 'calc(100vh - 60px)' }"
          >
            <div class="flex flex-col h-full pb-5 md:border md:border-border-200">
              <h3 class="text-xl font-semibold py-5 text-heading px-5">
                {{ $t('profile-sidebar-orders') }}
              </h3>
              <Scrollbar
                class="w-full"
                :style="{ height: 'calc(100% - 80px)' }"
              >
                <p v-if="loading && !data.pages.length">
                    <Spinner :show-text="false" />
                </p>
                <div v-else class="px-5">
                  <div v-for="(page, idx) in data.pages" :key="idx">
                    <OrderCard
                      v-for="(_order, index) in page.data"
                      :key="index"
                      :order="_order"
                      :on-click="() => setOrder(_order)"
                      :is-active="store.order.id === _order.id"
                    />
                  </div>
                </div>
                <div v-if="!loading && !data.pages[0].data.length" class="w-full h-full flex items-center justify-center my-auto">
                  <h4 class="text-sm font-semibold text-body text-center">
                    {{ $t('error-no-orders') }}
                  </h4>
                </div>
                <div v-if="hasNextPage" class="flex justify-center mt-8 lg:mt-12">
                  <Button
                    :loading="loadingMore"
                    :on-click="() => fetchNextPage()"
                    class="text-sm md:text-base font-semibold h-11"
                  >
                    {{ $t('text-load-more') }}
                  </Button>
                </div>
              </Scrollbar>
            </div>
          </div>
          <OrderDetails v-if="!!data.pages[0].data.length" :order="store.order" />
          <div v-else class="max-w-lg mx-auto">
            <NotFound text="text-no-order-found" />
          </div>
        </div>

        <div class="flex flex-col w-full lg:hidden">
          <div class="flex flex-col w-full h-full px-0 pb-5">
            <h3 class="text-xl font-semibold pb-5 text-heading">
              {{ $t('profile-sidebar-orders') }}
            </h3>
            <Collapse
              :accordion="true"
              defaultActiveKey="active"
              :expand-icon="() => null"
            >
              <p v-if="loading && !data.pages.length">
                <Spinner :show-text="false" />
              </p>
              <div v-else v-for="(page, idx) in data.pages" :key="idx">
                <Panel
                  v-for="(_order, index) in page.data"
                  :key="index"
                  header-class-name="accordion-title mb-4"
                  class="mb-4"
                >
                  <template v-slot:header>
                    <OrderCard
                      :key="`mobile_${index}`"
                      :order="_order"
                      :on-click="() => setOrder(_order)"
                      :is-active="store.order.id === _order.id"
                    />
                  </template>
                  <OrderDetails :order="_order" />
                </Panel>
              </div>

              <div v-if="!loading && !data.pages[0].data.length" class="w-full h-full flex flex-col items-center justify-center py-10 my-auto">
                <div class="w-5/6 h-full flex items-center justify-center mb-7">
                  <img
                    src="/no-result.svg"
                    class="w-full h-full object-contain"
                  />
                </div>
                <h4 class="text-sm font-semibold text-body text-center">
                  {{ $t('error-no-orders') }}
                </h4>
              </div>
              <div v-if="hasNextPage" class="flex justify-center mt-8 lg:mt-12">
                <Button
                  :loading="loadingMore"
                  :on-click="() => fetchNextPage()"
                  class="text-sm md:text-base font-semibold h-11"
                >
                  {{ $t('text-load-more') }}
                </Button>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { Accordion } from 'flowbite';
import { user } from "@data/me"; //TODO
import { orders } from "@data/orders"; //TODO
import { useSelectedStore } from '@/stores/selected';
import { useCustomerStore } from '@/stores/customer';
import ProfileSidebar from "@components/profile/profile-sidebar";
import Scrollbar from "@components/ui/scrollbar";
import Button from "@components/ui/button";
import Panel from "@components/ui/panel";
import Collapse from "@components/ui/collapse";
import Spinner from "@components/ui/loaders/spinner/spinner";
import OrderCard from "@components/order/order-card";
import OrderDetails from "@components/order/order-details";
import NotFound from "@components/common/not-found";

const loading = ref(false);
const error = ref('');
const hasNextPage = ref(true);
const loadingMore = ref(false);

const store = useSelectedStore();
const customer = useCustomerStore();
customer.setMe(user); //TODO
const { me } = customer;

const data = {
    pages: [
        orders
    ]
};

if (!store.order.id && _get(data, 'pages.0.data.0')) {
    store.setOrder(_get(data, 'pages.0.data.0'));
}

const setOrder = (_order) => {
    store.setOrder(_order);
}

const fetchNextPage = () => {
    console.log('TODO.orders/index.fetchNextPage');
}

onMounted(() => {
  initAccordions();
})

</script>
