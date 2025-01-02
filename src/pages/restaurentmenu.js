import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Restromenu = () => {
    const { id } = useParams();
    const [menuCard, setMenuCard] = useState([]); // State to store menu items
    const [aboutRestaurent,setAboutRestaurent] = useState("")

    useEffect(() => {
        getRestaurentmenu();
    }, []); // Run only once when the component mounts

    async function getRestaurentmenu() {
        try {
            const api = `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=28.737324&lng=77.090981&submitAction=ENTER&restaurantId=${id}`;
            const response = await fetch(api);
            const data = await response.json();
            const menuData = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
            const aboutRestro = data.data.cards[2].card.card.info
           setAboutRestaurent(aboutRestro)
            setMenuCard(menuData); 
        } catch (err) {
            console.error("Failed to fetch restaurant menu:", err);
        }
    }

    return (
        <div>
            <h1>Restaurant name: {aboutRestaurent.name}</h1>
            <img alt="restroimg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + aboutRestaurent.cloudinaryImageId} />
            <p>{aboutRestaurent.areaName}</p>
            <p>{aboutRestaurent.avgRating} Stars</p>
            {menuCard.length > 0 ? (
                menuCard.map((menu) => (
                    <div key={menu.card.info.id}>
                        <img alt="menuItem" className="menuItems" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menu.card.info.imageId} />
                        <p>{menu.card.info.name}</p>
                    </div>
                ))
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};

export default Restromenu;
