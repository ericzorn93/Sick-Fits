import Link from "next/link";
import ResetPage from "../components/Reset";

const Sell = props => {
  return (
    <div>
      <p>Reset your password{props.query.resetToken}</p>
      <ResetPage resetToken={props.query.resetToken} />
    </div>
  );
};

export default Sell;
