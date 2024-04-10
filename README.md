This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## HR Next

## Description

HR Next is an AI-first Next.js generation HR solution. This application is designed to provide advanced human resource management capabilities with the power of artificial intelligence.

## Installation

To get started with HR Next, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone <repository-url>
```

2. Navigate to the project directory.

```bash
cd hr-next
```

3. Install dependencies.

```bash
pnpm install
```

## Usage

### Development

To run the application in development mode, use the following command:

```bash
pnpm dev
```

This will start the development server.

### Building

To build the application for production, execute the following command:

```bash
pnpm build
```

This will generate optimized production build files.

### Starting

To start the application in production mode, use the following command:

```bash
pnpm start
```

This will start the production server.

### Linting

To run linting checks on your code, use the following command:

```bash
pnpm lint
```

### Database Operations

HR Next includes database operations facilitated by Drizzle Kit. Here are some useful commands:

- To generate a PostgreSQL database:

```bash
pnpm db:generate
```

- To push changes to the PostgreSQL database:

```bash
pnpm db:push
```

- To open the studio for the PostgreSQL database:

```bash
pnpm db:studio
```

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to add.

### Guidelines

#### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

https://www.conventionalcommits.org/

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

##### Types `<type>`

Must be one of the following:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests

##### Scopes `<scope>`

The scope is like context. The following is the list of supported scopes (feel free to update any new scopes):

- `ui`
- `api`
- `db`
- `lib`

## License

(WTFPL)[https://en.wikipedia.org/wiki/WTFPL]
