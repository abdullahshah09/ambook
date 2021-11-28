import { useState } from 'react'
import './updateProfile.css'
import cookie from "react-cookies"
import React from 'react'




class updateProfile extends React.Component {
    

    constructor(props){
        super(props);
        this.state={
          user:"",
          company:"",
          description:"",
          location:"",
          school:"",
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
    }

    render() {

        return (
            <div>
            <div className="w-full md:w-1/2  md:px-10 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="font-bold text-3xl text-gray-900">Profile</h1>
                    </div>
                    <div>
                        <form onSubmit={(e)=>update(e,this.state)}>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Company</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the company"
                                            value={this.state.company}
                                            onChange={(e) => this.setState({company:e.target.value})} />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">School</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="tel"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the  school"
                                            value={this.state.school}
                                            onChange={(e) => this.setState({school:e.target.value})} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <label className="text-xs font-semibold px-1">Description</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the description"
                                            value={this.state.description}
                                            onChange={(e) => this.setState({description:e.target.value})}  />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-12">
                                    <label className="text-xs font-semibold px-1">Location</label>
                                    <div className="flex">
                                        <div
                                            className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                                        </div>
                                        <input type="text"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Enter the location"
                                            value={this.state.location}
                                            onChange={(e) => this.setState({location:e.target.value})}  />
                                    </div>
                                </div>
                            </div>
                        
                            
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <input type="submit" value="OK" className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold cursor-pointer"/>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
            
        </div>
        );
    }
}

async function update(e,params) {
    e.preventDefault()
    const user = params.user
    const description = params.description
    const company = params.company
    const location = params.location
    const school = params.school

    const response = await fetch('http://localhost:8888/api/updateProfile',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user,
            description,
            company,
            location,
            school,
        }),
    })

    const data = await response.json()

    alert(data.msg)
    if(response.status === 200) {
        window.location.href = '/home/profile'
    }
}



export default updateProfile