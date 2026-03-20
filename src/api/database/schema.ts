import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable("leads", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  type: text("type").notNull(), // 'seller' | 'buyer' | 'contact'
  fullName: text("full_name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone"),
  // Seller-specific
  craneType: text("crane_type"),
  craneMake: text("crane_make"),
  craneModel: text("crane_model"),
  craneYear: text("crane_year"),
  numberOfUnits: text("number_of_units"),
  preferredTimeframe: text("preferred_timeframe"),
  // Buyer-specific
  equipmentInterest: text("equipment_interest"),
  budgetRange: text("budget_range"),
  // General
  message: text("message"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});
