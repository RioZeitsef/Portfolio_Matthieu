import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Box, Paper, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Styles from "../css/Pages.module.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        firstName: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        // Initialisation d'EmailJS
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setError(null);
        
        // Configuration EmailJS
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        
        // Paramètres pour l'envoi d'e-mail
        const templateParams = {
            from_name: `${formData.firstName} ${formData.name}`,
            from_email: formData.email,
            message: formData.message,
            to_email: import.meta.env.VITE_EMAIL
        };
        
        try {
            // Nouvelle syntaxe pour @emailjs/browser
            const result = await emailjs.send(
                serviceId, 
                templateId, 
                templateParams
            );
            
            console.log('Email envoyé avec succès!', result.text);
            setStatus("success");
            setFormData({ name: "", firstName: "", email: "", message: "" });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            setStatus("error");
            setError("Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.");
        }
    };
    
    // Style commun pour tous les champs de texte
    const textFieldSx = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#DEB992' },
            '&:hover fieldset': { borderColor: '#DEB992' },
            '&.Mui-focused fieldset': { borderColor: '#DEB992' },
        },
        '& .MuiInputBase-input': { 
            color: 'white' 
        },
        '& .MuiInputLabel-root': { 
            color: '#DEB992' 
        },
        '& .MuiInputLabel-root.Mui-focused': { 
            color: '#DEB992' 
        }
    };
    
    return (
        <div className={Styles.homeContainer}>
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 4, 
                        backgroundColor: '#2c3e50', 
                        borderRadius: '8px' 
                    }}
                >
                    <Typography 
                        variant="h3" 
                        component="h2" 
                        gutterBottom 
                        sx={{ 
                            color: '#DEB992', 
                            borderBottom: '2px solid #DEB992',
                            paddingBottom: 2,
                            marginBottom: 4
                        }}
                    >
                        Contactez-moi
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: '#DEB992', mb: 4 }}
                        >
                        Vous avez un projet, une offre d'emploi ou simplement une question ? Je serais ravi d'en discuter et d'explorer nos possibilités de collaboration.
                    </Typography>
                    
                    {status === "success" && (
                        <Alert 
                            severity="success" 
                            sx={{ mb: 4 }}
                        >
                            Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.
                        </Alert>
                    )}

                    {status === "error" && (
                        <Alert 
                            severity="error" 
                            sx={{ mb: 4 }}
                        >
                            {error}
                        </Alert>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 2 }}>
                            <TextField
                                required
                                label="Nom"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                sx={textFieldSx}
                            />

                            <TextField
                                required
                                label="Prénom"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                sx={textFieldSx}
                            />    
                            
                            <TextField
                                required
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                sx={textFieldSx}
                            />
                            
                            <TextField
                                required
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                rows={6}
                                variant="outlined"
                                sx={textFieldSx}
                            />
                            
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={status === "sending"}
                                endIcon={<SendIcon />}
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#DEB992',
                                    color: '#061624',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#c9a57e',
                                    },
                                }}
                            >
                                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default Contact;