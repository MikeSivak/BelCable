import Carousel from './Carousel'

export default function TrustList() {
    return (
        <>
            <div className='trust-list-container'>
                <div className='trust-list-label'>
                    <p>НАМ ДОВЕРЯЮТ</p>
                </div>
                <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                    <Carousel show={6}>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                        <div>
                            <div className='trust-list-image-block'>
                                <img src="gazprom.png" alt="placeholder" className='trust-list-image' />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}