import { z } from "zod";
export const interests = [
  "Research",
  "Architecture / Built Environment",
  "AI / Technology",
  "Energy / Infrastructure",
  "Development",
  "Investment",
  "General",
] as const;
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please add your name.").max(100),
  email: z.email("Please enter a valid email address.").max(254),
  organisation: z.string().trim().max(150).optional().default(""),
  interest: z.enum(interests),
  message: z
    .string()
    .trim()
    .min(15, "Please tell us a little more (at least 15 characters).")
    .max(3000, "Please keep your message under 3,000 characters."),
});
export type ContactInput = z.input<typeof contactSchema>;
export function createDraft(input: ContactInput, to: string) {
  const data = contactSchema.parse(input);
  const subject = `Horizon / ${data.interest} / ${data.name}`;
  const body = `Hello Solomon,\n\n${data.message}\n\n${data.name}\n${data.email}${data.organisation ? `\n${data.organisation}` : ""}`;
  return {
    subject,
    body,
    href: `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
