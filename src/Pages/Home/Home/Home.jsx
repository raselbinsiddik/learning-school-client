import Popular from "../Popular";
import Banner from "../Banner";
import { Helmet } from "react-helmet-async";
import Instructor from "./Instructor";
import ExtraSection from "../ExtraSection";


const Home = () => {
    return (
        <div>
            <Helmet><title>Translang | Home</title></Helmet>
            <Banner></Banner>
            <Popular></Popular>
            <Instructor></Instructor>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;