import styles from './Sobre.module.css';

const Sobre = () => {
    return (
        <section id="sobre" className={styles.sobre_container}>
            <div>
                <h1 >Sobre mim</h1>
                <p >
                  Sou programadora trainee e estudante de Engenharia de Software, apaixonada por tecnologia e desenvolvimento Front-End. </p>
                <p>
                    Meu primeiro contato com a programação foi em 2022, mas foi em 2023 que mergulhei de vez nesse universo, dedicando-me a cursos e projetos que impulsionam minha evolução constante. </p>
                <p>
                   Ao longo da minha trajetória, concluí qualificações em Programador de Sistemas e Programador Web pelo SENAC, onde adquiri experiência em HTML, CSS, JavaScript, fundamentos de PHP, SQL, lógica de programação, testes e publicação de projetos.
                </p>
                <p>Ao longo da minha trajetória, concluí qualificações em Programador de Sistemas e Programador Web pelo SENAC, onde adquiri experiência em HTML, CSS, JavaScript, fundamentos de PHP, SQL, lógica de programação, testes e publicação de projetos.<p/>
            <p>Também participei do Programa ONE Oracle + Alura, onde me aprofundei em React, Git, arquitetura CSS e soft skills essenciais para o mercado.</p>
                    <p>Hoje, estudo TypeScript, Node.js e React, aplicando o que aprendo em projetos práticos que me desafiam e me motivam. Meu próximo objetivo? Dominar Java e expandir ainda mais minhas possibilidades como desenvolvedora.</p>
                </div>
            <div className=''>
                <h2 >Tecnologias que utilizo atualmente</h2>
            </div>
        </section>
    )
}

export default Sobre;
