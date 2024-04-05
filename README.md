# Demo - gRPC

This is a barebones demonstration of gRPC and how each component interacts.

## Architecture Overview

**gRPC** is an open source RPC framework developed by Google.
It uses [protocol buffers](https://protobuf.dev/) (commonly referred to as "protobufs") to provide a language- and platform-neutral mechanism for serializing structured data.
At the transport layer it uses [HTTP/2](https://datatracker.ietf.org/doc/html/rfc9113) or higher.

Because most server/client communications on the web rely on HTTP/1.1 (as is the case with the server and client in this demo), a proxy is necessary as a translation layer between client requests (over HTTP/1.1) and the gRPC server (HTTP/2).
Envoy serves as that proxy for this project because it provides first-class support for gRPC, HTTP/1.1, and HTTP/2 out of the box.
Though I haven't looked much further, it's probable that other service proxies would work nicely for this purpose.

### Built With

*   [gRPC](https://grpc.io/) - A high performance, open source universal RPC framework
*   [Envoy](https://www.envoyproxy.io/) - An L7 proxy and communication bus designed for large modern service oriented architectures.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Docker](https://www.docker.com/) - An open platform for developing, shipping, and running applications.
*   [NodeJS](https://nodejs.org/en) - A free, open-source, cross-platform JavaScript runtime environment.

### Installation

#### gRPC Server

The gRPC server in this demo is written in TypeScript on NodeJS.

1.  Install the dependencies:

    ```sh
    cd services/server
    npm install
    ```

    You may use [Yarn](https://yarnpkg.com/) instead on NPM, though these instructions will not cover that.

2.  To start the gRPC server, run:

    ```sh
    npm start
    ```

#### Envoy

Envoy Proxy runs in a docker container and is orchestrated via [Docker Compose](https://docs.docker.com/compose/) which ships with Docker.

1.  To build the image and run the container, run:

    ```sh
    cd services/envoy
    docker compose up -d
    ```

2.  You can check to see that Envoy is running correctly by either tailing the docker logs:

    ```sh
    docker compose logs -f
    ```

    Or by visiting the envoy admin web page in a browser at:

    ```sh
    localhost:9901
    ```

#### Client

While I would have liked to implement the client-side application in TypeScript as well, at the time of this writing, gRPC Web support for TypeScript is [experimental](https://www.npmjs.com/package/grpc-web#typescript-support), and I was not able to set it up successfully.

The JavaScript client runs in the console and simply asks the user for their name, and returns a personalized greeting using gRPC!

1.  Install the dependencies:

    ```sh
    cd services/client
    npm install
    ```

2.  Run the client program:

    ```sh
    npm start
    ```

    The output should look something like this:

    ```sh
    What is your name? Lord Farquaad
    Hello, Lord Farquaad!
    ```
