import SectionTitle from "../../SectionTitle/SectionTitle";
import class1 from '../../assets/class1.jpg'
import class2 from '../../assets/class2.jpg'
import class3 from '../../assets/class3.jpg'
import class4 from '../../assets/class4.jpg'
import class5 from '../../assets/learn3.jpg'
import class6 from '../../assets/learn4.jpg'

const ExtraSection = () => {
    return (
        <div className="my-8">
            <SectionTitle subHeading={'course'} heading={'Our course start in this ruls'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={class1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course: English</h2>
                        <p className="card-title">1st jun to 31th Aug</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={class2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Course: Korean</h2>
                        <p className="card-title">Date: 1st jun to 31th sept</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={class3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course: Frence</h2>
                        <p className="card-title">Date: 1st jun to 31th Aug</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={class4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course: Latins</h2>
                        <p className="card-title">Date: 1st jun to 31th Dec</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={class5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course: Chainise</h2>
                        <p className="card-title">Date: 1st jun to 31th Dec</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">start Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={class6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Course: Japanis</h2>
                        <p className="card-title">Date: 1st jun to 31th Oct</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">start Now</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default ExtraSection;