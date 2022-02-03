import Layout from "../../components/Layout";

type Props={
  data:{}
}

export default function primerpost({data}:any) {
 
  return (
    <Layout title="UnPost | Next.js"
    description="detalles del post seleccionado"
    home={false}>
      <h1>{data.id} - {data.title}</h1>
      <p>{data.body}</p>
    </Layout>
  );
}


export async function getStaticPaths() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    const paths=data.map(({id}:any)=>({params:{id:`${id}`}}))
    return {
      paths,
      fallback:false//imprime 404
    }
  } catch (error) {
    console.log(error)
  }
}


export async function getStaticProps(params:any){
 console.log(params.params.id)
  try {
      const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.params.id}`)
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