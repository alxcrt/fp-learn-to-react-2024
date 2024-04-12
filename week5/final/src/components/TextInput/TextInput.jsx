import { forwardRef } from "react";

const TextInput = forwardRef(
  (
    { value, onChange, placeholder, id = Math.random(), className, onSubmit },
    ref
  ) => (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      id={id}
      type="text"
      placeholder={placeholder}
      className={className}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onSubmit();
        }
      }}
    />
  )
);

export default TextInput;
