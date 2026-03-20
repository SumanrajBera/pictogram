import React from 'react'
import '../style/profile.scss'

const Profile = () => {
  return (
    <div className="profPage">
      <div className="profTop">
        <div className="left">
          <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="right">
          <div className="userInfo">
            <p className='username'><strong>merlin_gonzales52</strong></p>
            <p className='name'>Merlin Gonzales</p>
          </div>
          <div className="reachInfo">
            <div className="postCount">
              <p className='count'><span>10</span> Posts</p>
            </div>
            <div className="followCount">
              <p className='count'><span>50</span> Followers</p>
            </div>
            <div className="followingCount">
              <p className='count'><span>100</span> Following</p>
            </div>
          </div>
          <div className="bigScreenBio">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, architecto? Eius rem laudantium facilis delectus saepe accusantium et! Nostrum, aperiam! </p>
          </div>
        </div>
      </div>
      <div className="smallScreenBio">
        <div className="bio">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, architecto? Eius rem laudantium facilis delectus saepe accusantium et! Nostrum, aperiam! </p>
        </div>
      </div>
      <hr />
      <div className="profPosts">

      </div>
    </div>
  )
}

export default Profile