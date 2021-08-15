import CustomCarousel from '../Carousel/CustomCarousel';
import FirstBanner from '../FirstBanner/FirstBanner';
import IndustriesList from '../IndustriesList/IndustriesList';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Search from '../Search/Search';
import SecondBanner from '../SecondBanner/SecondBanner';
import Certificates from '../Сertificates/Certificates';
import Styles from './HomePage.css';
// import { Carousel } from 'react-bootstrap'

export default function HomePage() {
    return (
        <>
            <CustomCarousel />
            <Search />
            <ProductCarousel />
            <FirstBanner />
            <IndustriesList />
            <Certificates />
            <SecondBanner />
        </>
    )
}