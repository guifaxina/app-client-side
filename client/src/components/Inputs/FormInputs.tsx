
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
    </div>
  )
}

export default FormInputs