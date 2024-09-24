import { Context, Handler, LambdaFunctionURLEvent } from "aws-lambda";
import { Writable } from "stream";

/**
 * TypeScript Typings for the `awslambda` Module.
 *
 * For more details, visit the GitHub repository:
 * https://github.com/llozano/lambda-stream-response/blob/main/src/%40types/awslambda/index.d.ts
 */
declare global {
  namespace awslambda {
    export function streamifyResponse(
      handler: (
        event: LambdaFunctionURLEvent & { body: string },
        responseStream: Writable,
        context: Context
      ) => Promise<void>
    ): Handler;
    export class HttpResponseStream {
      static from(
        responseStream: Writable,
        metadata: { statusCode: number; headers: Record<string, string> }
      ): Writable;
    }
  }
}
