
import Container from "@/Components/Container";
import { getCategories } from "./library";
// import StorePage from "./page";
// import { ProductListing } from "./page";


export default function StoreLayout({children}) {
return ( 
 
 <Container className='grid grid-cols-5 gap-3' >
<CategoryListing />
  {children}
 </Container>
)
}




export const CategoryListing = async () => {
  const data = await getCategories(); // function call with ()
  console.log(data , "awab kese ho");
  
  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mb-4'>Categories</h2>
      <ul>
        {data.map((d, i) => (
          <li className='p-2 border my-2' key={`category-${i}`}>
          {/* // <li className='p-2 border my-2'> */}
            {d.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

