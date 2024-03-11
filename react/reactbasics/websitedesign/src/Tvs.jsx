function Tvs(){
    const Tvs=[
     {
        name:"tv1",
        thumbnail:
        "https://m.media-amazon.com/images/I/51t39vo4DzL._SY300_SX300_QL70_FMwebp_.jpg",
     },
     {
        name:"tv2",
        thumbnail:
       "https://m.media-amazon.com/images/I/51t39vo4DzL._SY300_SX300_QL70_FMwebp_.jpg",
     }, 
     {
        name:"tv3",
        thumbnail:
       "https://m.media-amazon.com/images/I/41X5FjcdjYL._SY300_SX300_QL70_FMwebp_.jpg",
     },  
     {
        name:"tv4",
        thumbnail:
       "https://m.media-amazon.com/images/I/51t39vo4DzL._SY300_SX300_QL70_FMwebp_.jpg",
     },
     {
        name:"tv5",
        thumbnail:
       "https://m.media-amazon.com/images/I/51t39vo4DzL._SY300_SX300_QL70_FMwebp_.jpg",
     },
    ];
    return(
  
    <>
        <center><h1>Tvs</h1></center>
        <ul>        <div className="Tvslist">
        {Tvs.map((image) =>{
            return <li key={image.name}> <img src={image.thumbnail} alt={image.name}/></li>;

        })}
        </div></ul>

        </>
    )
}
export default Tvs;