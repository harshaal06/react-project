import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { MY_PROJECTS } from './../../config';
import ProjectInfo from '../../components/ProjectInfo/ProjectInfo';
import { useParams } from 'react-router-dom';

function ProjectMore() {
 const { id } = useParams();
 const val = id;
  return (
    <div>
        <Navbar/>
        <div className='card-container'>
            <div className='container'>
                <div className='container d-flex justify-content-between flex-wrap my-4'>{
                    MY_PROJECTS.map((project, index) => {
                        const { id, imge, title, description, lang } = project;
                        if(val == id){
                            return (<ProjectInfo id={id} imge={imge} title={title} description={description} lang={lang} key={index}/>);
                        }
                    })
                }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProjectMore