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

import { nav, exhibitionCategories, offeredWorks } from "./site";
describe("final structure", () => {
  it("Picturi has exactly Acrilice, Acuarelă, Grafică, Fascinații", () => {
    const kids = nav.find((n) => n.to === "/picturi")!.children!.map((c) => c.label.ro);
    expect(kids).toEqual(["Acrilice", "Acuarelă", "Grafică", "Fascinații"]);
  });
  it("exhibitions section is named Expoziții alese", () => {
    expect(nav.find((n) => n.to === "/expozitii")!.label.ro).toBe("Expoziții alese");
  });
  it("lists 1 solo, 3 group, 1 international exhibition and 2 offered works", () => {
    expect(exhibitionCategories.map((c) => c.entries.length)).toEqual([1, 3, 1]);
    expect(offeredWorks.length).toBe(2);
  });
  it("does not invent links for exhibitions without one", () => {
    const all = exhibitionCategories.flatMap((c) => c.entries);
    expect(all.find((e) => e.id === "ex-2025-espressioni")!.link).toBeUndefined();
    expect(all.find((e) => e.id === "ex-2026-femailart")!.link).toBeUndefined();
  });
});
