import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Restromenu = () => {
    const { id } = useParams();
    const [menuCard, setMenuCard] = useState([]);
    const [aboutRestaurent, setAboutRestaurent] = useState({}); // Fix: initialize as an object

    useEffect(() => {
        getRestaurentmenu();
    }, []);

    async function getRestaurentmenu() {
        try {
            const api = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.737324&lng=77.090981&submitAction=ENTER&restaurantId=${id}`;
            const response = await fetch(api);
            const data = await response.json();

            const menuData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];  // Fix: Optional chaining and fallback
            const aboutRestro = data?.data?.cards[2]?.card?.card?.info || {};  // Fix: Optional chaining and fallback

            setAboutRestaurent(aboutRestro);
            setMenuCard(menuData);
        } catch (err) {
            console.error("Failed to fetch restaurant menu:", err);
        }
    }

    return (
        <div className="retaurentMenu">
            <div className="aboutRestro m-3 p-3 d-md-flex">
                {aboutRestaurent.cloudinaryImageId && (
                    <img className="aboutRestroImg" alt="restroimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + aboutRestaurent.cloudinaryImageId} />
                )}
                <div className="aboutRestroText ms-md-5 d-flex justify-content-around flex-column">
                    <h1 className="fw-bold"> {aboutRestaurent.name}</h1>
                    <p>{aboutRestaurent.cuisines?.join(", ")}</p>
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <span className="btn btn-success ">
                            {aboutRestaurent.avgRating}
                            <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
                        </span>
                        <span className="restrolocation ms-md-3">{aboutRestaurent.areaName}</span>
                        <span className="restrolocation fw-bold ms-md-3">{aboutRestaurent.costForTwoMessage}</span>
                    </div>
                </div>
            </div>
            {console.log(menuCard.length)}
            <div className="fw-bold text-center">
                we offer you {menuCard?.length} items 🔥🥗
            </div>
            {menuCard?.length > 0 ? (
                menuCard.map((menu) => (
                    <div className="menuCardbox mt-3 mb-2 d-flex justify-content-between p-2" key={menu.card.info.id}>
                        <div className="menuCardboxtext">
                        <p>{menu.card.info.name}</p>
                        <button className="btn btn-success">Add +</button>

                        </div>
                       
                        <img alt="menuItem" className="menuItems" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menu.card.info.imageId} />

                    </div>
                ))
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};

export default Restromenu;
