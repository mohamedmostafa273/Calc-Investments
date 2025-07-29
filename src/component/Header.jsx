import Logo from "../assets/investment-calculator-logo.png"



function Header() {
    return (
        <header id="header">
            <img src={Logo} alt="investments" />
            <h1>Investments Calculator</h1>
        </header>
    )
}

export default Header;
