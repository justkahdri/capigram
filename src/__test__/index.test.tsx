import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home Page Suite", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders with Capigram heading", () => {
    expect(screen.getByRole("heading", { name: /^capigram$/i })).toBeVisible();
  });

  it("renders posts", async () => {
    let posts = await screen.findAllByAltText(/^.+?'s post#\d+$/); // REGEX: username's post#number

    expect(posts.length).toBeGreaterThan(1);
  });

  it("renders navigation", () => {
    ["Home", "Account", "Notifications"].forEach((label) => {
      expect(screen.getByLabelText(label)).toBeVisible();
    });
  });
});
