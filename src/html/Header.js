function header (){
  return(
    <div className='header'>
      <div className="header_nar_On">
        <div className="mobile_circle"><i class='far fa-user-circle'></i></div>
        <div className="tablet_circle"><i class='far fa-user-circle'></i> mhhasanul@gmail.com</div>
        <div className='header on'>
          <p className='header on gmail'>
            <i class="fal L fa-light fa-envelope"></i>mhhasanul@gmail.com</p>
          <p className='header on phone'>
            <i class="fal L fa-duotone fa-phone-volume"></i>(12345)67890</p>
          <p className='header on Egl'>English
            <i class="fal R fa-solid fa-angle-down"></i></p>
          <p className='header on USD'>USD 
            <i class="fal R fa-solid fa-angle-down"></i></p>
          <p className='header on Lg'>Login 
            <i class="fal R fa-light fa-user"></i></p>
          <p className='header on Wl'>Wisshlist 
            <i class="fal R fa-light fa-heart"></i></p>
          <p className='header on shop'>
            <i class="fal R fa-light fa-cart-plus"></i></p>
        </div>
      </div>
      <div className="header_nar_Off">
        <div className='header Off'>
          <div className="mobile_justify"><i class='fas fa-align-justify'></i></div>
          <div>
            <img class="Hekto" src='./img/Hekto.jpg'></img>
            <p className="header Off home ">Home
              <i class="fal C fa-solid fa-angle-down"></i></p>
            <p className="header Off AF">Pages</p>
            <p className="header Off AF">Products</p>
            <p className="header Off AF">Blog</p>
            <p className="header Off AF">Shop</p>
            <p className="header Off AF">Contact</p>
          </div>
          <div className="header_nar_Off_R">
            <input className="header Off IP"></input>
            <button className='Off-btn' type="submit"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default header;