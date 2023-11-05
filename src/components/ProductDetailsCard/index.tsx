import pneu from '../../assets/pneu.png';
import ProductCategory from '../ProductCategory';
import './styles.css';

export default function ProductDetailsCard(){
    return (
        <div className="dsc-card dsc-mb20">
          <div className="dsc-product-details-top dsc-line-bottom">
            <img src={pneu} alt="Pneu Continental" />
          </div>
          <div className="dsc-product-details-bottom">
            <h3>R$ 280,00</h3>
            <h4>Pneu Continental 185/65 r15</h4>
            <p>
              Aumente a quilometragem e melhore o desempenho com o Pneu Conti 185/65 R15 ContiPowerContact 2 88H. Desenvolvido com tecnologia avançada, este pneu oferece durabilidade excepcional e desempenho superior em todas as condições de estrada.
              Com uma vida útil estendida, o ContiPowerContact 2 proporciona até 20% a mais de quilometragem em comparação com outras marcas . Além disso, a tecnologia Eco Plus+ integrada garante uma economia de combustível , tornando-o uma escolha econômica e sustentável para seu veículo.
              Desfrute de uma condução suave e silenciosa com a tecnologia Conti Noise Cancelling, que reduz o ruído do atrito entre o pneu e a estrada. A tecnologia Conti Safety System melhora a aderência e o controle do veículo, proporcionando uma direção confiável em diferentes condições de estrada.
            </p>
            <div className="dsc-category-container">
              <ProductCategory name='Pneus'/>
              <ProductCategory name='Automóveis'/>
            </div>
          </div>
        </div>
    );
}