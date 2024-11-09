import React from "react";
import MusicPlayer from "./MusicPlayer";
import { render } from "@testing-library/react";

describe("MusicPlayer", () => {
  it("should render", () => {
    render(<MusicPlayer />);
  });

  // TODO build more tests for the music player
});
