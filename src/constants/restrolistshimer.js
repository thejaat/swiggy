const ShimmerCard = () => {
    return (
        <div className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line"></div>
        </div>
    );
};

const ShimmerList = () => {
    // Generate placeholders for multiple cards
    return (
        <div className="shimmer-list">
            {Array(24) // Show 10 shimmer cards
                .fill("")
                .map((_, index) => (
                    <ShimmerCard key={index} />
                ))}
        </div>
    );
};

export default ShimmerList
