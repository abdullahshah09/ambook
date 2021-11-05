import React from 'react';
// import ReactDOM from 'react-dom';
import './header.components.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function HeaderLeft(params) {
    return(
        <div className="headerLeft" class="mb-4 flex items-center justify-between w-1/5 md:mb-0 ">
            <image className="logo"></image>
            <form action="get" class="mb-4 w-full md:mb-0 md:w-5/6">
                <input type="text" class="p-2 border rounded-lg w-full bg-grey-lightest focus:border-orange focus:shadow-inner" placeholder="search in ambook"/>
                <button class="hidden">yes</button>
            </form>
        </div>
    );
}

function HeaderRight(params) {
    return(
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li class="mr-3">
                      <image className="userPhoto"></image>
					<a class="inline-block py-2 px-4 text-grey-darkest no-underline" href="#">Username</a>
				  </li>
				  <li class="mr-3">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
				  <li class="mr-3">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
					<li class="mr-3">
					<a class="inline-block text-gray-600 no-underline hover:text-gray-400 hover:text-underline py-2 px-4" href="#">link</a>
				  </li>
				</ul>
			</div>
    );
}


class header extends React.Component {


    render() {

        return (
            <div class="p-4 pb-0 border-b shadow-lg bg-gray-100 md:flex md:items-center md:justify-between md:pb-4">
                <HeaderLeft></HeaderLeft>
                
                <HeaderRight></HeaderRight>
            </div>
        );
    }
}

export default header;