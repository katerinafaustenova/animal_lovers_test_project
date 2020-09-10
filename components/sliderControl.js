import classNames from "classnames";
import styles from "../styles/SliderControl.module.css";

export default function SliderControl(props) {
  const { direction, disabled } = props;
  return (
    <div
      className={classNames(
        styles.arrow,
        styles[direction],
        disabled && styles.disabled
      )}
      onClick={() => props.handleChange()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 32"
        width="16"
        height="32"
      >
        <path d="M0.38 15.38L16 0L16 32L0.38 16.62L0.38 15.38Z" />
      </svg>
    </div>
  );
}
