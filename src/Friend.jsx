export default function Friend({friend}){
    return(
        <div className="card">
            <h4>Name : {friend.name}</h4>
            <p>User Name : {friend.username}</p>
            <p>Email : {friend.email}</p>
        </div>
    )
}