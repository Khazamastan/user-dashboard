import "./Form.css"
const Form = ({ formItems = [], formData = {}, onChangeForm, onSubmit, submitText, formTitle, resetForm }) => {
  return (
    <div className="form-container">
      <form>
        { formTitle && <h1>{formTitle}</h1>}
        {formItems.map((formItem) => {
          const { filedName, type, key, options } = formItem;
          return (
            <div>
              <label>{filedName}</label>
              <p>
                {type === "text" || type === "number" || type === "email" ? (
                  <input
                    name={key}
                    defaultValue={formData[key]}
                    value={formData[key]}
                    type={type}
                    onChange={onChangeForm}
                  />
                ) : (
                  ""
                )}
                {type === "textarea" ? (
                  <textarea
                    defaultValue={formData[key]}
                    value={formData[key]}
                    name={key}
                    onChange={onChangeForm}
                  >
                    {formData[key]}
                  </textarea>
                ) : (
                  ""
                )}
                {type === "select" ? (
                  <select
                    defaultValue={formData[key]}
                    value={formData[key]}
                    name={key}
                    onChange={onChangeForm}
                  >
                    {options.map((option) => {
                      return <option value={option}>{option}</option>;
                    })}
                  </select>
                ) : (
                  ""
                )}
              </p>
            </div>
          );
        })}
        <div className="form-footer">
          <button type="button" onClick={onSubmit}>
            { submitText}
           </button>
           <button type="button" className="reset" onClick={resetForm}>
            Reset
           </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
