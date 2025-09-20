export default function Friend({ friend }) {
  const { name, username, email, website, phone, company } = friend;
  const { city, street, zipcode } = friend.address;

  return (
    <div className="card">
      <h4>Name : {name}</h4>
      <p>User Name : {username}</p>
      <p>Website : {website}</p>
      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <p>Address : {city}, {street}, {zipcode}</p>
      <p>Company : {company.name}</p>
    </div>
  );
}
