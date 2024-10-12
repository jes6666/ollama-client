<a id="readme-top"></a>

<!-- ABOUT THE PROJECT -->
## About The Ollama Client
This project is a client application for interacting with OLLAMA API.


### Built With

* Angular
* Tailwind


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [git](https://github.com/git-guides/install-git)


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/jes6666/ollama-client.git
   ```
2. Navigate to the directory
   ```sh
   cd ollama-client
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API URL in `environment.ts`
   ```js
   const API_URL = 'http://10.10.10.20:12345';
   ```
4. Enter your LLM name in `environment.ts`
   ```js
   const LLM_NAME = 'lamma2.4b';
   ```


## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
