import * as React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Search from "./Search";
import * as API from "../../service/users";

describe("Search component", () => {
  it("should call Octocat user initially", async () => {
    const mockApi = jest.spyOn(API, "getUser");
    act(() => {
      render(<Search />);
    });
    await waitFor(() => {
      expect(mockApi).toHaveBeenCalledWith("octocat");
    });
  });

  it("should search input user", async () => {
    const mockUser = {
      login: "Gozdinhos",
      id: 38839021,
      node_id: "MDQ6VXNlcjM4ODM5MDIx",
      avatar_url: "https://avatars.githubusercontent.com/u/38839021?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Gozdinhos",
      html_url: "https://github.com/Gozdinhos",
      followers_url: "https://api.github.com/users/Gozdinhos/followers",
      following_url:
        "https://api.github.com/users/Gozdinhos/following{/other_user}",
      gists_url: "https://api.github.com/users/Gozdinhos/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Gozdinhos/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Gozdinhos/subscriptions",
      organizations_url: "https://api.github.com/users/Gozdinhos/orgs",
      repos_url: "https://api.github.com/users/Gozdinhos/repos",
      events_url: "https://api.github.com/users/Gozdinhos/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Gozdinhos/received_events",
      type: "User",
      site_admin: false,
      name: "Gözde Tekalmaz",
      company: "Apprentice @LoncaWorks",
      blog: "gozdinhos.github.io/me",
      location: "Earth42",
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 19,
      public_gists: 0,
      followers: 37,
      following: 38,
      created_at: "2018-04-29T16:32:26Z",
      updated_at: "2022-09-02T10:07:54Z",
    };
    const mockResponse: Promise<API.IUser> = new Promise((resolve) => {
      resolve(mockUser);
    });
    const mockApi = jest.spyOn(API, "getUser");
    mockApi.mockReturnValue(mockResponse);
    act(() => {
      render(<Search />);
    });
    const searchInput = screen.getByTestId("search-input");
    const searchBtn = screen.getByTestId("search-button");

    act(() => {
      fireEvent.change(searchInput, { target: { value: "gozdinhos" } });
    });

    act(() => {
      fireEvent.click(searchBtn);
    });

    await waitFor(() => {
      expect(mockApi).toHaveBeenCalledWith("gozdinhos");
    });
  });

  it("should render usercard with correct data", async () => {
    const mockUser = {
      login: "Gozdinhos",
      id: 38839021,
      node_id: "MDQ6VXNlcjM4ODM5MDIx",
      avatar_url: "https://avatars.githubusercontent.com/u/38839021?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Gozdinhos",
      html_url: "https://github.com/Gozdinhos",
      followers_url: "https://api.github.com/users/Gozdinhos/followers",
      following_url:
        "https://api.github.com/users/Gozdinhos/following{/other_user}",
      gists_url: "https://api.github.com/users/Gozdinhos/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Gozdinhos/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Gozdinhos/subscriptions",
      organizations_url: "https://api.github.com/users/Gozdinhos/orgs",
      repos_url: "https://api.github.com/users/Gozdinhos/repos",
      events_url: "https://api.github.com/users/Gozdinhos/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Gozdinhos/received_events",
      type: "User",
      site_admin: false,
      name: "Gözde Tekalmaz",
      company: "Apprentice @LoncaWorks",
      blog: "gozdinhos.github.io/me",
      location: "Earth42",
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 19,
      public_gists: 0,
      followers: 37,
      following: 38,
      created_at: "2018-04-29T16:32:26Z",
      updated_at: "2022-09-02T10:07:54Z",
    };
    const mockResponse: Promise<API.IUser> = new Promise((resolve) => {
      resolve(mockUser);
    });
    const mockApi = jest.spyOn(API, "getUser");
    mockApi.mockReturnValue(mockResponse);
    act(() => {
      render(<Search />);
    });
    const searchInput = screen.getByTestId("search-input");
    const searchBtn = screen.getByTestId("search-button");

    act(() => {
      fireEvent.change(searchInput, { target: { value: "gozdinhos" } });
    });

    act(() => {
      fireEvent.click(searchBtn);
    });

    const nameText = await screen.findByTestId("userdata-name");

    await waitFor(() => {
      expect(nameText.textContent).toBe("Gözde Tekalmaz");
    });
  });
});
