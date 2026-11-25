import { z } from "zod";

export const meetingNotesInputSchema = z.object({
  notes: z.string().trim().min(1).max(20_000)
});

export const meetingTaskSchema = z.object({
  title: z.string().trim().min(1),
  assignee: z.string().trim().min(1).nullable(),
  dueDate: z.string().trim().min(1).nullable(),
  evidence: z.string().trim().min(1).nullable()
});

export const meetingNotesOutputSchema = z.object({
  summary: z.string(),
  decisions: z.array(z.string()),
  tasks: z.array(meetingTaskSchema)
});

export type MeetingNotesInput = z.infer<typeof meetingNotesInputSchema>;
export type MeetingTask = z.infer<typeof meetingTaskSchema>;
export type MeetingNotesOutput = z.infer<typeof meetingNotesOutputSchema>;
