import './styles.css';

export type Props = {
    textButton : string
}

export default function ButtonSecondary({textButton} : Props){
    return (
        <div className="dsc-btn dsc-btn-white">
            {textButton}
        </div>
    );
}