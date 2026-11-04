import { describe, expect, it } from "vitest";
import { artworks, watercolors, graphics, isFeatured, isPublished, sortArtworks } from "./site";

describe("artwork visibility", () => {
  it("publishes only the three selected acrylics", () => {
    const visible = sortArtworks(artworks.filter(isPublished)).map((a) => a.id);
    expect(visible).toEqual(["fa-19", "fa-02", "fa-22"]);
  });

  it("publishes three watercolours and three graphic works", () => {
    expect(watercolors.filter(isPublished).length).toBe(3);
    expect(graphics.filter(isPublished).length).toBe(3);
  });

  it("keeps hidden acrylics in the data", () => {
    expect(artworks.length).toBe(30);
  });

  it("never features an unpublished work", () => {
    const hidden = { id: "x", src: "", title: null, published: false, featured: true };
    expect(isFeatured(hidden)).toBe(false);
  });
});
