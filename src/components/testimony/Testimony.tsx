import classNames from "classnames";
import { Props } from "./types";
import "./Testimony.scss";
import  from "../../images/icon-star.svg";


export default function Testimony({ image, name, userTitle, comment }: Props) {
  return (
    <div className={classNames("testimony")}>
      <div className="img"></div>
      <div className="title">
        <h2>{name}</h2>
        <h3>{userTitle}</h3>
      </div>
    </div>
  );
}
