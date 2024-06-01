import Link from "next/link"
import { useRouter } from "next/router"
// import styles from "../../styles/post.module.css"

 export async function getStaticPaths() {
    
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  const thePaths = data.map(ele => {
    return { params: { id: ele.id.toString() } }
  })

  return {
    paths: thePaths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json();
  
  const theUser = data.filter(userEle => userEle.id === Number(context.params.id))[0]
  
  return {
    props: {
      user: theUser,
    }
  }
}

const User = (props) => {
    const router = useRouter();
    // const {user} = props;
    // const {name, email, phone} = user; 
    const  {user : {name, email,phone, address: {street, city, zipcode}}, company} = props;
    return (
      <>
        <div className="back-to-users">
          <Link href="/users">
            <small>&laquo; back to all blog posts</small>
          </Link>
        </div>
        <div className="user-data">
          <h2><b>User data below : </b></h2>

        <div> 
          <span className="user-label"> Name :</span>
          <span className="user-value">{name} </span>
        </div>

        <div> 
          <span className="user-label"> Email :</span>
          <span className="user-value">{email} </span>
        </div>
        <div> 
          <span className="user-label"> Phone :</span>
          <span className="user-value">{phone} </span>
        </div>

        <div className="user-address">
          <div className="user-label">Address :  </div> 
          <div className="user-address-value">  
          <div className="user-address-fields">

              <div className="user-address-field">
                <span className="user-label">Street :</span> 
                <span className="user-value"> {street} </span>
              </div>

              <div className="user-address-field">
                <span className="user-label">city :</span> 
                <span className="user-value"> {city} </span>
              </div>

              <div className="user-address-field">
                <span className="user-label">zipcode :</span> 
                <span className="user-value"> {zipcode} </span>
              </div>
            </div>

          </div> 
        </div>
        </div>
    
        <button className="navigate-button" onClick={() => router.push("/users")}>
          Click me to programmatically navigate or redirect
        </button>
      </>
    )
  }

export default User;