import { styles } from "../styles";
import { send } from "../assets";

export const Button_S = ({label, visuals}) => {
  return (
    <button type="button" className={`${visuals} ${styles.button_S}`}>
      {label}
  </button>
  )
}

export const Button_Icon = () => {
  return (
    <button type="button" className="w-[38px] h-[38px]">
      <img src={send} />
    </button>
  )
}