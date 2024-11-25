
export const Button = ({
    children,
    className = "",
    ...props
  }) => {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
    
    return (
      <button
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  