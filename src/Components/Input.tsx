import '../Styles/Components/Input.css'

function Input(): React.ReactElement {

    return (
        <>
            <div className="input">
             <input type="text" id="name" name="name" placeholder="Type here and press Enter"/>
            </div>
        </>
    )
}


export default Input