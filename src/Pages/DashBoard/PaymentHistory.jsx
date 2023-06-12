import { Helmet } from "react-helmet";
import UsePaymentHistory from "./UsePaymentHistory";
import SectionTitle from "../../SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const [payment] = UsePaymentHistory();
    console.log(payment);
    return (
        <div className="overflow-x-auto  w-full">
            <Helmet>
                <title>Translang | my enroll class</title>
            </Helmet>
            <SectionTitle subHeading={'history'} heading={'our payment history'}></SectionTitle>
            <table className="table font-bold">
                {/* head */}

                <thead className="font-bold text-xl">
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        payment.map((pay, index) =>
                            <tr key={pay._id}>
                                <th>{index + 1}</th>
                                <td>{pay.date}</td>
                                <td>{pay.className}</td>
                                <td>${pay.fee}</td>
                                <td>{pay.email}</td>

                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;