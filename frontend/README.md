# Project Directory Structure

The following is the structure of the `frontend` directory:

```
frontend/
├── atomic-ui/
│ ├── lib/
│ ├── node_modules/
│ ├── package.json
│ ├── tsconfig.json
│ ├── vite.config.ts
├── portals/
│ ├── dashboard/
│ │ ├── app/
│ │ ├── node_modules/
│ │ ├── package.json
│ │ ├── tsconfig.json
│ ├── homepage/
│ │ ├── app/
│ │ ├── node_modules/
│ │ ├── package.json
│ │ ├── tsconfig.json
├── node_modules/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json

```

### Directory Descriptions

- **atomic-ui/**: This directory contains the shared UI components library.
    - **lib/**: The source code for the UI components.
    - **node_modules/**: The dependencies for the atomic-ui package.
    - **package.json**: The configuration file for the atomic-ui package.
    - **tsconfig.json**: TypeScript configuration for the atomic-ui package.
    - **vite.config.ts**: Vite configuration for building the atomic-ui package.

- **portals/**: This directory contains the different portal applications.
    - **dashboard/**: The source code and configurations for the dashboard portal.
        - **app/**: The source code for the dashboard application.
        - **node_modules/**: The dependencies for the dashboard package.
        - **package.json**: The configuration file for the dashboard package.
        - **tsconfig.json**: TypeScript configuration for the dashboard package.
    - **homepage/**: The source code and configurations for the homepage portal.
        - **app/**: The source code for the homepage application.
        - **node_modules/**: The dependencies for the homepage package.
        - **package.json**: The configuration file for the homepage package.
        - **tsconfig.json**: TypeScript configuration for the homepage package.

- **node_modules/**: The top-level dependencies for the entire frontend workspace.
- **package.json**: The top-level configuration file for the frontend workspace.
- **pnpm-lock.yaml**: The lock file for PNPM dependencies.
- **pnpm-workspace.yaml**: The workspace configuration file for PNPM.
- **tsconfig.json**: The top-level TypeScript configuration file.
