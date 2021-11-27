import React from 'react';
import './header.components.css';
import cookie from "react-cookies"


function HeaderLeft(params) {
    return(
        <div className="headerLeft" className="mb-4 flex items-center justify-between w-1/5 md:mb-0 ">
            <image className="logo"></image>
            <form action="get" className="mb-4 w-full md:mb-0 md:w-5/6">
                <input type="text" className="p-2 border rounded-lg w-full bg-grey-lightest focus:border-orange focus:shadow-inner" placeholder="search in ambook"/>
                <button className="hidden">yes</button>
            </form>
        </div>
    );
}

function HeaderRight(params) {
    return(
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li className="mr-3">
                      <image className="userPhoto"></image>
					<a className="inline-block py-2 px-4 text-grey-darkest no-underline" href="#">{params.user.name}</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
				  <li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
					<li className="mr-3">
					<a className="inline-block text-gray-600 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
				</ul>
			</div>
    );
}


class header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:{},
    };
  }

  componentDidMount () {
    
    fetch('http://localhost:8888/api/profile',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + cookie.load('token')
    }
    })
     .then(res =>res.json())
     .then((data) => {
       console.log(data.data)
       this.setState({
        user:data.data,
       })
     });
  }

    render() {

        return (
          
            <div className="p-4 pb-0 border-b shadow-lg bg-gray-100 md:flex md:items-center md:justify-between md:pb-4">
                <HeaderLeft></HeaderLeft>
                
                <HeaderRight user={this.state.user}></HeaderRight>
            </div>
        );
    }
}

export default header;