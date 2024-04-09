import { Button } from "@mui/material";
import './index.scss';

const Buttons = ({ keyValue, classNameK, operation }) => {
    return (
        <div className={classNameK ? classNameK : ""}>
            <Button
                onClick={() => operation(keyValue)}
                variant="contained"
            >
                {keyValue}
            </Button>
        </div>
    );
};

export default Buttons;
