import classNames from "classnames";
import { Props } from "./types";
import "./Rate.scss";

export default function Rate({ children }: Props) {
  return (
    <div className={classNames("rt")}>
      <div className="icon"></div>
      <div className="title">
        <h2>{children}</h2>
      </div>
    </div>
  );
}
