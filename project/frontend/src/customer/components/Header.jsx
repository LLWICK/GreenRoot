 import { LayoutGrid, Search, ShoppingBag, ShoppingBasket } from 'lucide-react'

import { Button } from '@/components/ui/button'
//images



import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import  { useEffect,useState ,useContext } from 'react'
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
// import CartItemList from './CartItemList'
import { useNavigate } from 'react-router-dom';

  
  

  

const Header = () => {

  const [products, setProducts] = useState(null)
  const navigate = useNavigate();
  
  



  //navigate  to dashboard
    const handledashboard = () => {
        navigate('/Customer/Dashboard', );
    };

  //use to get total cart item

  

  useEffect(()=>{
     const fetchProducts = async()=>{
      const response = await fetch('')//change
      const json = await response.json()

      if(response.ok){
        setProducts(json)
      }
  }

  fetchProducts()
}
  ,[])

  return (
    <div className='p-5 shadow-sm flex justify-between'>
    <div className='flex items-center gap-8'>
        <img src='/customer_images/Greenroots-logo-color.png' alt='Logo'//import png
        width={150}
         height={100} 
         />

         {/* starts from here */}

         
    

        


<DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="h-5 w-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {products && products.length > 0 && (
              products.map((product) => (
                <DropdownMenuItem key={product._id}>    
                  <img src={product.image} alt={product.name} className="w-10 h-10" />
                  <h2>{product.name}</h2>
                </DropdownMenuItem>
                // change
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>


        <div className='md:flex gap-3 items-center 
        border rounded-full p-2 px-5
        hidden'>
            <Search/>
            <input type='text' 
            placeholder='Search'
            className='outline-none'/>



        </div>


    
    </div>
    <div className='flex gap-5 items-center'>
        

         <Sheet>
  <SheetTrigger>
  <h2 className='flex gap-2 items-center text-lg'>
          <ShoppingBasket className='h-7 w-7 cursor-pointer'/>
        <span className='bg-green-600 text-white  px-2 rounded-full'>0</span>
        </h2>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="bg-green-500 text-white font-bold text-lg p-2">My Cart</SheetTitle>
      <SheetDescription>
        {/* <CartItemList />  */}
      </SheetDescription>
    </SheetHeader>
     
  </SheetContent>
</Sheet> 



        <Button onClick={handledashboard}>Login</Button>
    </div>
    </div>
    
  )
}


export default Header