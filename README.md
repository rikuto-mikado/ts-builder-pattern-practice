# TypeScript Builder Pattern Practice

This project is a simple practice implementation of the **Builder Design Pattern** in TypeScript.

## Project Structure

- **`src/models/CustomPC.ts` (The Product):** Represents the final, immutable object with specific configurations.
- **`src/builders/PCBuilder.ts` (The Builder):** Provides a "step-by-step" interface to configure and assemble the `CustomPC`. It uses method chaining (Fluent Interface) via the polymorphic `this` type.
- **`src/index.ts` (The Client):** The entry point where we use the builder to create specific PC instances.

## Conceptual Analogy: The Hamburger Shop

- **The Product (`CustomPC`):** The final hamburger served to the customer.
- **The Builder (`PCBuilder`):** The shop clerk who takes your order step-by-step ("Add cheese?", "No onions?").
- **The Client (`index.ts`):** The customer making the specific request.

## Key Learnings

- Implementing a Fluent Interface using `: this` return type.
- Handling strict TypeScript configurations like `exactOptionalPropertyTypes`.
- Separating object construction from its representation.
