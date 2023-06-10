

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center ">
            <p className="text-yellow-600 mb-2">---- {subHeading} ----</p>
            <p className="text-3xl uppercase border-y p-y"> {heading}</p>
    </div>
    );
};

export default SectionTitle;