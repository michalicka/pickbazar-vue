import FruitsVegetable from "@components/icons/type/fruits-vegetable";
import MeatFish from "@components/icons/category/meat-fish";
import Snacks from "@components/icons/category/snacks";
import PetCare from "@components/icons/category/pet-care";
import HomeCleaning from "@components/icons/category/home-cleaning";
import Dairy from "@components/icons/category/dairy";
import Cooking from "@components/icons/category/cooking";
import Breakfast from "@components/icons/category/breakfast";
import Beverage from "@components/icons/category/beverage";
import BeautyHealth from "@components/icons/category/beauty-health";
import Eyes from "@components/icons/category/eyes";
import Purse from "@components/icons/category/purse";
import ShoulderBags from "@components/icons/category/shoulder-bags";
import HandBags from "@components/icons/category/hand-bags";
import WomenDress from "@components/icons/category/women-dress";
import OuterWear from "@components/icons/category/outer-wear";
import Bed from "@components/icons/category/bed";
import Chair from "@components/icons/category/chair";
import Sofa from "@components/icons/category/sofa";

import BakeryIcon from "@components/icons/type/bakery-icon";
import FacialCare from "@components/icons/type/facial-care";
import HandbagIcon from "@components/icons/type/handbag-icon";
import DressIcon from "@components/icons/type/dress-icon";
import FurnitureIcon from "@components/icons/type/furniture-icon";

import FacebookIcon from "@components/icons/facebook";
import InstagramIcon from "@components/icons/instagram";
import TwitterIcon from "@components/icons/twitter";
import YouTubeIcon from "@components/icons/youtube";

export const grocery = {
  "current_page": 1,
  "data": [
    {
      "id": 1,
      "name": "Apples",
      "slug": "apples",
      "description": "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
      "type_id": 1,
      "price": 2,
      "shop_id": 6,
      "sale_price": 1.6,
      "sku": "1",
      "quantity": 18,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "1",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "573",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg"
        },
        {
          "id": "574",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg"
        },
        {
          "id": "575",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg"
        },
        {
          "id": "737",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:24:53.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 1,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 1,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 2,
      "name": "Baby Spinach",
      "slug": "baby-spinach",
      "description": "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh.",
      "type_id": 1,
      "price": 0.6,
      "shop_id": 6,
      "sale_price": null,
      "sku": "2",
      "quantity": 0,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "2lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "2",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/BabySpinach.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/BabySpinach-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "576",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/baby-spinach-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/575/conversions/baby-spinach-1-thumbnail.jpg"
        },
        {
          "id": "577",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/baby-spinach-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/576/conversions/baby-spinach-2-thumbnail.jpg"
        },
        {
          "id": "578",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/baby-spinach.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/577/conversions/baby-spinach-thumbnail.jpg"
        },
        {
          "id": "738",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/BabySpinach_xronqz.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/737/conversions/BabySpinach_xronqz-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:26:13.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 2,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 2,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 3,
      "name": "Blueberries",
      "slug": "blueberries",
      "description": "Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries. Commercial blueberries—both wild and cultivated —are all native to North America.",
      "type_id": 1,
      "price": 3,
      "shop_id": 6,
      "sale_price": null,
      "sku": "3",
      "quantity": 30,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "3",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/3/blueberries.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/3/conversions/blueberries-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "580",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/579/Bluberries-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/579/conversions/Bluberries-2-thumbnail.jpg"
        },
        {
          "id": "581",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/580/Bluberries.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/580/conversions/Bluberries-thumbnail.jpg"
        },
        {
          "id": "740",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/739/blueberries_relyfn.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/739/conversions/blueberries_relyfn-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:40:00.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 3,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 3,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 4,
      "name": "Brussels Sprout",
      "slug": "brussels-sprout",
      "description": "The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds. The leaf vegetables are typically 1.5–4.0 cm in diameter and look like miniature cabbages. The Brussels sprout has long been popular in Brussels, Belgium, and may have gained its name there.",
      "type_id": 1,
      "price": 5,
      "shop_id": 6,
      "sale_price": 3,
      "sku": "4",
      "quantity": 17,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "4",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/4/BrusselsSprouts.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/4/conversions/BrusselsSprouts-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "582",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/581/Brussels-Sprout-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/581/conversions/Brussels-Sprout-1-thumbnail.jpg"
        },
        {
          "id": "583",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/582/Brussels-Sprout-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/582/conversions/Brussels-Sprout-2-thumbnail.jpg"
        },
        {
          "id": "584",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/583/Brussels-Sprout.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/583/conversions/Brussels-Sprout-thumbnail.jpg"
        },
        {
          "id": "741",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/740/BrusselsSprouts_adwhet.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/740/conversions/BrusselsSprouts_adwhet-thumbnail.jpg"
        },
        {
          "id": "0582",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/581/Brussels-Sprout-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/581/conversions/Brussels-Sprout-1-thumbnail.jpg"
        },
        {
          "id": "0583",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/582/Brussels-Sprout-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/582/conversions/Brussels-Sprout-2-thumbnail.jpg"
        },
        {
          "id": "0584",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/583/Brussels-Sprout.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/583/conversions/Brussels-Sprout-thumbnail.jpg"
        },
        {
          "id": "0741",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/740/BrusselsSprouts_adwhet.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/740/conversions/BrusselsSprouts_adwhet-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:42:32.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 4,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 4,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 5,
      "name": "Celery Stick",
      "slug": "celery-stick",
      "description": "celery stick - celery stalks cut into small sticks. crudites - raw vegetables cut into bite-sized strips and served with a dip. celery - stalks eaten raw or cooked or used as seasoning.",
      "type_id": 1,
      "price": 6,
      "shop_id": 6,
      "sale_price": 5,
      "sku": "5",
      "quantity": 18,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "5",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/5/CelerySticks.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/5/conversions/CelerySticks-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "585",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/584/Celery-Stick-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/584/conversions/Celery-Stick-1-thumbnail.jpg"
        },
        {
          "id": "586",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/585/Celery-Stick-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/585/conversions/Celery-Stick-2-thumbnail.jpg"
        },
        {
          "id": "587",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/586/Celery-Stick.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/586/conversions/Celery-Stick-thumbnail.jpg"
        },
        {
          "id": "742",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/741/CelerySticks_ulljfz.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/741/conversions/CelerySticks_ulljfz-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:44:09.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 5,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 6,
      "name": "Clementines",
      "slug": "clementines",
      "description": "clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer. The exterior is a deep orange colour with a smooth, glossy appearance.",
      "type_id": 1,
      "price": 3,
      "shop_id": 6,
      "sale_price": 2.5,
      "sku": "6",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "6",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/6/clementines.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/6/conversions/clementines-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "590",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/589/Clementines-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/589/conversions/Clementines-1-thumbnail.jpg"
        },
        {
          "id": "591",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/590/Clementines.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/590/conversions/Clementines-thumbnail.jpg"
        },
        {
          "id": "592",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/591/Clementines-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/591/conversions/Clementines-2-thumbnail.jpg"
        },
        {
          "id": "743",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/742/clementines_h74qrp.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/742/conversions/clementines_h74qrp-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:45:18.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 6,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 6,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 7,
      "name": "Sweet Corn",
      "slug": "sweet-corn",
      "description": "Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago. The leafy stalk of the plant produces pollen inflorescences and separate ovuliferous inflorescences called ears that yield kernels or seeds, which are fruits.",
      "type_id": 1,
      "price": 5,
      "shop_id": 6,
      "sale_price": 4,
      "sku": "7",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "7",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/7/Corn.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/7/conversions/Corn-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "593",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/592/Sweet-Corn-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/592/conversions/Sweet-Corn-1-thumbnail.jpg"
        },
        {
          "id": "594",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/593/Sweet-Corn-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/593/conversions/Sweet-Corn-2-thumbnail.jpg"
        },
        {
          "id": "595",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/594/Sweet-Corn.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/594/conversions/Sweet-Corn-thumbnail.jpg"
        },
        {
          "id": "744",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/743/Corn_dlrtbv.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/743/conversions/Corn_dlrtbv-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:48:20.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 7,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 7,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 8,
      "name": "Cucumber",
      "slug": "cucumber",
      "description": "Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created.",
      "type_id": 1,
      "price": 2.5,
      "shop_id": 6,
      "sale_price": null,
      "sku": "8",
      "quantity": 25,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "2.5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "8",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/8/Cucumber.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/8/conversions/Cucumber-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "596",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/595/Cucumber-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/595/conversions/Cucumber-1-thumbnail.jpg"
        },
        {
          "id": "597",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/596/Cucumber-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/596/conversions/Cucumber-2-thumbnail.jpg"
        },
        {
          "id": "598",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/597/Cucumber.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/597/conversions/Cucumber-thumbnail.jpg"
        },
        {
          "id": "745",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/744/Cucumber_w6hlxr.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/744/conversions/Cucumber_w6hlxr-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:49:18.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 8,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 8,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 9,
      "name": "Dates",
      "slug": "dates",
      "description": "Phoenix dactylifera, commonly known as date or date palm, is a flowering plant species in the palm family, Arecaceae, cultivated for its edible sweet fruit.",
      "type_id": 1,
      "price": 10,
      "shop_id": 6,
      "sale_price": 8,
      "sku": "9",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1.5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "10",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/10/Dates.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/10/conversions/Dates-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "599",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/598/Dates-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/598/conversions/Dates-1-thumbnail.jpg"
        },
        {
          "id": "600",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/599/Dates-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/599/conversions/Dates-2-thumbnail.jpg"
        },
        {
          "id": "601",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/600/Dates.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/600/conversions/Dates-thumbnail.jpg"
        },
        {
          "id": "746",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/745/Dates_pq4oad.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/745/conversions/Dates_pq4oad-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:50:41.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 9,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 9,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 10,
      "name": "French Green Beans",
      "slug": "french-green-beans",
      "description": "Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean. Immature or young pods of the runner bean, yardlong bean, and hyacinth bean are used in a similar way.",
      "type_id": 1,
      "price": 1.5,
      "shop_id": 6,
      "sale_price": 1.2,
      "sku": "10",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "0.5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "11",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/11/FrenchGreenBeans.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/11/conversions/FrenchGreenBeans-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "602",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/601/French-Green-Beans-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/601/conversions/French-Green-Beans-1-thumbnail.jpg"
        },
        {
          "id": "603",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/602/French-Green-Beans-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/602/conversions/French-Green-Beans-2-thumbnail.jpg"
        },
        {
          "id": "604",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/603/French-Green-Beans.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/603/conversions/French-Green-Beans-thumbnail.jpg"
        },
        {
          "id": "747",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/746/FrenchGreenBeans_azivow.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/746/conversions/FrenchGreenBeans_azivow-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:51:28.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 10,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 10,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 11,
      "name": "Green Beans",
      "slug": "green-beans",
      "description": "Green beans are the unripe, young fruit and protective pods of various cultivars of the common bean. Immature or young pods of the runner bean, yardlong bean, and hyacinth bean are used in a similar way.",
      "type_id": 1,
      "price": 5,
      "shop_id": 6,
      "sale_price": 4,
      "sku": "11",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "12",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/12/GreenBeans.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/12/conversions/GreenBeans-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "748",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/747/FrenchGreenBeans_azivow.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/747/conversions/FrenchGreenBeans_azivow-thumbnail.jpg"
        },
        {
          "id": "749",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/748/French-Green-Beans-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/748/conversions/French-Green-Beans-1-thumbnail.jpg"
        },
        {
          "id": "750",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/749/French-Green-Beans-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/749/conversions/French-Green-Beans-2-thumbnail.jpg"
        },
        {
          "id": "751",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/750/French-Green-Beans.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/750/conversions/French-Green-Beans-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:52:16.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 11,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 11,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 12,
      "name": "Lime",
      "slug": "lime",
      "description": "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      "type_id": 1,
      "price": 2,
      "shop_id": 6,
      "sale_price": 1.5,
      "sku": "12",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "4pc(s)",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "13",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/13/GreenLimes.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/13/conversions/GreenLimes-thumbnail.jpg"
      },
      "gallery": [
        {
          "id": "570",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/569/lime-1.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/569/conversions/lime-1-thumbnail.jpg"
        },
        {
          "id": "572",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/571/lime.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/571/conversions/lime-thumbnail.jpg"
        },
        {
          "id": "754",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/753/lime-2.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/753/conversions/lime-2-thumbnail.jpg"
        },
        {
          "id": "755",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/754/GreenLimes_jrodle.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/754/conversions/GreenLimes_jrodle-thumbnail.jpg"
        }
      ],
      "deleted_at": null,
      "created_at": "2021-03-08T10:53:23.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 12,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 12,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 13,
      "name": "Mango",
      "slug": "mango",
      "description": "A mango is a juicy stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae.",
      "type_id": 1,
      "price": 2.5,
      "shop_id": 6,
      "sale_price": null,
      "sku": "13",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "14",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/14/Mangoes.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/14/conversions/Mangoes-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T10:54:24.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 13,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 13,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 14,
      "name": "Pepper",
      "slug": "pepper",
      "description": "Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning. When fresh and fully mature, it is about 5 mm in diameter and dark red, and contains a single seed, like all drupes",
      "type_id": 1,
      "price": 6,
      "shop_id": 6,
      "sale_price": 5,
      "sku": "14",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "15",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/15/MiniPeppers.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/15/conversions/MiniPeppers-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T10:55:14.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 14,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 14,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 15,
      "name": "Pears",
      "slug": "pears",
      "description": "The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pear are valued for their edible fruit and juices while others are cultivated as trees.",
      "type_id": 1,
      "price": 4,
      "shop_id": 6,
      "sale_price": 3.5,
      "sku": "15",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "16",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/16/pears.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/16/conversions/pears-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T10:55:58.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 15,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 15,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 16,
      "name": "Peeled Baby Carrot",
      "slug": "peeled-baby-carrot",
      "description": "The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds.",
      "type_id": 1,
      "price": 2.5,
      "shop_id": 6,
      "sale_price": 2.2,
      "sku": "16",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "17",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/17/Peeled-Carrots.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/17/conversions/Peeled-Carrots-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T10:56:44.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 16,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 16,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 17,
      "name": "Cherry",
      "slug": "cherry",
      "description": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe. Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus",
      "type_id": 1,
      "price": 2,
      "shop_id": 6,
      "sale_price": 1.8,
      "sku": "16",
      "quantity": 15,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "18",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/18/RedCherries.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/18/conversions/RedCherries-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T10:58:02.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 17,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 17,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 18,
      "name": "Strawberry",
      "slug": "strawberry",
      "description": "The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.",
      "type_id": 1,
      "price": 10,
      "shop_id": 6,
      "sale_price": 8,
      "sku": "17",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "19",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/19/strawberry.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/19/conversions/strawberry-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T10:58:54.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 18,
            "category_id": 1
          }
        },
        {
          "id": 2,
          "name": "Fruits",
          "slug": "fruits",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:22:04.000000Z",
          "updated_at": "2021-03-08T07:22:04.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 18,
            "category_id": 2
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 19,
      "name": "Mix Vegetable Platter",
      "slug": "mix-vegetable-platter",
      "description": "Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh.",
      "type_id": 1,
      "price": 4,
      "shop_id": 6,
      "sale_price": 3.2,
      "sku": "19",
      "quantity": 100,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "0.5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "20",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/20/VeggiePlatter.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/20/conversions/VeggiePlatter-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T11:00:12.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 19,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 19,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 20,
      "name": "Lemon",
      "slug": "lemon",
      "description": "The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.",
      "type_id": 1,
      "price": 1.5,
      "shop_id": 6,
      "sale_price": 1.2,
      "sku": "20",
      "quantity": 60,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "4pc(s)",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "21",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/21/Yellow-Limes.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/21/conversions/Yellow-Limes-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-08T11:01:10.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 1,
          "name": "Fruits & Vegetables",
          "slug": "fruits-vegetables",
          "icon": FruitsVegetable,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T07:21:31.000000Z",
          "updated_at": "2021-03-08T07:21:31.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 20,
            "category_id": 1
          }
        },
        {
          "id": 3,
          "name": "Vegetables",
          "slug": "vegetables",
          "icon": null,
          "image": {
            "id": null,
            "original": null,
            "thumbnail": null
          },
          "details": null,
          "parent": 1,
          "type_id": 1,
          "created_at": "2021-03-08T07:57:48.000000Z",
          "updated_at": "2021-03-09T11:51:24.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 20,
            "category_id": 3
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 181,
      "name": "Signature Salmon",
      "slug": "signature-salmon",
      "description": "Salmon is a common food classified as an oily fish with a rich content of protein and omega-3 fatty acids",
      "type_id": 1,
      "price": 4.95,
      "shop_id": 6,
      "sale_price": null,
      "sku": "1400",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "183",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/183/SignatureSalmon_fstp4m.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/183/conversions/SignatureSalmon_fstp4m-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T19:54:48.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 181,
            "category_id": 4
          }
        },
        {
          "id": 5,
          "name": "Fresh Fish",
          "slug": "fresh-fish",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:47.000000Z",
          "updated_at": "2021-03-08T08:54:47.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 181,
            "category_id": 5
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 182,
      "name": "Cod Fillet",
      "slug": "cod-fillet",
      "description": "Cod is the common name for the demersal fish genus Gadus, belonging to the family Gadidae. Cod is also used as part of the common name for a number of other fish species, and some species suggested to belong to genus Gadus are not called cod.",
      "type_id": 1,
      "price": 10,
      "shop_id": 6,
      "sale_price": 7.5,
      "sku": "1401",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "184",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/184/codfillet_u0mti1.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/184/conversions/codfillet_u0mti1-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T19:55:57.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 182,
            "category_id": 4
          }
        },
        {
          "id": 5,
          "name": "Fresh Fish",
          "slug": "fresh-fish",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:47.000000Z",
          "updated_at": "2021-03-08T08:54:47.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 182,
            "category_id": 5
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 183,
      "name": "Swordfish Fillet",
      "slug": "swordfish-fillet",
      "description": "The swordfish meat has a very delicate flavour, meaty and mild. Swordfish, also known as broadbills, is an oily fish similar to tuna, chunky meat without bones.",
      "type_id": 1,
      "price": 10,
      "shop_id": 6,
      "sale_price": 7.5,
      "sku": "1402",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1.5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "185",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/185/swordfish_smniuv.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/185/conversions/swordfish_smniuv-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T19:57:06.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 183,
            "category_id": 4
          }
        },
        {
          "id": 5,
          "name": "Fresh Fish",
          "slug": "fresh-fish",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:47.000000Z",
          "updated_at": "2021-03-08T08:54:47.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 183,
            "category_id": 5
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 184,
      "name": "Halibut Fillet",
      "slug": "halibut-fillet",
      "description": "Hippoglossus stenolepis, the Pacific halibut, is a species of righteye flounder. This very large species of flatfish is native to the North Pacific and is fished by commercial fisheries, sport fishers, and subsistence fishers.",
      "type_id": 1,
      "price": 15,
      "shop_id": 6,
      "sale_price": 12,
      "sku": "1403",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "2lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "186",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/186/halibut_jaz7ju.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/186/conversions/halibut_jaz7ju-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T19:59:09.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 184,
            "category_id": 4
          }
        },
        {
          "id": 5,
          "name": "Fresh Fish",
          "slug": "fresh-fish",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:47.000000Z",
          "updated_at": "2021-03-08T08:54:47.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 184,
            "category_id": 5
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 185,
      "name": "Tilapia Fillet",
      "slug": "tilapia-fillet",
      "description": "Tilapia is the common name for nearly a hundred species of cichlid fish from the coelotilapine, coptodonine, heterotilapine, oreochromine, pelmatolapiine and tilapiine tribes, with the economically most important species placed in Coptodonini and Oreochromini.",
      "type_id": 1,
      "price": 7.89,
      "shop_id": 6,
      "sale_price": null,
      "sku": "1404",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "187",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/187/TilapiaFillet_a2urhk.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/187/conversions/TilapiaFillet_a2urhk-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T20:00:15.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 185,
            "category_id": 4
          }
        },
        {
          "id": 5,
          "name": "Fresh Fish",
          "slug": "fresh-fish",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:47.000000Z",
          "updated_at": "2021-03-08T08:54:47.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 185,
            "category_id": 5
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 186,
      "name": "Fresh Beef",
      "slug": "fresh-beef",
      "description": "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      "type_id": 1,
      "price": 6,
      "shop_id": 6,
      "sale_price": null,
      "sku": "1405",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "188",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/188/beef_xkxhnb.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/188/conversions/beef_xkxhnb-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T20:07:09.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 186,
            "category_id": 4
          }
        },
        {
          "id": 6,
          "name": "Meat",
          "slug": "meat",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:55:14.000000Z",
          "updated_at": "2021-03-08T08:55:14.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 186,
            "category_id": 6
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 187,
      "name": "Sliced Turkey Breast",
      "slug": "sliced-turkey-breast",
      "description": "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      "type_id": 1,
      "price": 8.5,
      "shop_id": 6,
      "sale_price": 7.5,
      "sku": "1406",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "1lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "189",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/189/sliced_turkey_breast_szb8jg.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/189/conversions/sliced_turkey_breast_szb8jg-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T20:09:09.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 187,
            "category_id": 4
          }
        },
        {
          "id": 6,
          "name": "Meat",
          "slug": "meat",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:55:14.000000Z",
          "updated_at": "2021-03-08T08:55:14.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 187,
            "category_id": 6
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 188,
      "name": "Chicken Thighs",
      "slug": "chicken-thighs",
      "description": "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      "type_id": 1,
      "price": 7.89,
      "shop_id": 6,
      "sale_price": null,
      "sku": "1407",
      "quantity": 49,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "190",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/190/chicken_thigh_yrdfwh.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/190/conversions/chicken_thigh_yrdfwh-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T20:10:23.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 188,
            "category_id": 4
          }
        },
        {
          "id": 6,
          "name": "Meat",
          "slug": "meat",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:55:14.000000Z",
          "updated_at": "2021-03-08T08:55:14.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 188,
            "category_id": 6
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 189,
      "name": "Chicken Breast",
      "slug": "chicken-breast",
      "description": "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      "type_id": 1,
      "price": 9,
      "shop_id": 6,
      "sale_price": null,
      "sku": "1408",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "191",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/191/chicken_brest_ribcxo.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/191/conversions/chicken_brest_ribcxo-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T20:11:23.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 189,
            "category_id": 4
          }
        },
        {
          "id": 6,
          "name": "Meat",
          "slug": "meat",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:55:14.000000Z",
          "updated_at": "2021-03-08T08:55:14.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 189,
            "category_id": 6
          }
        }
      ],
      "tags": [],
      "variations": []
    },
    {
      "id": 190,
      "name": "Beef Steak",
      "slug": "beef-steak",
      "description": "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle.",
      "type_id": 1,
      "price": 15,
      "shop_id": 6,
      "sale_price": 12,
      "sku": "1410",
      "quantity": 50,
      "in_stock": 1,
      "is_taxable": 0,
      "shipping_class_id": null,
      "status": "publish",
      "product_type": "simple",
      "unit": "5lb",
      "height": null,
      "width": null,
      "length": null,
      "image": {
        "id": "192",
        "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/192/steak_okxpjo.jpg",
        "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/192/conversions/steak_okxpjo-thumbnail.jpg"
      },
      "gallery": [],
      "deleted_at": null,
      "created_at": "2021-03-10T20:13:24.000000Z",
      "updated_at": "2021-06-27T03:56:42.000000Z",
      "max_price": null,
      "min_price": null,
      "type": {
        "id": 1,
        "name": "Grocery",
        "slug": "grocery",
        "icon": FruitsVegetable,
        "image": null,
        "created_at": "2021-03-08T07:18:25.000000Z",
        "updated_at": "2021-03-08T07:18:25.000000Z"
      },
      "shop": {
        "id": 6,
        "owner_id": 1,
        "name": "Grocery Shop",
        "slug": "grocery-shop",
        "description": "The grocery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
        "cover_image": {
          "id": "894",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/Untitled-2.jpg",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/892/conversions/Untitled-2-thumbnail.jpg"
        },
        "logo": {
          "id": "893",
          "original": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/Group-36321.png",
          "thumbnail": "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/891/conversions/Group-36321-thumbnail.jpg"
        },
        "is_active": 1,
        "address": {
          "zip": "61032",
          "city": "Freeport",
          "state": "Illinois",
          "country": "USA",
          "street_address": "1986  Spinnaker Lane"
        },
        "settings": {
          "contact": "018927525111",
          "socials": [
            {
              "url": "https://www.facebook.com/",
              "icon": FacebookIcon
            },
            {
              "url": "https://www.instagram.com/",
              "icon": InstagramIcon
            },
            {
              "url": "https://www.twitter.com/",
              "icon": TwitterIcon
            }
          ],
          "website": "https://redq.io/",
          "location": {
            "lat": 38.9032325,
            "lng": -77.0211068,
            "city": "Washington",
            "state": "DC",
            "country": "United States",
            "formattedAddress": "New York Ave NW, Washington, DC, USA"
          }
        },
        "created_at": "2021-06-27T03:48:23.000000Z",
        "updated_at": "2021-07-08T09:22:38.000000Z"
      },
      "categories": [
        {
          "id": 4,
          "name": "Meat & Fish",
          "slug": "meat-fish",
          "icon": MeatFish,
          "image": [],
          "details": null,
          "parent": null,
          "type_id": 1,
          "created_at": "2021-03-08T08:54:16.000000Z",
          "updated_at": "2021-03-08T08:54:16.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 190,
            "category_id": 4
          }
        },
        {
          "id": 6,
          "name": "Meat",
          "slug": "meat",
          "icon": null,
          "image": [],
          "details": null,
          "parent": 4,
          "type_id": 1,
          "created_at": "2021-03-08T08:55:14.000000Z",
          "updated_at": "2021-03-08T08:55:14.000000Z",
          "deleted_at": null,
          "pivot": {
            "product_id": 190,
            "category_id": 6
          }
        }
      ],
      "tags": [],
      "variations": []
    }
  ],
  "first_page_url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=1",
  "from": 1,
  "last_page": 9,
  "last_page_url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=9",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=1",
      "label": "1",
      "active": true
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=2",
      "label": "2",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=3",
      "label": "3",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=4",
      "label": "4",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=5",
      "label": "5",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=6",
      "label": "6",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=7",
      "label": "7",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=8",
      "label": "8",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=9",
      "label": "9",
      "active": false
    },
    {
      "url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=2",
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": "https://pickbazar-laravel/products?search=type.slug%3Agrocery&searchJoin=and&limit=30&page=2",
  "path": "https://pickbazar-laravel/products",
  "per_page": "30",
  "prev_page_url": null,
  "to": 30,
  "total": 249
}

export const bakery = {
    "current_page": 1,
    "data": [
        {
            "id": 467,
            "name": "Ritai Organic Orange Juice 500 ml",
            "slug": "ritai-organic-orange-juice-500-ml",
            "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
            "type_id": 2,
            "price": 1.8000000000000000444089209850062616169452667236328125,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3000",
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
                "id": "490",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/489\/Juice-5_eqrtuu.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/489\/conversions\/Juice-5_eqrtuu-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "605",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/604\/Organic-orange-juice-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/604\/conversions\/Organic-orange-juice-1-thumbnail.jpg"
                },
                {
                    "id": "606",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/605\/Organic-orange-juice.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/605\/conversions\/Organic-orange-juice-thumbnail.jpg"
                },
                {
                    "id": "795",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/793\/Juice-5_eqrtuu.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/793\/conversions\/Juice-5_eqrtuu-thumbnail.jpg"
                },
                {
                    "id": "796",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/794\/Juice-1_lx8xnf.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/794\/conversions\/Juice-1_lx8xnf-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:13:11.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 89,
                    "name": "Juice",
                    "slug": "juice-1",
                    "icon": null,
                    "image": {
                        "id": "423",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/Juice_q1dlke.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/conversions\/Juice_q1dlke-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:34:33.000000Z",
                    "updated_at": "2021-03-13T14:34:33.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 467,
                        "category_id": 89
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 468,
            "name": "Wonderful Pomegranate Juice, 300 ml",
            "slug": "wonderful-pomegranate-juice-300-ml",
            "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
            "type_id": 2,
            "price": 3,
            "shop_id": 5,
            "sale_price": 2.399999999999999911182158029987476766109466552734375,
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
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/490\/Juice5_bz8od4.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/490\/conversions\/Juice5_bz8od4-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "807",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/805\/Juice5_bz8od4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/805\/conversions\/Juice5_bz8od4-thumbnail.jpg"
                },
                {
                    "id": "808",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/806\/Juice5_bz8od4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/806\/conversions\/Juice5_bz8od4-thumbnail.jpg"
                },
                {
                    "id": "809",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/807\/Juice5_bz8od4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/807\/conversions\/Juice5_bz8od4-thumbnail.jpg"
                },
                {
                    "id": "810",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/808\/Juice5_bz8od4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/808\/conversions\/Juice5_bz8od4-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:14:15.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 89,
                    "name": "Juice",
                    "slug": "juice-1",
                    "icon": null,
                    "image": {
                        "id": "423",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/Juice_q1dlke.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/conversions\/Juice_q1dlke-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:34:33.000000Z",
                    "updated_at": "2021-03-13T14:34:33.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 468,
                        "category_id": 89
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 469,
            "name": "Kirkland Organic Lemonade, 150 ml",
            "slug": "kirkland-organic-lemonade-150-ml",
            "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice..",
            "type_id": 2,
            "price": 1.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3002",
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
                "id": "492",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/491\/Juice4_1_xt54si.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/491\/conversions\/Juice4_1_xt54si-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:15:17.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 89,
                    "name": "Juice",
                    "slug": "juice-1",
                    "icon": null,
                    "image": {
                        "id": "423",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/Juice_q1dlke.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/conversions\/Juice_q1dlke-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:34:33.000000Z",
                    "updated_at": "2021-03-13T14:34:33.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 469,
                        "category_id": 89
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 470,
            "name": "Sun Tropics Organic Mango Nectar,250ml",
            "slug": "sun-tropics-organic-mango-nectar-250ml",
            "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice",
            "type_id": 2,
            "price": 2.25,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3003",
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
                "id": "493",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/492\/Juice-1_lx8xnf.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/492\/conversions\/Juice-1_lx8xnf-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:16:18.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 89,
                    "name": "Juice",
                    "slug": "juice-1",
                    "icon": null,
                    "image": {
                        "id": "423",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/Juice_q1dlke.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/conversions\/Juice_q1dlke-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:34:33.000000Z",
                    "updated_at": "2021-03-13T14:34:33.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 470,
                        "category_id": 89
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 471,
            "name": "Pressed Juicery Super Citrus Plus, 200ml",
            "slug": "pressed-juicery-super-citrus-plus-200ml",
            "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice...",
            "type_id": 2,
            "price": 1.25,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3004",
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
                "id": "494",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/493\/Juice2_lnhqsp.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/493\/conversions\/Juice2_lnhqsp-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "797",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/795\/Juice2_lnhqsp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/795\/conversions\/Juice2_lnhqsp-thumbnail.jpg"
                },
                {
                    "id": "798",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/796\/Juice2_lnhqsp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/796\/conversions\/Juice2_lnhqsp-thumbnail.jpg"
                },
                {
                    "id": "799",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/797\/Juice2_lnhqsp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/797\/conversions\/Juice2_lnhqsp-thumbnail.jpg"
                },
                {
                    "id": "800",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/798\/Juice2_lnhqsp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/798\/conversions\/Juice2_lnhqsp-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:17:12.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 89,
                    "name": "Juice",
                    "slug": "juice-1",
                    "icon": null,
                    "image": {
                        "id": "423",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/Juice_q1dlke.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/conversions\/Juice_q1dlke-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:34:33.000000Z",
                    "updated_at": "2021-03-13T14:34:33.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 471,
                        "category_id": 89
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 472,
            "name": "Kirkland Cranberry Juice Cocktail, 200ml",
            "slug": "kirkland-cranberry-juice-cocktail-200ml",
            "description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice.",
            "type_id": 2,
            "price": 2,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3006",
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
                "id": "495",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/494\/Juice1_nc4tbk.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/494\/conversions\/Juice1_nc4tbk-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "801",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/799\/Juice1_nc4tbk.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/799\/conversions\/Juice1_nc4tbk-thumbnail.jpg"
                },
                {
                    "id": "802",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/800\/Juice1_nc4tbk.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/800\/conversions\/Juice1_nc4tbk-thumbnail.jpg"
                },
                {
                    "id": "805",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/803\/Juice5_bz8od4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/803\/conversions\/Juice5_bz8od4-thumbnail.jpg"
                },
                {
                    "id": "806",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/804\/Juice5_bz8od4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/804\/conversions\/Juice5_bz8od4-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:19:08.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 89,
                    "name": "Juice",
                    "slug": "juice-1",
                    "icon": null,
                    "image": {
                        "id": "423",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/Juice_q1dlke.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/422\/conversions\/Juice_q1dlke-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:34:33.000000Z",
                    "updated_at": "2021-03-13T14:34:33.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 472,
                        "category_id": 89
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 473,
            "name": "Freshly Brewed Organic Green Tea",
            "slug": "freshly-brewed-organic-green-tea",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 0.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3007",
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
                "id": "496",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/495\/Coffee_Tea_oo00oz.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/495\/conversions\/Coffee_Tea_oo00oz-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "811",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/809\/Coffee_Tea_oo00oz.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/809\/conversions\/Coffee_Tea_oo00oz-thumbnail.jpg"
                },
                {
                    "id": "815",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/813\/Coffee_Tea-1_rnxxwg.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/813\/conversions\/Coffee_Tea-1_rnxxwg-thumbnail.jpg"
                },
                {
                    "id": "816",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/814\/Coffee_Tea_oo00oz.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/814\/conversions\/Coffee_Tea_oo00oz-thumbnail.jpg"
                },
                {
                    "id": "817",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/815\/Coffee_Tea-1_rnxxwg.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/815\/conversions\/Coffee_Tea-1_rnxxwg-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:20:08.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 473,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 474,
            "name": "Fresh Grinded Frapp\u00e9 coffee, 50ml",
            "slug": "fresh-grinded-frappe-coffee-50ml",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 1.5,
            "shop_id": 5,
            "sale_price": 1.25,
            "sku": "3008",
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
                "id": "497",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/496\/Coffee_Tea-5_ktc2il.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/496\/conversions\/Coffee_Tea-5_ktc2il-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:21:09.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 474,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 475,
            "name": "Caffee Nero Mocha Late 50ml",
            "slug": "caffee-nero-mocha-late-50ml",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 1.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3009",
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
                "id": "498",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/497\/Coffee_Tea-3_zlgz6x.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/497\/conversions\/Coffee_Tea-3_zlgz6x-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "822",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/820\/Coffee_Tea-3_zlgz6x.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/820\/conversions\/Coffee_Tea-3_zlgz6x-thumbnail.jpg"
                },
                {
                    "id": "823",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/821\/Coffee_Tea-1_rnxxwg.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/821\/conversions\/Coffee_Tea-1_rnxxwg-thumbnail.jpg"
                },
                {
                    "id": "824",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/822\/Coffee_Tea-2_gblecp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/822\/conversions\/Coffee_Tea-2_gblecp-thumbnail.jpg"
                },
                {
                    "id": "825",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/823\/Coffee_Tea-3_zlgz6x.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/823\/conversions\/Coffee_Tea-3_zlgz6x-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:22:09.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 475,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 476,
            "name": "Nescafe Clasico Instant Coffee, 2 x 10.5 oz",
            "slug": "nescafe-clasico-instant-coffee-2-x-10-5-oz",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 1,
            "shop_id": 5,
            "sale_price": 0.6999999999999999555910790149937383830547332763671875,
            "sku": "3010",
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
                "id": "499",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/498\/Coffee_Tea-6_wlaqgp.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/498\/conversions\/Coffee_Tea-6_wlaqgp-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "826",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/824\/Coffee_Tea-6_wlaqgp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/824\/conversions\/Coffee_Tea-6_wlaqgp-thumbnail.jpg"
                },
                {
                    "id": "827",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/825\/Coffee_Tea-2_gblecp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/825\/conversions\/Coffee_Tea-2_gblecp-thumbnail.jpg"
                },
                {
                    "id": "828",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/826\/Coffee_Tea-3_zlgz6x.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/826\/conversions\/Coffee_Tea-3_zlgz6x-thumbnail.jpg"
                },
                {
                    "id": "829",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/827\/Coffee_Tea-5_ktc2il.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/827\/conversions\/Coffee_Tea-5_ktc2il-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:23:34.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 476,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 477,
            "name": "Fresh Traditional English Tea",
            "slug": "fresh-traditional-english-tea",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 0.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3011",
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
                "id": "500",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/499\/Coffee_Tea-1_rnxxwg.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/499\/conversions\/Coffee_Tea-1_rnxxwg-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:24:30.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 477,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 478,
            "name": "Freshly Brewed Black Coffee",
            "slug": "freshly-brewed-black-coffee",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 0.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3012",
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
                "id": "501",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/500\/Coffee_Tea-2_gblecp.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/500\/conversions\/Coffee_Tea-2_gblecp-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "818",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/816\/Coffee_Tea-2_gblecp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/816\/conversions\/Coffee_Tea-2_gblecp-thumbnail.jpg"
                },
                {
                    "id": "819",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/817\/Coffee_Tea-7_nijstz.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/817\/conversions\/Coffee_Tea-7_nijstz-thumbnail.jpg"
                },
                {
                    "id": "820",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/818\/Coffee_Tea-5_ktc2il.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/818\/conversions\/Coffee_Tea-5_ktc2il-thumbnail.jpg"
                },
                {
                    "id": "821",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/819\/Coffee_Tea-6_wlaqgp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/819\/conversions\/Coffee_Tea-6_wlaqgp-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:25:25.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 478,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 479,
            "name": "Peet Coffee Decaf Major Dickason Blend, 2 lb",
            "slug": "peet-coffee-decaf-major-dickason-blend-2-lb",
            "description": "Coffee tea refers to herbal tea made from non-bean parts of the coffea (coffee plant), and may refer to: Coffee-leaf tea \u00b7 Coffee cherry tea. Ground coffee, brewed",
            "type_id": 2,
            "price": 2.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3014",
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
                "id": "502",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/501\/Coffee_Tea-7_nijstz.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/501\/conversions\/Coffee_Tea-7_nijstz-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:26:56.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 90,
                    "name": "Coffee & Tea",
                    "slug": "coffee-tea",
                    "icon": null,
                    "image": {
                        "id": "424",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/Coffee_j6vccc.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/423\/conversions\/Coffee_j6vccc-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:15.000000Z",
                    "updated_at": "2021-03-13T14:36:15.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 479,
                        "category_id": 90
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 480,
            "name": "Raspberry Crumble Cookies 300g",
            "slug": "raspberry-crumble-cookies-300g",
            "description": "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
            "type_id": 2,
            "price": 4,
            "shop_id": 5,
            "sale_price": 3.5,
            "sku": "3050",
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
                "id": "503",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/502\/Cookies-4_vmbpqm.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/502\/conversions\/Cookies-4_vmbpqm-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "830",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/828\/Cookies-4_vmbpqm.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/828\/conversions\/Cookies-4_vmbpqm-thumbnail.jpg"
                },
                {
                    "id": "831",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/829\/Cookies-3_x85w4w.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/829\/conversions\/Cookies-3_x85w4w-thumbnail.jpg"
                },
                {
                    "id": "832",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/830\/Cookies-2_osbjsh.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/830\/conversions\/Cookies-2_osbjsh-thumbnail.jpg"
                },
                {
                    "id": "833",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/831\/Cookies_lquuja.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/831\/conversions\/Cookies_lquuja-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:32:54.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 91,
                    "name": "Cookies",
                    "slug": "cookies",
                    "icon": null,
                    "image": {
                        "id": "425",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/Cookies_ggshwp.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/conversions\/Cookies_ggshwp-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:44.000000Z",
                    "updated_at": "2021-03-13T14:36:44.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 480,
                        "category_id": 91
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 481,
            "name": "Chocolate Chip Cookie, 250g",
            "slug": "chocolate-chip-cookie-250g",
            "description": "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
            "type_id": 2,
            "price": 4,
            "shop_id": 5,
            "sale_price": 2.5,
            "sku": "3051",
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
                "id": "504",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/503\/Cookies-3_x85w4w.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/503\/conversions\/Cookies-3_x85w4w-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "834",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/832\/Cookies-3_x85w4w.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/832\/conversions\/Cookies-3_x85w4w-thumbnail.jpg"
                },
                {
                    "id": "835",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/833\/Cookies-5_oire6k.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/833\/conversions\/Cookies-5_oire6k-thumbnail.jpg"
                },
                {
                    "id": "836",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/834\/Cookies_lquuja.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/834\/conversions\/Cookies_lquuja-thumbnail.jpg"
                },
                {
                    "id": "837",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/835\/Cookies-1_d8mfwp.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/835\/conversions\/Cookies-1_d8mfwp-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:34:02.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 91,
                    "name": "Cookies",
                    "slug": "cookies",
                    "icon": null,
                    "image": {
                        "id": "425",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/Cookies_ggshwp.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/conversions\/Cookies_ggshwp-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:44.000000Z",
                    "updated_at": "2021-03-13T14:36:44.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 481,
                        "category_id": 91
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 482,
            "name": "Freshly Baked Chocolate Chip Cookie, 250g",
            "slug": "freshly-baked-chocolate-chip-cookie-250g",
            "description": "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
            "type_id": 2,
            "price": 4.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3054",
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
                "id": "505",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/504\/Cookies_lquuja.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/504\/conversions\/Cookies_lquuja-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:34:53.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 91,
                    "name": "Cookies",
                    "slug": "cookies",
                    "icon": null,
                    "image": {
                        "id": "425",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/Cookies_ggshwp.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/conversions\/Cookies_ggshwp-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:44.000000Z",
                    "updated_at": "2021-03-13T14:36:44.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 482,
                        "category_id": 91
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 483,
            "name": "Freshly Baked Mixed Cookies, 490g",
            "slug": "freshly-baked-mixed-cookies-490g",
            "description": "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
            "type_id": 2,
            "price": 4.5,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3056",
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
                "id": "506",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/505\/Cookies-1_d8mfwp.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/505\/conversions\/Cookies-1_d8mfwp-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T09:36:34.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 91,
                    "name": "Cookies",
                    "slug": "cookies",
                    "icon": null,
                    "image": {
                        "id": "425",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/Cookies_ggshwp.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/conversions\/Cookies_ggshwp-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:44.000000Z",
                    "updated_at": "2021-03-13T14:36:44.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 483,
                        "category_id": 91
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 484,
            "name": "Freshly Baked Mixed Cookies, 890g",
            "slug": "freshly-baked-mixed-cookies-890g",
            "description": "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts",
            "type_id": 2,
            "price": 8,
            "shop_id": 5,
            "sale_price": 7,
            "sku": "3060",
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
                "id": "507",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/506\/Cookies-2_osbjsh.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/506\/conversions\/Cookies-2_osbjsh-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "842",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/840\/Cookies-2_osbjsh.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/840\/conversions\/Cookies-2_osbjsh-thumbnail.jpg"
                },
                {
                    "id": "844",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/842\/Cookies-4_vmbpqm.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/842\/conversions\/Cookies-4_vmbpqm-thumbnail.jpg"
                },
                {
                    "id": "845",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/843\/Cookies-5_oire6k.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/843\/conversions\/Cookies-5_oire6k-thumbnail.jpg"
                },
                {
                    "id": "846",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/844\/Cookies-4_vmbpqm.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/844\/conversions\/Cookies-4_vmbpqm-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:39:04.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 91,
                    "name": "Cookies",
                    "slug": "cookies",
                    "icon": null,
                    "image": {
                        "id": "425",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/Cookies_ggshwp.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/conversions\/Cookies_ggshwp-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:44.000000Z",
                    "updated_at": "2021-03-13T14:36:44.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 484,
                        "category_id": 91
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 485,
            "name": "Freshly Baked Raspberry Cookies 250g",
            "slug": "freshly-baked-raspberry-cookies-250g",
            "description": "A cookie is a baked or cooked food that is typically small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts.",
            "type_id": 2,
            "price": 5,
            "shop_id": 5,
            "sale_price": 3.5,
            "sku": "3062",
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
                "id": "508",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/507\/Cookies-5_oire6k.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/507\/conversions\/Cookies-5_oire6k-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "838",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/836\/Cookies-5_oire6k.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/836\/conversions\/Cookies-5_oire6k-thumbnail.jpg"
                },
                {
                    "id": "839",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/837\/Cookies-3_x85w4w.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/837\/conversions\/Cookies-3_x85w4w-thumbnail.jpg"
                },
                {
                    "id": "840",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/838\/Cookies-4_vmbpqm.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/838\/conversions\/Cookies-4_vmbpqm-thumbnail.jpg"
                },
                {
                    "id": "841",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/839\/Cookies-2_osbjsh.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/839\/conversions\/Cookies-2_osbjsh-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:40:05.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 91,
                    "name": "Cookies",
                    "slug": "cookies",
                    "icon": null,
                    "image": {
                        "id": "425",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/Cookies_ggshwp.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/424\/conversions\/Cookies_ggshwp-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:36:44.000000Z",
                    "updated_at": "2021-03-13T14:36:44.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 485,
                        "category_id": 91
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 486,
            "name": "Signature Chocolate Cake Iced Fudge 7 oz",
            "slug": "signature-chocolate-cake-iced-fudge-7-oz",
            "description": "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations",
            "type_id": 2,
            "price": 11.75,
            "shop_id": 5,
            "sale_price": null,
            "sku": "3064",
            "quantity": 50,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "simple",
            "unit": "7oz",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "509",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/508\/Round_Cake-8_rjbmjc.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/508\/conversions\/Round_Cake-8_rjbmjc-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "847",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/845\/Round_Cake-8_rjbmjc.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/845\/conversions\/Round_Cake-8_rjbmjc-thumbnail.jpg"
                },
                {
                    "id": "848",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/846\/Round_Cake-5_hpfbrl.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/846\/conversions\/Round_Cake-5_hpfbrl-thumbnail.jpg"
                },
                {
                    "id": "849",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/847\/Round_Cake_on61hh.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/847\/conversions\/Round_Cake_on61hh-thumbnail.jpg"
                },
                {
                    "id": "850",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/848\/Round_Cake-3_pigscm.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/848\/conversions\/Round_Cake-3_pigscm-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:41:12.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 92,
                    "name": "Round Cake",
                    "slug": "round-cake",
                    "icon": null,
                    "image": {
                        "id": "426",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/425\/Round-Cake_rfsrkr.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/425\/conversions\/Round-Cake_rfsrkr-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:37:05.000000Z",
                    "updated_at": "2021-03-13T14:37:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 486,
                        "category_id": 92
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 487,
            "name": "Desserts Cake, Raspberry Dark Chocolate 2 lb",
            "slug": "desserts-cake-raspberry-dark-chocolate-2-lb",
            "description": "Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations",
            "type_id": 2,
            "price": 15,
            "shop_id": 5,
            "sale_price": 12,
            "sku": "3065",
            "quantity": 50,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "simple",
            "unit": "2lb",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "511",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/510\/Round_Cake-7_ygffyu.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/510\/conversions\/Round_Cake-7_ygffyu-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "628",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/627\/Chocolate-Cake-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/627\/conversions\/Chocolate-Cake-1-thumbnail.jpg"
                },
                {
                    "id": "629",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/628\/Chocolate-Cake-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/628\/conversions\/Chocolate-Cake-2-thumbnail.jpg"
                },
                {
                    "id": "630",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/629\/Chocolate-Cake.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/629\/conversions\/Chocolate-Cake-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T09:42:08.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "shop": {
                "id": 5,
                "owner_id": 1,
                "name": "Bakery Shop",
                "slug": "bakery-shop",
                "description": "The bakery shop is the best shop around the city. This is being run under the store owner and our aim is to provide fresh and quality product and hassle free customer service.",
                "cover_image": {
                    "id": "895",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/Untitled-5.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/893\/conversions\/Untitled-5-thumbnail.jpg"
                },
                "logo": {
                    "id": "892",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/bakery.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/890\/conversions\/bakery-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.73151150000000342288331012241542339324951171875,
                        "lng": -73.9958273000000161800926434807479381561279296875,
                        "city": "New York",
                        "state": "NY",
                        "country": "United States",
                        "formattedAddress": "Washington Mews, New York, NY, USA"
                    }
                },
                "created_at": "2021-06-27T03:48:11.000000Z",
                "updated_at": "2021-07-08T09:23:37.000000Z"
            },
            "categories": [
                {
                    "id": 92,
                    "name": "Round Cake",
                    "slug": "round-cake",
                    "icon": null,
                    "image": {
                        "id": "426",
                        "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/425\/Round-Cake_rfsrkr.png",
                        "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/425\/conversions\/Round-Cake_rfsrkr-thumbnail.jpg"
                    },
                    "details": null,
                    "parent": null,
                    "type_id": 2,
                    "created_at": "2021-03-13T14:37:05.000000Z",
                    "updated_at": "2021-03-13T14:37:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 487,
                        "category_id": 92
                    }
                }
            ],
            "tags": [],
            "variations": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=1",
    "from": 1,
    "last_page": 4,
    "last_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=4",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=3",
            "label": "3",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=4",
            "label": "4",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abakery&searchJoin=and&limit=21&page=2",
    "path": "https:\/\/pickbazar-laravel\/products",
    "per_page": "21",
    "prev_page_url": null,
    "to": 21,
    "total": 72
}

export const makeup = {
    "current_page": 1,
    "data": [
        {
            "id": 21,
            "name": "Bourjois Little Round Pot Blusher",
            "slug": "bourjois-little-round-pot-blusher",
            "description": "Bourjois Little Round Pot Blusher has been keeping women beautiful for generations. Made in an exclusive baked technology process, its incredibly transparent & light texture formula is easy to apply and blends impeccably.",
            "type_id": 3,
            "price": 9,
            "shop_id": 4,
            "sale_price": 8,
            "sku": "1001",
            "quantity": 49,
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
                "id": "22",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/22\/Bourjois.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/22\/conversions\/Bourjois-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "637",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/636\/Bourjois-Little-Round-Pot-Blusher-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/636\/conversions\/Bourjois-Little-Round-Pot-Blusher-1-thumbnail.jpg"
                },
                {
                    "id": "638",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/637\/Bourjois-Little-Round-Pot-Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/637\/conversions\/Bourjois-Little-Round-Pot-Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "639",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/638\/Bourjois-Little-Round-Pot-Blusher.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/638\/conversions\/Bourjois-Little-Round-Pot-Blusher-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T06:00:30.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 21,
                        "category_id": 50
                    }
                },
                {
                    "id": 51,
                    "name": "Blusher",
                    "slug": "blusher",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:43.000000Z",
                    "updated_at": "2021-03-09T05:45:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 21,
                        "category_id": 51
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 22,
            "name": "Cyo Crush On Blush Powder Blush",
            "slug": "cyo-crush-on-blush-powder-blush",
            "description": "Bourjois Little Round Pot Blusher has been keeping women beautiful for generations. Made in an exclusive baked technology process, its incredibly transparent & light texture formula is easy to apply and blends impeccably.",
            "type_id": 3,
            "price": 11,
            "shop_id": 4,
            "sale_price": 8,
            "sku": "1002",
            "quantity": 60,
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
                "id": "23",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/23\/CYO.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/23\/conversions\/CYO-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "640",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/639\/Bourjois-Little-Round-Pot-Blusher-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/639\/conversions\/Bourjois-Little-Round-Pot-Blusher-1-thumbnail.jpg"
                },
                {
                    "id": "641",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/640\/Bourjois-Little-Round-Pot-Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/640\/conversions\/Bourjois-Little-Round-Pot-Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "643",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/642\/Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/642\/conversions\/Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "758",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/757\/CYO.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/757\/conversions\/CYO-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T06:23:13.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 22,
                        "category_id": 50
                    }
                },
                {
                    "id": 51,
                    "name": "Blusher",
                    "slug": "blusher",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:43.000000Z",
                    "updated_at": "2021-03-09T05:45:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 22,
                        "category_id": 51
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 23,
            "name": "Smashbox The Cali Contour Palette",
            "slug": "smashbox-the-cali-contour-palette",
            "description": "An easy-to-use, six-well contour kit with pigment-packed, blendable highlighter, bronzer, and blush powders. Use these versatile shades to create an effortlessly lifted neutral look or a warm, just-cruised-down-the-coast glow. It features three matte and two pearlescent powders to shape, bronze, and highlight. It also includes one matte blush to add a youthful flush of subtle color to any look. It is formulated Without: - Parabens- Phthalates This laid-back makeup palette makes it easy to add warmth and dimension to your look. Customize your signature Cali glow using six neutrals, including two of Smashbox's bestselling contour shades. This product is cruelty-free and formulated without parabens, phthalates, fragrance.",
            "type_id": 3,
            "price": 42,
            "shop_id": 4,
            "sale_price": 38.590000000000003410605131648480892181396484375,
            "sku": "1003",
            "quantity": 30,
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
                "id": "24",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/24\/Smashbox.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/24\/conversions\/Smashbox-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "644",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/643\/Blusher-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/643\/conversions\/Blusher-1-thumbnail.jpg"
                },
                {
                    "id": "645",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/644\/Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/644\/conversions\/Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "646",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/645\/Blusher.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/645\/conversions\/Blusher-thumbnail.jpg"
                },
                {
                    "id": "759",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/758\/Smashbox.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/758\/conversions\/Smashbox-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T06:26:00.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 23,
                        "category_id": 50
                    }
                },
                {
                    "id": 51,
                    "name": "Blusher",
                    "slug": "blusher",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:43.000000Z",
                    "updated_at": "2021-03-09T05:45:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 23,
                        "category_id": 51
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 24,
            "name": "Dior Backstage Contour Palette",
            "slug": "dior-backstage-contour-palette",
            "description": "An easy-to-use, six-well contour kit with pigment-packed, blendable highlighter, bronzer, and blush powders. Use these versatile shades to create an effortlessly lifted neutral look or a warm, just-cruised-down-the-coast glow. It features three matte and two pearlescent powders to shape, bronze, and highlight. It also includes one matte blush to add a youthful flush of subtle color to any look. It is formulated Without: - Parabens- Phthalates This laid-back makeup palette makes it easy to add warmth and dimension to your look. Customize your signature Cali glow using six neutrals, including two of Smashbox's bestselling contour shades. This product is cruelty-free and formulated without parabens, phthalates, fragrance.",
            "type_id": 3,
            "price": 44,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1004",
            "quantity": 45,
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
                "id": "25",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/25\/DIOR.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/25\/conversions\/DIOR-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "647",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/646\/Contour-Palette-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/646\/conversions\/Contour-Palette-1-thumbnail.jpg"
                },
                {
                    "id": "648",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/647\/Contour-Palette-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/647\/conversions\/Contour-Palette-2-thumbnail.jpg"
                },
                {
                    "id": "649",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/648\/Contour-Palette.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/648\/conversions\/Contour-Palette-thumbnail.jpg"
                },
                {
                    "id": "760",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/759\/DIOR.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/759\/conversions\/DIOR-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T06:28:58.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 24,
                        "category_id": 50
                    }
                },
                {
                    "id": 51,
                    "name": "Blusher",
                    "slug": "blusher",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:43.000000Z",
                    "updated_at": "2021-03-09T05:45:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 24,
                        "category_id": 51
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 25,
            "name": "Clarins Everlasting Compact Foundation",
            "slug": "clarins-everlasting-compact-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 54,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1005",
            "quantity": 60,
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
                "id": "26",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/26\/Clarins.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/26\/conversions\/Clarins-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "656",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/655\/Bourjois-Little-Round-Pot-Blusher-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/655\/conversions\/Bourjois-Little-Round-Pot-Blusher-1-thumbnail.jpg"
                },
                {
                    "id": "657",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/656\/Bourjois-Little-Round-Pot-Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/656\/conversions\/Bourjois-Little-Round-Pot-Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "660",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/659\/Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/659\/conversions\/Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "764",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/763\/Clarins.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/763\/conversions\/Clarins-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T06:31:30.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 25,
                        "category_id": 50
                    }
                },
                {
                    "id": 51,
                    "name": "Blusher",
                    "slug": "blusher",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:43.000000Z",
                    "updated_at": "2021-03-09T05:45:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 25,
                        "category_id": 51
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 26,
            "name": "Ex1 Invisiwear Liquid Foundation",
            "slug": "ex1-invisiwear-liquid-foundation",
            "description": "A lightunit and luminous liquid base formulated with light diffusers to unify skin tone and effortlessly cover imperfections. Specially designed \u2018true colour\u2019 pigments work perfectly with your skins\u2019 natural tones in an ultra-blendable formula.",
            "type_id": 3,
            "price": 22,
            "shop_id": 4,
            "sale_price": 18,
            "sku": "1006",
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
                "id": "27",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/27\/EX1.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/27\/conversions\/EX1-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T06:33:28.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 26,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 26,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 27,
            "name": "Too Faced Born This Way Loose Setting Powder",
            "slug": "too-faced-born-this-way-loose-setting-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 22,
            "shop_id": 4,
            "sale_price": 18,
            "sku": "1007",
            "quantity": 49,
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
                "id": "28",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/28\/Too_Faced.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/28\/conversions\/Too_Faced-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T06:35:39.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 27,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 27,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 28,
            "name": "Beauty Pressed Finishing Powder",
            "slug": "beauty-pressed-finishing-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 24,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1008",
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
                "id": "29",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/29\/beauty.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/29\/conversions\/beauty-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T06:37:48.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 28,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 28,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 29,
            "name": "Dr. Hauschka Compact Powder",
            "slug": "dr-hauschka-compact-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 18,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1009",
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
                "id": "30",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/30\/DrHauschka_CompactPowder.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/30\/conversions\/DrHauschka_CompactPowder-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:04:38.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 29,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 29,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 30,
            "name": "G9 Face Powder",
            "slug": "g9-face-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 16,
            "shop_id": 4,
            "sale_price": 12,
            "sku": "1009",
            "quantity": 40,
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
                "id": "31",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/31\/g9.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/31\/conversions\/g9-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:06:20.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 30,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 30,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 31,
            "name": "Iman Face Powder",
            "slug": "iman-face-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 16,
            "shop_id": 4,
            "sale_price": 12,
            "sku": "1011",
            "quantity": 30,
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
                "id": "32",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/32\/Iman.jpeg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/32\/conversions\/Iman-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:08:44.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 31,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 31,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 32,
            "name": "Lorac Face Powder",
            "slug": "lorac-face-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 15,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1012",
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
                "id": "33",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/33\/lorac.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/33\/conversions\/lorac-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:10:30.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 32,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 32,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 33,
            "name": "Pupa Natural Side Compact Powder",
            "slug": "pupa-natural-side-compact-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 22,
            "shop_id": 4,
            "sale_price": 18,
            "sku": "1013",
            "quantity": 58,
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
                "id": "34",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/34\/pupa.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/34\/conversions\/pupa-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:19:37.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 33,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 33,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 34,
            "name": "Revlon Colorstay Powder",
            "slug": "revlon-colorstay-powder",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 25,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1014",
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
                "id": "35",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/35\/revlon_colorstay.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/35\/conversions\/revlon_colorstay-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:22:56.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 34,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 34,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 35,
            "name": "Revlon Colorstay Powder",
            "slug": "revlon-colorstay-powder-1",
            "description": "Our silky, lightunit powder sets makeup for longer wear while providing a veil of perfecting luminosity and a finish so natural they\u2019ll think you were Born This Way.",
            "type_id": 3,
            "price": 26,
            "shop_id": 4,
            "sale_price": 22,
            "sku": "1015",
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
                "id": "36",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/36\/wet_wild.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/36\/conversions\/wet_wild-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:24:40.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 35,
                        "category_id": 50
                    }
                },
                {
                    "id": 53,
                    "name": "Face Powder",
                    "slug": "face-powder",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:24.000000Z",
                    "updated_at": "2021-03-09T05:46:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 35,
                        "category_id": 53
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 36,
            "name": "e.l.f. Foundation",
            "slug": "e-l-f-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 54,
            "shop_id": 4,
            "sale_price": 47,
            "sku": "1018",
            "quantity": 30,
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
                "id": "37",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/37\/elf.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/37\/conversions\/elf-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T07:36:57.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 36,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 36,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 37,
            "name": "Loreal Infallible Pro-Glow Foundation",
            "slug": "loreal-infallible-pro-glow-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 38,
            "shop_id": 4,
            "sale_price": 31,
            "sku": "1024",
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
                "id": "38",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/38\/loreal_24hr.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/38\/conversions\/loreal_24hr-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:14:51.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 37,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 37,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 38,
            "name": "Loreal Infallible 24H Fresh Wear Foundation",
            "slug": "loreal-infallible-24h-fresh-wear-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 60,
            "shop_id": 4,
            "sale_price": 43,
            "sku": "1025",
            "quantity": 30,
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
                "id": "39",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/39\/loreal_infallable.jpeg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/39\/conversions\/loreal_infallable-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:41:10.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 38,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 38,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 39,
            "name": "Loreal True Match Foundation",
            "slug": "loreal-true-match-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 60,
            "shop_id": 4,
            "sale_price": 44,
            "sku": "1026",
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
                "id": "40",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/40\/loreal_true_match.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/40\/conversions\/loreal_true_match-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:42:58.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 39,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 39,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 40,
            "name": "Lucy Minerals Foundation",
            "slug": "lucy-minerals-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 42,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1027",
            "quantity": 60,
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
                "id": "41",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/41\/lucy_minerals.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/41\/conversions\/lucy_minerals-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:44:49.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 40,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 40,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 41,
            "name": "Mac Foundation",
            "slug": "mac-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 40,
            "shop_id": 4,
            "sale_price": 32,
            "sku": "1028",
            "quantity": 40,
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
                "id": "42",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/42\/mac.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/42\/conversions\/mac-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:46:18.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 41,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 41,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 42,
            "name": "Pur Foundation",
            "slug": "pur-foundation",
            "description": "A 15-hour matte finish your skin will feel good about! Clarins' long-wearing compact foundation evens out skin tone and minimizes the look of imperfections in seconds, delivering a shine-free, matte finish and hours of comfortable wear. Ultra-fine texture resists heat, humidity and perspiration for flawless coverage that lasts throughout the day.",
            "type_id": 3,
            "price": 60,
            "shop_id": 4,
            "sale_price": 44,
            "sku": "1029",
            "quantity": 30,
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
                "id": "43",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/43\/pur.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/43\/conversions\/pur-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:47:48.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 50,
                    "name": "Face",
                    "slug": "face",
                    "icon": FacialCare,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:45:12.000000Z",
                    "updated_at": "2021-03-09T05:45:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 42,
                        "category_id": 50
                    }
                },
                {
                    "id": 52,
                    "name": "Foundation",
                    "slug": "foundation",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 50,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:02.000000Z",
                    "updated_at": "2021-03-09T05:46:02.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 42,
                        "category_id": 52
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 43,
            "name": "Max Factor Wild Eyeshadow Pot",
            "slug": "max-factor-wild-eyeshadow-pot",
            "description": "Pigment packed formula for bold colour looks! Max Factor Wild Shadow Eye Shadow Pots bring a highly pigmented shadow to sweep across your lids, providing a fierce shot of intense colour. The formula is micro-fine and can be used wet for a more intense look, is easily blendable and buildable colour for endless versatility.",
            "type_id": 3,
            "price": 15,
            "shop_id": 4,
            "sale_price": 10,
            "sku": "1030",
            "quantity": 60,
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
                "id": "44",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/44\/Max_factor.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/44\/conversions\/Max_factor-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "653",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/652\/Bourjois-Little-Round-Pot-Blusher-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/652\/conversions\/Bourjois-Little-Round-Pot-Blusher-1-thumbnail.jpg"
                },
                {
                    "id": "654",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/653\/Bourjois-Little-Round-Pot-Blusher-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/653\/conversions\/Bourjois-Little-Round-Pot-Blusher-2-thumbnail.jpg"
                },
                {
                    "id": "655",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/654\/Bourjois-Little-Round-Pot-Blusher.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/654\/conversions\/Bourjois-Little-Round-Pot-Blusher-thumbnail.jpg"
                },
                {
                    "id": "762",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/761\/Bourjois.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/761\/conversions\/Bourjois-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T08:50:34.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 43,
                        "category_id": 54
                    }
                },
                {
                    "id": 55,
                    "name": "Eye Shadow",
                    "slug": "eye-shadow",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:10.000000Z",
                    "updated_at": "2021-03-09T05:47:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 43,
                        "category_id": 55
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 44,
            "name": "Fenty Beauty Moroccan Spice Eyeshadow Palette",
            "slug": "fenty-beauty-moroccan-spice-eyeshadow-palette",
            "description": "An eyeshadow palette of 16 longwearing Moroccan-inspired shades ranging from matte to shimmer finishes\u2014perfect for spicing up your look in limitless ways.",
            "type_id": 3,
            "price": 45,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1031",
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
                "id": "45",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/45\/Fenty_Beauty.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/45\/conversions\/Fenty_Beauty-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "650",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/649\/Contour-Palette-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/649\/conversions\/Contour-Palette-1-thumbnail.jpg"
                },
                {
                    "id": "651",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/650\/Contour-Palette-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/650\/conversions\/Contour-Palette-2-thumbnail.jpg"
                },
                {
                    "id": "652",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/651\/Contour-Palette.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/651\/conversions\/Contour-Palette-thumbnail.jpg"
                },
                {
                    "id": "763",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/762\/DIOR.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/762\/conversions\/DIOR-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T08:52:52.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 44,
                        "category_id": 54
                    }
                },
                {
                    "id": 55,
                    "name": "Eye Shadow",
                    "slug": "eye-shadow",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:10.000000Z",
                    "updated_at": "2021-03-09T05:47:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 44,
                        "category_id": 55
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 45,
            "name": "Stila Magnificent Metals Glitter Glow Liquid Eye Shadow",
            "slug": "stila-magnificent-metals-glitter-glow-liquid-eye-shadow",
            "description": "This brilliantly long-wearing sparkle eye shadow combines the perfect mix of pearl and glitter to lavish eyes with incredible luster and shimmer. With its uniquely lightunit, water-infused texture, Glitter & Glow glides on effortlessly, then dries down smoothly, locking in maximum sparkle with minimal fallout, for eyes with a real wow! factor.",
            "type_id": 3,
            "price": 29,
            "shop_id": 4,
            "sale_price": 23,
            "sku": "1032",
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
                "id": "46",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/46\/Stila.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/46\/conversions\/Stila-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:54:52.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 45,
                        "category_id": 54
                    }
                },
                {
                    "id": 56,
                    "name": "Glitter",
                    "slug": "glitter",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:28.000000Z",
                    "updated_at": "2021-03-09T05:47:28.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 45,
                        "category_id": 56
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 46,
            "name": "Skinnydip Party Glitter Mirror",
            "slug": "skinnydip-party-glitter-mirror",
            "description": "No more bad days with our Party Glitter Mirror. Keeping your make up in check is easy as can be with this cute little addition! Plus, it's the perfect size to throw in your handbag!",
            "type_id": 3,
            "price": 25,
            "shop_id": 4,
            "sale_price": 20,
            "sku": "1033",
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
                "id": "47",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/47\/Skinnydip.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/47\/conversions\/Skinnydip-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:56:32.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 46,
                        "category_id": 54
                    }
                },
                {
                    "id": 56,
                    "name": "Glitter",
                    "slug": "glitter",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:28.000000Z",
                    "updated_at": "2021-03-09T05:47:28.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 46,
                        "category_id": 56
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 47,
            "name": "Lancome Definicils Mascara",
            "slug": "lancome-definicils-mascara",
            "description": "For lavishly long, perfectly defined lashes, this iconic award-winning mascara provides the ultimate in separation and has been the number 1 mascara for 16+ years! Carefully selected polymers coat each lash from root to tip, to help lengthen and outline each lash for unmatched definition. This best-selling mascara's unique brush applicator has specially grooved bristles that hold the perfect amount of product for gradual, even application every time.",
            "type_id": 3,
            "price": 22,
            "shop_id": 4,
            "sale_price": 18,
            "sku": "1034",
            "quantity": 60,
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
                "id": "48",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/48\/Lancome.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/48\/conversions\/Lancome-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T08:57:55.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 47,
                        "category_id": 54
                    }
                },
                {
                    "id": 57,
                    "name": "Mascara",
                    "slug": "mascara",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:47.000000Z",
                    "updated_at": "2021-03-09T05:47:47.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 47,
                        "category_id": 57
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 48,
            "name": "Expert Wear Eye Shadow",
            "slug": "expert-wear-eye-shadow",
            "description": "Pigment packed formula for bold colour looks! Max Factor Wild Shadow Eye Shadow Pots bring a highly pigmented shadow to sweep across your lids, providing a fierce shot of intense colour. The formula is micro-fine and can be used wet for a more intense look, is easily blendable and buildable colour for endless versatility.",
            "type_id": 3,
            "price": 15,
            "shop_id": 4,
            "sale_price": null,
            "sku": "1035",
            "quantity": 48,
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
                "id": "49",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/49\/EXPERT_WEAR_EYE_SHADOW.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/49\/conversions\/EXPERT_WEAR_EYE_SHADOW-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T09:01:20.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 48,
                        "category_id": 54
                    }
                },
                {
                    "id": 55,
                    "name": "Eye Shadow",
                    "slug": "eye-shadow",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:10.000000Z",
                    "updated_at": "2021-03-09T05:47:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 48,
                        "category_id": 55
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 49,
            "name": "Matte Bar Eyeshadow",
            "slug": "matte-bar-eyeshadow",
            "description": "Pigment packed formula for bold colour looks! Max Factor Wild Shadow Eye Shadow Pots bring a highly pigmented shadow to sweep across your lids, providing a fierce shot of intense colour. The formula is micro-fine and can be used wet for a more intense look, is easily blendable and buildable colour for endless versatility.",
            "type_id": 3,
            "price": 35,
            "shop_id": 4,
            "sale_price": 26,
            "sku": "1037",
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
                "id": "50",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/50\/EXPERT_WEAR_EYE_SHADOW.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/50\/conversions\/EXPERT_WEAR_EYE_SHADOW-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T09:07:48.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 49,
                        "category_id": 54
                    }
                },
                {
                    "id": 55,
                    "name": "Eye Shadow",
                    "slug": "eye-shadow",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:10.000000Z",
                    "updated_at": "2021-03-09T05:47:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 49,
                        "category_id": 55
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 50,
            "name": "Soda Pop Eyeshadow",
            "slug": "soda-pop-eyeshadow",
            "description": "Pigment packed formula for bold colour looks! Max Factor Wild Shadow Eye Shadow Pots bring a highly pigmented shadow to sweep across your lids, providing a fierce shot of intense colour. The formula is micro-fine and can be used wet for a more intense look, is easily blendable and buildable colour for endless versatility.",
            "type_id": 3,
            "price": 32,
            "shop_id": 4,
            "sale_price": 26,
            "sku": "1038",
            "quantity": 60,
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
                "id": "51",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/51\/SODA_POP_EYESHADOW.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/51\/conversions\/SODA_POP_EYESHADOW-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T09:09:29.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "shop": {
                "id": 4,
                "owner_id": 1,
                "name": "Makeup Shop",
                "slug": "makeup-shop",
                "description": "The makeup shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "890",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/Untitled-3.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/888\/conversions\/Untitled-3-thumbnail.jpg"
                },
                "logo": {
                    "id": "891",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/Makeup.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/889\/conversions\/Makeup-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "70001",
                    "city": "Metairie",
                    "state": "Louisiana",
                    "country": "USA",
                    "street_address": "2960  Rose Avenue"
                },
                "settings": {
                    "contact": "092281221223",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        },
                        {
                            "url": "https:\/\/www.twitter.com\/",
                            "icon": TwitterIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 51.517611700000003338573151268064975738525390625,
                        "lng": -0.2101490000000000024638069362481473945081233978271484375,
                        "state": "England",
                        "country": "United Kingdom",
                        "formattedAddress": "Ladbroke Grove, London, UK"
                    }
                },
                "created_at": "2021-06-27T03:47:49.000000Z",
                "updated_at": "2021-07-08T09:24:28.000000Z"
            },
            "categories": [
                {
                    "id": 54,
                    "name": "Eyes",
                    "slug": "eyes",
                    "icon": Eyes,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:46:51.000000Z",
                    "updated_at": "2021-03-09T05:46:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 50,
                        "category_id": 54
                    }
                },
                {
                    "id": 55,
                    "name": "Eye Shadow",
                    "slug": "eye-shadow",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 54,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:47:10.000000Z",
                    "updated_at": "2021-03-09T05:47:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 50,
                        "category_id": 55
                    }
                }
            ],
            "tags": [],
            "variations": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=1",
    "from": 1,
    "last_page": 3,
    "last_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=3",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=3",
            "label": "3",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Amakeup&searchJoin=and&limit=30&page=2",
    "path": "https:\/\/pickbazar-laravel\/products",
    "per_page": "30",
    "prev_page_url": null,
    "to": 30,
    "total": 81
}

export const bags = {
    "current_page": 1,
    "data": [
        {
            "id": 102,
            "name": "Armani Leather Purse",
            "slug": "armani-leather-purse",
            "description": "The name Giorgio Armani has become synonymous with clean lines and Italian style. One of the most recognisable fashion houses in the world, the label has dressed some of the world\u2019s most beautiful women.",
            "type_id": 4,
            "price": 50,
            "shop_id": 3,
            "sale_price": 40,
            "sku": "2001",
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
                "id": "103",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/103\/Armani_leather_purse.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/103\/conversions\/Armani_leather_purse-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:12:48.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 102,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 103,
            "name": "Armani Purse",
            "slug": "armani-purse",
            "description": "Black logo embossed messenger bag from Giorgio Armani featuring an adjustable shoulder strap, a top zip fastening and a front zip pocket.",
            "type_id": 4,
            "price": 80,
            "shop_id": 3,
            "sale_price": 72,
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
                "id": "104",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/104\/Armani_purse.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/104\/conversions\/Armani_purse-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:16:29.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 103,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 104,
            "name": "Givenchy Purse",
            "slug": "givenchy-purse",
            "description": "Established in 1952, Givenchy's stance on contemporary elegance is perfectly captured through the brand\u2019s premium accessory collections. Crafted from calf leather, this grey GV3 croc-effect shoulder bag from Givenchy features a chain top handle with logo charm, a detachable shoulder strap, a front flap closure, a metal logo plaque to the front, gold-tone hardware and suede panels.",
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
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/105\/givency_purse.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/105\/conversions\/givency_purse-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:18:11.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 104,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 105,
            "name": "Givenchy Mini Purse",
            "slug": "givenchy-mini-purse",
            "description": "Luxury Italian fashion house Gucci is renowned for its instantly recognisable bags and accessories, infusing its unique sense of quality and exquisite design into each piece. This pink logo print leather backpack from Gucci features top handles, a drawstring fastening, a pebbled leather texture, a removable zipped pouch and a vintage Gucci logo.",
            "type_id": 4,
            "price": 80,
            "shop_id": 3,
            "sale_price": 70,
            "sku": "2003",
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
                "id": "106",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/106\/gucci_mini_purse.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/106\/conversions\/gucci_mini_purse-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:19:22.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 105,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 106,
            "name": "Gucci Purse",
            "slug": "gucci-purse",
            "description": "Luxury Italian fashion house Gucci is renowned for its instantly recognisable bags and accessories, infusing its unique sense of quality and exquisite design into each piece. This pink logo print leather backpack from Gucci features top handles, a drawstring fastening, a pebbled leather texture, a removable zipped pouch and a vintage Gucci logo.",
            "type_id": 4,
            "price": 90,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2005",
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
                "id": "107",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/107\/gucci_purse.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/107\/conversions\/gucci_purse-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:23:18.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 106,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 107,
            "name": "Armani Silver Purse",
            "slug": "armani-silver-purse",
            "description": "The name Giorgio Armani has become synonymous with clean lines and Italian style. One of the most recognisable fashion houses in the world, the label has dressed some of the world\u2019s most beautiful women.",
            "type_id": 4,
            "price": 120,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2006",
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
                "id": "108",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/108\/91PirQjxGjL._UL1500_.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/108\/conversions\/91PirQjxGjL._UL1500_-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:40:49.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 107,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 108,
            "name": "Gucci GG Marmont Tote",
            "slug": "gucci-gg-marmont-tote",
            "description": "Luxury Italian fashion house Gucci is renowned for its instantly recognisable bags and accessories, infusing its unique sense of quality and exquisite design into each piece. This pink logo print leather backpack from Gucci features top handles, a drawstring fastening, a pebbled leather texture, a removable zipped pouch and a vintage Gucci logo.",
            "type_id": 4,
            "price": 300,
            "shop_id": 3,
            "sale_price": 250,
            "sku": "2008",
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
                "id": "109",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/109\/cys-m3.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/109\/conversions\/cys-m3-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:42:03.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 108,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 109,
            "name": "KAAI Pyramid Bag",
            "slug": "kaai-pyramid-bag",
            "description": "Established in 1952, Givenchy's stance on contemporary elegance is perfectly captured through the brand\u2019s premium accessory collections. Crafted from calf leather, this grey GV3 croc-effect shoulder bag from Givenchy features a chain top handle with logo charm, a detachable shoulder strap, a front flap closure, a metal logo plaque to the front, gold-tone hardware and suede panels.",
            "type_id": 4,
            "price": 60,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2009",
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
                "id": "110",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/110\/sku-1185_1.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/110\/conversions\/sku-1185_1-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:43:11.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 84,
                    "name": "Purse",
                    "slug": "purse",
                    "icon": Purse,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:20.000000Z",
                    "updated_at": "2021-03-09T09:49:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 109,
                        "category_id": 84
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 112,
            "name": "The Marc Jacobs",
            "slug": "the-marc-jacobs",
            "description": "Adjustable shoulder straps, 12\" drop\nDimensions: 22.9\"W x 6.1\"D x 13\"H\nMagnetic closure\nInterior zip compartment\nLeather hang tag with log and lock\nSignature gold-tone hardware\nUnlined\nLeather with polyurethane coating",
            "type_id": 4,
            "price": 150,
            "shop_id": 3,
            "sale_price": 120,
            "sku": "2020",
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
                "id": "113",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/113\/7Carmine-Red-Ladies-Hand-Bag.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/113\/conversions\/7Carmine-Red-Ladies-Hand-Bag-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:59:42.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 86,
                    "name": "Shoulder bags",
                    "slug": "shoulder-bags",
                    "icon": ShoulderBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:50:10.000000Z",
                    "updated_at": "2021-03-09T09:50:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 112,
                        "category_id": 86
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 115,
            "name": "Balenciaga",
            "slug": "balenciaga",
            "description": "Adjustable removable shoulder strap, 21\" drop\nDouble handles, 3\" drop\nCan be worn as a crossbody or top handle bag\nDimensions: 8.5\"W x 3.75\"D x 5.5\"H\nZip closure\nExterior zip pocket, interior slip pocket\nBuckled strap details at bottom corners\nLogo at front\nMannequin model measurements: 5'10\" height, wearing a size 4 or small",
            "type_id": 4,
            "price": 200,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2021",
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
                "id": "114",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/114\/441270-Zoom.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/114\/conversions\/441270-Zoom-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:04:27.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 85,
                    "name": "Hand bags",
                    "slug": "hand-bags",
                    "icon": HandBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:50.000000Z",
                    "updated_at": "2021-03-09T09:49:50.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 115,
                        "category_id": 85
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 123,
            "name": "Gucci Handbag",
            "slug": "gucci-handbag",
            "description": "Luxury Italian fashion house Gucci is renowned for its instantly recognisable bags and accessories, infusing its unique sense of quality and exquisite design into each piece. This pink logo print leather backpack from Gucci features top handles, a drawstring fastening, a pebbled leather texture, a removable zipped pouch and a vintage Gucci logo.",
            "type_id": 4,
            "price": 380,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2023",
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
                "id": "125",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/125\/gucchi.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/125\/conversions\/gucchi-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:19:18.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 85,
                    "name": "Hand bags",
                    "slug": "hand-bags",
                    "icon": HandBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:50.000000Z",
                    "updated_at": "2021-03-09T09:49:50.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 123,
                        "category_id": 85
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 125,
            "name": "Armani Handbag",
            "slug": "armani-handbag",
            "description": "Black logo embossed messenger bag from Giorgio Armani featuring an adjustable shoulder strap, a top zip fastening and a front zip pocket.",
            "type_id": 4,
            "price": 300,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2024",
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
                "id": "128",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/128\/Armani_Handbag.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/128\/conversions\/Armani_Handbag-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:28:29.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 85,
                    "name": "Hand bags",
                    "slug": "hand-bags",
                    "icon": HandBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:50.000000Z",
                    "updated_at": "2021-03-09T09:49:50.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 125,
                        "category_id": 85
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 127,
            "name": "Mast & Harbour",
            "slug": "mast-harbour",
            "description": "Black textured sling bag, has a twist clasp closure\n1 main compartment\nTablet sleeve: No\nWith a non-detachable sling strap\nWarranty: no warranty\nWarranty provided by brand\/manufacturer",
            "type_id": 4,
            "price": 250,
            "shop_id": 3,
            "sale_price": 220,
            "sku": "206",
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
                "id": "129",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/129\/bg7740.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/129\/conversions\/bg7740-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:30:23.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 85,
                    "name": "Hand bags",
                    "slug": "hand-bags",
                    "icon": HandBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:50.000000Z",
                    "updated_at": "2021-03-09T09:49:50.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 127,
                        "category_id": 85
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 129,
            "name": "See by Chlo\u00e9",
            "slug": "see-by-chloe",
            "description": "Detachable top handle, adjustable shoulder strap\nZip closure; lined\nExterior pocket with flap closure, two interior slip pockets, one interior zip pocket\n11.75\"W x 5.5\"D x 7.8\"H; 6.5\" handle drop, 19.5\" strap drop\nMannequin model measurements: 5'10\" height\nLeather; lining: polyester",
            "type_id": 4,
            "price": 280,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2027",
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
                "id": "131",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/131\/10054735626270.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/131\/conversions\/10054735626270-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:31:45.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 85,
                    "name": "Hand bags",
                    "slug": "hand-bags",
                    "icon": HandBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:50.000000Z",
                    "updated_at": "2021-03-09T09:49:50.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 129,
                        "category_id": 85
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 131,
            "name": "Salvatore Ferragamo",
            "slug": "salvatore-ferragamo",
            "description": "Double handles\nZip closure; lined\nOne interior compartment, detachable zip pouch\nOversize Gancia detail and logo hardware on front\n14.5\"W x 7\"D x 11\"H; 10\" handle drop\nMannequin model measurements: 5'10\" height, wearing a size 4 or small\nLeather",
            "type_id": 4,
            "price": 200,
            "shop_id": 3,
            "sale_price": null,
            "sku": "2028",
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
                "id": "133",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/133\/11505972893001-ether-Women-Handbags-3831505972892845-1.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/133\/conversions\/11505972893001-ether-Women-Handbags-3831505972892845-1-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:32:43.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandbagIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "shop": {
                "id": 3,
                "owner_id": 1,
                "name": "Bags Shop",
                "slug": "bags-shop",
                "description": "The Bag shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "889",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/Untitled-1-%281%29.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/887\/conversions\/Untitled-1-%281%29-thumbnail.jpg"
                },
                "logo": {
                    "id": "888",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/Backpack.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/886\/conversions\/Backpack-thumbnail.jpg"
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
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        },
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": -37.1374023999999991474396665580570697784423828125,
                        "lng": 174.968592400000005682159098796546459197998046875,
                        "zip": "2579",
                        "city": "Ramarama",
                        "state": "Auckland",
                        "country": "New Zealand",
                        "formattedAddress": "Waharau Lane, Ramarama 2579, New Zealand"
                    }
                },
                "created_at": "2021-06-27T03:47:23.000000Z",
                "updated_at": "2021-07-08T09:25:34.000000Z"
            },
            "categories": [
                {
                    "id": 85,
                    "name": "Hand bags",
                    "slug": "hand-bags",
                    "icon": HandBags,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 4,
                    "created_at": "2021-03-09T09:49:50.000000Z",
                    "updated_at": "2021-03-09T09:49:50.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 131,
                        "category_id": 85
                    }
                }
            ],
            "tags": [],
            "variations": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abags&searchJoin=and&limit=30&page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abags&searchJoin=and&limit=30&page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Abags&searchJoin=and&limit=30&page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https:\/\/pickbazar-laravel\/products",
    "per_page": "30",
    "prev_page_url": null,
    "to": 15,
    "total": 15
}

export const clothing = {
    "current_page": 1,
    "data": [
        {
            "id": 110,
            "name": "Magnetic Designs Women Printed Fit And Flare Dress",
            "slug": "magnetic-designs-women-printed-fit-and-flare-dress",
            "description": "Mauve printed knitted fit and flare dress, has a round neck, three-quarter sleeves, concealed zip closure,, flared hem",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1200",
            "quantity": 4000,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "111",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/111\/magnetic.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/111\/conversions\/magnetic-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "668",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/667\/Printed-Dress-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/667\/conversions\/Printed-Dress-2-thumbnail.jpg"
                },
                {
                    "id": "669",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/668\/Printed-Dress.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/668\/conversions\/Printed-Dress-thumbnail.jpg"
                },
                {
                    "id": "767",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/766\/magnetic.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/766\/conversions\/magnetic-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T17:55:02.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 35,
            "min_price": 35,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 68,
                    "name": "Women Dress",
                    "slug": "women-dress",
                    "icon": WomenDress,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:25:14.000000Z",
                    "updated_at": "2021-03-09T06:25:14.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 110,
                        "category_id": 68
                    }
                },
                {
                    "id": 69,
                    "name": "Printed",
                    "slug": "printed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 68,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:26:10.000000Z",
                    "updated_at": "2021-03-09T06:26:10.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 110,
                        "category_id": 69
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 110,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 110,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 110,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 110,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 13,
                    "attribute_id": 4,
                    "value": "L",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:30.000000Z",
                    "updated_at": "2021-05-09T17:45:30.000000Z",
                    "pivot": {
                        "product_id": 110,
                        "attribute_value_id": 13
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 14,
                    "attribute_id": 4,
                    "value": "XL",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:39.000000Z",
                    "updated_at": "2021-05-09T17:45:39.000000Z",
                    "pivot": {
                        "product_id": 110,
                        "attribute_value_id": 14
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ],
            "variation_options": [
                {
                    "id": 247,
                    "title": "Red\/S",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200101",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "S"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 248,
                    "title": "Red\/M",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200102",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "M"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 249,
                    "title": "Red\/L",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200103",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "L"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 250,
                    "title": "Red\/XL",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200103",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "XL"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 251,
                    "title": "Blue\/S",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200104",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "S"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 252,
                    "title": "Blue\/M",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200105",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "M"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 253,
                    "title": "Blue\/L",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200106",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "L"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                },
                {
                    "id": 254,
                    "title": "Blue\/XL",
                    "price": "35",
                    "sale_price": null,
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200107",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "XL"
                        }
                    ],
                    "product_id": 110,
                    "created_at": "2021-05-10T09:11:22.000000Z",
                    "updated_at": "2021-05-10T09:11:22.000000Z"
                }
            ]
        },
        {
            "id": 111,
            "name": "Mango Self Striped A Line Dress",
            "slug": "mango-self-striped-a-line-dress",
            "description": "Off-White self-striped knitted midi A-line dress, has a scoop neck, sleeveless, straight hem",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1201",
            "quantity": 3000,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "112",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/112\/mango.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/112\/conversions\/mango-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T17:56:41.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 81,
            "min_price": 70,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 68,
                    "name": "Women Dress",
                    "slug": "women-dress",
                    "icon": WomenDress,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:25:14.000000Z",
                    "updated_at": "2021-03-09T06:25:14.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 111,
                        "category_id": 68
                    }
                },
                {
                    "id": 71,
                    "name": "Single Color",
                    "slug": "single-color",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 68,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:27:12.000000Z",
                    "updated_at": "2021-03-09T06:27:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 111,
                        "category_id": 71
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 111,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 111,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 111,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 111,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 13,
                    "attribute_id": 4,
                    "value": "L",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:30.000000Z",
                    "updated_at": "2021-05-09T17:45:30.000000Z",
                    "pivot": {
                        "product_id": 111,
                        "attribute_value_id": 13
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ],
            "variation_options": [
                {
                    "id": 255,
                    "title": "Red\/S",
                    "price": "80",
                    "sale_price": "70",
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200120",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "S"
                        }
                    ],
                    "product_id": 111,
                    "created_at": "2021-05-10T09:12:37.000000Z",
                    "updated_at": "2021-05-10T09:12:37.000000Z"
                },
                {
                    "id": 256,
                    "title": "Red\/M",
                    "price": "80",
                    "sale_price": "70",
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200121",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "M"
                        }
                    ],
                    "product_id": 111,
                    "created_at": "2021-05-10T09:12:37.000000Z",
                    "updated_at": "2021-05-10T09:12:37.000000Z"
                },
                {
                    "id": 257,
                    "title": "Red\/L",
                    "price": "80",
                    "sale_price": "70",
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200122",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Red"
                        },
                        {
                            "name": "Size",
                            "value": "L"
                        }
                    ],
                    "product_id": 111,
                    "created_at": "2021-05-10T09:12:37.000000Z",
                    "updated_at": "2021-05-10T09:12:37.000000Z"
                },
                {
                    "id": 258,
                    "title": "Blue\/S",
                    "price": "80",
                    "sale_price": "70",
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200123",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "S"
                        }
                    ],
                    "product_id": 111,
                    "created_at": "2021-05-10T09:12:37.000000Z",
                    "updated_at": "2021-05-10T09:12:37.000000Z"
                },
                {
                    "id": 259,
                    "title": "Blue\/M",
                    "price": "81",
                    "sale_price": "70",
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200124",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "M"
                        }
                    ],
                    "product_id": 111,
                    "created_at": "2021-05-10T09:12:37.000000Z",
                    "updated_at": "2021-05-10T09:12:37.000000Z"
                },
                {
                    "id": 260,
                    "title": "Blue\/L",
                    "price": "80",
                    "sale_price": "70",
                    "quantity": "500",
                    "is_disable": 0,
                    "sku": "200125",
                    "options": [
                        {
                            "name": "Color",
                            "value": "Blue"
                        },
                        {
                            "name": "Size",
                            "value": "L"
                        }
                    ],
                    "product_id": 111,
                    "created_at": "2021-05-10T09:12:37.000000Z",
                    "updated_at": "2021-05-10T09:12:37.000000Z"
                }
            ]
        },
        {
            "id": 113,
            "name": "Forever 21 Solid Bodycon Midi Dress",
            "slug": "forever-21-solid-bodycon-midi-dress",
            "description": "Grey solid woven bodycon dress, has a round neck, sleeveless, straight hem",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1203",
            "quantity": 3000,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "115",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/115\/FOREVER_21.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/115\/conversions\/FOREVER_21-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "672",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/671\/Striped-Dress.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/671\/conversions\/Striped-Dress-thumbnail.jpg"
                },
                {
                    "id": "768",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/767\/FOREVER_21.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/767\/conversions\/FOREVER_21-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T18:01:23.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 120,
            "min_price": 100,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 68,
                    "name": "Women Dress",
                    "slug": "women-dress",
                    "icon": WomenDress,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:25:14.000000Z",
                    "updated_at": "2021-03-09T06:25:14.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 113,
                        "category_id": 68
                    }
                },
                {
                    "id": 70,
                    "name": "Floral",
                    "slug": "floral",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 68,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:26:52.000000Z",
                    "updated_at": "2021-03-09T06:26:52.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 113,
                        "category_id": 70
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 113,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 10,
                    "attribute_id": 3,
                    "value": "White",
                    "meta": "#e1e5ea",
                    "created_at": "2021-05-09T16:11:35.000000Z",
                    "updated_at": "2021-05-09T18:58:16.000000Z",
                    "pivot": {
                        "product_id": 113,
                        "attribute_value_id": 10
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 113,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 13,
                    "attribute_id": 4,
                    "value": "L",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:30.000000Z",
                    "updated_at": "2021-05-09T17:45:30.000000Z",
                    "pivot": {
                        "product_id": 113,
                        "attribute_value_id": 13
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 14,
                    "attribute_id": 4,
                    "value": "XL",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:39.000000Z",
                    "updated_at": "2021-05-09T17:45:39.000000Z",
                    "pivot": {
                        "product_id": 113,
                        "attribute_value_id": 14
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 114,
            "name": "Dorothy Perkins Self Striped A Line Dress",
            "slug": "dorothy-perkins-self-striped-a-line-dress",
            "description": "Rust red self-striped knitted A-line dress, has a V-neck with button detailing, three-quarter sleeves, flared hem",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1204",
            "quantity": 1700,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "116",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/116\/DOROTHY_PERKINS.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/116\/conversions\/DOROTHY_PERKINS-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "674",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/673\/Striped-Dress-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/673\/conversions\/Striped-Dress-2-thumbnail.jpg"
                },
                {
                    "id": "675",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/674\/Striped-Dress.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/674\/conversions\/Striped-Dress-thumbnail.jpg"
                },
                {
                    "id": "769",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/768\/DOROTHY_PERKINS.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/768\/conversions\/DOROTHY_PERKINS-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T18:02:33.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 140,
            "min_price": 130,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 68,
                    "name": "Women Dress",
                    "slug": "women-dress",
                    "icon": WomenDress,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:25:14.000000Z",
                    "updated_at": "2021-03-09T06:25:14.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 114,
                        "category_id": 68
                    }
                },
                {
                    "id": 71,
                    "name": "Single Color",
                    "slug": "single-color",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 68,
                    "type_id": 5,
                    "created_at": "2021-03-09T06:27:12.000000Z",
                    "updated_at": "2021-03-09T06:27:12.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 114,
                        "category_id": 71
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 114,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 114,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 10,
                    "attribute_id": 3,
                    "value": "White",
                    "meta": "#e1e5ea",
                    "created_at": "2021-05-09T16:11:35.000000Z",
                    "updated_at": "2021-05-09T18:58:16.000000Z",
                    "pivot": {
                        "product_id": 114,
                        "attribute_value_id": 10
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 114,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 114,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 116,
            "name": "Fold Over Collar Plain Blazers",
            "slug": "fold-over-collar-plain-blazers",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1205",
            "quantity": 800,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "117",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/117\/Fold_over.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/117\/conversions\/Fold_over-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "692",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/691\/Plain-Blazers-4.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/691\/conversions\/Plain-Blazers-4-thumbnail.jpg"
                },
                {
                    "id": "693",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/692\/Plain-Blazers-5.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/692\/conversions\/Plain-Blazers-5-thumbnail.jpg"
                },
                {
                    "id": "774",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/773\/Fold_over.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/773\/conversions\/Fold_over-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T18:04:53.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 200,
            "min_price": 199,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 116,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 116,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 116,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 10,
                    "attribute_id": 3,
                    "value": "White",
                    "meta": "#e1e5ea",
                    "created_at": "2021-05-09T16:11:35.000000Z",
                    "updated_at": "2021-05-09T18:58:16.000000Z",
                    "pivot": {
                        "product_id": 116,
                        "attribute_value_id": 10
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 116,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 14,
                    "attribute_id": 4,
                    "value": "XL",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:39.000000Z",
                    "updated_at": "2021-05-09T17:45:39.000000Z",
                    "pivot": {
                        "product_id": 116,
                        "attribute_value_id": 14
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 117,
            "name": "Solid Notch Lapel Single Button Long Sleeve Blazer",
            "slug": "solid-notch-lapel-single-button-long-sleeve-blazer",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1206",
            "quantity": 880,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "119",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/119\/Solid_Notch.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/119\/conversions\/Solid_Notch-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "695",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/694\/Plain-Blazers-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/694\/conversions\/Plain-Blazers-3-thumbnail.jpg"
                },
                {
                    "id": "696",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/695\/Plain-Blazers.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/695\/conversions\/Plain-Blazers-thumbnail.jpg"
                },
                {
                    "id": "775",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/774\/Solid_Notch.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/774\/conversions\/Solid_Notch-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T18:07:17.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 250,
            "min_price": 220,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 117,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 117,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 117,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 10,
                    "attribute_id": 3,
                    "value": "White",
                    "meta": "#e1e5ea",
                    "created_at": "2021-05-09T16:11:35.000000Z",
                    "updated_at": "2021-05-09T18:58:16.000000Z",
                    "pivot": {
                        "product_id": 117,
                        "attribute_value_id": 10
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 117,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 117,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 118,
            "name": "Notch Lapel Single Button Color Block Blazer",
            "slug": "notch-lapel-single-button-color-block-blazer",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1207",
            "quantity": 1000,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "120",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/120\/Notch_Lapel.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/120\/conversions\/Notch_Lapel-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "698",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/697\/Plain-Blazers-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/697\/conversions\/Plain-Blazers-3-thumbnail.jpg"
                },
                {
                    "id": "699",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/698\/Plain-Blazers.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/698\/conversions\/Plain-Blazers-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T18:08:44.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 300,
            "min_price": 250,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 118,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 118,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 118,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 118,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 118,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 13,
                    "attribute_id": 4,
                    "value": "L",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:30.000000Z",
                    "updated_at": "2021-05-09T17:45:30.000000Z",
                    "pivot": {
                        "product_id": 118,
                        "attribute_value_id": 13
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 119,
            "name": "Narrow Notch Lapel Slit Pocket Plain Blazers",
            "slug": "narrow-notch-lapel-slit-pocket-plain-blazers",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1208",
            "quantity": 1040,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "121",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/121\/Narrow_Notch.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/121\/conversions\/Narrow_Notch-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "703",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/702\/Plain-Blazers-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/702\/conversions\/Plain-Blazers-2-thumbnail.jpg"
                },
                {
                    "id": "704",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/703\/Plain-Blazers-4.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/703\/conversions\/Plain-Blazers-4-thumbnail.jpg"
                },
                {
                    "id": "705",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/704\/Plain-Blazers-5.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/704\/conversions\/Plain-Blazers-5-thumbnail.jpg"
                },
                {
                    "id": "777",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/776\/Notch_Lapel.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/776\/conversions\/Notch_Lapel-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-09T18:10:01.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 260,
            "min_price": 260,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 119,
                        "category_id": 72
                    }
                },
                {
                    "id": 76,
                    "name": "Waist Coat",
                    "slug": "waist-coat",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:40.000000Z",
                    "updated_at": "2021-03-09T08:57:40.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 119,
                        "category_id": 76
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 119,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 119,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 119,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 119,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 120,
            "name": "Notch Lapel Elastic Waist Plain Trench Coat",
            "slug": "notch-lapel-elastic-waist-plain-trench-coat",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 160,
            "shop_id": 2,
            "sale_price": 135,
            "sku": "1209",
            "quantity": 40,
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
                "id": "122",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/122\/Notch_Lapel_Elastic.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/122\/conversions\/Notch_Lapel_Elastic-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:11:21.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 120,
                        "category_id": 72
                    }
                },
                {
                    "id": 76,
                    "name": "Waist Coat",
                    "slug": "waist-coat",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:40.000000Z",
                    "updated_at": "2021-03-09T08:57:40.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 120,
                        "category_id": 76
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 121,
            "name": "Turn Down Collar Elastic Waist Plain Trench Coat",
            "slug": "turn-down-collar-elastic-waist-plain-trench-coat",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 160,
            "shop_id": 2,
            "sale_price": 145,
            "sku": "1210",
            "quantity": 40,
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
                "id": "123",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/123\/Turn_Down.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/123\/conversions\/Turn_Down-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:12:33.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 121,
                        "category_id": 72
                    }
                },
                {
                    "id": 76,
                    "name": "Waist Coat",
                    "slug": "waist-coat",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:40.000000Z",
                    "updated_at": "2021-03-09T08:57:40.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 121,
                        "category_id": 76
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 122,
            "name": "Cowl Neck Kangaroo Pocket Color Block Hoodie",
            "slug": "cowl-neck-kangaroo-pocket-color-block-hoodie",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 95,
            "shop_id": 2,
            "sale_price": 75,
            "sku": "1212",
            "quantity": 40,
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
                "id": "124",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/124\/Cowl_Neck.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/124\/conversions\/Cowl_Neck-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:13:51.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 122,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 122,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 124,
            "name": "Hooded Zips Plain Long Sleeve Hoodies",
            "slug": "hooded-zips-plain-long-sleeve-hoodies",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1213",
            "quantity": 375,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "126",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/126\/Hooded_Zips.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/126\/conversions\/Hooded_Zips-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:26:55.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 125,
            "min_price": 124,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 124,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 124,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 124,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 124,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 124,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 13,
                    "attribute_id": 4,
                    "value": "L",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:30.000000Z",
                    "updated_at": "2021-05-09T17:45:30.000000Z",
                    "pivot": {
                        "product_id": 124,
                        "attribute_value_id": 13
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 126,
            "name": "Lapel Zips Plain Long Sleeve Jackets",
            "slug": "lapel-zips-plain-long-sleeve-jackets",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1214",
            "quantity": 600,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "127",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/127\/Lapel_Zips.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/127\/conversions\/Lapel_Zips-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:28:39.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 200,
            "min_price": 150,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 126,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 126,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 126,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 10,
                    "attribute_id": 3,
                    "value": "White",
                    "meta": "#e1e5ea",
                    "created_at": "2021-05-09T16:11:35.000000Z",
                    "updated_at": "2021-05-09T18:58:16.000000Z",
                    "pivot": {
                        "product_id": 126,
                        "attribute_value_id": 10
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 126,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 126,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 128,
            "name": "Boxy Cardigan",
            "slug": "boxy-cardigan",
            "description": "Blue and navy cotton Decima zipped cardigan from ANGLOZINE featuring a classic collar, a front zip fastening, a chest pocket, long sleeves, contrasting panels and a slim fit. This item is unisex.",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1215",
            "quantity": 600,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "130",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/130\/BOXY_CARDIGAN.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/130\/conversions\/BOXY_CARDIGAN-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:30:33.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 150,
            "min_price": 150,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 128,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 128,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 128,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 128,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 128,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 13,
                    "attribute_id": 4,
                    "value": "L",
                    "meta": null,
                    "created_at": "2021-05-09T17:45:30.000000Z",
                    "updated_at": "2021-05-09T17:45:30.000000Z",
                    "pivot": {
                        "product_id": 128,
                        "attribute_value_id": 13
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 130,
            "name": "Stretch Cotton Utility Jacket With Adjustable Waist",
            "slug": "stretch-cotton-utility-jacket-with-adjustable-waist",
            "description": "Blue and navy cotton Decima zipped cardigan from ANGLOZINE featuring a classic collar, a front zip fastening, a chest pocket, long sleeves, contrasting panels and a slim fit. This item is unisex.",
            "type_id": 5,
            "price": null,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1216",
            "quantity": 800,
            "in_stock": 1,
            "is_taxable": 0,
            "shipping_class_id": null,
            "status": "publish",
            "product_type": "variable",
            "unit": "1 pc(s)",
            "height": null,
            "width": null,
            "length": null,
            "image": {
                "id": "132",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/132\/STRETCH_COTTON.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/132\/conversions\/STRETCH_COTTON-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:32:06.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": 200,
            "min_price": 180,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 130,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 130,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": [
                {
                    "id": 8,
                    "attribute_id": 3,
                    "value": "Red",
                    "meta": "#ce1f6a",
                    "created_at": "2021-05-09T16:10:56.000000Z",
                    "updated_at": "2021-05-09T18:53:16.000000Z",
                    "pivot": {
                        "product_id": 130,
                        "attribute_value_id": 8
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 9,
                    "attribute_id": 3,
                    "value": "Blue",
                    "meta": "#344fa1",
                    "created_at": "2021-05-09T16:11:20.000000Z",
                    "updated_at": "2021-05-09T18:52:35.000000Z",
                    "pivot": {
                        "product_id": 130,
                        "attribute_value_id": 9
                    },
                    "attribute": {
                        "id": 3,
                        "slug": "color",
                        "name": "Color",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:31.000000Z",
                        "updated_at": "2021-05-09T16:10:31.000000Z"
                    }
                },
                {
                    "id": 11,
                    "attribute_id": 4,
                    "value": "S",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:43.000000Z",
                    "updated_at": "2021-05-09T16:11:43.000000Z",
                    "pivot": {
                        "product_id": 130,
                        "attribute_value_id": 11
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                },
                {
                    "id": 12,
                    "attribute_id": 4,
                    "value": "M",
                    "meta": null,
                    "created_at": "2021-05-09T16:11:50.000000Z",
                    "updated_at": "2021-05-09T16:11:50.000000Z",
                    "pivot": {
                        "product_id": 130,
                        "attribute_value_id": 12
                    },
                    "attribute": {
                        "id": 4,
                        "slug": "size",
                        "name": "Size",
                        "shop_id": 2,
                        "created_at": "2021-05-09T16:10:40.000000Z",
                        "updated_at": "2021-05-09T16:10:40.000000Z"
                    }
                }
            ]
        },
        {
            "id": 132,
            "name": "David Jones",
            "slug": "david-jones",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 105,
            "shop_id": 2,
            "sale_price": 84,
            "sku": "1217",
            "quantity": 40,
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
                "id": "134",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/134\/David_Jones.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/134\/conversions\/David_Jones-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:35:50.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 132,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 132,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 133,
            "name": "Golders",
            "slug": "golders",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 200,
            "shop_id": 2,
            "sale_price": 175,
            "sku": "1218",
            "quantity": 40,
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
                "id": "135",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/135\/GOLDERS.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/135\/conversions\/GOLDERS-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:37:11.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 133,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 133,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 134,
            "name": "Mos Mosh",
            "slug": "mos-mosh",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 150,
            "shop_id": 2,
            "sale_price": 129,
            "sku": "1220",
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
                "id": "136",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/136\/Mos_Mosh.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/136\/conversions\/Mos_Mosh-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:38:45.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 134,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 134,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 135,
            "name": "Raymond",
            "slug": "raymond",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 80,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1221",
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
                "id": "137",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/137\/Raymond.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/137\/conversions\/Raymond-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:40:14.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 135,
                        "category_id": 72
                    }
                },
                {
                    "id": 75,
                    "name": "Blazer",
                    "slug": "blazer",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:20.000000Z",
                    "updated_at": "2021-03-09T08:57:20.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 135,
                        "category_id": 75
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 137,
            "name": "Fred Perry Taped Sports Jacket In Wine",
            "slug": "fred-perry-taped-sports-jacket-in-wine",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 100,
            "shop_id": 2,
            "sale_price": 84,
            "sku": "1225",
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
                "id": "138",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/138\/Bluebird_M_AlpineStartJacket.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/138\/conversions\/Bluebird_M_AlpineStartJacket-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:46:42.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 137,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 137,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 138,
            "name": "Fred Perry Taped Sports Jacket",
            "slug": "fred-perry-taped-sports-jacket",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 100,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1226",
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
                "id": "139",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/139\/Fred_perry_taped_sports_jacket_in_wine.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/139\/conversions\/Fred_perry_taped_sports_jacket_in_wine-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T18:49:45.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 138,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 138,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 139,
            "name": "Loap Infery Kids Winter Jacket",
            "slug": "loap-infery-kids-winter-jacket",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 60,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1228",
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
                "id": "140",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/140\/Loap_infery_kids_winter_jacket_blue_gray.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/140\/conversions\/Loap_infery_kids_winter_jacket_blue_gray-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:00:43.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 139,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 139,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 140,
            "name": "Fred Perry Taped Sports Jacket Navy",
            "slug": "fred-perry-taped-sports-jacket-navy",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 100,
            "shop_id": 2,
            "sale_price": 85,
            "sku": "1230",
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
                "id": "141",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/141\/Fred_perry_tipped_brentham_jacket_in_navy.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/141\/conversions\/Fred_perry_tipped_brentham_jacket_in_navy-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:05:00.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 140,
                        "category_id": 72
                    }
                },
                {
                    "id": 73,
                    "name": "Hoodie",
                    "slug": "hoodie",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:39.000000Z",
                    "updated_at": "2021-03-09T08:56:39.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 140,
                        "category_id": 73
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 141,
            "name": "Loap Jerryk Mens Winter City Jacket Blue",
            "slug": "loap-jerryk-mens-winter-city-jacket-blue",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 100,
            "shop_id": 2,
            "sale_price": 85,
            "sku": "1231",
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
                "id": "142",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/142\/Loap_jerryk_mens_winter_city_jacket_blue.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/142\/conversions\/Loap_jerryk_mens_winter_city_jacket_blue-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:08:09.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 141,
                        "category_id": 72
                    }
                },
                {
                    "id": 74,
                    "name": "Jacket",
                    "slug": "jacket",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:55.000000Z",
                    "updated_at": "2021-03-09T08:56:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 141,
                        "category_id": 74
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 142,
            "name": "Loap Jerryk Mens Winter City Jacket Red",
            "slug": "loap-jerryk-mens-winter-city-jacket-red",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 100,
            "shop_id": 2,
            "sale_price": 0,
            "sku": "1236",
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
                "id": "143",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/143\/Loap_jerryk_mens_winter_city_jacket_red.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/143\/conversions\/Loap_jerryk_mens_winter_city_jacket_red-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:16:32.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 142,
                        "category_id": 72
                    }
                },
                {
                    "id": 74,
                    "name": "Jacket",
                    "slug": "jacket",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:55.000000Z",
                    "updated_at": "2021-03-09T08:56:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 142,
                        "category_id": 74
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 143,
            "name": "Roadster Polar Fleece Jacket",
            "slug": "roadster-polar-fleece-jacket",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 50,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1240",
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
                "id": "144",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/144\/Roadster_Polar_fleece_jacket.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/144\/conversions\/Roadster_Polar_fleece_jacket-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:23:52.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 143,
                        "category_id": 72
                    }
                },
                {
                    "id": 74,
                    "name": "Jacket",
                    "slug": "jacket",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:55.000000Z",
                    "updated_at": "2021-03-09T08:56:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 143,
                        "category_id": 74
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 144,
            "name": "Roadster Polar Fleece Jacket",
            "slug": "roadster-polar-fleece-jacket-1",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 94,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1245",
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
                "id": "145",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/145\/Montane_womens_phoenix_jacket.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/145\/conversions\/Montane_womens_phoenix_jacket-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:27:57.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 144,
                        "category_id": 72
                    }
                },
                {
                    "id": 74,
                    "name": "Jacket",
                    "slug": "jacket",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:55.000000Z",
                    "updated_at": "2021-03-09T08:56:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 144,
                        "category_id": 74
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 145,
            "name": "Score Lazio Red",
            "slug": "score-lazio-red",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 70,
            "shop_id": 2,
            "sale_price": null,
            "sku": "1246",
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
                "id": "146",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/146\/Score_lazio_red.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/146\/conversions\/Score_lazio_red-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:29:51.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 145,
                        "category_id": 72
                    }
                },
                {
                    "id": 74,
                    "name": "Jacket",
                    "slug": "jacket",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:56:55.000000Z",
                    "updated_at": "2021-03-09T08:56:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 145,
                        "category_id": 74
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 146,
            "name": "Brook Taverner Coat",
            "slug": "brook-taverner-coat",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 160,
            "shop_id": 2,
            "sale_price": 144,
            "sku": "1250",
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
                "id": "147",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/147\/Brook_Taverner.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/147\/conversions\/Brook_Taverner-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:32:47.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 146,
                        "category_id": 72
                    }
                },
                {
                    "id": 76,
                    "name": "Waist Coat",
                    "slug": "waist-coat",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:40.000000Z",
                    "updated_at": "2021-03-09T08:57:40.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 146,
                        "category_id": 76
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 147,
            "name": "Brook Taverner Scapoli Ladies Waist Coat",
            "slug": "brook-taverner-scapoli-ladies-waist-coat",
            "description": "Black bandhgala, has a mandarin collar, a full button placket, long sleeves, three pockets, double vented back hem, and has an attached lining",
            "type_id": 5,
            "price": 150,
            "shop_id": 2,
            "sale_price": 135,
            "sku": "1251",
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
                "id": "148",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/148\/Brook_taverner_scapoli_ladies_waistcoat.jpg",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/148\/conversions\/Brook_taverner_scapoli_ladies_waistcoat-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-09T19:39:30.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "shop": {
                "id": 2,
                "owner_id": 1,
                "name": "Clothing Shop",
                "slug": "clothing-shop",
                "description": "The clothing shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "886",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/Untitled-4.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/884\/conversions\/Untitled-4-thumbnail.jpg"
                },
                "logo": {
                    "id": "896",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/fashion.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/894\/conversions\/fashion-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "62656",
                    "city": "Lincoln",
                    "state": "Illinois",
                    "country": "USA",
                    "street_address": "4885  Spring Street"
                },
                "settings": {
                    "contact": "212901921221",
                    "socials": [
                        {
                            "url": "https:\/\/www.facebook.com\/",
                            "icon": FacebookIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.15766909999999967340045259334146976470947265625,
                        "lng": -89.38529779999998936546035110950469970703125,
                        "city": "Lincoln",
                        "state": "IL",
                        "country": "United States",
                        "formattedAddress": "IL-121, Lincoln, IL, USA"
                    }
                },
                "created_at": "2021-06-27T03:47:10.000000Z",
                "updated_at": "2021-07-08T09:26:24.000000Z"
            },
            "categories": [
                {
                    "id": 72,
                    "name": "Outer Wear",
                    "slug": "outer-wear",
                    "icon": OuterWear,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:55:55.000000Z",
                    "updated_at": "2021-03-09T08:55:55.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 147,
                        "category_id": 72
                    }
                },
                {
                    "id": 76,
                    "name": "Waist Coat",
                    "slug": "waist-coat",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 72,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:57:40.000000Z",
                    "updated_at": "2021-03-09T08:57:40.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 147,
                        "category_id": 76
                    }
                }
            ],
            "tags": [],
            "variations": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=1",
    "from": 1,
    "last_page": 3,
    "last_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=3",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=3",
            "label": "3",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Aclothing&searchJoin=and&limit=30&page=2",
    "path": "https:\/\/pickbazar-laravel\/products",
    "per_page": "30",
    "prev_page_url": null,
    "to": 30,
    "total": 64
}

export const furniture = {
    "current_page": 1,
    "data": [
        {
            "id": 412,
            "name": "Ash Double Bed",
            "slug": "ash-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 250,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2200",
            "quantity": 30,
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
                "id": "435",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/434\/Ash.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/434\/conversions\/Ash-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "706",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/705\/Bed-4.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/705\/conversions\/Bed-4-thumbnail.jpg"
                },
                {
                    "id": "707",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/706\/Bed-5.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/706\/conversions\/Bed-5-thumbnail.jpg"
                },
                {
                    "id": "708",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/707\/Bed-6.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/707\/conversions\/Bed-6-thumbnail.jpg"
                },
                {
                    "id": "779",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/778\/Ash.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/778\/conversions\/Ash-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:42:44.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 412,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 412,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 413,
            "name": "Brown Hardwood Double Bed",
            "slug": "brown-hardwood-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 250,
            "shop_id": 1,
            "sale_price": 220,
            "sku": "2201",
            "quantity": 30,
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
                "id": "436",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/435\/Hardwoods.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/435\/conversions\/Hardwoods-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "709",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/708\/Bed-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/708\/conversions\/Bed-1-thumbnail.jpg"
                },
                {
                    "id": "710",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/709\/Bed-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/709\/conversions\/Bed-2-thumbnail.jpg"
                },
                {
                    "id": "711",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/710\/Bed-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/710\/conversions\/Bed-3-thumbnail.jpg"
                },
                {
                    "id": "780",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/779\/Hardwoods.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/779\/conversions\/Hardwoods-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:43:43.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 413,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 413,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 414,
            "name": "Deluxe Mahagony Double Bed",
            "slug": "deluxe-mahagony-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 300,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2202",
            "quantity": 30,
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
                "id": "437",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/436\/Mahogany.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/436\/conversions\/Mahogany-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "712",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/711\/Bed-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/711\/conversions\/Bed-1-thumbnail.jpg"
                },
                {
                    "id": "713",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/712\/Bed-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/712\/conversions\/Bed-2-thumbnail.jpg"
                },
                {
                    "id": "714",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/713\/Bed-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/713\/conversions\/Bed-3-thumbnail.jpg"
                },
                {
                    "id": "781",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/780\/Mahogany.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/780\/conversions\/Mahogany-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:51:38.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 414,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 414,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 415,
            "name": "Supreme Oak Double Bed",
            "slug": "supreme-oak-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 300,
            "shop_id": 1,
            "sale_price": 260,
            "sku": "2204",
            "quantity": 30,
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
                "id": "438",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/437\/Oak.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/437\/conversions\/Oak-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "718",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/717\/Bed-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/717\/conversions\/Bed-1-thumbnail.jpg"
                },
                {
                    "id": "719",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/718\/Bed-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/718\/conversions\/Bed-2-thumbnail.jpg"
                },
                {
                    "id": "720",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/719\/Bed-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/719\/conversions\/Bed-3-thumbnail.jpg"
                },
                {
                    "id": "782",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/781\/Oak.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/781\/conversions\/Oak-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:52:56.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 415,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 415,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 416,
            "name": "Partex Coushoned Double Bed",
            "slug": "partex-coushoned-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 270,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2205",
            "quantity": 30,
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
                "id": "439",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/438\/Partex.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/438\/conversions\/Partex-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "715",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/714\/Bed-4.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/714\/conversions\/Bed-4-thumbnail.jpg"
                },
                {
                    "id": "716",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/715\/Bed-5.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/715\/conversions\/Bed-5-thumbnail.jpg"
                },
                {
                    "id": "717",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/716\/Bed-6.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/716\/conversions\/Bed-6-thumbnail.jpg"
                },
                {
                    "id": "784",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/783\/Partex.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/783\/conversions\/Partex-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:53:46.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 416,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 416,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 417,
            "name": "Vince Ottoman Double Bed",
            "slug": "vince-ottoman-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 300,
            "shop_id": 1,
            "sale_price": 280,
            "sku": "2206",
            "quantity": 30,
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
                "id": "440",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/439\/Beech.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/439\/conversions\/Beech-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "721",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/720\/Bed-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/720\/conversions\/Bed-1-thumbnail.jpg"
                },
                {
                    "id": "722",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/721\/Bed-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/721\/conversions\/Bed-2-thumbnail.jpg"
                },
                {
                    "id": "723",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/722\/Bed-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/722\/conversions\/Bed-3-thumbnail.jpg"
                },
                {
                    "id": "785",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/784\/Beech.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/784\/conversions\/Beech-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:54:42.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 417,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 417,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 418,
            "name": "Cedar Double Bed",
            "slug": "cedar-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 400,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2207",
            "quantity": 30,
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
                "id": "441",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/440\/Cedar.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/440\/conversions\/Cedar-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T07:55:34.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 418,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 418,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 419,
            "name": "Green Elm wood Double Bed",
            "slug": "green-elm-wood-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 350,
            "shop_id": 1,
            "sale_price": 310,
            "sku": "2209",
            "quantity": 30,
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
                "id": "442",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/441\/Elm.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/441\/conversions\/Elm-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T07:56:29.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 419,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 419,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 420,
            "name": "Grey Fir Double Bed",
            "slug": "grey-fir-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 480,
            "shop_id": 1,
            "sale_price": 440,
            "sku": "2210",
            "quantity": 30,
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
                "id": "443",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/442\/Fir.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/442\/conversions\/Fir-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "724",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/723\/Bed-4.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/723\/conversions\/Bed-4-thumbnail.jpg"
                },
                {
                    "id": "725",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/724\/Bed-5.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/724\/conversions\/Bed-5-thumbnail.jpg"
                },
                {
                    "id": "726",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/725\/Bed-6.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/725\/conversions\/Bed-6-thumbnail.jpg"
                },
                {
                    "id": "787",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/786\/Fir.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/786\/conversions\/Fir-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:57:20.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 420,
                        "category_id": 101
                    }
                },
                {
                    "id": 102,
                    "name": "Master Bed",
                    "slug": "master-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:48.000000Z",
                    "updated_at": "2021-03-13T14:43:48.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 420,
                        "category_id": 102
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 421,
            "name": "Elm Single Bed",
            "slug": "elm-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 400,
            "shop_id": 1,
            "sale_price": 340,
            "sku": "2211",
            "quantity": 30,
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
                "id": "444",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/443\/Elm_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/443\/conversions\/Elm_single-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "731",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/730\/bed-7.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/730\/conversions\/bed-7-thumbnail.jpg"
                },
                {
                    "id": "732",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/731\/Bed-6.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/731\/conversions\/Bed-6-thumbnail.jpg"
                },
                {
                    "id": "733",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/732\/Bed-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/732\/conversions\/Bed-2-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T07:58:25.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 421,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 421,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 422,
            "name": "Elmy Sinlge Bed",
            "slug": "elmy-sinlge-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 340,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2212",
            "quantity": 30,
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
                "id": "445",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/444\/Elmy_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/444\/conversions\/Elmy_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T07:59:17.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 422,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 422,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 423,
            "name": "Fredd Single Bed",
            "slug": "fredd-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 300,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2214",
            "quantity": 30,
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
                "id": "446",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/445\/Fredd_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/445\/conversions\/Fredd_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:00:06.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 423,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 423,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 424,
            "name": "Hattie Single Bed",
            "slug": "hattie-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 300,
            "shop_id": 1,
            "sale_price": 260,
            "sku": "2215",
            "quantity": 30,
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
                "id": "447",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/446\/hattie_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/446\/conversions\/hattie_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:02:01.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 424,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 424,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 425,
            "name": "Alana Single Bed",
            "slug": "alana-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 290,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2218",
            "quantity": 30,
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
                "id": "448",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/447\/Alana_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/447\/conversions\/Alana_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:04:34.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 425,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 425,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 426,
            "name": "Atlanta Single Bed",
            "slug": "atlanta-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 255,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2220",
            "quantity": 30,
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
                "id": "449",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/448\/Atlanta_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/448\/conversions\/Atlanta_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:05:42.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 426,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 426,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 427,
            "name": "Sabine Bed",
            "slug": "sabine-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 320,
            "shop_id": 1,
            "sale_price": 295,
            "sku": "2222",
            "quantity": 30,
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
                "id": "450",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/449\/Sabine_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/449\/conversions\/Sabine_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:07:08.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 427,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 427,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 428,
            "name": "Teak Single Bed",
            "slug": "teak-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 310,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2223",
            "quantity": 30,
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
                "id": "451",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/450\/Teak_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/450\/conversions\/Teak_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:08:05.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 428,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 428,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 429,
            "name": "Burcot Single Bed",
            "slug": "burcot-single-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 380,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2224",
            "quantity": 30,
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
                "id": "452",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/451\/Burcot_single.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/451\/conversions\/Burcot_single-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:09:07.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 429,
                        "category_id": 101
                    }
                },
                {
                    "id": 103,
                    "name": "Single Bed",
                    "slug": "single-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:05.000000Z",
                    "updated_at": "2021-03-13T14:44:05.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 429,
                        "category_id": 103
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 430,
            "name": "Ruby Semi Double Bed",
            "slug": "ruby-semi-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 480,
            "shop_id": 1,
            "sale_price": 400,
            "sku": "2225",
            "quantity": 30,
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
                "id": "453",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/452\/ruby.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/452\/conversions\/ruby-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "727",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/726\/Bed-1.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/726\/conversions\/Bed-1-thumbnail.jpg"
                },
                {
                    "id": "729",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/728\/Bed-3.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/728\/conversions\/Bed-3-thumbnail.jpg"
                },
                {
                    "id": "730",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/729\/Bed.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/729\/conversions\/Bed-thumbnail.jpg"
                },
                {
                    "id": "789",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/787\/ruby.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/787\/conversions\/ruby-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T08:10:17.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 430,
                        "category_id": 101
                    }
                },
                {
                    "id": 104,
                    "name": "Semi Double Bed",
                    "slug": "semi-double-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:24.000000Z",
                    "updated_at": "2021-03-13T14:44:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 430,
                        "category_id": 104
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 431,
            "name": "Andes Deco Semi Double Bed",
            "slug": "andes-deco-semi-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 320,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2226",
            "quantity": 30,
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
                "id": "454",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/453\/andes_deco.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/453\/conversions\/andes_deco-thumbnail.jpg"
            },
            "gallery": [
                {
                    "id": "791",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/789\/andes_deco.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/789\/conversions\/andes_deco-thumbnail.jpg"
                },
                {
                    "id": "792",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/790\/Hardwoods.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/790\/conversions\/Hardwoods-thumbnail.jpg"
                },
                {
                    "id": "793",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/791\/Bed-2.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/791\/conversions\/Bed-2-thumbnail.jpg"
                },
                {
                    "id": "794",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/792\/Mahogany.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/792\/conversions\/Mahogany-thumbnail.jpg"
                }
            ],
            "deleted_at": null,
            "created_at": "2021-03-14T08:11:10.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 431,
                        "category_id": 101
                    }
                },
                {
                    "id": 104,
                    "name": "Semi Double Bed",
                    "slug": "semi-double-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:24.000000Z",
                    "updated_at": "2021-03-13T14:44:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 431,
                        "category_id": 104
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 432,
            "name": "Andes Wide Semi Double Bed",
            "slug": "andes-wide-semi-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 340,
            "shop_id": 1,
            "sale_price": 300,
            "sku": "2227",
            "quantity": 30,
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
                "id": "455",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/454\/andes_wide.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/454\/conversions\/andes_wide-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:12:18.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 432,
                        "category_id": 101
                    }
                },
                {
                    "id": 104,
                    "name": "Semi Double Bed",
                    "slug": "semi-double-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:24.000000Z",
                    "updated_at": "2021-03-13T14:44:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 432,
                        "category_id": 104
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 433,
            "name": "Walnut Semi Double Bed",
            "slug": "walnut-semi-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 270,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2228",
            "quantity": 30,
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
                "id": "456",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/455\/Walnut.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/455\/conversions\/Walnut-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:13:14.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 433,
                        "category_id": 101
                    }
                },
                {
                    "id": 104,
                    "name": "Semi Double Bed",
                    "slug": "semi-double-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:24.000000Z",
                    "updated_at": "2021-03-13T14:44:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 433,
                        "category_id": 104
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 434,
            "name": "Haven Storage Semi Double Bed",
            "slug": "haven-storage-semi-double-bed",
            "description": "A bed is a piece of furniture which is used as a place to sleep or relax.",
            "type_id": 6,
            "price": 400,
            "shop_id": 1,
            "sale_price": 340,
            "sku": "2229",
            "quantity": 30,
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
                "id": "457",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/456\/haven_storage.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/456\/conversions\/haven_storage-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:14:17.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 101,
                    "name": "Bed",
                    "slug": "bed",
                    "icon": Bed,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:43:22.000000Z",
                    "updated_at": "2021-03-13T14:43:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 434,
                        "category_id": 101
                    }
                },
                {
                    "id": 104,
                    "name": "Semi Double Bed",
                    "slug": "semi-double-bed",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 101,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:24.000000Z",
                    "updated_at": "2021-03-13T14:44:24.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 434,
                        "category_id": 104
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 435,
            "name": "White Cozy Chair",
            "slug": "white-cozy-chair",
            "description": "One of the basic pieces of furniture, a chair is a type of seat.",
            "type_id": 6,
            "price": 160,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2230",
            "quantity": 30,
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
                "id": "458",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/457\/White.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/457\/conversions\/White-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:15:51.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 105,
                    "name": "Chair",
                    "slug": "chair",
                    "icon": Chair,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:44:51.000000Z",
                    "updated_at": "2021-03-13T14:44:51.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 435,
                        "category_id": 105
                    }
                },
                {
                    "id": 106,
                    "name": "Cozy Chair",
                    "slug": "cozy-chair",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 105,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:45:07.000000Z",
                    "updated_at": "2021-03-13T14:45:07.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 435,
                        "category_id": 106
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 436,
            "name": "Antero Black Double Sofa",
            "slug": "antero-black-double-sofa",
            "description": "a piece of furniture, also called a couch",
            "type_id": 6,
            "price": 950,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2231",
            "quantity": 30,
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
                "id": "459",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/458\/Antero_2Seater.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/458\/conversions\/Antero_2Seater-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:17:56.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 109,
                    "name": "Sofa",
                    "slug": "sofa",
                    "icon": Sofa,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:43.000000Z",
                    "updated_at": "2021-03-13T14:46:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 436,
                        "category_id": 109
                    }
                },
                {
                    "id": 110,
                    "name": "Double Sofa",
                    "slug": "double-sofa",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:04.000000Z",
                    "updated_at": "2021-03-13T14:47:04.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 436,
                        "category_id": 110
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 437,
            "name": "Castlery Double Sofa",
            "slug": "castlery-double-sofa",
            "description": "a piece of furniture, also called a couch",
            "type_id": 6,
            "price": 680,
            "shop_id": 1,
            "sale_price": 620,
            "sku": "2232",
            "quantity": 30,
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
                "id": "460",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/459\/Castlery_2Seater.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/459\/conversions\/Castlery_2Seater-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:18:54.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 109,
                    "name": "Sofa",
                    "slug": "sofa",
                    "icon": Sofa,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:43.000000Z",
                    "updated_at": "2021-03-13T14:46:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 437,
                        "category_id": 109
                    }
                },
                {
                    "id": 110,
                    "name": "Double Sofa",
                    "slug": "double-sofa",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:04.000000Z",
                    "updated_at": "2021-03-13T14:47:04.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 437,
                        "category_id": 110
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 438,
            "name": "Tara Brown Single Sofa",
            "slug": "tara-brown-single-sofa",
            "description": "a piece of furniture, also called a couch",
            "type_id": 6,
            "price": 350,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2233",
            "quantity": 30,
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
                "id": "461",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/460\/Tara.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/460\/conversions\/Tara-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:20:17.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 109,
                    "name": "Sofa",
                    "slug": "sofa",
                    "icon": Sofa,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:43.000000Z",
                    "updated_at": "2021-03-13T14:46:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 438,
                        "category_id": 109
                    }
                },
                {
                    "id": 111,
                    "name": "Single Sofa",
                    "slug": "single-sofa",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:22.000000Z",
                    "updated_at": "2021-03-13T14:47:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 438,
                        "category_id": 111
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 439,
            "name": "Aarya Yellow Single Sofa",
            "slug": "aarya-yellow-single-sofa",
            "description": "a piece of furniture, also called a couch",
            "type_id": 6,
            "price": 320,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2236",
            "quantity": 30,
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
                "id": "462",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/461\/Aarya.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/461\/conversions\/Aarya-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:21:09.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 109,
                    "name": "Sofa",
                    "slug": "sofa",
                    "icon": Sofa,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:43.000000Z",
                    "updated_at": "2021-03-13T14:46:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 439,
                        "category_id": 109
                    }
                },
                {
                    "id": 111,
                    "name": "Single Sofa",
                    "slug": "single-sofa",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:22.000000Z",
                    "updated_at": "2021-03-13T14:47:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 439,
                        "category_id": 111
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 440,
            "name": "Safari Ash Single Sofa",
            "slug": "safari-ash-single-sofa",
            "description": "a piece of furniture, also called a couch",
            "type_id": 6,
            "price": 280,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2238",
            "quantity": 30,
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
                "id": "463",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/462\/Safari.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/462\/conversions\/Safari-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:22:00.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 109,
                    "name": "Sofa",
                    "slug": "sofa",
                    "icon": Sofa,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:43.000000Z",
                    "updated_at": "2021-03-13T14:46:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 440,
                        "category_id": 109
                    }
                },
                {
                    "id": 111,
                    "name": "Single Sofa",
                    "slug": "single-sofa",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:22.000000Z",
                    "updated_at": "2021-03-13T14:47:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 440,
                        "category_id": 111
                    }
                }
            ],
            "tags": [],
            "variations": []
        },
        {
            "id": 441,
            "name": "Vester Bro Single Sofa",
            "slug": "vester-bro-single-sofa",
            "description": "a piece of furniture, also called a couch",
            "type_id": 6,
            "price": 300,
            "shop_id": 1,
            "sale_price": null,
            "sku": "2240",
            "quantity": 30,
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
                "id": "464",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/463\/Vesterbro.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/463\/conversions\/Vesterbro-thumbnail.jpg"
            },
            "gallery": [],
            "deleted_at": null,
            "created_at": "2021-03-14T08:22:51.000000Z",
            "updated_at": "2021-06-27T03:56:42.000000Z",
            "max_price": null,
            "min_price": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "shop": {
                "id": 1,
                "owner_id": 1,
                "name": "Furniture Shop",
                "slug": "furniture-shop",
                "description": "The furniture shop is the best shop around the city. This is being run under the store owner and our aim is to provide quality product and hassle free customer service.",
                "cover_image": {
                    "id": "885",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/Untitled-6.jpg",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/883\/conversions\/Untitled-6-thumbnail.jpg"
                },
                "logo": {
                    "id": "884",
                    "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/Furniture.png",
                    "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/882\/conversions\/Furniture-thumbnail.jpg"
                },
                "is_active": 1,
                "address": {
                    "zip": "08753",
                    "city": "East Dover",
                    "state": "New Jersey",
                    "country": "USA",
                    "street_address": "588  Finwood Road"
                },
                "settings": {
                    "contact": "21342121221",
                    "socials": [
                        {
                            "url": "https:\/\/www.instagram.com\/",
                            "icon": InstagramIcon
                        }
                    ],
                    "website": "https:\/\/redq.io\/",
                    "location": {
                        "lat": 40.75727200000000038926373235881328582763671875,
                        "lng": -74.089507999999995035977917723357677459716796875,
                        "city": "Kearny",
                        "state": "NJ",
                        "country": "United States",
                        "formattedAddress": "New Jersey Turnpike, Kearny, NJ, USA"
                    }
                },
                "created_at": "2021-06-27T03:46:14.000000Z",
                "updated_at": "2021-07-08T09:27:14.000000Z"
            },
            "categories": [
                {
                    "id": 109,
                    "name": "Sofa",
                    "slug": "sofa",
                    "icon": Sofa,
                    "image": [],
                    "details": null,
                    "parent": null,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:43.000000Z",
                    "updated_at": "2021-03-13T14:46:43.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 441,
                        "category_id": 109
                    }
                },
                {
                    "id": 111,
                    "name": "Single Sofa",
                    "slug": "single-sofa",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:22.000000Z",
                    "updated_at": "2021-03-13T14:47:22.000000Z",
                    "deleted_at": null,
                    "pivot": {
                        "product_id": 441,
                        "category_id": 111
                    }
                }
            ],
            "tags": [],
            "variations": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Afurniture&searchJoin=and&limit=30&page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Afurniture&searchJoin=and&limit=30&page=2",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Afurniture&searchJoin=and&limit=30&page=1",
            "label": "1",
            "active": true
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Afurniture&searchJoin=and&limit=30&page=2",
            "label": "2",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Afurniture&searchJoin=and&limit=30&page=2",
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": "https:\/\/pickbazar-laravel\/products?search=type.slug%3Afurniture&searchJoin=and&limit=30&page=2",
    "path": "https:\/\/pickbazar-laravel\/products",
    "per_page": "30",
    "prev_page_url": null,
    "to": 30,
    "total": 55
}

export const products = { grocery, bakery, makeup, bags, clothing, furniture };
