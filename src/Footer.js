import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();

  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </div>
  );
}

export default Footer;
