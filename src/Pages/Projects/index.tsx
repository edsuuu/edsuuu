import { useEffect, useState } from 'react';
import { Container } from './styled';
import axiosGithub from '../../services/axios-github';
import CardRepository from '../../Components/CardRepository';

const Project = () => {
    const [repository, setRepository] = useState([]);

    useEffect(() => {
        async function getRepository() {
            try {
                const { data } = await axiosGithub.get('');
                setRepository(data);
            } catch (e) {
                console.log(e);
            }
        }

        getRepository();
    }, []);

    console.log(repository);

    return (
        <Container>
            <div>
                <h1>Quer pesquisar sobre algum projeto em especifico ? </h1>
                <input type="text" placeholder="Pesquisar Projetos" />
            </div>
            <div>
                <h1>Principais projetos </h1>
            </div>

            <div>
                <div>
                    <h1>mais repositorios</h1>
                </div>
                {/* <div className="repositorios">
                    {repository.slice(0, 8).map((item: any) => (
                        <div key={item.id}>

                            <div className="repo-card">
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div> */}
                <CardRepository />
            </div>
        </Container>
    );
};

export default Project;
