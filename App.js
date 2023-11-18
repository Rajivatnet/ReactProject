import React from "react"
import  ReactDOM  from "react-dom/client"

// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//     React.createElement("h1",{},"React Application 🚀"),
//     React.createElement("h2",{},"I'm an h2 tag")
// ])
// ]);
/**
 * Header
 *  -   Logo
 *  -   Nav Bar
 *  Body
 *  -   Search
 *  -   RestaurantContainer
 *  -   RestaurantCard
 *  Footer
 *  -   CopyRight
 *  -   Address
 *  -   Links
 *  -   Contacts
 */
const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
        
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contacts Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}
const styleCard={
    backgroundColor:"gray",
}
const RestaurantCard=(props)=>
{
    const {resData}= props;
    const {name,cuisines,avgRating,cloudinaryImageId}= resData.info;
    return(
        <div className ="res-card" sytle={{backgroundColor:"yellow"}}>
           <img className="res-logo" alt="res-logo"
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
           <h3>{name }</h3>
           <h4>{cuisines.join(",")}</h4>
           <h4>{avgRating}</h4>
           {/* <h4>resData.cards.card.restaurants.info.</h4> */}
        </div>
    );
}

const resLIst=  [
                   {
                     "info": {
                       "id": "63217",
                       "name": "Pizza Hut",
                       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                       "locality": "Malad West",
                       "areaName": "Malad West",
                       "costForTwo": "₹300 for two",
                       "cuisines": [
                         "Pizzas"
                       ],
                       "avgRating": 3.7,
                       "feeDetails": {
                         "restaurantId": "63217",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 4000
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 4000
                       },
                       "parentId": "721",
                       "avgRatingString": "3.7",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 25,
                         "lastMileTravel": 0.9,
                         "serviceability": "SERVICEABLE",
                         "slaString": "25 mins",
                         "lastMileTravelString": "0.9 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 03:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "30% OFF",
                         "subHeader": "UPTO ₹75"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/pizza-hut-malad-west-mumbai-63217",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "23729",
                       "name": "McDonald's",
                       "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                       "locality": "Unity Heights",
                       "areaName": "Malad West",
                       "costForTwo": "₹400 for two",
                       "cuisines": [
                         "Burgers",
                         "Beverages",
                         "Cafe",
                         "Desserts"
                       ],
                       "avgRating": 4.3,
                       "feeDetails": {
                         "restaurantId": "23729",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3200
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3200
                       },
                       "parentId": "630",
                       "avgRatingString": "4.3",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 19,
                         "lastMileTravel": 1.1,
                         "serviceability": "SERVICEABLE",
                         "slaString": "19 mins",
                         "lastMileTravelString": "1.1 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 03:00:00",
                         "opened": true
                       },
                       "badges": {
                         "textExtendedBadges": [
                           {
                             "iconId": "guiltfree/GF_Logo_android_3x",
                             "shortDescription": "options available",
                             "fontColor": "#7E808C"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "",
                                   "fontColor": "#7E808C",
                                   "iconId": "guiltfree/GF_Logo_android_3x",
                                   "shortDescription": "options available"
                                 }
                               }
                             ]
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "₹150 OFF",
                         "subHeader": "ABOVE ₹349",
                         "discountTag": "FLAT DEAL"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/mcdonalds-unity-heights-malad-west-mumbai-23729",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "258512",
                       "name": "KFC",
                       "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                       "locality": "Infinity Mall Food Court",
                       "areaName": "Malad West",
                       "costForTwo": "₹400 for two",
                       "cuisines": [
                         "Burgers",
                         "Biryani",
                         "American",
                         "Snacks",
                         "Fast Food"
                       ],
                       "avgRating": 4.1,
                       "feeDetails": {
                         "restaurantId": "258512",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 4000
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 4000
                       },
                       "parentId": "547",
                       "avgRatingString": "4.1",
                       "totalRatingsString": "1K+",
                       "sla": {
                         "deliveryTime": 28,
                         "lastMileTravel": 1.4,
                         "serviceability": "SERVICEABLE",
                         "slaString": "28 mins",
                         "lastMileTravelString": "1.4 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "20% OFF",
                         "subHeader": "UPTO ₹50"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/kfc-infinity-mall-food-court-malad-west-mumbai-258512",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "24477",
                       "name": "Domino's Pizza",
                       "cloudinaryImageId": "kxtqaxfekmkapkoilvhj",
                       "locality": "Bombay Hospital Lane",
                       "areaName": "Malad Kan West",
                       "costForTwo": "₹400 for two",
                       "cuisines": [
                         "Pizzas",
                         "Italian",
                         "Pastas",
                         "Desserts"
                       ],
                       "avgRating": 4.2,
                       "feeDetails": {
                         "restaurantId": "24477",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "2456",
                       "avgRatingString": "4.2",
                       "totalRatingsString": "5K+",
                       "sla": {
                         "deliveryTime": 25,
                         "serviceability": "SERVICEABLE",
                         "slaString": "25 mins",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 02:59:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "₹150 OFF",
                         "subHeader": "ABOVE ₹349",
                         "discountTag": "FLAT DEAL"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/dominos-pizza-bombay-hospital-lane-malad-kan-west-mumbai-24477",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "6379",
                       "name": "Greens Restaurant",
                       "cloudinaryImageId": "mthao2x3qcccqytonpin",
                       "locality": "Malad West",
                       "areaName": "Malad West",
                       "costForTwo": "₹500 for two",
                       "cuisines": [
                         "North Indian",
                         "Chinese",
                         "South Indian"
                       ],
                       "avgRating": 4.3,
                       "feeDetails": {
                         "restaurantId": "6379",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "9208",
                       "avgRatingString": "4.3",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 26,
                         "lastMileTravel": 1.6,
                         "serviceability": "SERVICEABLE",
                         "slaString": "26 mins",
                         "lastMileTravelString": "1.6 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 00:00:00",
                         "opened": true
                       },
                       "badges": {
                         "imageBadges": [
                           {
                             "imageId": "v1695133679/badges/Pure_Veg111.png",
                             "description": "pureveg"
                           }
                         ],
                         "textExtendedBadges": [
                           {
                             "iconId": "guiltfree/GF_Logo_android_3x",
                             "shortDescription": "options available",
                             "fontColor": "#7E808C"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "pureveg",
                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                                 }
                               }
                             ]
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "",
                                   "fontColor": "#7E808C",
                                   "iconId": "guiltfree/GF_Logo_android_3x",
                                   "shortDescription": "options available"
                                 }
                               }
                             ]
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "40% OFF",
                         "subHeader": "UPTO ₹80"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/greens-restaurant-malad-west-mumbai-6379",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "24632",
                       "name": "Burger King",
                       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                       "locality": "Infinity Malad",
                       "areaName": "Malad West",
                       "costForTwo": "₹350 for two",
                       "cuisines": [
                         "Burgers",
                         "American"
                       ],
                       "avgRating": 3.9,
                       "feeDetails": {
                         "restaurantId": "24632",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3200
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3200
                       },
                       "parentId": "166",
                       "avgRatingString": "3.9",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 43,
                         "lastMileTravel": 1.6,
                         "serviceability": "SERVICEABLE",
                         "slaString": "43 mins",
                         "lastMileTravelString": "1.6 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/burger-king-infinity-malad-malad-west-mumbai-24632",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "10773",
                       "name": "Pishu's - Drink Your Fruit",
                       "cloudinaryImageId": "7e9a937b13667555ce37854abdb8f91c",
                       "locality": "Link Road",
                       "areaName": "Malad West",
                       "costForTwo": "₹550 for two",
                       "cuisines": [
                         "Juices",
                         "Beverages",
                         "Healthy Food"
                       ],
                       "avgRating": 4.3,
                       "veg": true,
                       "feeDetails": {
                         "restaurantId": "10773",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "1268",
                       "avgRatingString": "4.3",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 26,
                         "lastMileTravel": 1.6,
                         "serviceability": "SERVICEABLE",
                         "slaString": "26 mins",
                         "lastMileTravelString": "1.6 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 03:15:00",
                         "opened": true
                       },
                       "badges": {
                         "imageBadges": [
                           {
                             "imageId": "v1695133679/badges/Pure_Veg111.png",
                             "description": "pureveg"
                           }
                         ],
                         "textExtendedBadges": [
                           {
                             "iconId": "guiltfree/GF_Logo_android_3x",
                             "shortDescription": "brand",
                             "fontColor": "#7E808C"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "pureveg",
                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                                 }
                               }
                             ]
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "",
                                   "fontColor": "#7E808C",
                                   "iconId": "guiltfree/GF_Logo_android_3x",
                                   "shortDescription": "brand"
                                 }
                               }
                             ]
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/pishus-drink-your-fruit-link-road-malad-west-mumbai-10773",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "8657",
                       "name": "Subway",
                       "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                       "locality": "Infinity Malad",
                       "areaName": "Malad West",
                       "costForTwo": "₹350 for two",
                       "cuisines": [
                         "Salads",
                         "Snacks",
                         "Desserts",
                         "Beverages"
                       ],
                       "avgRating": 3.7,
                       "feeDetails": {
                         "restaurantId": "8657",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3200
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3200
                       },
                       "parentId": "2",
                       "avgRatingString": "3.7",
                       "totalRatingsString": "5K+",
                       "sla": {
                         "deliveryTime": 42,
                         "lastMileTravel": 1.6,
                         "serviceability": "SERVICEABLE",
                         "slaString": "42 mins",
                         "lastMileTravelString": "1.6 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "₹150 OFF",
                         "subHeader": "ABOVE ₹349",
                         "discountTag": "FLAT DEAL"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/subway-infinity-malad-malad-west-mumbai-8657",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "468276",
                       "name": "Atta Girl",
                       "cloudinaryImageId": "obtfid1fav7k3dqlamql",
                       "locality": "Datt Mandir Road",
                       "areaName": "Malad West",
                       "costForTwo": "₹500 for two",
                       "cuisines": [
                         "South Indian"
                       ],
                       "avgRating": 4.7,
                       "veg": true,
                       "feeDetails": {
                         "restaurantId": "468276",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "37659",
                       "avgRatingString": "4.7",
                       "totalRatingsString": "100+",
                       "sla": {
                         "deliveryTime": 21,
                         "lastMileTravel": 2.2,
                         "serviceability": "SERVICEABLE",
                         "slaString": "21 mins",
                         "lastMileTravelString": "2.2 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 20:00:00",
                         "opened": true
                       },
                       "badges": {
                         "imageBadges": [
                           {
                             "imageId": "v1695133679/badges/Pure_Veg111.png",
                             "description": "pureveg"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "pureveg",
                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                                 }
                               }
                             ]
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "20% OFF",
                         "subHeader": "UPTO ₹50"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/atta-girl-datt-mandir-road-malad-west-mumbai-468276",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "41588",
                       "name": "Hangout Cakes & More",
                       "cloudinaryImageId": "51f9c55884b15013b2c8582505a1ee4f",
                       "locality": "Chincholi Bunder Road, New Link Road, Malad West",
                       "areaName": "Malad West",
                       "costForTwo": "₹150 for two",
                       "cuisines": [
                         "Desserts",
                         "Bakery"
                       ],
                       "avgRating": 4.3,
                       "veg": true,
                       "feeDetails": {
                         "restaurantId": "41588",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 4000
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 4000
                       },
                       "parentId": "4508",
                       "avgRatingString": "4.3",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 17,
                         "lastMileTravel": 1.5,
                         "serviceability": "SERVICEABLE",
                         "slaString": "17 mins",
                         "lastMileTravelString": "1.5 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:59:00",
                         "opened": true
                       },
                       "badges": {
                         "imageBadges": [
                           {
                             "imageId": "v1695133679/badges/Pure_Veg111.png",
                             "description": "pureveg"
                           }
                         ],
                         "textExtendedBadges": [
                           {
                             "iconId": "guiltfree/GF_Logo_android_3x",
                             "shortDescription": "options available",
                             "fontColor": "#7E808C"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "pureveg",
                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                                 }
                               }
                             ]
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "",
                                   "fontColor": "#7E808C",
                                   "iconId": "guiltfree/GF_Logo_android_3x",
                                   "shortDescription": "options available"
                                 }
                               }
                             ]
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/hangout-cakes-and-more-chincholi-bunder-road-new-link-road-malad-west-mumbai-41588",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "153021",
                       "name": "Persia Darbar",
                       "cloudinaryImageId": "vhknuy7xlvcarch6qrxi",
                       "locality": "Malad West",
                       "areaName": "Malad West",
                       "costForTwo": "₹800 for two",
                       "cuisines": [
                         "North Indian",
                         "Biryani",
                         "Chinese",
                         "Arabian",
                         "Mughlai"
                       ],
                       "avgRating": 4.2,
                       "feeDetails": {
                         "restaurantId": "153021",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 4000
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 4000
                       },
                       "parentId": "3593",
                       "avgRatingString": "4.2",
                       "totalRatingsString": "5K+",
                       "sla": {
                         "deliveryTime": 25,
                         "lastMileTravel": 0.9,
                         "serviceability": "SERVICEABLE",
                         "slaString": "25 mins",
                         "lastMileTravelString": "0.9 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 04:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/persia-darbar-malad-west-mumbai-153021",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "41185",
                       "name": "Fried Nation",
                       "cloudinaryImageId": "qnai7dd2evaw8m4qmnkl",
                       "locality": "Mira Road Station",
                       "areaName": "Malad West",
                       "costForTwo": "₹200 for two",
                       "cuisines": [
                         "Fast Food",
                         "American"
                       ],
                       "avgRating": 4.3,
                       "feeDetails": {
                         "restaurantId": "41185",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "4868",
                       "avgRatingString": "4.3",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 25,
                         "lastMileTravel": 1.3,
                         "serviceability": "SERVICEABLE",
                         "slaString": "25 mins",
                         "lastMileTravelString": "1.3 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:30:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "10% OFF",
                         "subHeader": "UPTO ₹40"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/fried-nation-mira-road-station-malad-west-mumbai-41185",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "46074",
                       "name": "Fuel Up",
                       "cloudinaryImageId": "rtzewddqpre1sagwpe0f",
                       "locality": "North Exhange",
                       "areaName": "Malad West",
                       "costForTwo": "₹800 for two",
                       "cuisines": [
                         "Healthy Food",
                         "Salads",
                         "Juices",
                         "Grill",
                         "American",
                         "Continental"
                       ],
                       "avgRating": 4.4,
                       "feeDetails": {
                         "restaurantId": "46074",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "8679",
                       "avgRatingString": "4.4",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 28,
                         "lastMileTravel": 1.4,
                         "serviceability": "SERVICEABLE",
                         "slaString": "28 mins",
                         "lastMileTravelString": "1.4 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 03:15:00",
                         "opened": true
                       },
                       "badges": {
                         "textExtendedBadges": [
                           {
                             "iconId": "guiltfree/GF_Logo_android_3x",
                             "shortDescription": "brand",
                             "fontColor": "#7E808C"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "",
                                   "fontColor": "#7E808C",
                                   "iconId": "guiltfree/GF_Logo_android_3x",
                                   "shortDescription": "brand"
                                 }
                               }
                             ]
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/fuel-up-north-exhange-malad-west-mumbai-46074",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "31918",
                       "name": "Jimis Burger",
                       "cloudinaryImageId": "lkczyaxp8q1r9teqseag",
                       "locality": "Malad West",
                       "areaName": "Malad West",
                       "costForTwo": "₹800 for two",
                       "cuisines": [
                         "American"
                       ],
                       "avgRating": 4.4,
                       "feeDetails": {
                         "restaurantId": "31918",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 4000
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 4000
                       },
                       "parentId": "8122",
                       "avgRatingString": "4.4",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 20,
                         "lastMileTravel": 0.9,
                         "serviceability": "SERVICEABLE",
                         "slaString": "20 mins",
                         "lastMileTravelString": "0.9 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:59:00",
                         "opened": true
                       },
                       "badges": {
                         "imageBadges": [
                           {
                             "imageId": "newg.png",
                             "description": "Gourmet"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "Gourmet",
                                   "imageId": "newg.png"
                                 }
                               }
                             ]
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "₹150 OFF",
                         "subHeader": "ABOVE ₹349",
                         "discountTag": "FLAT DEAL"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/jimis-burger-malad-west-mumbai-31918",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "70697",
                       "name": "Theobroma",
                       "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
                       "locality": "Borivali West",
                       "areaName": "Borivali West",
                       "costForTwo": "₹800 for two",
                       "cuisines": [
                         "Bakery",
                         "Desserts"
                       ],
                       "avgRating": 4.5,
                       "feeDetails": {
                         "restaurantId": "70697",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 5200
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 5200
                       },
                       "parentId": "1040",
                       "avgRatingString": "4.5",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 26,
                         "lastMileTravel": 4.7,
                         "serviceability": "SERVICEABLE",
                         "slaString": "26 mins",
                         "lastMileTravelString": "4.7 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 00:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "40% OFF",
                         "subHeader": "ABOVE ₹159",
                         "discountTag": "FLAT DEAL"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/theobroma-borivali-west-mumbai-70697",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "17498",
                       "name": "Faasos - Wraps & Rolls",
                       "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                       "locality": "Co-operative Housing Society Ltd",
                       "areaName": "Goregaon",
                       "costForTwo": "₹200 for two",
                       "cuisines": [
                         "Kebabs",
                         "Fast Food",
                         "Snacks",
                         "North Indian",
                         "American",
                         "Healthy Food",
                         "Desserts",
                         "Beverages"
                       ],
                       "avgRating": 4.1,
                       "feeDetails": {
                         "restaurantId": "17498",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3800
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3800
                       },
                       "parentId": "21809",
                       "avgRatingString": "4.1",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 38,
                         "lastMileTravel": 3.9,
                         "serviceability": "SERVICEABLE",
                         "slaString": "38 mins",
                         "lastMileTravelString": "3.9 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:59:00",
                         "opened": true
                       },
                       "badges": {
                         "textExtendedBadges": [
                           {
                             "iconId": "guiltfree/GF_Logo_android_3x",
                             "shortDescription": "options available",
                             "fontColor": "#7E808C"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "",
                                   "fontColor": "#7E808C",
                                   "iconId": "guiltfree/GF_Logo_android_3x",
                                   "shortDescription": "options available"
                                 }
                               }
                             ]
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-co-operative-housing-society-ltd-goregaon-mumbai-17498",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "32904",
                       "name": "The Belgian Waffle Co.",
                       "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
                       "locality": "Junction of Link Road",
                       "areaName": "Malad West",
                       "costForTwo": "₹200 for two",
                       "cuisines": [
                         "Waffle",
                         "Desserts",
                         "Ice Cream",
                         "Beverages"
                       ],
                       "avgRating": 4.2,
                       "veg": true,
                       "feeDetails": {
                         "restaurantId": "32904",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3200
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3200
                       },
                       "parentId": "2233",
                       "avgRatingString": "4.2",
                       "totalRatingsString": "10K+",
                       "sla": {
                         "deliveryTime": 24,
                         "lastMileTravel": 0.9,
                         "serviceability": "SERVICEABLE",
                         "slaString": "24 mins",
                         "lastMileTravelString": "0.9 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 03:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "20% OFF",
                         "subHeader": "UPTO ₹50"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-junction-of-link-road-malad-west-mumbai-32904",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "386214",
                       "name": "Purshottam Kandoi Haribhai Damodar Mithaiwala",
                       "cloudinaryImageId": "wm0hxww7t1duwfbwuwcj",
                       "locality": "Opp Kora Kendra",
                       "areaName": "Borivali",
                       "costForTwo": "₹300 for two",
                       "cuisines": [
                         "Desserts",
                         "Sweets",
                         "Snacks",
                         "Street Food"
                       ],
                       "avgRating": 4.4,
                       "veg": true,
                       "feeDetails": {
                         "restaurantId": "386214",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 5000
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 5000
                       },
                       "parentId": "22434",
                       "avgRatingString": "4.4",
                       "totalRatingsString": "1K+",
                       "sla": {
                         "deliveryTime": 28,
                         "lastMileTravel": 4.7,
                         "serviceability": "SERVICEABLE",
                         "slaString": "28 mins",
                         "lastMileTravelString": "4.7 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 21:00:00",
                         "opened": true
                       },
                       "badges": {
                         "imageBadges": [
                           {
                             "imageId": "v1695133679/badges/Pure_Veg111.png",
                             "description": "pureveg"
                           }
                         ]
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             "badgeObject": [
                               {
                                 "attributes": {
                                   "description": "pureveg",
                                   "imageId": "v1695133679/badges/Pure_Veg111.png"
                                 }
                               }
                             ]
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "₹150 OFF",
                         "subHeader": "ABOVE ₹349",
                         "discountTag": "FLAT DEAL"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/purshottam-kandoi-haribhai-damodar-mithaiwala-opp-kora-kendra-borivali-mumbai-386214",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "240366",
                       "name": "Wow! Momo",
                       "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
                       "locality": "Malad West",
                       "areaName": "Malad West",
                       "costForTwo": "₹300 for two",
                       "cuisines": [
                         "Tibetan",
                         "Healthy Food",
                         "Asian",
                         "Chinese",
                         "Snacks",
                         "Continental",
                         "Desserts",
                         "Beverages"
                       ],
                       "avgRating": 3.8,
                       "feeDetails": {
                         "restaurantId": "240366",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3200
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3200
                       },
                       "parentId": "1776",
                       "avgRatingString": "3.8",
                       "totalRatingsString": "500+",
                       "sla": {
                         "deliveryTime": 32,
                         "lastMileTravel": 1.6,
                         "serviceability": "SERVICEABLE",
                         "slaString": "32 mins",
                         "lastMileTravelString": "1.6 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-18 23:59:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "60% OFF",
                         "subHeader": "UPTO ₹120"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/wow-momo-malad-west-mumbai-240366",
                       "type": "WEBLINK"
                     }
                   },
                   {
                     "info": {
                       "id": "7023",
                       "name": "Nothing But Chicken",
                       "cloudinaryImageId": "xjjujhayoap4nqdka6xt",
                       "locality": "Opposite Inorbit Mall",
                       "areaName": "Malad West",
                       "costForTwo": "₹400 for two",
                       "cuisines": [
                         "Salads",
                         "Biryani",
                         "Kebabs",
                         "Fast Food",
                         "Healthy Food"
                       ],
                       "avgRating": 4.4,
                       "feeDetails": {
                         "restaurantId": "7023",
                         "fees": [
                           {
                             "name": "BASE_DISTANCE",
                             "fee": 3300
                           },
                           {
                             "name": "BASE_TIME"
                           },
                           {
                             "name": "ANCILLARY_SURGE_FEE"
                           }
                         ],
                         "totalFee": 3300
                       },
                       "parentId": "668",
                       "avgRatingString": "4.4",
                       "totalRatingsString": "5K+",
                       "sla": {
                         "deliveryTime": 22,
                         "lastMileTravel": 1.7,
                         "serviceability": "SERVICEABLE",
                         "slaString": "22 mins",
                         "lastMileTravelString": "1.7 km",
                         "iconType": "ICON_TYPE_EMPTY"
                       },
                       "availability": {
                         "nextCloseTime": "2023-11-19 05:00:00",
                         "opened": true
                       },
                       "badges": {
                         
                       },
                       "isOpen": true,
                       "type": "F",
                       "badgesV2": {
                         "entityBadges": {
                           "imageBased": {
                             
                           },
                           "textBased": {
                             
                           },
                           "textExtendedBadges": {
                             
                           }
                         }
                       },
                       "aggregatedDiscountInfoV3": {
                         "header": "20% OFF",
                         "subHeader": "UPTO ₹50"
                       },
                       "differentiatedUi": {
                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                         "differentiatedUiMediaDetails": {
                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                           "lottie": {
                             
                           },
                           "video": {
                             
                           }
                         }
                       },
                       "reviewsSummary": {
                         
                       },
                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                       "restaurantOfferPresentationInfo": {
                         
                       }
                     },
                     "analytics": {
                       
                     },
                     "cta": {
                       "link": "https://www.swiggy.com/restaurants/nothing-but-chicken-opposite-inorbit-mall-malad-west-mumbai-7023",
                       "type": "WEBLINK"
                     }
                   }
                 ]

const Body=()=>{
    return(
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
            <RestaurantCard resData={resLIst[0]}/>
            {resLIst.map(restraurant => <RestaurantCard key ={restraurant.info.id} resData={restraurant} />)}
            </div>
            
            
        </div>
    );
}

const AppLayout =()=>{
    return (
        <div className="app">
<Header/>
<Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);