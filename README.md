# Nuxt 3 Jetstream Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Client Setup

Install the dependencies:

```bash
bun install
```

Copy the example environment file:

```
cp .env .env.example
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:
```bash
bun run preview
```

## Laravel Setup

Install laravel and dependencies:

```
laravel new jetstream

cd jetstream

php artisan jetstream:install inertia --teams

npm install

npm run build

php artisan migrate
```

Add the front-end url to the environment file:

```
FRONTEND_URL=http://localhost:3000
```

Update the `cors.php` configuration file:

```
return [

    'paths' => ['*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
```

## Development Server

Start the development server on `http://localhost:8000`:

```bash
php artisan serve
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
