const Notification = (props) => {
  const { imageUrl, cardClassName, cardName } = props;
  return (
    <div className={`notification-card ${cardClassName}`}>
      <img className="icon" src={imageUrl} />
      <p className="message"> {cardName}</p>
    </div>
  );
};

const element = (
  <div className="notification-bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      cardClassName="card-1"
      cardName="Information Message"
    />
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      cardClassName="card-2"
      cardName="Success Message"
    />
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      cardClassName="card-3"
      cardName="Warning Message"
    />
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      cardClassName="card-4"
      cardName="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
