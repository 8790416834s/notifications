const Notification = (props) => {
  const { imageUrl, text, box, color, size } = props;
  return (
    <div className={box}>
      <img src={imageUrl} className={size} />
      <p className={color}>{text}</p>
    </div>
  );
};

const element = (
  <div>
    <h1 className="heading">Notifications</h1>
    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      size="image"
      text="Information Message"
      color="text-message"
      box="information-box"
    />

    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      size="image"
      text="Success Message"
      color="text-message"
      box="success-box"
    />

    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      size="image"
      text="Warning Message"
      color="text-message"
      box="warning-box"
    />

    <Notification
      imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      size="image"
      text="Error Message"
      color="text-message"
      box="error-box"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
