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
import Lips from "@components/icons/category/lips";
import Accessories from "@components/icons/category/accessories";
import ShavingNeeds from "@components/icons/category/shaving-needs";
import OralCare from "@components/icons/category/oral-care";
import Deodorant from "@components/icons/category/deodorant";
import BathOil from "@components/icons/category/bath-oil";
import Wallet from "@components/icons/category/wallet";
import LaptopBag from "@components/icons/category/laptop-bag";
import Pants from "@components/icons/category/pants";
import Tops from "@components/icons/category/tops";
import Skirts from "@components/icons/category/skirts";
import Shirts from "@components/icons/category/shirts";
import Table from "@components/icons/category/table";

import BakeryIcon from "@components/icons/type/bakery-icon";
import FacialCare from "@components/icons/type/facial-care";
import HandbagIcon from "@components/icons/type/handbag-icon";
import DressIcon from "@components/icons/type/dress-icon";
import FurnitureIcon from "@components/icons/type/furniture-icon";

export const grocery = {
    "current_page": 1,
    "data": [
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
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
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
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
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
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
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
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 7,
            "name": "Snacks",
            "slug": "snacks",
            "icon": Snacks,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T08:55:56.000000Z",
            "updated_at": "2021-03-08T08:55:56.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 8,
                    "name": "Nuts & Biscuits",
                    "slug": "nuts-biscuits",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 7,
                    "type_id": 1,
                    "created_at": "2021-03-08T08:57:28.000000Z",
                    "updated_at": "2021-03-08T08:57:28.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 9,
                    "name": "Chocolates",
                    "slug": "chocolates",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 7,
                    "type_id": 1,
                    "created_at": "2021-03-08T08:58:44.000000Z",
                    "updated_at": "2021-03-08T08:58:44.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 10,
                    "name": "Crisps",
                    "slug": "crisps",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 7,
                    "type_id": 1,
                    "created_at": "2021-03-08T08:59:05.000000Z",
                    "updated_at": "2021-03-08T08:59:05.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 11,
                    "name": "Noodles & Pasta",
                    "slug": "noodles-pasta",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 7,
                    "type_id": 1,
                    "created_at": "2021-03-08T08:59:23.000000Z",
                    "updated_at": "2021-03-08T08:59:23.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 12,
                    "name": "Sauce",
                    "slug": "sauce",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 7,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:00:00.000000Z",
                    "updated_at": "2021-03-08T09:00:00.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 14,
                    "name": "Soup",
                    "slug": "soup",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 7,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:48:49.000000Z",
                    "updated_at": "2021-03-08T09:48:49.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 13,
            "name": "Pet Care",
            "slug": "pet-care",
            "icon": PetCare,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T09:47:41.000000Z",
            "updated_at": "2021-03-08T09:47:41.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 15,
                    "name": "Cat Food",
                    "slug": "cat-food",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 13,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:49:17.000000Z",
                    "updated_at": "2021-03-08T09:49:17.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 16,
                    "name": "Dog Food",
                    "slug": "dog-food",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 13,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:49:51.000000Z",
                    "updated_at": "2021-03-08T09:49:51.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 17,
                    "name": "Accessories",
                    "slug": "accessories",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 13,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:50:51.000000Z",
                    "updated_at": "2021-03-08T09:50:51.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 18,
            "name": "Home & Cleaning",
            "slug": "home-cleaning",
            "icon": HomeCleaning,
            "image": {
                "id": null,
                "original": null,
                "thumbnail": null
            },
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T09:51:38.000000Z",
            "updated_at": "2021-03-08T09:52:52.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 19,
                    "name": "Air Freshner",
                    "slug": "air-freshner",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 18,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:52:00.000000Z",
                    "updated_at": "2021-03-08T09:52:00.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 20,
                    "name": "Cleaning Products",
                    "slug": "cleaning-products",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 18,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:52:27.000000Z",
                    "updated_at": "2021-03-08T09:52:27.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 21,
                    "name": "Kitchen Accessories",
                    "slug": "kitchen-accessories",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 18,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:53:56.000000Z",
                    "updated_at": "2021-03-08T09:53:56.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 22,
                    "name": "Laundry",
                    "slug": "laundry",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 18,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:55:12.000000Z",
                    "updated_at": "2021-03-08T09:55:12.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 23,
            "name": "Dairy",
            "slug": "dairy",
            "icon": Dairy,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T09:55:58.000000Z",
            "updated_at": "2021-03-08T09:55:58.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 24,
                    "name": "Milk",
                    "slug": "milk",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 23,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:58:35.000000Z",
                    "updated_at": "2021-03-08T09:58:35.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 25,
                    "name": "Butter",
                    "slug": "butter",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 23,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:58:51.000000Z",
                    "updated_at": "2021-03-08T09:58:51.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 26,
                    "name": "Egg",
                    "slug": "egg",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 23,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:59:05.000000Z",
                    "updated_at": "2021-03-08T09:59:05.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 27,
                    "name": "Yogurt",
                    "slug": "yogurt",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 23,
                    "type_id": 1,
                    "created_at": "2021-03-08T09:59:27.000000Z",
                    "updated_at": "2021-03-08T09:59:27.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 28,
            "name": "Cooking",
            "slug": "cooking",
            "icon": Cooking,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T10:00:05.000000Z",
            "updated_at": "2021-03-08T10:00:05.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 29,
                    "name": "Oil",
                    "slug": "oil",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 28,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:05:28.000000Z",
                    "updated_at": "2021-03-08T10:05:28.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 30,
                    "name": "Rice",
                    "slug": "rice",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 28,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:05:47.000000Z",
                    "updated_at": "2021-03-08T10:05:47.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 31,
                    "name": "Salt & Sugar",
                    "slug": "salt-sugar",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 28,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:06:20.000000Z",
                    "updated_at": "2021-03-08T10:06:20.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 32,
                    "name": "Spices",
                    "slug": "spices",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 28,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:06:39.000000Z",
                    "updated_at": "2021-03-08T10:06:39.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 33,
            "name": "Breakfast",
            "slug": "breakfast",
            "icon": Breakfast,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T10:07:13.000000Z",
            "updated_at": "2021-03-08T10:07:13.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 34,
                    "name": "Bread",
                    "slug": "bread",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 33,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:07:35.000000Z",
                    "updated_at": "2021-03-08T10:07:35.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 35,
                    "name": "Cereal",
                    "slug": "cereal",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 33,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:07:57.000000Z",
                    "updated_at": "2021-03-08T10:07:57.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 36,
                    "name": "Jam",
                    "slug": "jam",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 33,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:08:19.000000Z",
                    "updated_at": "2021-03-08T10:08:19.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 37,
            "name": "Beverage",
            "slug": "beverage",
            "icon": Beverage,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T10:08:59.000000Z",
            "updated_at": "2021-03-08T10:08:59.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 38,
                    "name": "Coffee",
                    "slug": "coffee",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 37,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:09:22.000000Z",
                    "updated_at": "2021-03-08T10:09:22.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 39,
                    "name": "Energy Drinks",
                    "slug": "energy-drinks",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 37,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:09:38.000000Z",
                    "updated_at": "2021-03-08T10:09:38.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 40,
                    "name": "Juice",
                    "slug": "juice",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 37,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:09:53.000000Z",
                    "updated_at": "2021-03-08T10:09:53.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 41,
                    "name": "Fizzy Drinks",
                    "slug": "fizzy-drinks",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 37,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:10:10.000000Z",
                    "updated_at": "2021-03-08T10:10:10.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 42,
                    "name": "Tea",
                    "slug": "tea",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 37,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:10:25.000000Z",
                    "updated_at": "2021-03-08T10:10:25.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        },
        {
            "id": 43,
            "name": "Health & Beauty",
            "slug": "health-beauty",
            "icon": BeautyHealth,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 1,
            "created_at": "2021-03-08T10:11:08.000000Z",
            "updated_at": "2021-03-08T10:11:08.000000Z",
            "deleted_at": null,
            "type": {
                "id": 1,
                "name": "Grocery",
                "slug": "grocery",
                "icon": FruitsVegetable,
                "image": null,
                "created_at": "2021-03-08T07:18:25.000000Z",
                "updated_at": "2021-03-08T07:18:25.000000Z"
            },
            "children": [
                {
                    "id": 44,
                    "name": "Bath",
                    "slug": "bath",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 43,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:11:28.000000Z",
                    "updated_at": "2021-03-08T10:11:28.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 45,
                    "name": "Cream",
                    "slug": "cream",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 43,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:11:58.000000Z",
                    "updated_at": "2021-03-08T10:11:58.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 46,
                    "name": "Deodorant",
                    "slug": "deodorant",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 43,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:12:18.000000Z",
                    "updated_at": "2021-03-08T10:12:18.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 47,
                    "name": "Face Care",
                    "slug": "face-care",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 43,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:12:32.000000Z",
                    "updated_at": "2021-03-08T10:12:32.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 48,
                    "name": "Oral Care",
                    "slug": "oral-care",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 43,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:12:45.000000Z",
                    "updated_at": "2021-03-08T10:12:45.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                },
                {
                    "id": 49,
                    "name": "Shaving Needs",
                    "slug": "shaving-needs",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 43,
                    "type_id": 1,
                    "created_at": "2021-03-08T10:12:59.000000Z",
                    "updated_at": "2021-03-08T10:12:59.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 1,
                        "name": "Grocery",
                        "slug": "grocery",
                        "icon": FruitsVegetable,
                        "image": null,
                        "created_at": "2021-03-08T07:18:25.000000Z",
                        "updated_at": "2021-03-08T07:18:25.000000Z"
                    }
                }
            ]
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
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
    "path": "https:\/\/pickbazar-laravel\/fetch-parent-category",
    "per_page": "30",
    "prev_page_url": null,
    "to": 10,
    "total": 10
}

export const bakery = {
    "current_page": 1,
    "data": [
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
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
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
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
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
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
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
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 93,
            "name": "Pita Bread",
            "slug": "pita-bread",
            "icon": null,
            "image": {
                "id": "427",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/426\/Pita-Bread_bvrwtn.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/426\/conversions\/Pita-Bread_bvrwtn-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:37:27.000000Z",
            "updated_at": "2021-03-13T14:37:27.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 94,
            "name": "Sliced Cake",
            "slug": "sliced-cake",
            "icon": null,
            "image": {
                "id": "428",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/427\/Chees-Cake_whi1yd.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/427\/conversions\/Chees-Cake_whi1yd-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:37:59.000000Z",
            "updated_at": "2021-03-13T14:37:59.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 95,
            "name": "Muffin",
            "slug": "muffin",
            "icon": null,
            "image": {
                "id": "429",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/428\/Muffin_yiuqcf.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/428\/conversions\/Muffin_yiuqcf-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:38:24.000000Z",
            "updated_at": "2021-03-13T14:38:24.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 96,
            "name": "Danish",
            "slug": "danish",
            "icon": null,
            "image": {
                "id": "430",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/429\/Danish_ybcbuq.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/429\/conversions\/Danish_ybcbuq-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:38:56.000000Z",
            "updated_at": "2021-03-13T14:38:56.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 97,
            "name": "Croissants",
            "slug": "croissants",
            "icon": null,
            "image": {
                "id": "431",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/430\/Croissant_nqjflw.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/430\/conversions\/Croissant_nqjflw-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:39:31.000000Z",
            "updated_at": "2021-03-13T14:39:31.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 98,
            "name": "Feeter & Pies",
            "slug": "feeter-pies",
            "icon": null,
            "image": {
                "id": "432",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/431\/Feeter-pies_eidfxl.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/431\/conversions\/Feeter-pies_eidfxl-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:40:00.000000Z",
            "updated_at": "2021-03-13T14:40:00.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 99,
            "name": "Toast & Loaf",
            "slug": "toast-loaf",
            "icon": null,
            "image": {
                "id": "433",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/432\/Toast_ufzuwx.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/432\/conversions\/Toast_ufzuwx-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:40:31.000000Z",
            "updated_at": "2021-03-13T14:40:31.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        },
        {
            "id": 100,
            "name": "Soft Bread",
            "slug": "soft-bread",
            "icon": null,
            "image": {
                "id": "434",
                "original": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/433\/SoftBread_a85vlg.png",
                "thumbnail": "https:\/\/pickbazarlaravel.s3.ap-southeast-1.amazonaws.com\/433\/conversions\/SoftBread_a85vlg-thumbnail.jpg"
            },
            "details": null,
            "parent": null,
            "type_id": 2,
            "created_at": "2021-03-13T14:40:58.000000Z",
            "updated_at": "2021-03-13T14:40:58.000000Z",
            "deleted_at": null,
            "type": {
                "id": 2,
                "name": "Bakery",
                "slug": "bakery",
                "icon": BakeryIcon,
                "image": null,
                "created_at": "2021-03-08T07:18:46.000000Z",
                "updated_at": "2021-03-08T07:18:46.000000Z"
            },
            "children": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
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
    "path": "https:\/\/pickbazar-laravel\/fetch-parent-category",
    "per_page": "30",
    "prev_page_url": null,
    "to": 12,
    "total": 12
}

export const makeup = {
    "current_page": 1,
    "data": [
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
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
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
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
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
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
                    }
                }
            ]
        },
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
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
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
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
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
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
                    }
                }
            ]
        },
        {
            "id": 58,
            "name": "Lips",
            "slug": "lips",
            "icon": Lips,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T05:48:13.000000Z",
            "updated_at": "2021-03-09T05:48:13.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": [
                {
                    "id": 59,
                    "name": "Lip Gloss",
                    "slug": "lip-liner",
                    "icon": null,
                    "image": {
                        "id": null,
                        "original": null,
                        "thumbnail": null
                    },
                    "details": null,
                    "parent": 58,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:48:28.000000Z",
                    "updated_at": "2021-03-09T05:48:58.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
                    }
                },
                {
                    "id": 60,
                    "name": "Lip Stick",
                    "slug": "lip-stick",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 58,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:49:35.000000Z",
                    "updated_at": "2021-03-09T05:49:35.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
                    }
                },
                {
                    "id": 61,
                    "name": "Lip Kit",
                    "slug": "lip-kit",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 58,
                    "type_id": 3,
                    "created_at": "2021-03-09T05:49:49.000000Z",
                    "updated_at": "2021-03-09T05:49:49.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 3,
                        "name": "Makeup",
                        "slug": "makeup",
                        "icon": FacialCare,
                        "image": null,
                        "created_at": "2021-03-08T07:19:12.000000Z",
                        "updated_at": "2021-03-08T07:19:12.000000Z"
                    }
                }
            ]
        },
        {
            "id": 62,
            "name": "Accessories",
            "slug": "accessories-1",
            "icon": Accessories,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T06:02:05.000000Z",
            "updated_at": "2021-03-09T06:02:05.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": []
        },
        {
            "id": 63,
            "name": "Shaving Needs",
            "slug": "shaving-needs-1",
            "icon": ShavingNeeds,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T06:02:24.000000Z",
            "updated_at": "2021-03-09T06:02:24.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": []
        },
        {
            "id": 64,
            "name": "Oral Care",
            "slug": "oral-care-1",
            "icon": OralCare,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T06:02:47.000000Z",
            "updated_at": "2021-03-09T06:02:47.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": []
        },
        {
            "id": 65,
            "name": "Facial Care",
            "slug": "facial-care",
            "icon": FacialCare,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T06:03:15.000000Z",
            "updated_at": "2021-03-09T06:03:15.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": []
        },
        {
            "id": 66,
            "name": "Deodorant",
            "slug": "deodorant-1",
            "icon": Deodorant,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T06:03:30.000000Z",
            "updated_at": "2021-03-09T06:03:30.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": []
        },
        {
            "id": 67,
            "name": "Bath & Oil",
            "slug": "bath-oil",
            "icon": BathOil,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 3,
            "created_at": "2021-03-09T06:03:46.000000Z",
            "updated_at": "2021-03-09T06:03:46.000000Z",
            "deleted_at": null,
            "type": {
                "id": 3,
                "name": "Makeup",
                "slug": "makeup",
                "icon": FacialCare,
                "image": null,
                "created_at": "2021-03-08T07:19:12.000000Z",
                "updated_at": "2021-03-08T07:19:12.000000Z"
            },
            "children": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
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
    "path": "https:\/\/pickbazar-laravel\/fetch-parent-category",
    "per_page": "30",
    "prev_page_url": null,
    "to": 9,
    "total": 9
}

export const bags = {
    "current_page": 1,
    "data": [
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
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandBags,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "children": []
        },
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
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandBags,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "children": []
        },
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
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandBags,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "children": []
        },
        {
            "id": 87,
            "name": "Wallet",
            "slug": "wallet",
            "icon": Wallet,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 4,
            "created_at": "2021-03-09T09:50:29.000000Z",
            "updated_at": "2021-03-09T09:50:29.000000Z",
            "deleted_at": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandBags,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "children": []
        },
        {
            "id": 88,
            "name": "Laptop bags",
            "slug": "laptop-bags",
            "icon": LaptopBag,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 4,
            "created_at": "2021-03-09T09:50:49.000000Z",
            "updated_at": "2021-03-09T09:50:49.000000Z",
            "deleted_at": null,
            "type": {
                "id": 4,
                "name": "Bags",
                "slug": "bags",
                "icon": HandBags,
                "image": null,
                "created_at": "2021-03-08T07:19:28.000000Z",
                "updated_at": "2021-03-08T07:19:28.000000Z"
            },
            "children": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
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
    "path": "https:\/\/pickbazar-laravel\/fetch-parent-category",
    "per_page": "30",
    "prev_page_url": null,
    "to": 5,
    "total": 5
}

export const clothing = {
    "current_page": 1,
    "data": [
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
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
                    }
                }
            ]
        },
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
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
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
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
                    }
                }
            ]
        },
        {
            "id": 77,
            "name": "Pants",
            "slug": "pants",
            "icon": Pants,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 5,
            "created_at": "2021-03-09T08:58:22.000000Z",
            "updated_at": "2021-03-09T08:58:22.000000Z",
            "deleted_at": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "children": [
                {
                    "id": 78,
                    "name": "Jeans",
                    "slug": "jeans",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 77,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:58:43.000000Z",
                    "updated_at": "2021-03-09T08:58:43.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
                    }
                },
                {
                    "id": 79,
                    "name": "Chinos",
                    "slug": "chinos",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 77,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:58:57.000000Z",
                    "updated_at": "2021-03-09T08:58:57.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
                    }
                },
                {
                    "id": 80,
                    "name": "Sports",
                    "slug": "sports",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 77,
                    "type_id": 5,
                    "created_at": "2021-03-09T08:59:13.000000Z",
                    "updated_at": "2021-03-09T08:59:13.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 5,
                        "name": "Clothing",
                        "slug": "clothing",
                        "icon": DressIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:38.000000Z",
                        "updated_at": "2021-03-08T07:19:38.000000Z"
                    }
                }
            ]
        },
        {
            "id": 81,
            "name": "Tops",
            "slug": "tops",
            "icon": Tops,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 5,
            "created_at": "2021-03-09T08:59:55.000000Z",
            "updated_at": "2021-03-09T08:59:55.000000Z",
            "deleted_at": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "children": []
        },
        {
            "id": 82,
            "name": "Skirts",
            "slug": "skirts",
            "icon": Skirts,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 5,
            "created_at": "2021-03-09T09:01:43.000000Z",
            "updated_at": "2021-03-25T13:01:38.000000Z",
            "deleted_at": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "children": []
        },
        {
            "id": 83,
            "name": "Shirts",
            "slug": "shirts",
            "icon": Shirts,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 5,
            "created_at": "2021-03-09T09:02:05.000000Z",
            "updated_at": "2021-03-09T09:02:05.000000Z",
            "deleted_at": null,
            "type": {
                "id": 5,
                "name": "Clothing",
                "slug": "clothing",
                "icon": DressIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:38.000000Z",
                "updated_at": "2021-03-08T07:19:38.000000Z"
            },
            "children": []
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
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
    "path": "https:\/\/pickbazar-laravel\/fetch-parent-category",
    "per_page": "30",
    "prev_page_url": null,
    "to": 6,
    "total": 6
}

export const furniture = {
    "current_page": 1,
    "data": [
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
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
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
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
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
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                }
            ]
        },
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
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                },
                {
                    "id": 107,
                    "name": "Rocking Chair",
                    "slug": "rocking-chair",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 105,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:45:49.000000Z",
                    "updated_at": "2021-03-13T14:45:49.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                },
                {
                    "id": 108,
                    "name": "Single Chair",
                    "slug": "single-chair",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 105,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:46:11.000000Z",
                    "updated_at": "2021-03-13T14:46:11.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                }
            ]
        },
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
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "children": [
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
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
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
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                },
                {
                    "id": 112,
                    "name": "Sofa Set",
                    "slug": "sofa-set",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 109,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:47:40.000000Z",
                    "updated_at": "2021-03-13T14:47:40.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                }
            ]
        },
        {
            "id": 113,
            "name": "Table",
            "slug": "table",
            "icon": Table,
            "image": [],
            "details": null,
            "parent": null,
            "type_id": 6,
            "created_at": "2021-03-13T14:48:34.000000Z",
            "updated_at": "2021-03-13T14:48:34.000000Z",
            "deleted_at": null,
            "type": {
                "id": 6,
                "name": "Furniture",
                "slug": "furniture",
                "icon": FurnitureIcon,
                "image": null,
                "created_at": "2021-03-08T07:19:49.000000Z",
                "updated_at": "2021-03-08T07:19:49.000000Z"
            },
            "children": [
                {
                    "id": 114,
                    "name": "Bedside Table",
                    "slug": "bedside-table",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 113,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:50:14.000000Z",
                    "updated_at": "2021-03-13T14:50:14.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                },
                {
                    "id": 115,
                    "name": "Coffee Table",
                    "slug": "coffee-table",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 113,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:50:37.000000Z",
                    "updated_at": "2021-03-13T14:50:37.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                },
                {
                    "id": 116,
                    "name": "Dining Table",
                    "slug": "dining-table",
                    "icon": null,
                    "image": [],
                    "details": null,
                    "parent": 113,
                    "type_id": 6,
                    "created_at": "2021-03-13T14:50:59.000000Z",
                    "updated_at": "2021-03-13T14:50:59.000000Z",
                    "deleted_at": null,
                    "type": {
                        "id": 6,
                        "name": "Furniture",
                        "slug": "furniture",
                        "icon": FurnitureIcon,
                        "image": null,
                        "created_at": "2021-03-08T07:19:49.000000Z",
                        "updated_at": "2021-03-08T07:19:49.000000Z"
                    }
                }
            ]
        }
    ],
    "first_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https:\/\/pickbazar-laravel\/fetch-parent-category?page=1",
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
    "path": "https:\/\/pickbazar-laravel\/fetch-parent-category",
    "per_page": "30",
    "prev_page_url": null,
    "to": 4,
    "total": 4
}

export const categories = { grocery, bakery, makeup, bags, clothing, furniture };
