function DiscountItem(){
    return(
        <div className='DiscountItem'>
            <div className='DiscountItemTD'>
              <h3 className='DiscountItemTDDI'>Discount Item</h3> 
              <div className='DiscountItemTC'>
                <p className='DiscountItemTDWc'>Wood Chair</p>
                <p className='fa fa-circle PFc'></p>
                <p className='DiscountItemTDPc'>Plastic Chair</p>
                <p className='DiscountItemTDSc'>Sofa Colletion</p>
              </div>
            </div>
            <div className='DiscountItemN'>
              <div className='DiscountItemNd'>
                <p className='DiscountItemNdTd'>20% Discount Of All Products</p>
                <p className='DiscountItemNdT2'>Eams Sofa Compact</p>
                <p className='DiscountItemNdT3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className='DiscountItemNdT4'>
                  <p className='fa fa-check NdT4'><h className='NdT5'>Material expose like metals</h></p>
                  <p className='fa fa-check NdT41'><h className='NdT5'>Clear lines and geomatric figures</h></p>
                  <p className='fa fa-check NdT4'><h className='NdT5'>Simple neutral colours.</h></p>
                  <p className='fa fa-check NdT42'><h className='NdT5'>Material expose like metals</h></p>
                </div>
                <button className='DiscountItemBtn'>Shop Now</button>
              </div>
              <div className='DiscountItemP'>
                <img className="imgItem" src='./img/DiscountSofa.png'></img>
              </div>
            </div>
          </div>
    );
}
export default DiscountItem;