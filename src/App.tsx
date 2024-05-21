import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //larger than 1024px screen sizes
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem bg="gold" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="dodgerblue" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
