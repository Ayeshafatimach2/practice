'use client'
import Button from "../button/Button";
export default function counterSection() {

  const onClickHandler =()=>{
    alert("onClicked Handler by countersection")
}
  return (
    <div>
    <Button onClickHandler={onClickHandler} title="Add"/>

    </div>
    
  )
}

