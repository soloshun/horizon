import test from "node:test";
import assert from "node:assert/strict";
import { contactSchema, createDraft } from "../lib/contact.ts";

const input = {
  name: "Test Visitor",
  email: "visitor@example.com",
  organisation: "",
  interest: "Research" as const,
  message: "I would like to explore local-first control with Horizon.",
};

test("draft keeps the requested recipient and safely encodes punctuation and Unicode", () => {
  const draft = createDraft(
    {
      ...input,
      name: "Ama & Kojo",
      message:
        "Could we explore energy & water? A first idea: resilience → comfort. #H1",
    },
    "solomoneshun373@gmail.com",
  );
  const url = new URL(draft.href);
  assert.equal(url.pathname, "solomoneshun373@gmail.com");
  assert.equal(
    url.searchParams.get("subject"),
    "Horizon / Research / Ama & Kojo",
  );
  assert.match(
    url.searchParams.get("body") || "",
    /resilience → comfort\. #H1/,
  );
  assert.equal(url.searchParams.get("bcc"), null);
});

test("invalid details cannot generate a draft", () => {
  for (const patch of [
    { email: "not an email" },
    { name: " " },
    { message: "too short" },
    { message: "x".repeat(3001) },
    { interest: "Unknown" },
  ]) {
    assert.equal(
      contactSchema.safeParse({ ...input, ...patch }).success,
      false,
    );
  }
});

test("optional organisation is omitted without adding undefined text", () => {
  const { organisation, ...withoutOrganisation } = input;
  assert.equal(organisation, "");
  const draft = createDraft(withoutOrganisation, "solomoneshun373@gmail.com");
  assert.ok(!draft.body.includes("undefined"));
  assert.ok(draft.body.endsWith("visitor@example.com"));
});
