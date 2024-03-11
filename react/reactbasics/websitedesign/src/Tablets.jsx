function Tablets(){
    const Tablets=[
     {
        name:"tablet1",
        thumbnail:
        "https://m.media-amazon.com/images/I/41YXzR9vn9L._SX300_SY300_QL70_FMwebp_.jpg",
     },
     {
        name:"tablet2",
        thumbnail:
       "https://m.media-amazon.com/images/I/41QoEEe82KL._SX300_SY300_QL70_FMwebp_.jpg",
     },
     {
        name:"tablet3",
        thumbnail:
       "https://m.media-amazon.com/images/I/414oIOjWfnL._SX300_SY300_QL70_FMwebp_.jpg ",
     },  
     {
        name:"tablet4",
        thumbnail:
       "https://m.media-amazon.com/images/I/317Kgxsx49L._SX300_SY300_QL70_FMwebp_.jpg",
     },
     {
        name:"tablet5",
        thumbnail:
       "https://m.media-amazon.com/images/I/414oIOjWfnL._SX300_SY300_QL70_FMwebp_.jpg",
     },
    ];
    return(
        <>
        <center><h1>Tablets</h1></center>
        <ul>
        <div className="Tabletslist">
        {Tablets.map((image) =>{
            return <li key={image.name}><img src={image.thumbnail} alt={image.name}/></li>;

        })}
        </div>
        </ul></>
    )
}
export default Tablets;