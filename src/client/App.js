
import React, {useState} from 'react'
import '../../assets/css/style.css'
/*
 * Can implement location of person here
 * as
 * <div className="location">
 * {post.user.username.location.city}
 * {post.user.username.location.state}
 * </div>
* 				
<div className="likes">
{post.numberOfLikes}
</div>
*/
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
/*
 * Comments from book: 
 * Placeholder for interaction with js files. 
 * Will set up API using GraphQL in subsequent chapters.
 * 
 * User Info:
 * User can have a face, username, age(if dating app), 
 * location(GPS:coordinates), 
 * common friends, common interests, 
 * 
 * Post Behavior
 * can be clickable, 
 * on hover can show likes or add friend, 
 * save time of click in UTC,
 * 
 * numberOfLikes:'000',

 * location: {
 * 	state:'CA',
 * 	city:'L.A.',
 * }
 * 
 * */
const initialPosts = [

	{
		id:2,
		text:"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
		user:{
			avatar:'/uploads/avatar11.jpeg',
			username: 'User One',
			}
	},
	
	{
		id:1,
		text:"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ",

		user:{
			avatar: '/uploads/avatar22.jpeg',
			username: 'User Two',
			}
	}
	
];


export default App
