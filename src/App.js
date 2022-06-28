import './Css/DiscountItem.css'
import './Css/FeaturedProducts.css'
import './Css/final.css'
import './Css/Getup.css'
import './Css/header.css'
import './Css/imge1147.css'
import './Css/LBlog.css'
import './Css/LeatestProduct.css'
import './Css/Promotion.css'
import './Css/ShopexOffer.css'
import './Css/TopCategories.css'
import './Css/TrendingProducts.css'
import './Css/UniqueFeatures.css'

import Header from "./html/Header";
import DiscountItem from "./html/DiscountItem";
import FeaturedProducts from "./html/FeaturedProducts";
import Getup from "./html/Getup";
import Imge1147 from"./html/Imge1147";
import LBlog from"./html/LBlog";
import LeatestProduct from"./html/LeatestProduct";
import Promotion from"./html/Promotion";
import ShopexOffer from "./html/ShopexOffer";
import TopCategories from "./html/TopCategories";
import TrendingProducts from "./html/TrendingProducts";
import UniqueFeature from "./html/UniqueFeature";
import Final from "./html/Final";

function App() {
  return (
    <>
      <Header/>
      <Promotion/>
      <FeaturedProducts/>
      <LeatestProduct/>
      <ShopexOffer/>
      <UniqueFeature/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <Imge1147/>
      <Getup/>
      <LBlog/>
      <Final/>
    </>
  );
}
export default App;
