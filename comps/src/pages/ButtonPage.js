import Button from "../components/Button";
import { GoBell, GoGift } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          {" "}
          <GoBell />
          Child
        </Button>
      </div>
      <div>
        <Button secondary>
          {" "}
          <GoGift /> See Deal
        </Button>
      </div>
      <div>
        <Button danger>Buy Now</Button>
      </div>
      <div>
        <Button success outline>
          Hide Ads
        </Button>
      </div>
      <div>
        <Button rounded>Hide Ads</Button>
      </div>
    </div>
  );
}
export default ButtonPage;
