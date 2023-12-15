import Link from "next/link"
import { addLogin } from "./lib/actions"



// TODO
const Homepage = () => {
  return (
    <div>

    <form action={addLogin} >
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="username" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
     
    </form>
    <div>Homepage</div>
    <div className="dash">
   
    <Link href='/dashboard'> Click Here <span className="colorr">Dashboard</span></Link>
    </div>

    </div>
  )
}

export default Homepage