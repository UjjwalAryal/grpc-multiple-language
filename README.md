# Multiple language gRPC setup: Python Client and Node.js Server

### 1. Define the gRPC Service using Protocol Buffers
This is defined in math.proto. We will use the same Protocol Buffers file for both Python and Node.js.

### 2. Generate gRPC Code for Node.js and Python
We will use the `grpc-tools` to generate the gRPC service from the .proto file.
- For Node.js: First, install the necessary packages:

    ```bash
        npm install grpc-tools grpc @grpc/proto-loader
    ```

    Then generate the gRPC code:

    ```bash
    npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:. --grpc_out=grpc_js:. --proto_path=. math.proto
    npx grpc_tools_node_protoc --proto_path=. --js_out=import_style=commonjs:. --grpc_out=grpc_js:. math.proto
    ```

- For Python:

    ```bash
    python3 -m grpc_tools.protoc -I=. --python_out=. --grpc_python_out=. math.proto
    ```

### 3. Implement the Node.js Server
This is defined in server.js file.

In this server code:
- The `addNumbers` function implements the Add RPC method, which takes two numbers from the request and returns their sum.
- The gRPC server listens on `localhost:3009`.

### 4. Implement the Python Client
This is defined in client.py file.

In this Python client code:
- The client connects to the Node.js server on `localhost:3009`.
- It sends a request to the Add method with two numbers (num1=5, num2=3) and print the sum.

### 5. Running the Application
- Start the Node.js Server
```bash
node server.js
```

- Run the Python Client
```bash
python3 client.py
```
