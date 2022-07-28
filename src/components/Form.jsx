const Form = ({ handleOnTextChange, handleOnSubmit, value }) => {
    return (
        <form>
            <input type="text" id="todo" name="todo" value={value} onChange={(e) => handleOnTextChange(e)} />
            <input type="submit" value="Submit" onClick={handleOnSubmit} />
        </form>
    )
}

export default Form;