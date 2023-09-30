const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: {
  label: string;
  iconUrl: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: string;
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${textColor ? textColor : "text-white"} ${
        borderColor ? borderColor : "border-coral-red"
      } rounded-full ${fullWidth ? "w-full" : ""}`}
    >
      {label}
      <img
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
