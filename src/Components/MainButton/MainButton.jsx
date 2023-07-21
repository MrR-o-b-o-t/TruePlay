import { Button } from "react-bootstrap";
import "./MainButton.css";

const MainButton = ({ buttonText, classText, onClick }) => {
  return (
    <Button className={`${classText} main__btn`} onClick={onClick}>
      {buttonText}
      <i className="fa fa-chevron-right px-2" aria-hidden="true"></i>
    </Button>
  );
};

export default MainButton;
