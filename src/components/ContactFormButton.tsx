const ContactFormButton = ({
    type,
    disabled,
    label,
  }) => {
    return (
      <button
        type={type}
        disabled={disabled}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
      >
        {label}
      </button>
    );
  };
  export default ContactFormButton