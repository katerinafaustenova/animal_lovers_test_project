import classNames from "classnames";
import styles from "../styles/ControlItem.module.css";

export default function ControlItem(props) {
  const { id, name, position } = props;
  return (
    <div
      className={classNames(
        styles.controlItem,
        styles[name],
        position === id && styles.active
      )}
      onClick={() => {
        props.handleChange(id);
      }}
    />
  );
}
