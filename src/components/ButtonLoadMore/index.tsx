import './styles.css';

export type Props = {
  onNextPage: Function;
}

export default function ButtonLoadMore({ onNextPage } : Props) {
  return <div  onClick={() => onNextPage()} className="dsc-btn-next-page">Carregar mais</div>;
}
