function Mobiles(){
    const Mobiles=[
     {
        name:"mobile1",
        thumbnail:
        "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/BSK/7March/01._CB580580197_.jpg",
     },
     {
        name:"mobile2",
        thumbnail:
       "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/BSK/7March/02._CB580580197_.jpg",
     }, 
     {
        name:"mobile3",
        thumbnail:
       "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/BSK/7March/03._CB580580197_.jpg",
     },  
     {
        name:"mobile4",
        thumbnail:
       "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/BSK/7March/04._CB580580197_.jpg",
     },
     {
        name:"mobile5",
        thumbnail:
       "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/CLP/BSK/Feb1/05._CB583557388_.jpg",
     },
    ];
    return(
        <>
        <center><h1>Mobiles</h1></center>
        <ul>        <div className="Mobileslist">
        {Mobiles.map((image) =>{
            return <li key={image.name}> <img src={image.thumbnail} alt={image.name}/></li>;

        })}
        </div></ul>

        </>
    )
}
export default Mobiles;