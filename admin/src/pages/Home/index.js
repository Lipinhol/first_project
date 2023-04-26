import React from 'react'
import './estilo.css'
import Baner1 from '../../assets/Mobile/banner1-mobile.png'
import Baner1_2 from '../../assets/Tablet/banner1-tablet.png'
import Baner1_3 from '../../assets/Desktop/banner1-desktop.png'
import Baner2 from '../../assets/Mobile/banner2-mobile.png'
import Baner2_2 from '../../assets/Tablet/banner2-tablet.png'
import Baner2_3 from '../../assets/Desktop/banner2-desktop.png'
import Baner3 from '../../assets/Mobile/banner3-mobile.png'
import Baner3_2 from '../../assets/Tablet/banner3-tablet.png'
import Baner3_3 from '../../assets/Desktop/banner3-desktop.png'
import Camiseta1 from '../../assets/Mobile/categorias/categoria-camiseta.png'
import Camiseta1_2 from '../../assets/Tablet/categorias/categoria-camiseta.png'
import Camiseta1_3 from '../../assets/Desktop/categorias/categoria-camiseta.png'
import Bolsa1 from '../../assets/Mobile/categorias/categoria-bolsas.png' 
import Bolsa1_2 from '../../assets/Tablet/categorias/categoria-bolsas.png' 
import Bolsa1_3 from '../../assets/Desktop/categorias/categoria-bolsas.png' 
import Calcado1 from '../../assets/Mobile/categorias/categoria-calcados.png'
import Calcado1_2 from '../../assets/Tablet/categorias/categoria-calcados.png'
import Calcado1_3 from '../../assets/Desktop/categorias/categoria-calcados.png' 
import Calca1 from '../../assets/Mobile/categorias/categoria-calcas.png'
import Calca1_2 from '../../assets/Tablet/categorias/categoria-calcas.png'
import Calca1_3 from '../../assets/Desktop/categorias/categoria-calcas.png'
import Casacos1 from '../../assets/Mobile/categorias/categoria-casacos.png'
import Casacos1_2 from '../../assets/Tablet/categorias/categoria-casacos.png'
import Casacos1_3 from '../../assets/Desktop/categorias/categoria-casacos.png'
import Oculos1 from '../../assets/Mobile/categorias/categoria-oculos.png'
import Oculos1_2 from '../../assets/Tablet/categorias/categoria-oculos.png'
import Oculos1_3 from '../../assets/Desktop/categorias/categoria-oculos.png'
import Camiseta2 from '../../assets/Mobile/produtos/camiseta.png'
import Camiseta2_2 from '../../assets/Tablet/produtos/camiseta.png'
import Camiseta2_3 from '../../assets/Desktop/produtos/camiseta.png'
import Calca2 from '../../assets/Mobile/produtos/calca.png'
import Calca2_2 from '../../assets/Tablet/produtos/calca.png'
import Calca2_3 from '../../assets/Desktop/produtos/calca.png'
import Calcado2 from '../../assets/Mobile/produtos/tenis.png'
import Calcado2_2 from '../../assets/Tablet/produtos/tenis.png'
import Calcado2_3 from '../../assets/Desktop/produtos/tenis.png'
import Casacos2 from '../../assets/Mobile/produtos/jaqueta-jeans.png'
import Casacos2_2 from '../../assets/Tablet/produtos/jaqueta-jeans.png'
import Casacos2_3 from '../../assets/Desktop/produtos/jaqueta-jeans.png'
import Oculos2 from '../../assets/Mobile/produtos/oculos.png'
import Oculos2_2 from '../../assets/Tablet/produtos/oculos.png'
import Oculos2_3 from '../../assets/Desktop/produtos/oculos.png'
import Bolsa2 from '../../assets/Mobile/produtos/bolsa.png' 
import Bolsa2_2 from '../../assets/Tablet/produtos/bolsa.png' 
import Bolsa2_3 from '../../assets/Desktop/produtos/bolsa.png'

const Home = () =>{
  return (
    <>

      <div id="carouselExampleCaptions" className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className='img-fluid d-md-none' src={Baner1}
              alt='baner-1 Mobile'/>
            <img className='img-fluid d-none d-md-block d-xl-none' src={Baner1_2}
              alt='baner-1_2 Tablet'/>
            <img className='img-fluid d-none d-xl-block' src={Baner1_3}
              alt='baner-1_3 Desktop'/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>

          <div className="carousel-item active">
            <img className='img-fluid d-md-none' src={Baner2}
              alt='baner-2 Mobile'/>
            <img className='img-fluid d-none d-md-block d-xl-none' src={Baner2_2}
              alt='baner-2_2 Tablet'/>
            <img className='img-fluid d-none d-xl-block' src={Baner2_3}
              alt='baner-2_3 Desktop'/>
            <div className="carousel-caption d-none d-md-block">
              <h5>COLEÇÃO ATEMPORAL</h5>
              <p>Estilo e qualidade para durar.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img className='img-fluid d-md-none' src={Baner3}
              alt='baner-3 Mobile'/>
            <img className='img-fluid d-none d-md-block d-xl-none' src={Baner3_2}
              alt='baner-3_2 Tablet'/>
            <img className='img-fluid d-none d-xl-block' src={Baner3_3}
              alt='baner-3_3 Desktop'/>
            <div className="carousel-caption d-none d-md-block">
              <h5>COLEÇÃO ATEMPORAL</h5>
              <p>Alto impacto visual, baixo impacto ambiental!</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button"
          data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button"
          data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className='text-center my-3 my-xl-5'>Busque por categoria</h2>

      <div className="container row mx-auto g-4">

        <div className='col-6 col-md-4 col-xxl-2'>     
          <div className="card rounded-0 border-0">
            <img className='d-md-none d-block' src={Camiseta1}
              alt='Camiseta masculina de manga na cor verde.'/>
            <img className='d-none d-md-block d-xl-none' src={Camiseta1_2}
              alt='Camiseta masculina de manga na cor verde.'/>
            <img className='d-none d-xl-block' src={Camiseta1_3}
              alt='Camiseta masculina de manga na cor verde.'/>
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center my-0">Camisetas</p>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-4 col-xxl-2'>     
          <div className="card rounded-0 border-0">
            <img className='d-md-none d-block' src={Bolsa1}
              alt='Bolsa marrom de couro.'/>
            <img className='d-none d-md-block d-xl-none' src={Bolsa1_2}
              alt='Bolsa marrom de couro.'/>
            <img className='d-none d-xl-block' src={Bolsa1_3}
              alt='Bolsa marrom de couro.'/>
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center my-0">Bolsas</p>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-4 col-xxl-2'>     
          <div className="card rounded-0 border-0">
            <img className='d-md-none d-block' src={Calcado1}
              alt='Tênis branco com coloridos.'/>
            <img className='d-none d-md-block d-xl-none' src={Calcado1_2}
              alt='Tênis branco com coloridos.'/>
            <img className='d-none d-xl-block' src={Calcado1_3}
              alt='Tênis branco com coloridos.'/>
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center my-0">Tênis</p>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-4 col-xxl-2'>     
          <div className="card rounded-0 border-0">
            <img className='d-md-none d-block' src={Calca1}
              alt='Calças jeans.'/>
            <img className='d-none d-md-block d-xl-none' src={Calca1_2}
              alt='Calças jeans.'/>
            <img className='d-none d-xl-block' src={Calca1_3}
              alt='Calças jeans.'/>
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center my-0">Calças</p>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-4 col-xxl-2'>     
          <div className="card rounded-0 border-0">
            <img className='d-md-none d-block' src={Casacos1}
              alt='Casaco marrom de couro.'/>
            <img className='d-none d-md-block d-xl-none' src={Casacos1_2}
              alt='Casaco marrom de couro.'/>
            <img className='d-none d-xl-block' src={Casacos1_3}
              alt='Casaco marrom de couro.'/>
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center my-0">Casacos</p>
            </div>
          </div>
        </div>

        <div className='col-6 col-md-4 col-xxl-2'>     
          <div className="card rounded-0 border-0">
            <img className='d-md-none d-block' src={Oculos1}
              alt='Óculos ray-ban dourado.'/>
            <img className='d-none d-md-block d-xl-none' src={Oculos1_2}
              alt='Óculos ray-ban dourado.'/>
            <img className='d-none d-xl-block' src={Oculos1_3}
              alt='Óculos ray-ban dourado.'/>
            <div className="card-header bg-black text-bg-dark">
              <p className="text-center my-0">Óculos</p>
            </div>
          </div>
        </div>
      </div>


      <h2 className='container text-center my-3 my-xl-5'>Produtos que estão bombando</h2>

      <div className="container row mx-auto">

        <div className='col-1 col-12 col-md-6 col-xxl-4 pb-42 col-md-6 col-xxl-4 pb-4'>
          <div className="card">
            <img className='d-md-none d-block' src={Camiseta2}
              alt='Camiseta masculina 100% algodão.'/>
            <img className='d-none d-md-block d-xl-none' src={Camiseta2_2}
              alt='Camiseta masculina 100% algodão.'/>
            <img className='d-none d-xl-block' src={Camiseta2_3}
              alt='Camiseta masculina 100% algodão.'/>
            <div className="card-body">
              <h5 className="card-title">Camiseta Conforto</h5>
              <p className="card-text">Multicores e tamanhos. Tecido de algodão 100% fresquinho para o verão. Modelagem unissex.</p>
              <p>R$70,00</p>
              <a href="#" className="btn btn-primary lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div className='col-6 col-12 col-md-6 col-xxl-4 pb-4'>
          <div className="card">
            <img className='d-md-none d-block' src={Calca2}
              alt='Calça Wide Leg alfaiataria em linho.'/>
            <img className='d-none d-md-block d-xl-none' src={Calca2_2}
              alt='Calça Wide Leg alfaiataria em linho.'/>
            <img className='d-none d-xl-block' src={Calca2_3}
              alt='Calça Wide Leg alfaiataria em linho.'/>
            <div className="card-body">
              <h5 className="card-title">Calça Alfaiataria</h5>
              <p className="card-text">Modelo Wide Leg alfaiataria em linho. Uma peça para vida toda!</p>
              <p>R$180,00</p>
              <a href="#" className="btn btn-primary lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div className='col-6 col-12 col-md-6 col-xxl-4 pb-4'>
          <div className="card">
            <img className='d-md-none d-block' src={Calcado2}
              alt='Snicker casual com solado mais alto e modelagem robusta'/>
            <img className='d-none d-md-block d-xl-none' src={Calcado2_2}
              alt='Snicker casual com solado mais alto e modelagem robusta'/>
            <img className='d-none d-xl-block' src={Calcado2_3}
              alt='Snicker casual com solado mais alto e modelagem robusta'/>
            <div className="card-body">
              <h5 className="card-title">Tênis Chunky</h5>
              <p className="card-text">Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.</p>
              <p>R$250,00</p>
              <a href="#" className="btn btn-primary lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div className='col-6 col-12 col-md-6 col-xxl-4 pb-4'>
          <div className="card">
            <img className='d-md-none d-block' src={Casacos2}
              alt='Jaqueta jeans unissex oversized com gola de camurça.'/>
            <img className='d-none d-md-block d-xl-none' src={Casacos2_2}
              alt='aqueta jeans unissex oversized com gola de camurça.'/>
            <img className='d-none d-xl-block' src={Casacos2_3}
              alt='aqueta jeans unissex oversized com gola de camurça.'/>
            <div className="card-body">
              <h5 className="card-title">Jaqueta Jeans</h5>
              <p className="card-text">Modelo unissex oversized com gola de camurça. Atemporal e autêntica!</p>
              <p>R$150,00</p>
              <a href="#" className="btn btn-primary lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div className='col-6 col-12 col-md-6 col-xxl-4 pb-4'>
          <div className="card">
            <img className='d-md-none d-block' src={Oculos2}
              alt='Óculos com armação metálica em grafite com lentes arredondadas.'/>
            <img className='d-none d-md-block d-xl-none' src={Oculos2_2}
              alt='Óculos com armação metálica em grafite com lentes arredondadas.'/>
            <img className='d-none d-xl-block' src={Oculos2_3}
              alt='Óculos com armação metálica em grafite com lentes arredondadas.'/>
            <div className="card-body">
              <h5 className="card-title">Óculos Redondo</h5>
              <p className="card-text">Armação metálica em grafite com lentes arredondadas. Sem erro!</p>
              <p>R$120,00</p>
              <a href="#" className="btn btn-primary lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>

        <div className='col-6 col-12 col-md-6 col-xxl-4 pb-4'>
          <div className="card">
            <img className='d-md-none d-block' src={Bolsa2}
              alt='Bolsa camel em couro sintético'/>
            <img className='d-none d-md-block d-xl-none' src={Bolsa2_2}
              alt='Bolsa camel em couro sintético'/>
            <img className='d-none d-xl-block' src={Bolsa2_3}
              alt='Bolsa camel em couro sintético'/>
            <div className="card-body">
              <h5 className="card-title">Bolsa Coringa</h5>
              <p className="card-text">Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!</p>
              <p>R$120,00</p>
              <a href="#" className="btn btn-primary lilas rounded-0 border-0">Ver mais</a>
            </div>
          </div>
        </div>
        
      </div>


      <section className='pb-4 bg-black'>

        <h2 className='text-center bg-black text-bg-dark'>Conheça todas nossas facilidades</h2>

        <div className='d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 px-3'>

          <div className='divs-facilidades d-flex align-items-center'>
            <div><i className="verde-limao bi bi-x-diamond fs-1"></i></div>
            <div>
              <div className='verde-limao ms-3 mb-1'>Pague pelo PIX</div>
              <div className='texto-menor ms-3 bg-black text-bg-dark'>Ganhe 5% off com pagamentos via PIX.</div>
            </div>
          </div>
        
          <div className='divs-facilidades d-flex align-items-center'>
            <div><i className="verde-limao bi bi-arrow-repeat fs-1"></i></div>
            <div>
              <div className='verde-limao ms-3 mb-1'>TROCA GRÁTIS</div>
              <div className='texto-menor ms-3 bg-black text-bg-dark'>Fique livre para trocar em até 30 dias.</div>
            </div>
          </div>

          <div className='divs-facilidades d-flex align-items-center'>
            <div><i className="verde-limao bi bi-flower1 fs-1"></i></div>
            <div>
              <div className='verde-limao ms-3 mb-1'>SUSTENTABILIDADE</div>
              <div className='texto-menor ms-3 bg-black text-bg-dark'>Moda responsável que respeita o meio ambiente</div>
            </div>
          </div>
          
        </div>

      </section>
      
      <form className='border border-secondary my-3 my-xl-5 p-3 text-center'>
        <h5>
          Quer conhecer nossas novidades, promoções exclusivas e 10% OFF na primeira
          compra? Cadastre-se!
        </h5>

        <div className='input-group my-3'>
          <input type='email' className='form-control border-secondary rounded-0'
            placeholder='Digite seu e-mail'
            aria-label='Digite seu e-mail' aria-describedby='button-addon2' />
          <button type='button'
            id='button1-addon2'>Enviar</button>
        </div>
      </form>

      <footer className='text-center bg-black text-bg-dark'>
        <p className='py-3'>2023 <i className="bi bi-c-circle"> </i>
        Desenvolvido por Luiz Lopes | Projeto fictício sem fins comerciais.</p>
      </footer>

    </>
  )
}

export default Home