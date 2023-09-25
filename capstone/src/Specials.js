function Specials() {
    return (
        <section className="Specials">
            <div className="SpecialsTopWrapper">
                <h2 className="SpecialsPromoText">This Week's Specials</h2>
                <button className="stdButton OnlineOrderBtn">Online Menu</button>
            </div>
            <div className="SpecialCardWrapper">
                <div className="Card">
                    <img src = '/greekSalad.jpg'></img>
                    <div className="CardTopLine">
                        <h3 className="dishName">Greek salad</h3>
                        <h4 className="dishPrice">$12.99</h4>
                    </div>
                    <p className="dishDescription">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <div className="CardBotLine">
                        <h4 className="orderDelivery">Order a delivery</h4>
                        <h4 className="deliveryIcon"></h4>
                    </div>
                </div>
                
                <div className="Card">
                <img src = "/bruchetta.svg"></img>
                    <div className="CardTopLine">
                        <h3 className="dishName">Bruchetta</h3>
                        <h4 className="dishPrice">$5.99</h4>
                    </div>
                    <p className="dishDescription">Our Bruchetta is made with grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                    <div className="CardBotLine">
                        <h4 className="orderDelivery">Order a delivery</h4>
                        <h4 className="deliveryIcon"></h4>
                    </div>
                </div>
                
                <div className="Card">
                <img src = "/lemon dessert.jpg"></img>
                    <div className="CardTopLine">
                        <h3 className="dishName">Lemon Dessert</h3>
                        <h4 className="dishPrice">$5.00</h4>
                    </div>
                    <p className="dishDescription">This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div className="CardBotLine">
                        <h4 className="orderDelivery">Order a delivery</h4>
                        <h4 className="deliveryIcon"></h4>
                    </div>
                </div>

            </div>
        </section>
    )    
}

export default Specials