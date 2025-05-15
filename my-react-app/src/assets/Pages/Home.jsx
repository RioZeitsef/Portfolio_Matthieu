import React from "react";
import Styles from "../css/Pages.module.css";
import DescriptionCard from "../components/DescriptionCard";
import ProjectCard from "../components/ProjectCards";
import SkillsSection from "../components/SkillsCard";

const Home = () => {
    return (
        <div className={Styles.homeContainer}>
            <div className="home">
                <DescriptionCard 
                    title={<span>Du commerce <strong>au développement</strong></span>}
                    titleVariant="h4"
                    description="Fort d'une expérience de 6 ans dans le domaine commercial, j'ai réorienté ma carrière vers l'intégration web après avoir suivi une formation spécialisée. Aujourd'hui, je combine mes compétences techniques en développement front-end avec ma vision commerciale pour créer des interfaces web performantes et orientées utilisateur. Passionné par l'intelligence artificielle, je me tiens constamment informé des dernières avancées dans ce domaine, tant sur les aspects pratiques d'utilisation que sur les développements techniques, notamment autour des systèmes d'agents autonomes. Cette double expertise me permet d'anticiper les tendances du web et d'intégrer des solutions innovantes à mes projets.."
                    descriptionVariant="body1"
                    width="100%"
                    showBullet={false}
                    cardStyles={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
                />
            </div>
            <div className="projects">
                <h2>Mes Projets</h2>
                <ProjectCard /> 
            </div>
            <div>
                <SkillsSection />
            </div>
                        <div className="home">
                <DescriptionCard 
                    title={<span>Du web <strong>Vers l'IA</strong></span>}
                    titleVariant="h4"
                    description="Durant mon alternance j'ai eu la chance de pouvoir travailler sur un projet de recherche et développement autour de l'IA. J'ai pu découvrir les systèmes d'agents autonomes et leur fonctionnement. J'ai également pu mettre en place un système de gestion de version pour le code source du projet, ce qui m'a permis de mieux comprendre les enjeux de la gestion de code dans un environnement collaboratif."
                    descriptionVariant="body1"
                    width="100%"
                    showBullet={false}
                    cardStyles={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
                />
            </div>    
        </div>
    );
}
export default Home;