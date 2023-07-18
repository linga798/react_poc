import "./index.css"
const UserProfile = (props) => {
    console.log('user details:',props);
    const {userDetails} = props;
    const {imgURL,name,role} = userDetails
    console.log('image url:',imgURL);
    return (
        <div className="user-card-container">
            <img src={imgURL} className="avatar" alt="profile"/>
            <div className="user-details-container">
                <h1 className="user-name">{name}</h1>
                <p className="user-designation">{role}</p>
            </div>
        </div>
    )
};

export default UserProfile