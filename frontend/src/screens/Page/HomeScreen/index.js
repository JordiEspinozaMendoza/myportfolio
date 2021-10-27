import React from "react";
// * Components
import {
  NavigationBar,
  HeaderHero,
  AboutComponent,
  Projects,
  Footer,
} from "components";
import { Spinner } from "react-bootstrap";
// * Call Api
import { callApi } from "api";
// * Reducer
import { reducer } from "./reducers";
import { actions } from "./actions";
import { initialState } from "./constants";
// ? Utils
import { scrollTo } from "utils";

import styled from "styled-components";

const LoaderContainer = styled.div`
  background-color: ${(props) => props.theme.loader.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .spinner-border{
    color: ${(props) => props.theme.loader.loader};
  }
`;

export const HomeScreen = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const refProjects = React.useRef(null);
  const refAbout = React.useRef(null);

  React.useEffect(() => {
    callApi(
      "api/proyects/getproyects/ALL/",
      "GET",
      {},
      {
        REQUEST: actions.FETCH_DATA_PROJECTS_REQUEST,
        SUCCESS: actions.FETCH_DATA_PROJECTS_SUCCESS,
        FAILURE: actions.FETCH_DATA_PROJECTS_FAILURE,
      },
      dispatch
    );
  }, []);
  return (
    <>
      {state.getProjects.isLoading ? (
        <LoaderContainer>
          <Spinner animation="border"/>
        </LoaderContainer>
      ) : (
        <>
          <NavigationBar />
          <HeaderHero
            scrolls={{
              projects: () => scrollTo(refProjects),
              about: () => scrollTo(refAbout),
            }}
          />
          <div ref={refAbout} />
          <AboutComponent />
          <div ref={refProjects} />
          <Projects projects={state.getProjects.projects} />
          <Footer />
        </>
      )}
    </>
  );
};
