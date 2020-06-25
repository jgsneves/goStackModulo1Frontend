import React, {useState, useEffect} from 'react';
import api from './services/api';
import Header from './components/Header';
import './App.css';



function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, [])

    
    async function handleProjectButtonClick() {
        // setProjects([...projects, `Casar ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `Casar ${Date.now()}`,
            owner: 'João',
        });

        const project = response.data

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projetos" />

            

            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>

            <button onClick={handleProjectButtonClick}>
                Insira novo Projeto
            </button>
        </>
    );
}

export default App;