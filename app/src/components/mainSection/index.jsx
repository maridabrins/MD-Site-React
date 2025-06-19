import ImageReact from '../../assets/images/illustrationReact.jfif'
import './style.css'
import Card from '../card'

const MainSection = () => {
    return(
        <main>
            <div className='main-container'>
                <img src={ImageReact} alt="imagem da logo do react e icones em azul" title='imagem react' />
            <div className='main-content'>
                  <h2>Crie interfaces de usuário a partir de componentes</h2>
            <p>
                 O React permite que você crie interfaces de usuário a partir de partes individuais chamadas <mark>componentes</mark>. 
                 Crie seus próprios componentes React, como , e . 
                 Em seguida, combine-os em telas, páginas e aplicativos inteiros.
            </p>
            </div>
            </div>
            

            <div className="card-grid">
                
                <Card 
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card 
                    title= "ReactJS na prática"
                    description="Componentes, props, hooks, consumo de API"
                />
                <Card 
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card 
                    title= "ReactJS na prática"
                    description="Componentes, props, hooks, consumo de API"
                />
                <Card 
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card 
                    title= "ReactJS na prática"
                    description="Componentes, props, hooks, consumo de API"
                />
                <Card 
                    title="JavaScript Moderno"
                    description="Do básico ao avançado com foco em lógica e projetos"
                />
                <Card 
                    title= "ReactJS na prática"
                    description="Componentes, props, hooks, consumo de API"
                />
                <Card 
                    title= "ReactJS na prática"
                    description="Componentes, props, hooks, consumo de API"
                />

                

            </div>
          
        </main>

    )
}
export default MainSection