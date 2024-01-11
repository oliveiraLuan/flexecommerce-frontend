import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

type Props = {
  id: number;
  message: string;
  onDialogAnswer: Function;
};

export default function DialogAnswer({ id , message, onDialogAnswer }: Props) {
  return (
    <div className="dsc-dialog-background" onClick={() => onDialogAnswer(false, id)} >
      <div className="dsc-dialog-box" onClick={() => event?.stopPropagation()}>
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(true, id)}>
            <ButtonPrimary textButton="Sim" />
          </div>
          <div onClick={() => onDialogAnswer(false, id)}>
            <ButtonSecondary textButton="Não" />
          </div>
        </div>
      </div>
    </div>
  );
}
