import Button from "./Button";
function App() {
  return (
    <div>
      <div>
        <Button primary>
          Child
        </Button>
      </div>
      <div>
        <Button secondary>See Deal</Button>
      </div>
      <div>
        <Button danger>Buy Now</Button>
      </div>
      <div>
        <Button success>Hide Ads</Button>
      </div>
    </div>
  );
}
export default App;
