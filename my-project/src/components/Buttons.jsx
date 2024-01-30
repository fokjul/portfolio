import { styles } from "../styles";
import { send } from "../assets";
import { Link } from "react-router-dom";

export const Button_S = ({label, visuals}) => {
  return (
    <button type="button" className={`${visuals} ${styles.button_S}`}>
      {label}
  </button>
  )
}

export const Button_Icon = ({link}) => {
  return (
    <Link to={link} className="w-[38px] h-[38px]">
      <img src={send} />
    </Link>
  )
}

export const Button_Arrow = ({event, icon}) => {
  return (
    <button type="button" onClick={event
    }>
          <img src={icon}/>
    </button>
  )
}