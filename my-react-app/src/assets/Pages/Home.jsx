import React from "react";
import { Link } from "react-router"; 
import Button from "@mui/material/Button"; 
import Box from "@mui/material/Box";
import Styles from "../css/Pages.module.css";
import DescriptionCard from "../components/DescriptionCard";
import ProjectCard from "../components/ProjectCards";
import SkillsSection from "../components/SkillsCard";
import HarleyToCode from "/images/Harley_to_code.webp";
import SkillsAccordion from "../components/SkillsAccordion";
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Matthieu Metz",
        "url": "https://matthieumetz.netlify.app",
        "sameAs": [
        "https://www.linkedin.com/in/matthieu-metz-38376b1b1/",
        "https://github.com/RioZeitsef"
        ],
        "jobTitle": "Développeur Web",
        "worksFor": {
        "name": "In job"
        },
        "description": "Développeur web spécialisé en React, JavaScript et technologies front-end modernes."
    };
    return (
        
        <div className={Styles.homeContainer}>
            <Helmet>
                {/* Balises Meta de base */}
                <title>Matthieu Metz | Développeur Web | Portfolio</title>
                <meta 
                    name="description" 
                    content="Portfolio de Matthieu Metz, développeur web spécialisé en React, JavaScript et technologies front-end modernes. Découvrez mes projets et compétences." />
                
                {/* Balises Meta pour les réseaux sociaux - Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://matthieumetz.netlify.app/" />
                <meta property="og:title" content="Matthieu Metz | Développeur Web Portfolio" />
                <meta property="og:description" content="Portfolio professionnel de Matthieu Metz présentant mes compétences en développement web, mes projets et mon parcours." />

                {/* Balises Meta pour Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="matthieumetz.netlify.app" />
                <meta name="twitter:title" content="Matthieu Metz | Développeur Web Portfolio" />
                <meta name="twitter:description" content="Portfolio professionnel de Matthieu Metz présentant mes compétences en développement web, mes projets et mon parcours." />
                
                {/* Balises Meta pour les moteurs de recherche */}
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="développeur web, front-end, react, javascript, portfolio, développeur fullstack, UI/UX, développeur web strasbourg" />
                <meta name="author" content="Matthieu Metz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            <div className={Styles.home}>
                <DescriptionCard 
                    title={<span>Du commerce au développement</span>}
                    titleVariant="h3"
                    description="Fort d'une expérience de 6 ans dans le domaine commercial, j'ai réorienté ma carrière vers l'intégration web après avoir suivi une formation spécialisée. Aujourd'hui, je combine mes compétences techniques en développement front-end avec ma vision commerciale pour créer des interfaces web performantes et orientées utilisateur. Passionné par l'intelligence artificielle, je me tiens constamment informé des dernières avancées dans ce domaine, tant sur les aspects pratiques d'utilisation que sur les développements techniques, notamment autour des systèmes d'agents autonomes. Cette double expertise me permet d'anticiper les tendances du web et d'intégrer des solutions innovantes à mes projets.."
                    descriptionVariant="body1"
                    width="100%"
                    showBullet={false}
                    cardStyles={{ 
                        backgroundColor: '#061624', 
                        borderRadius: '8px',
                        color: 'white',
                        paddingTop: '80px', 
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
            <div className={Styles.project}>
                <ProjectCard /> 
            </div>
            <div className={Styles.skills}>
                <SkillsSection />
            </div>
            <div className={Styles.home}>
                <DescriptionCard 
                    title={<span>Du web Vers l'IA</span>}
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
            <div className={Styles.iaskills}>
                 <SkillsAccordion />   
            </div>
            <div className={Styles.home}>
                <DescriptionCard 
                    title={<span>Ouvert aux opportunités</span>}
                    titleVariant="h4"
                    description="Un projet ? une idée ? Je suis toujours à la recherche de nouvelles opportunités d'apprentissage où de partage de connaissances !"
                    descriptionVariant="body1"
                    width="100%"
                    showBullet={false}
                    cardStyles={{ 
                        backgroundColor: '#061624', 
                        borderRadius: '8px',
                        color: 'white', 
                        width: '100%'
                    }}
                    titleStyles={{ 
                        fontSize: '2rem',
                        textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                        borderBottom: '2px solid #DEB992',
                        paddingBottom: '10px',
                        marginBottom: '20px'
                    }}
                    additionalContent={
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            mt: 4 
                        }}>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                sx={{ 
                                    backgroundColor: '#DEB992',
                                    color: '#061624',
                                    fontWeight: 'bold',
                                    padding: '10px 30px',
                                    marginBottom: '20px',
                                    fontSize: '1.1rem',
                                    '&:hover': {
                                        backgroundColor: '#c9a57e',
                                    },
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                                }}
                            >
                                Me Contacter
                            </Button>
                        </Box>
                    }
                />
            </div>
        </div>
    );
}
export default Home;