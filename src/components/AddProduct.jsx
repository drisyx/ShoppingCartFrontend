import React from 'react'
import ShoppingNavbar from './ShoppingNavbar'

const AddProduct = () => {
    return (
        <div>
<ShoppingNavbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PRODUCT TITLE</label>
                                <input type="text" className="form-control" />
                            </div>



                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">IMAGE</label>
                                <input type="file" name="" id="" className="form-control" />

                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">DESCRIPTION</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>

                            </div>




                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">CATEGORY</label>
                                <select name="" id="" className="form-control">
                                    <option value="Womens Clothing">Womens Clothing</option>
                                    <option value="Mens Clothing">Mens Clothing</option>
                                    <option value="Jewellery">Jewellery</option>
                                    <option value="Electronics">Electronics</option>
                                </select>
                            </div>



                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PRICE</label>
                                <input type="text" className="form-control" />
                            </div>



                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <button className="btn btn-success">SUBMIT</button>


                            </div>







                        </div>





                    </div>
                </div>
            </div>










        </div>
    )
}

export default AddProduct