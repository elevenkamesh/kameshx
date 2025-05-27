import { useTranslation } from 'react-i18next';
import GetImage from '../utils/images.jsx';

const images = GetImage();

const Skills = () => {
    const { t } = useTranslation();

    const skills = [
        {
            image: images.js,
            title: 'JavaScript',
            description: 'programing language'
        },
        {
            image: images.ts,
            title: 'TypeScript',
            description: 'wrapper of javaScript'
        },
        {
            image: images.golang,
            title: 'Golang',
            description: 'programing language'
        },
        {
            image: images.react,
            title: 'React',
            description: 'frontend library'
        },
        {
            image: images.node,
            title: 'Node Js',
            description: 'JS runtime'
        },
        {
            image: images.mongo,
            title: 'MongoDB',
            description: 'Database'
        },
        {
            image: images.posgress,
            title: 'PostgreSQL',
            description: 'Database'
        },
        {
            image: images.aws,
            title: 'AWS',
            description: 'cloud Provider'
        },
        {
            image: images.git,
            title: 'Git',
            description: 'version control'
        },
        {
            image: images.docker,
            title: 'Docker',
            description: 'containerization'
        },
        {
            image: images.kubernetes,
            title: 'K8s',
            description: 'orchestration'
        },
        {
            image: images.bash,
            title: 'Bash',
            description: 'scripting'
        }
    ];

    return (
        <div className="container" id="skills">
            <h1 className="section-title text-center mb-5">{t("heading.skills")}</h1>

            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
                {skills.map((skill, index) => (
                    <div className="col" key={index}>
                        <div className="skill-card h-100 d-flex flex-column align-items-center p-3 text-center">
                            <img 
                                src={skill.image} 
                                alt={skill.title}
                                className="skill-icon mb-3" 
                                width="60" 
                                height="60"
                                loading="lazy"
                            />
                            <h3 className="skill-title mb-1">{skill.title}</h3>
                            {/* {skill.description && (
                                <p className="skill-description small text-muted mb-0">
                                    {skill.description}
                                </p>
                            )} */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;