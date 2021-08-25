import Header from "./Header";
import Layout from "./Layout";
import Speakers from "./Speakers";

function App() {  
  return (
    <Layout startingTheme="light">
      <Header />
      <Speakers />
    </Layout>
  );
}

export default App;