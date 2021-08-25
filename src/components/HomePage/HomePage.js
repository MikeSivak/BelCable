import CustomCarousel from './Carousel/CustomCarousel';
import FirstBanner from './FirstBanner/FirstBanner';
import IndustriesList from './IndustriesList/IndustriesList';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Search from './Search/Search';
import SecondBanner from './SecondBanner/SecondBanner';
import TrustList from './TrustList/TrustList';
import Certificates from './Сertificates/Certificates';
import Styles from './HomePage.css';

export default function HomePage() {
    return (
        <>
            <div className='HomePage'>
                <CustomCarousel />
                <Search />
                <ProductCarousel />
                <FirstBanner />
                <IndustriesList />
                <Certificates />
                <SecondBanner />
                <TrustList />
            </div>
        </>
    )
}