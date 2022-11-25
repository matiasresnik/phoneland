import { Bag } from "react-bootstrap-icons";
import './cartwidget.css'; 

const CartWidget = () => {
    return (
        <div>
            <span className="cart-widget__bag">
                <Bag />
            </span>
            <span className="cart-widget__number">
                1
            </span>
        </div>
    )
};

export default CartWidget;