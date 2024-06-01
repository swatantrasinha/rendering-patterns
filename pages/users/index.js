import Link from "next/link"
import React, { useEffect } from 'react';


 const Users = (props) => {
  const {usersList} = props;

  return (
    <>
      <h2>This is Users List Page !!!</h2>

      {usersList?.map((userData, index) => {
        const {name, id} = userData;
        return (
          <div key={index}>
            <h3>
              <Link href={`/users/${id}`}>{name}</Link>
            </h3>
            {/* <p>{post.content}</p> */}
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
   
    const data = await response.json();
    
    return {
        props: {
          usersList : data,
        }
      }
}

export default Users;