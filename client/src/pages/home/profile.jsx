import React from 'react';
import './profile.css'
import cookie from "react-cookies"

class profile extends React.Component {
	constructor(props){
        super(props);
        this.state={
          user:"",
          company:"",
          description:"",
          location:"",
          school:"",
		  userName:"",
        };
      }
      componentDidMount() {
        var user = cookie.load('userId');
        this.setState({
            user:user
        })

        fetch('http://localhost:8888/api/profile',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user
                })
            }).then(res =>res.json())
            .then((data) => {
                this.setState({
                    company:data.data.company,
                    description:data.data.description,
                    location:data.data.location,
                    school:data.data.school
                })
            });

			fetch('http://localhost:8888/api/getUser',{
				method:'POST',
				headers:{
				  'Content-Type': 'application/json',
				  'Authorization': 'Bearer ' + cookie.load('token')
			  }
			  })
			   .then(res =>res.json())
			   .then((data) => {
				 
				 this.setState({
				  userName:data.data.name,
				 })
			   });
    }


	render() {
    return(
        <div className="overflow-x-hidden bg-gray-100">
		<div className="px-6 py-8">
			<div className="container flex justify-between mx-auto">
				<div className="w-full lg:w-8/12">
					<div className="flex items-center justify-between">
						<h1 className="text-xl font-bold text-gray-700 md:text-2xl px-11">Post</h1>
					</div>
					<div className="mt-6">
						<div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
							<div className="flex items-center justify-between"><span className="font-light text-gray-600">Jun 1,
									2020</span><a href="#"
									className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
							</div>
							<div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Build
									Your New Idea with Laravel Freamwork.</a>
								<p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
									reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
							</div>
							<div className="flex items-center justify-between mt-4"><a href="#"
									className="text-blue-500 hover:underline">Read more</a>
								<div><a href="#" className="flex items-center"><img
											src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
											alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
										<h1 className="font-bold text-gray-700 hover:underline">Alex John</h1>
									</a></div>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
							<div className="flex items-center justify-between"><span className="font-light text-gray-600">mar 4,
									2019</span><a href="#"
									className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Design</a>
							</div>
							<div className="mt-2"><a href="#"
									className="text-2xl font-bold text-gray-700 hover:underline">Accessibility tools for
									designers and developers</a>
								<p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
									reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
							</div>
							<div className="flex items-center justify-between mt-4"><a href="#"
									className="text-blue-500 hover:underline">Read more</a>
								<div><a href="#" className="flex items-center"><img
											src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
											alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
										<h1 className="font-bold text-gray-700 hover:underline">Jane Doe</h1>
									</a></div>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
							<div className="flex items-center justify-between"><span className="font-light text-gray-600">Feb 14,
									2019</span><a href="#"
									className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">PHP</a>
							</div>
							<div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">PHP:
									Array to Map</a>
								<p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
									reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
							</div>
							<div className="flex items-center justify-between mt-4"><a href="#"
									className="text-blue-500 hover:underline">Read more</a>
								<div><a href="#" className="flex items-center"><img
											src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
											alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
										<h1 className="font-bold text-gray-700 hover:underline">Lisa Way</h1>
									</a></div>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
							<div className="flex items-center justify-between"><span className="font-light text-gray-600">Dec 23,
									2018</span><a href="#"
									className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Django</a>
							</div>
							<div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Django
									Dashboard - Learn by Coding</a>
								<p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
									reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
							</div>
							<div className="flex items-center justify-between mt-4"><a href="#"
									className="text-blue-500 hover:underline">Read more</a>
								<div><a href="#" className="flex items-center"><img
											src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
											alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
										<h1 className="font-bold text-gray-700 hover:underline">Steve Matt</h1>
									</a></div>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
							<div className="flex items-center justify-between"><span className="font-light text-gray-600">Mar 10,
									2018</span><a href="#"
									className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Testing</a>
							</div>
							<div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">TDD
									Frist</a>
								<p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
									reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
							</div>
							<div className="flex items-center justify-between mt-4"><a href="#"
									className="text-blue-500 hover:underline">Read more</a>
								<div><a href="#" className="flex items-center"><img
											src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
											alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
										<h1 className="font-bold text-gray-700 hover:underline">Khatab Wedaa</h1>
									</a></div>
							</div>
						</div>
					</div>
					<div className="mt-8">
						<div className="flex">
							<a href="#" className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
								previous
							</a>
						
							<a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
								1
							</a>
						
							<a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
								2
							</a>
						
							<a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
								3
							</a>
						
							<a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
								Next
							</a>
						</div>
					</div>
				</div>
				<div className="hidden w-4/12 -mx-8 lg:block">
                <div className="flex items-center px-12 pt-12 justify-between">
                    <div className="w-24 h-24 bg-blue-600 flex items-center rounded-full">
                        <img alt="avatar" className="hidden object-cover w-24 h-24 mx-4 rounded-full sm:block" />
                    </div>
                    <div className="w-9/12 flex items-center">
                        <div className="w-10/12 flex flex-col leading-none pl-4">
                            <p className="text-2xl font-bold">{this.state.userName}</p>
                        </div>
                        <div className="w-2/12">
							<a href="/home/updateProfile">
                            	<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
									<path fill="none" d="M0 0h24v24H0z"/>
										
									<path d="M9.243 19H21v2H3v-4.243l9.9-9.9 4.242 4.244L9.242 19zm5.07-13.556l2.122-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z"/>
								</svg>
							</a>
                        </div>
                    </div>
                    </div>
					<div className="px-14 py-14">
						<h1 className="mb-4 text-xl font-bold text-gray-700">Intro</h1>
						<div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
							<p>{this.state.description}</p>
						</div>
					</div>
					<div className="px-14">
						<h1 className="mb-4 text-xl font-bold text-gray-700">Photos</h1>
						<div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
	}
}

export default profile