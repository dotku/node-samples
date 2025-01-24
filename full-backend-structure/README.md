# Backend

config/: Configuration files for Supabase, environment variables, etc.
middlewares/: Contains reusable middleware, such as checking authentication or roles.
routes/: Group routes by functionality, such as authRoutes or protectedRoutes.
models/: Define database schemas (if using your own database alongside Supabase).
controllers/: Business logic for routes.
services/: Contains services like email notifications, third-party integrations, etc.
utils/: Shared utility functions, such as logging or general-purpose helpers.