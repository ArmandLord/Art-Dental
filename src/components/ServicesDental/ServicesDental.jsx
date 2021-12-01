import { MarginServicesDental, ServicesDentalWrapper } from './ServicesDental.styled'

const ServicesDental = () => {
    return (
        <ServicesDentalWrapper>
            <MarginServicesDental>
                <header>
                    <h2>Conoce nuestros servicios</h2>
                </header>
                <section>
                    <span>
                        <h3>Resinas alta estética</h3>
                    </span>
                    <span>
                        <h3>Amalgamas</h3>
                    </span>
                    <span>
                        <h3>Limpieza con ultrasonido</h3>
                    </span>
                    <span>
                        <h3>Blanqueamiento</h3>
                    </span>
                </section>
            </MarginServicesDental>
        </ServicesDentalWrapper>
    )
}

export default ServicesDental
