import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";

// importo todas las paginas
import Home from "./pages/home";
import NewMoviews from "./pages/new-movies";
import Popular from "./pages/popular";
import Movie from "./pages/movie";


export default function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMoviews />
            </Route>
            <Route path="/popular" exact={true}>
              <Popular />
            </Route>  
            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}

        