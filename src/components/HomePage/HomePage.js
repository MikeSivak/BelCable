import CustomCarousel from '../Carousel/CustomCarousel';
import FirstBanner from '../FirstBanner/FirstBanner';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import Search from '../Search/Search';
import Styles from './HomePage.css';
// import { Carousel } from 'react-bootstrap'

export default function HomePage() {
    return (
        <>
            <CustomCarousel />
            <Search />
            <ProductCarousel />
            <FirstBanner />
        </>
    )
}