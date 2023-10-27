export const order = {
  "id": 1,
  "tracking_number": "2DLA6AdIFMHw",
  "customer_id": 2,
  "customer_contact": "1(234) 567 89 10",
  "status": {
    "id": 1,
    "name": "Order Received",
    "serial": 1,
    "color": "#23b848",
    "created_at": "2021-03-08T21:33:52.000000Z",
    "updated_at": "2021-03-08T21:34:04.000000Z"
  },
  "amount": 62.4,
  "sales_tax": 1.248,
  "paid_total": 113.648,
  "total": 113.648,
  "coupon_id": null,
  "parent_id": null,
  "shop_id": null,
  "discount": 0,
  "payment_id": null,
  "payment_gateway": "cod",
  "shipping_address": {
    "country": "Shipping",
    "city": "Shipping",
    "state": "Shipping",
    "zip": "67890",
    "street_address": "Shipping"
  },
  "billing_address": {
    "country": "Billing",
    "city": "Billing",
    "state": "Billing",
    "zip": "12345",
    "street_address": "Billing"
  },
  "logistics_provider": null,
  "delivery_fee": 50,
  "delivery_time": "Next Day",
  "deleted_at": null,
  "created_at": "2023-10-23T18:17:30.000000Z",
  "updated_at": "2023-10-23T18:17:30.000000Z",
  "customer": {
    "id": 2,
    "name": "admin",
    "email": "admin@admin.admin",
    "email_verified_at": null,
    "created_at": "2023-10-20T13:31:42.000000Z",
    "updated_at": "2023-10-20T13:31:42.000000Z",
    "is_active": 1,
    "shop_id": null
  },
  "products": [
    {
      "id": 104,
      "name": "Givenchy Purse",
      "slug": "givenchy-purse",
      "description": "Established in 1952, Givenchy's stance on contemporary elegance is perfectly captured through the brand’s premium accessory collections. Crafted from calf leather, this grey GV3 croc-effect shoulder bag from Givenchy features a chain top handle with logo charm, a detachable shoulder strap, a front flap closure, a metal logo plaque to the front, gold-tone hardware and suede panels.",
      "type_id": 4,
      "price": 75,
      "shop_id": 3,
      "sale_price": 60,
      "sku": "2002",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1 pc(s)",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "105",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/105/givency_purse.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/105/conversions/givency_purse-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-09T17:18:11.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "pivot": {
        "order_id": 1,
        "product_id": 104,
        "order_quantity": "1",
        "unit_price": "60",
        "subtotal": "60",
        "variation_option_id": null,
        "created_at": "2023-10-23T18:17:30.000000Z",
        "updated_at": "2023-10-23T18:17:30.000000Z"
      }
    },
    {
      "id": 468,
      "name": "Wonderful Pomegranate Juice, 300 ml",
      "slug": "wonderful-pomegranate-juice-300-ml",
      "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
      "type_id": 2,
      "price": 3,
      "shop_id": 5,
      "sale_price": 2.4,
      "sku": "3001",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1pc(s)",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "491",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/490/Juice5_bz8od4.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/490/conversions/Juice5_bz8od4-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "807",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/805/Juice5_bz8od4.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/805/conversions/Juice5_bz8od4-thumbnail.jpg"
        },
        {
          "id": "808",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/806/Juice5_bz8od4.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/806/conversions/Juice5_bz8od4-thumbnail.jpg"
        },
        {
          "id": "809",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/807/Juice5_bz8od4.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/807/conversions/Juice5_bz8od4-thumbnail.jpg"
        },
        {
          "id": "810",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/808/Juice5_bz8od4.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/808/conversions/Juice5_bz8od4-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-14T09:14:15.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "pivot": {
        "order_id": 1,
        "product_id": 468,
        "order_quantity": "1",
        "unit_price": "2.4",
        "subtotal": "2.4",
        "variation_option_id": null,
        "created_at": "2023-10-23T18:17:30.000000Z",
        "updated_at": "2023-10-23T18:17:30.000000Z"
      }
    }
  ],
  "children": [
    {
      "id": 2,
      "tracking_number": "yrAdHP2HKClN",
      "customer_id": 2,
      "customer_contact": "1(234) 567 89 10",
      "status": {
        "id": 1,
        "name": "Order Received",
        "serial": 1,
        "color": "#23b848",
        "created_at": "2021-03-08T21:33:52.000000Z",
        "updated_at": "2021-03-08T21:34:04.000000Z"
      },
      "amount": 60,
      "sales_tax": 0,
      "paid_total": 60,
      "total": 60,
      "coupon_id": null,
      "parent_id": 1,
      "shop_id": 3,
      "discount": 0,
      "payment_id": null,
      "payment_gateway": null,
      "shipping_address": {
        "country": "Shipping",
        "city": "Shipping",
        "state": "Shipping",
        "zip": "67890",
        "street_address": "Shipping"
      },
      "billing_address": null,
      "logistics_provider": null,
      "delivery_fee": 0,
      "delivery_time": "Next Day",
      "deleted_at": null,
      "created_at": "2023-10-23T18:17:30.000000Z",
      "updated_at": "2023-10-23T18:17:30.000000Z",
      "customer": {
        "id": 2,
        "name": "admin",
        "email": "admin@admin.admin",
        "email_verified_at": null,
        "created_at": "2023-10-20T13:31:42.000000Z",
        "updated_at": "2023-10-20T13:31:42.000000Z",
        "is_active": 1,
        "shop_id": null
      },
      "products": [
        {
          "id": 104,
          "name": "Givenchy Purse",
          "slug": "givenchy-purse",
          "description": "Established in 1952, Givenchy's stance on contemporary elegance is perfectly captured through the brand’s premium accessory collections. Crafted from calf leather, this grey GV3 croc-effect shoulder bag from Givenchy features a chain top handle with logo charm, a detachable shoulder strap, a front flap closure, a metal logo plaque to the front, gold-tone hardware and suede panels.",
          "type_id": 4,
          "price": 75,
          "shop_id": 3,
          "sale_price": 60,
          "sku": "2002",
          "quantity": 50,
          "in_stock": 1,
          "is_taxable": 0,
          "shipping_class_id": null,
          "status": "publish",
          "product_type": "simple",
          "unit": "1 pc(s)",
          "height": null,
          "width": null,
          "length": null,
          "image": {
            "id": "105",
            "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/105/givency_purse.jpg",
            "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/105/conversions/givency_purse-thumbnail.jpg"
          },
          "gallery": [],
          "deleted_at": null,
          "created_at": "2021-03-09T17:18:11.000000Z",
          "updated_at": "2021-06-27T03:56:42.000000Z",
          "max_price": null,
          "min_price": null,
          "pivot": {
            "order_id": 2,
            "product_id": 104,
            "order_quantity": "1",
            "unit_price": "60",
            "subtotal": "60",
            "variation_option_id": null,
            "created_at": "2023-10-23T18:17:30.000000Z",
            "updated_at": "2023-10-23T18:17:30.000000Z"
          }
        }
      ],
      "shop": {
        "id": 3,
        "owner_id": 1,
        "name": "Bags Shop",
        "slug": "bags-shop",
        "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
        "cover_image": {
          "id": "889",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/887/Untitled-1-%281%29.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/887/conversions/Untitled-1-%281%29-thumbnail.jpg"
        },
        "logo": {
          "id": "888",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/886/Backpack.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/886/conversions/Backpack-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "35203",
          "city": "Michigan",
          "state": "Alabama",
          "country": "USA",
          "street_address": "1740  Bedford Street"
        },
        "settings": {
          "contact": "01920192102",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": "FacebookIcon"
            },
            {
              "url": "https://www.instagram.com/",
              "icon": "InstagramIcon"
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": -37.1374024,
            "lng": 174.9685924,
            "zip": "2579",
            "city": "Ramarama",
            "state": "Auckland",
            "country": "New Zealand",
            "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
          }
        },
        "created_at": "2021-06-27T03:47:23.000000Z",
        "updated_at": "2021-07-08T09:25:34.000000Z"
      }
    },
    {
      "id": 3,
      "tracking_number": "U9DX3VSMy5W1",
      "customer_id": 2,
      "customer_contact": "1(234) 567 89 10",
      "status": {
        "id": 1,
        "name": "Order Received",
        "serial": 1,
        "color": "#23b848",
        "created_at": "2021-03-08T21:33:52.000000Z",
        "updated_at": "2021-03-08T21:34:04.000000Z"
      },
      "amount": 2.4,
      "sales_tax": 0,
      "paid_total": 2.4,
      "total": 2.4,
      "coupon_id": null,
      "parent_id": 1,
      "shop_id": 5,
      "discount": 0,
      "payment_id": null,
      "payment_gateway": null,
      "shipping_address": {
        "country": "Shipping",
        "city": "Shipping",
        "state": "Shipping",
        "zip": "67890",
        "street_address": "Shipping"
      },
      "billing_address": null,
      "logistics_provider": null,
      "delivery_fee": 0,
      "delivery_time": "Next Day",
      "deleted_at": null,
      "created_at": "2023-10-23T18:17:30.000000Z",
      "updated_at": "2023-10-23T18:17:30.000000Z",
      "customer": {
        "id": 2,
        "name": "admin",
        "email": "admin@admin.admin",
        "email_verified_at": null,
        "created_at": "2023-10-20T13:31:42.000000Z",
        "updated_at": "2023-10-20T13:31:42.000000Z",
        "is_active": 1,
        "shop_id": null
      },
      "products": [
        {
          "id": 468,
          "name": "Wonderful Pomegranate Juice, 300 ml",
          "slug": "wonderful-pomegranate-juice-300-ml",
          "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
          "type_id": 2,
          "price": 3,
          "shop_id": 5,
          "sale_price": 2.4,
          "sku": "3001",
          "quantity": 50,
          "in_stock": 1,
          "is_taxable": 0,
          "shipping_class_id": null,
          "status": "publish",
          "product_type": "simple",
          "unit": "1pc(s)",
          "height": null,
          "width": null,
          "length": null,
          "image": {
            "id": "491",
            "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/490/Juice5_bz8od4.jpg",
            "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/490/conversions/Juice5_bz8od4-thumbnail.jpg"
          },
          "gallery": [
            {
              "id": "807",
              "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/805/Juice5_bz8od4.jpg",
              "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/805/conversions/Juice5_bz8od4-thumbnail.jpg"
            },
            {
              "id": "808",
              "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/806/Juice5_bz8od4.jpg",
              "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/806/conversions/Juice5_bz8od4-thumbnail.jpg"
            },
            {
              "id": "809",
              "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/807/Juice5_bz8od4.jpg",
              "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/807/conversions/Juice5_bz8od4-thumbnail.jpg"
            },
            {
              "id": "810",
              "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/808/Juice5_bz8od4.jpg",
              "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/808/conversions/Juice5_bz8od4-thumbnail.jpg"
            }
          ],
          "deleted_at": null,
          "created_at": "2021-03-14T09:14:15.000000Z",
          "updated_at": "2021-06-27T03:56:42.000000Z",
          "max_price": null,
          "min_price": null,
          "pivot": {
            "order_id": 3,
            "product_id": 468,
            "order_quantity": "1",
            "unit_price": "2.4",
            "subtotal": "2.4",
            "variation_option_id": null,
            "created_at": "2023-10-23T18:17:30.000000Z",
            "updated_at": "2023-10-23T18:17:30.000000Z"
          }
        }
      ],
      "shop": {
        "id": 5,
        "owner_id": 1,
        "name": "Bakery Shop",
        "slug": "bakery-shop",
        "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "895",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/893/Untitled-5.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/893/conversions/Untitled-5-thumbnail.jpg"
        },
        "logo": {
          "id": "892",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/890/bakery.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/890/conversions/bakery-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "27801",
          "city": "Rocky Mount",
          "state": "Carolina",
          "country": "USA",
          "street_address": "4422  Fort Street"
        },
        "settings": {
          "contact": "12902232121",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": "FacebookIcon"
            },
            {
              "url": "https://www.instagram.com/",
              "icon": "InstagramIcon"
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 40.7315115,
            "lng": -73.99582730000002,
            "city": "New York",
            "state": "NY",
            "country": "United States",
            "formattedAddress": "Washington Mews, New York, NY, USA"
          }
        },
        "created_at": "2021-06-27T03:48:11.000000Z",
        "updated_at": "2021-07-08T09:23:37.000000Z"
      }
    }
  ]
}
