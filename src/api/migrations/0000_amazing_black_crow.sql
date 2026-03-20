CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`full_name` text NOT NULL,
	`company` text,
	`email` text NOT NULL,
	`phone` text,
	`crane_type` text,
	`crane_make` text,
	`crane_model` text,
	`crane_year` text,
	`number_of_units` text,
	`preferred_timeframe` text,
	`equipment_interest` text,
	`budget_range` text,
	`message` text,
	`created_at` integer
);
