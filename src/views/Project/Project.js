import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { MY_PROJECTS, HEAD_TITLE } from './../../config';
import './Project.css'

function Project() {
    return (
        <div>
            <Navbar />
            <h1 className='fs fw-semibold mt-4 text-center'>{HEAD_TITLE}</h1>
            <div className='container d-flex justify-content-between flex-wrap my-4'>{
                MY_PROJECTS.map((project, index) => {
                    const { id, imge, title, description, lang, live } = project;
                    return (<ProjectCard id={id} imge={imge} title={title} description={description} lang={lang} key={index} live={live} />);
                })
            }
            </div>
            <Footer />
        </div>
    );
}

export default Project