import imagem from './img/img1_home.jpg'

export default function Home(){
    const Home ={
       backgroundColor:'#AFEEEE',
       heigth:'85vh',
       textAlign:'center',
       color:'7cc'
    }

    return(
       <div style={Home}>
         <h1>MAXIMIZE A PRIMAVERA, LIBERE SUAS CORES</h1>
         <img src={imagem} alt="Imagem de desfile" />
       </div>
    )
    
}