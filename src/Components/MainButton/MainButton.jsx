import { Button } from "react-bootstrap";
import "./MainButton.css";

const MainButton = ({ buttonText, classText }) => {
  return <Button className={`${classText} main__btn`}>{buttonText}</Button>;
};

export default MainButton;
