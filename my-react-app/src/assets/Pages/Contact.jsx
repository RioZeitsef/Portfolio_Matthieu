// filepath: /home/matthieum/Portfolio_Matthieu-1/my-react-app/src/assets/Pages/Contact.jsx
import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper, Alert } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Styles from "../css/Pages.module.css"; // Assurez-vous que le chemin est correct

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        
        // Ici vous pouvez intégrer l'envoi réel du formulaire
        // (par exemple avec un service comme EmailJS, FormSpree, etc.)
        
        // Simulation d'envoi pour démonstration
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
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
                        component="h1" 
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
                    
                    {status === "success" && (
                        <Alert 
                            severity="success" 
                            sx={{ mb: 4 }}
                        >
                            Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.
                        </Alert>
                    )}
                    
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                required
                                label="Nom"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined"
                                InputLabelProps={{ style: { color: '#DEB992' } }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#DEB992' },
                                        '&:hover fieldset': { borderColor: '#DEB992' },
                                        '&.Mui-focused fieldset': { borderColor: '#DEB992' },
                                    },
                                    '& .MuiInputBase-input': { color: 'white' }
                                }}
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
                                InputLabelProps={{ style: { color: '#DEB992' } }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#DEB992' },
                                        '&:hover fieldset': { borderColor: '#DEB992' },
                                        '&.Mui-focused fieldset': { borderColor: '#DEB992' },
                                    },
                                    '& .MuiInputBase-input': { color: 'white' }
                                }}
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
                                InputLabelProps={{ style: { color: '#DEB992' } }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#DEB992' },
                                        '&:hover fieldset': { borderColor: '#DEB992' },
                                        '&.Mui-focused fieldset': { borderColor: '#DEB992' },
                                    },
                                    '& .MuiInputBase-input': { color: 'white' }
                                }}
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