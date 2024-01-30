function Footer() {
  const hour = new Date().getHours();

  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer className="footer">
        {isOpen && (
          <div className="order">
            <p>
              We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </div>
  );
}

export default Footer;