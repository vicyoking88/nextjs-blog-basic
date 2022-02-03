import Layout from "../../components/Layout";
import Link from 'next/link';

type Props={
  data:[]
}

export default function index({data}:Props) {
  return (
  <Layout
    title="MisPost | Next.js"
    description="por aka su descripcion"
    home={false}
    ><h1>list to Posts</h1>
    {
      data.map(({id, title, body}:any)=>(
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>{id} - {title}</a></Link>
            </h3>
          <p>{body}</p>
        </div>
      ))
    }
  </Layout>
  );
}


export async function getStaticProps(){
  try {
      const res=await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      return{
        props:{
          data
        }
      }
  } catch (error) {
      console.log(error);
  }
}