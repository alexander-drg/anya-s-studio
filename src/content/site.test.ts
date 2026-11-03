import { describe, expect, it } from "vitest";
import { artworks, watercolors, isFeatured, isPublished } from "./site";

describe("artwork visibility", () => {
  it("publishes only the three client-approved paintings", () => {
    const visible = [...artworks, ...watercolors].filter(isPublished).map((a) => a.id);
    expect(visible).toEqual(["fa-17", "fa-19", "fa-22"]);
  });

  it("keeps hidden artworks in the data", () => {
    expect(artworks.length).toBe(30);
    expect(watercolors.length).toBe(6);
  });

  it("never features an unpublished work", () => {
    const hidden = { id: "x", src: "", title: null, published: false, featured: true };
    expect(isFeatured(hidden)).toBe(false);
  });
});
