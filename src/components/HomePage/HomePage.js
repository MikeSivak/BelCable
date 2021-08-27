import CustomCarousel from './Carousel/CustomCarousel';
import FirstBanner from './FirstBanner/FirstBanner';
import IndustriesList from './IndustriesList/IndustriesList';
import ProductCarousel from './ProductCarousel/ProductCarousel';
import Search from './Search/Search';
import SecondBanner from './SecondBanner/SecondBanner';
import Certificates from './Сertificates/Certificates';
import Styles from './HomePage.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';


export default function HomePage() {
    const responsive = {
        maxLargeDesktop: {
            breakpoint: { max: 3000, min: 1920 },
            items: 10
        },
        middleLargeDesktop: {
            breakpoint: { max: 1920, min: 1640 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 1640, min: 1400 },
            items: 5
        },
        notebook: {
            breakpoint: { max: 1400, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 864 },
            items: 3
        },
        middleMobile: {
            breakpoint: { max: 864, min: 644 },
            items: 2
        },
        smallMobile: {
            breakpoint: { max: 644, min: 0 },
            items: 1
        }
    };

    const arrowStyle = {
        background: "#E74137",
        color: "black",
        marginTop: '-60px'
    };


    const trustList = [
        'trust1.png',
        'trust2.png',
        'trust3.png',
        'trust4.png',
        'trust5.png',
        'trust6.png',
    ]

    function CustomRightArrow({ onClick }) {
        return (
            <button
                style={arrowStyle}
                onClick={onClick}
                aria-label="Go to next slide"
                className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
            />
        );
    }

    function CustomLeftArrow({ onClick }) {

        return (
            <button
                style={arrowStyle}
                onClick={onClick}
                aria-label="Go to previous slide"
                className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
            />
        );
    }

    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className="carousel-button-group">
                <CustomLeftArrow
                    onClick={() => previous()}
                />
                <CustomRightArrow onClick={() => next()} />
            </div>
        );
    };


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
                <div className='trust-carousel-contaier'>
                    <div className='trust-label'>
                        НАМ ДОВЕРЯЮТ
                    </div>
                    <Carousel
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        renderButtonGroupOutside={true}
                        customButtonGroup={<ButtonGroup />}
                        responsive={responsive}
                        arrows={false}
                        className='trust-carousel'
                    >
                        {trustList.map((trust) => (
                            <div style={{ textAlign: 'center' }}>
                                <img src={trust} className='image' alt="placeholder" />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}