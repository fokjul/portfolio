import { styles } from "../style";

export const Button_S = ({label, visuals}) => {
  return (
    <button type="button" className={`${visuals}`}>
      {label}
  </button>
  )
}