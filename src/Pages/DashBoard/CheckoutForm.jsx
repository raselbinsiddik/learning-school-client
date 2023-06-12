
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiouseScure";
import Swal from "sweetalert2";




const CheckoutForm = ({book, price}) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = UseAxiosSecure();

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [price, axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        console.log(card);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('errror', error);
            setCardError(error.message)
        }
        else {
            setCardError('');
            console.log("aaaa", paymentMethod);
        }
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log("intent", paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                date: new Date(),
                bookItems: book.itemId,
                ItemsId: book._id,
                status: 'service pending',
                className: book.language

            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'your Register successfull',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                    }
                )
        }

    }


    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {/*  */}
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>

                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-400 ml-8">{cardError}</p>}

            {transactionId && <p className="text-green-600">transaction complete with transactioId:{transactionId}</p>}

        </>
    );
};

export default CheckoutForm;