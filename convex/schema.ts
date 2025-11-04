import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";

export default defineSchema({
  //this the table for todos.
  todos: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
