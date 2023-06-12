import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useBooked from "../../hooks/useBooked";
const stripPromise = loadStripe(import.meta.env.VITE_Payment);

const Payment = () => {
    const [book] = useBooked();

    const firstBookedItem = book.length > 0 ? book[0] : null;
    const price = firstBookedItem ? firstBookedItem.price : null;
    return (
        <div className="w-full">
            <SectionTitle subHeading={'please processs the payment'}
                heading={'payment'}></SectionTitle>

            <Elements stripe={stripPromise}><CheckoutForm book={book} price={price}></CheckoutForm></Elements>
        </div>
    );
};

export default Payment;