import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';
function Header() {
    const [isOpenMenu, setisOpenMenu] = useState(false)
    const cars = useSelector(selectCars)
    console.log(cars)
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" alt="Logo" />
            </a>
            <Menu>
                {
                    cars && cars.map((car,index) =>(
                        <a href={`#${car.replace(' ','-')}`} key={index}>{car}</a>
                    ))
                }
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setisOpenMenu(true)} />
            </RightMenu>
            <BurgerNav isOpen={isOpenMenu}>
                <CloseBtnWrap>
                    <CustomClose onClick={()=>setisOpenMenu(false)}/>
                </CloseBtnWrap>
                {
                    cars && cars.map((car,index) =>(
                        <li key={index}>
                            <a href="#">{car}</a>
                        </li>
                    ))
                }
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-In</a>
                </li>
                <li>
                    <a href="#">Cybertruck</a>
                </li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    position: fixed;
    min-height:60px;
    display:flex;
    align-items: center;
    padding: 0px 20px;
    justify-content: space-between;
    top:0;
    left:0;
    right:0;
    z-index:1;    /* height: ; */
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width:767px){
        display: none;
    }
    a{
        font-weight:600;
        padding: 0px 10px;
        text-transform: capitalize;
    }
`
const RightMenu = styled.div`
        display:flex;
        align-items: center;
        a{
            font-weight:600;
            padding: 0px 10px;
            text-transform: capitalize;
        }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.ul`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#fff;
    width: 300px;
    list-style-type: none;
    text-align:start;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${(props)=>props.isOpen ? 'translateX(0%)' : 'translateX(100%)'};
    transition: 0.2s ease-in transform;
    li{
        padding: 15px 0px;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
`
const CloseBtnWrap = styled.div`
    text-align:end;

`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`