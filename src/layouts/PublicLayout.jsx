
import Footer from "../components/Footer";
import HeaderTwo from "../components/HeaderTwo";
import Header from '../components/Header';
const PublicLayout = ({ children }) => {
    return <>
        <HeaderTwo />
        {children}
        <Footer />
    </>
}

export default PublicLayout;