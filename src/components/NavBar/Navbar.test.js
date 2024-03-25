import React from "react";
import Navbar from "./Navbar";
import reducer from "../../reducers";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { loginAuthedUser } from "../../actions/authedUser";

const store = configureStore({ reducer });

describe("Navbar", () => {
  test("should render the component", () => {
    store.dispatch(
      loginAuthedUser({
        username: "tylermcginnis",
        password: "",
      })
    );
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  test("should display all elements", () => {
    store.dispatch(
      loginAuthedUser({
        username: "tylermcginnis",
        password: "",
      })
    );
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const homeLinkElement = screen.getByTestId("home-link");
    const newPollLinkElement = screen.getByTestId("new-poll-link");
    const LeaderBoardLinkElement = screen.getByTestId("LeaderBoard-link");
    const logoutLinkElement = screen.getByTestId("logout-link");

    expect(homeLinkElement.textContent).toBe("Home");
    expect(newPollLinkElement.textContent).toBe("New Poll");
    expect(LeaderBoardLinkElement.textContent).toBe("LeaderBoard");
    expect(logoutLinkElement.textContent).toBe("Logout");
  });
});
