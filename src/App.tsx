import Container from "./components/Container";
import Header from "./components/Header";
import PostProvider from "./contexts/PostContext";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Header />
      <PostProvider>
        <Home />
      </PostProvider>
    </Container>
  );
}

export default App;
