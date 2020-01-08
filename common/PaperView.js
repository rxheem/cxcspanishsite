import Img from "react-image";
import LazyLoad from "react-lazyload";

const PaperView = props => (
  <li class="nf-card effect1">
    <div className="nf-inside-top">
      <LazyLoad>
        <Img alt="image" src={props.src} />
      </LazyLoad>
    </div>
  </li>
);

export default PaperView;
