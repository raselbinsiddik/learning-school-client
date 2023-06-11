import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useBooked from "../../hooks/useBooked";
const stripPromise = loadStripe(import.meta.env.VITE_payment_getway_pk);

const Payment = () => {
    const [book] = useBooked();
    return (
        <div>
            <SectionTitle subHeading={'please processs the payment'}
                heading={'payment'}></SectionTitle>

            <Elements stripe={stripPromise}><CheckoutForm cart={book} ></CheckoutForm></Elements>
        </div>
    );
};

export default Payment;