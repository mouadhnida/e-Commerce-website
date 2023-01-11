import Link from "next/link";
import axios from "axios";


async function getData() {
    const res = await axios.get("/api/newArrival");
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    console.log(res.json());
    return res.json();
  
  }
  
  
  export default async function Login() {
    const data = await getData();
    console.log(data);
    return (
        <div>hy</div>
    )
  }