export default function Post({ post }) {
  const { userId, title, body } = post;

  return (
    <div className="card">
      <h4>Posted by : {userId}</h4>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
