function Laptops(){
    const Laptops=[
     {
        name:"Laptop1",
        thumbnail:
        "https://m.media-amazon.com/images/I/61GEizrmU9L._AC_UY218_.jpg",
     },
     {
        name:"Laptop2",
        thumbnail:
       "https://m.media-amazon.com/images/I/71hUsloF5bL._AC_UY218_.jpg",
     }, 
     {
        name:"Laptop33",
        thumbnail:
       "https://m.media-amazon.com/images/I/61FTNlVa5OL._AC_UY218_.jpg",
     },  
     {
        name:"Laptop4",
        thumbnail:
       "https://m.media-amazon.com/images/I/61aaFLxqFKL._AC_UY218_.jpg",
     },
     {
        name:"Laptop5",
        thumbnail:
       "https://m.media-amazon.com/images/I/710ZcpHUpkL._AC_UL320_.jpg",
     },
    ];
    return(
        <>
        <center><h1>Laptops</h1></center>
        <ul>
        
        <div className="Laptopslist">
        {Laptops.map((image) =>{
            return <li key={image.name}> <img src={image.thumbnail} alt={image.name}/></li>;

        })}
        </div>
        </ul></>

    )
}
export default Laptops;