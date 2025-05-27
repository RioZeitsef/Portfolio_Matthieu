import React from "react";
import Styles from "../css/Pages.module.css";
import DescriptionCard from "../components/DescriptionCard";
import ProjectCard from "../components/ProjectCards";
import SkillsSection from "../components/SkillsCard";
import HarleyToCode from "/images/Harley_to_code.webp";
import SkillsAccordion from "../components/SkillsAccordion";

const Home = () => {
    return (
        <div className={Styles.homeContainer}>
            <div className={Styles.home}>
                <DescriptionCard 
                    title={<span>Du commerce <strong>au développement</strong></span>}
                    titleVariant="h3"
                    description="Fort d'une expérience de 6 ans dans le domaine commercial, j'ai réorienté ma carrière vers l'intégration web après avoir suivi une formation spécialisée. Aujourd'hui, je combine mes compétences techniques en développement front-end avec ma vision commerciale pour créer des interfaces web performantes et orientées utilisateur. Passionné par l'intelligence artificielle, je me tiens constamment informé des dernières avancées dans ce domaine, tant sur les aspects pratiques d'utilisation que sur les développements techniques, notamment autour des systèmes d'agents autonomes. Cette double expertise me permet d'anticiper les tendances du web et d'intégrer des solutions innovantes à mes projets.."
                    descriptionVariant="body1"
                    width="100%"
                    showBullet={false}
                    cardStyles={{ 
                        backgroundColor: '#061624', 
                        borderRadius: '8px',
                        color: 'white', 
                    }}
                    titleStyles={{ 
                        fontSize: '2rem',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                        borderBottom: '2px solid #DEB992',
                        paddingBottom: '10px',
                        marginBottom: '20px'
                    }}
                    img={HarleyToCode}
                    imgHeight={300}
                    imgAlt="Harley Davidson to Code"
                    hideImageOnMobile={true}
                />
            </div>
            <div className="projects">
                <ProjectCard /> 
            </div>
            <div>
                <SkillsSection />
            </div>
            <div className={Styles.home}>
                <DescriptionCard 
                    title={<span>Du web <strong>Vers l'IA</strong></span>}
                    titleVariant="h4"
                    description="Durant mon alternance j'ai eu la chance de pouvoir travailler sur divers projets de recherche documentaire grâce à un LLM personnalisé. Enfin, j'ai pu piloter un projet de R&D autour des LLM et des agents autonomes. J'ai ainsi pu développer un agent autonome capable de naviguer sur le web, d'interagir avec des sites et de récupérer des informations pertinentes pour répondre à des requêtes spécifiques. Ce projet m'a permis d'explorer les capacités des LLM dans un contexte pratique et de comprendre comment les intégrer efficacement dans des applications réelles."
                    descriptionVariant="body1"
                    width="100%"
                    showBullet={false}
                    cardStyles={{ 
                        backgroundColor: '#061624', 
                        borderRadius: '8px',
                        color: 'white', 
                    }}
                    titleStyles={{ 
                        fontSize: '2rem',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                        borderBottom: '2px solid #DEB992',
                        paddingBottom: '10px',
                        marginBottom: '20px'
                    }}
                />
            </div>
            <div>
                 <SkillsAccordion />   
            </div>    
        </div>
    );
}
export default Home;