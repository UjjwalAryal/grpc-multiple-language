import grpc
import math_pb2
import math_pb2_grpc

def run():
    # Connect to the Node.js gRPC server
    with grpc.insecure_channel('localhost:3001') as channel:
        stub = math_pb2_grpc.MathStub(channel)
        
        # Create an AddRequest message
        response = stub.Add(math_pb2.AddRequest(num1=5, num2=3))
        
        # Print the result
        print(f"Sum: {response.sum}")

run()
