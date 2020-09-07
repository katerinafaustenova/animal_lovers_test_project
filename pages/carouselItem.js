import styles from "../styles/CarouselItem.module.css";
import classNames from "classnames";

export default function CarouselItem(props) {
  const { id, name, position } = props;
  return (
    <div
      className={classNames(
        styles.controlsItem,
        styles[name],
        position === id && styles.active
      )}
      onClick={() => {
        props.handleChange(id);
      }}
    />
  );
}
