import './styles.css';

export type Props = {
  textButton : string
}

export default function ButtonLoadMore({textButton} : Props) {
  return <div className="dsc-btn-next-page">{textButton}</div>;
}
