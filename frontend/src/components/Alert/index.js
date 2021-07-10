import MuiAlert from "@material-ui/lab/Alert";
import "./styles.css"
export default function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }