import React from 'react'

const ShoppingNavbar = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <a class="navbar-brand" href="">
                        <img src="https://i.pinimg.com/736x/14/6c/67/146c673da71faf72e037a4af7ac79b84.jpg" alt="Bootstrap" width="30" height="24" />
                    </a>


                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="">Add</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">ViewAll</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Search</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>








    </div>
  )
}

export default ShoppingNavbar