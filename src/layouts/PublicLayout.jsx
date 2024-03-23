import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import upsideArrow from '../assets/images/upsideArrow.svg';
import './publicLayout.scss';
import { Button } from "@mui/material";
const PublicLayout = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return <>
        <HeaderTwo />
        {children}
        <div style={{ position: 'relative' }}>
            <Button
                className={`back-to-top-button ${isVisible ? 'visible' : 'hidden'}`}
                onClick={scrollToTop}
                variant="standard"
            >
                <img src={upsideArrow} alt='upsideArrow' />
            </Button>
        </div>
        <Footer />
    </>
}

export default PublicLayout;