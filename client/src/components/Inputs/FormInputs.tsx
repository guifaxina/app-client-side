
const FormInputs = (props: any) => {
  
  const { label, errorMessage, onChange, id, ...inputProps} = props;
  
  return (

    <div className="formInput">
      <label>{label}</label>
      <input 
      type="text" 
      {...inputProps}
      onChange={onChange}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default FormInputs