import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Main from "../Components/Main";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven</title>
      </Helmet>
      {/* header section */}
      <Header></Header>
      {/* sidebar + cards */}
      <Main></Main>
    </div>
  );
};

export default Home;
