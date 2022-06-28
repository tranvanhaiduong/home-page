function FeaturedProducts(){
  return(
    <div className='FeaturedProducts'>
          <div className='Featured'><h1>Featured Products</h1></div>
          <div className='Products'>
          <div className='char1'>
            <div className='char1img'>
             <img className='char1img img1' src='./img/char1.png'></img>
              </div>
              <div className='char1back'>
                <h5 className='char1F'>Cantilever chair</h5>
                <img src='./img/charc2.png'></img>
                <h5 className='char1ND'>Code - Y523201</h5>
                <h5 className='char1ND'>$42.00</h5>
              </div>
            </div>
            <div className='char2'>
              <div className='char2img'>
                <div className='char2icon'>
                  <div className='char2img icon'>
                    <p className='fal buy fa-cart-plus'></p>
                    <p className='fal tym fa-heart'></p>
                    <p className='fal zoom fa-search-plus'></p> 
                  </div>
                </div>
                <div className="btnchar2"><button className='char2btn'>View Details</button></div>
              <img className='char2img img2' src='./img/char2.png'></img>
              </div>
              <div className='char2back'>
                <h5 className='char2F'>Cantilever chair</h5>
                <img src='./img/charc2.png'></img>
                <h5 className='char2ND'>Code - Y523201</h5>
                <h5 className='char2ND'>$42.00</h5>
              </div>
            </div>
            <div className='char3'>
            <div className='char3img'>
             <img className='char3img img3' src='./img/char3.png'></img>
              </div>
              <div className='char3back'>
                <h5 className='char1F'>Cantilever chair</h5>
                <img src='./img/charc2.png'></img>
                <h5 className='char1ND'>Code - Y523201</h5>
                <h5 className='char1ND'>$42.00</h5>
              </div>
            </div>
            <div className='char4'>
              <div className='char4img'>
              <div className="char4img"><img className='img4' src='./img/char4.png'></img></div>
                </div>
                <div className='char4back'>
                  <h5 className='char1F'>Cantilever chair</h5>
                  <img src='./img/charc2.png'></img>
                  <h5 className='char1ND'>Code - Y523201</h5>
                  <h5 className='char1ND'>$42.00</h5>
              </div>
            </div>
          </div>
          <div className='kenang'><img className='kenngn' src= './img/kenang.png'></img></div>
        </div>
  );
}
export default FeaturedProducts;