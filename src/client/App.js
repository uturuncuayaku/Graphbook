import React from 'react'



const App = () => {
	return(
	<div>Hello World!</div>
	)
}

const initialPosts = [

	{
		id:2,
		text:'Lorem Ipsum',
		user:{
			avatar:'/uploads/avatar1.png',
			username: 'Test User',
			
			}
	},
	
	{
		id:1,
		text:'Lorem ipsum',
		user:{
			avatar: '/uploads/avatar2.png',
			username: 'Test User 2',
			
			}
	}
	
];



export default App
