import style from "../estilos/About.module.css"

const About = () => {
    return (
        <div className={style.about}>
            <div>
            <h1 className={style.bienvenidos}>Bienvenidos!</h1>
            <img src="https://avatars.githubusercontent.com/u/137452483?v=4" alt="" />
            </div>
            <div>
            <h3 className={style.bienvenidos}>Hola, me llamo Carlos y esta es mi app con tematica de Rick and Morty, aqui puedas ver toda la info de tus personajes favoritos!</h3>
            <h3 className={style.bienvenidos}> Diviertete y que los disfrutes!</h3>
            </div>
        </div>
    )
}
export default About;