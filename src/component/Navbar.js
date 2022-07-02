import React from 'react'

export default function Navbar(props) {
  return (
//       <nav classname="navbar navbar-expand-lg bg-light">
//   <div classname="container-fluid">
//     <a classname="navbar-brand" href="/">{props.title}</a>
//     <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span classname="navbar-toggler-icon"></span>
//     </button>
//     <div classname="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
//         <li classname="nav-item">
//           <a classname="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li classname="nav-item">
//           <a classname="nav-link" href="/">{props.aboutText}</a> 
//         </li>
//       </ul>
//       <form classname="d-flex" role="search">
//         <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button classname="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Text Converter</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active mx-1" aria-current="page" href="#">Home</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
          <a class="nav-link disabled mx-1">About Us</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 )
}
