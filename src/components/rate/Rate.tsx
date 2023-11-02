import classNames from "classnames";
import uniqid from "uniqid";

import Star from "../../images/icon-star.svg";
import { Props } from "./types";
import "./Rate.scss";

export default function Rate({ children, stars }: Props) {
  if (stars < 0 || stars > 5) {
    throw new Error("The amount of stars should be between 0 and 5");
  }
  const starsArray = [];
  for (let e = stars; e > 0; e--) {
    starsArray.push(<img src={Star} alt="star" key={uniqid()} />);
  }
  return (
    <div className={classNames("rt")}>
      <div className="starBox">{starsArray.map((star) => star)}</div>
      <div className="title">
        <h2>{children}</h2>
      </div>
    </div>
  );
}
