const ContactFormInput = ({
    id,
    name,
    label,
    onChange,
  }) => {
    return (
      <div className="my-1">
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          name={name}
          onChange={onChange}
          className="w-full rounded-md"
        />
      </div>
    );
  };
  
export default ContactFormInput