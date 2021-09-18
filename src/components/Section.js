import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title,subTitle,leftButton,rightButton,bgImage}) {
    return (
        <Wrap id={title.replace(' ','-')} bgImage={bgImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        { rightButton && 
                            <RightButton>
                                {rightButton}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height: 100vh;
    background: url('/images/${props=>props.bgImage}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    padding-top:15vh;
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
        flex-direction: column;

    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    color: #fff;
    height: 40px;
    width:256px;
    border-radius: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
`
const RightButton = styled(LeftButton)`
    margin-right: 0px;
    background: white;
    opacity: 0.65;
    color: #000;
    margin-bottom: 0;

`
const Buttons = styled.div``

const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    animation: Updown infinite 1.5s;
`