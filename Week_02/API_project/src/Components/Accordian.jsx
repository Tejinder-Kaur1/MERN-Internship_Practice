const Accordian = ({ section, user }) => {
  // console.log(section.id);
  const renderContent = () => {
    switch (section.id) {
      case "address":
        return (
          <>
            <h4>Address is: {user?.address.address}</h4>
            <h4>City is: {user?.address.city}</h4>
            <h4>State is: {user?.address.state}</h4>
            <h4>Postal Code is: {user?.address.postalCode}</h4>
          </>
        );
    }
    switch (section.id) {
      case "company":
        return (
          <>
            <h4>Department is: {user?.company.department}</h4>
            <h4>Name is: {user?.company.name}</h4>
            <h4>Title is: {user?.company.title}</h4>
          </>
        );
    }
    switch (section.id) {
      case "bank":
        return (
          <>
            <h4>Card Number is: {user?.bank.cardNumber}</h4>
            <h4>Card Type is: {user?.bank.cardType}</h4>
            <h4>Card expiry is: {user?.bank.cardExpire}</h4>
          </>
        );
    }
  };

  console.log(section);
  console.log(user.id);

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${section.id}-${user.id}`}
            aria-expanded="false"
            aria-controls={`${section.id}-${user.id}`}
          >
            {section.content}
          </button>
        </h2>
        <div
          id={`${section.id}-${user.id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`bank-heading-${user.id}`}
          data-bs-parent={`#${section.id}-${user.id}`}
        >
          <div className="accordion-body visible">{renderContent()}</div>{" "}
        </div>
      </div>
    </>
  );
};

export default Accordian;
