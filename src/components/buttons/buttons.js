import  './buttons.css';

const ButtonGreen = ({name, index}) => {

    return(
        <div className={index === 0 ? 'btn_green only_on_category': 'btn_green'}>
            <div>{name}</div>
        </div>
    )
}

export default ButtonGreen;