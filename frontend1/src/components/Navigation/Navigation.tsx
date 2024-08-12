import './Navigation.css'
import Arrow from '../../images/dashicons_arrow-down-alt2.svg'
function Navigation(): JSX.Element {
    return <nav id="nav">
        <h1>Shop</h1>
        <div>
          <h2>Home</h2>
          <img src={Arrow} alt="" />
          <h3>Shop</h3>
        </div>
    </nav>
}

export default Navigation;
