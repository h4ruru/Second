import './form-css/Form.scss'
import FormHeader from'./FormHeader'
import FormText from'./FormText'
import FormPicture from'./FormPicture'
import FormCheckbox from'./FormCheckbox'

function Form() {

    return (
        <div className="l-Form">
            <FormHeader />
            <FormText />
            <FormPicture />
            <FormCheckbox />
        </div>
    )
}

export default Form