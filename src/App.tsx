import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //larger than 1024px screen sizes
      }}
    >
      <GridItem bg="coral" area={"nav"}>
        Nav
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
