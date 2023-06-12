import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useBooked from "../../hooks/useBooked";
import { useParams } from "react-router-dom";
const stripPromise = loadStripe(import.meta.env.VITE_Payment);

const Payment = () => {
    const [book] = useBooked();
    const { id } = useParams();

    const firstBookedItem = book.find(item=>item._id==id)
    const price = firstBookedItem ? firstBookedItem.price : 1;
    return (
        <div className="w-full">
            <SectionTitle subHeading={'please processs the payment'}
                heading={'payment'}></SectionTitle>

            <Elements stripe={stripPromise}><CheckoutForm book={firstBookedItem} price={price}></CheckoutForm></Elements>
        </div>
    );
};

export default Payment;