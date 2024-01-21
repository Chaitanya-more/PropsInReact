
// import myImg from '../images/myImg.jpg'


const User= (props)=>{
    return(
        <>
        <div className="green">
        <h1>{props.name}</h1>
        <img src={props.image} alt="images" height={'200px'} width={'200px'}/>
        <p>{props.para}</p>
             <button>Know more</button>
        </div>
        </>
    );
    }
    
    export default User;