
import { ButtonProps } from "@/type/componentsType"

// var count:number=1;
export default function Button(props:ButtonProps) {
  return(
    <button onClick={props.onClickHandler }>{props.title}</button>
  )
}

