import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
                title="Modal S"
                subTitle="Order Online for Touchless Delivery"
                leftButton="Custom order"
                rightButton="Existing inventory"
                bgImage="model-s.jpg"
            />
            <Section
                title="Modal Y"
                subTitle="Order Online for Touchless Delivery"
                leftButton="Custom order"
                rightButton="Existing inventory"
                bgImage="model-y.jpg"
            />
            <Section
                title="Modal 3"
                subTitle="Order Online for Touchless Delivery"
                leftButton="Custom order"
                rightButton="Existing inventory"
                bgImage="model-3.jpg"
            />
             <Section
                title="Modal X"
                subTitle="Order Online for Touchless Delivery"
                leftButton="Custom order"
                rightButton="Existing inventory"
                bgImage="model-x.jpg"
            />
            <Section
                title="Solar Panels"
                subTitle="Lowest Cost Solar Panels in America"
                leftButton="order now"
                rightButton="Learn more"
                bgImage="solar-panel.jpg"
            />
            <Section
                title="Solar Roof"
                subTitle="Produce Clean Energy From Your Roof"
                leftButton="order now"
                rightButton="Learn more"
                bgImage="solar-roof.jpg"
            />
            <Section
                title="Solar Roof"
                subTitle="Produce Clean Energy From Your Roof"
                leftButton="order now"
                rightButton="Learn more"
                bgImage="solar-roof.jpg"
            />
            <Section
                title="Accessories"
                subTitle="Produce Clean Energy From Your Roof"
                leftButton="order now"
                bgImage="accessories.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: 100vh;

`