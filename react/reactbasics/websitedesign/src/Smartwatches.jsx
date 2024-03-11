function Smartwatches(){
    const Smartwatches=[
     {
        name:"smartwatch1",
        thumbnail:
        "https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UY218_.jpg",
     },
     {
        name:"smartwatch2",
        thumbnail:
       "https://m.media-amazon.com/images/I/61ZrPtiuqSL._AC_UY218_.jpg",
     }, 
     {
        name:"amartwatch3",
        thumbnail:
       "https://m.media-amazon.com/images/I/615bkL8A2tL._AC_UY218_.jpg ",
     },  
     {
        name:"smartwatch4",
        thumbnail:
       "https://m.media-amazon.com/images/I/71Q8czKqSIL._AC_UY218_.jpg",
     },
     {
        name:"smartwatch5",
        thumbnail:
       "https://m.media-amazon.com/images/I/61Y6E3Y9heL._AC_UY218_.jpg",
     },
    ];
    return(
        <>
        <center><h1>Smartwatches</h1></center>
        <ul>
        <div className="Watcheslist">
        {Smartwatches.map((image) =>{
            return <li key={image.name}><img src={image.thumbnail} alt={image.name}/></li>;

        })}
        </div>
        </ul>
        </>
    )
}
export default Smartwatches;