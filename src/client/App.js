
import React, {useState} from 'react'
import '../../assets/css/style.css'

const App = () => {
	const [post, setPosts] = useState(initialPosts);
		
	return (
		<div className ="container">
			<div className="feed">
			{
				initialPosts.map((post,i) =>
				<div key={post.id} className="post">
				  <div className="header">
				    <img src={post.user.avatar} />
				    <h2>{post.user.username}</h2>
				  </div>
				  <p className="content">
					{post.text}
				  </p>
				</div>
			)}
			</div>
		</div>
	)
}

const initialPosts = [

	{
		id:2,
		text:'Lorem Ipsum',
		user:{
			avatar:'/uploads/avatar11.jpeg',
			username: 'Test User',
			}
	},
	
	{
		id:1,
		text:'Lorem ipsum',
		user:{
			avatar: '/uploads/avatar22.jpeg',
			username: 'Test User 2',
			}
	}
	
];



export default App
