
export const Readdata = (props) => {
  return (
    <>
      <ul>
        {props.x.map((post) => {
          return (
            <li key={post.id}>
              <h1>{post.id}</h1>
              <h1>{post.title}</h1>
              <h1>{post.body}</h1>
               
            </li>
          );
        })}
      </ul>
    </>
  );
};
