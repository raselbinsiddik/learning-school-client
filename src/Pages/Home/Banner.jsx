import learn1 from '../../assets/learn1.jpg'
import learn2 from '../../assets/learn2.jpg'
import learn3 from '../../assets/learn3.jpg'
import learn4 from '../../assets/learn4.jpg'

const Banner = () => {
    
    return (
        <div>
            <div className="carousel w-full h-[600px]" >
                <div id="slide1" className="carousel-item relative w-full">
                    
                    <img src={learn1} className="w-full" />
                    <div className="absolute roounded-xl flex items-center h-full bg-gradient-to-r from-[#15151591] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-2/2'>
                            <h1 className="text-white font-bold text-7xl">Your profesional Translation Services</h1>
                            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsa a, ratione perspiciatis distinctio est. Quis aspernatur non ratione eligendi esse dicta accusantium est ut atque nihil blanditiis, quibusdam quasi.</p>
                            <button className="btn btn-primary mt-10">Start Translation</button>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                   
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={learn2} className="w-full" />
                    <div className="absolute roounded-xl flex items-center h-full bg-gradient-to-r from-[#15151591] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-2/2'>
                            <h1 className="text-white font-bold text-7xl">Open Your Bussiness to the World</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde maiores sapiente fuga necessitatibus deserunt quas vel, aliquid dolore dolor quae expedita quaerat nemo vero itaque eligendi iste quasi. Nobis!</p>
                            <button className="btn btn-primary mt-10">Start Translation</button>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={learn3} className="w-full" />
                    <div className="absolute roounded-xl flex items-center h-full bg-gradient-to-r from-[#15151591] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-2/2'>
                            <h1 className="text-white font-bold text-7xl">Your profesional Translation Services</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero quisquam consectetur et reiciendis vel sunt ex, accusantium ab? Aperiam dolorum inventore libero. Quidem necessitatibus quos laudantium hic consectetur sequi!</p>
                            <button className="btn btn-primary mt-10">Start Translation</button>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={learn4} className="w-full" />
                    <div className="absolute roounded-xl flex items-center h-full bg-gradient-to-r from-[#15151591] to-[rgba(21,21,21,0)]">
                        <div className='text-white  space-y-7 pl-12 w-2/2'>
                            <h1 className="text-white font-bold text-7xl">Your Life Must Esier in Our profesional Translation Services</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga enim blanditiis repellendus saepe itaque excepturi, fugit magnam porro? Labore obcaecati illum nemo consequatur iste fuga illo provident eius quos.</p>
                            <button className="btn btn-primary mt-10">Start Translation</button>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            </div>
           
    );
};

export default Banner;