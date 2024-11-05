import Proptypes from "prop-types";
import { FaRegTimesCircle } from "react-icons/fa";

const CartCard = ({ product_image, title, price, description, onRemove }) => (
    <div className="flex justify-between items-center p-4 border-b rounded-lg bg-gray-50 shadow-sm space-y-2">
        <div className="flex gap-2">
            <figure>
                <img src={product_image} alt=""  className="h-20 object-cover"/>
            </figure>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-500">{description}</p>
                <p className="text-lg font-bold">Price: ${price}</p>
            </div>
        </div>
        <button onClick={onRemove} className="text-red-500">
            <FaRegTimesCircle className="text-2xl" />
        </button>
    </div>
);

CartCard.propTypes = {
    product_image: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    description: Proptypes.string.isRequired,
    onRemove: Proptypes.func.isRequired,
};

export default CartCard;