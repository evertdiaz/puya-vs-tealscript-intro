/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "doMath(uint64,uint64,string)uint64": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "createApplication()void": {
      "call_config": {
        "no_op": "CREATE"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {},
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 0,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDEwCgovLyBUaGlzIFRFQUwgd2FzIGdlbmVyYXRlZCBieSBURUFMU2NyaXB0IHYwLjg2LjAKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqY3JlYXRlX05vT3AgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVECgoqTk9UX0lNUExFTUVOVEVEOgoJZXJyCgovLyBnZXRTdW0oYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIKLy8KLy8gQ2FsY3VsYXRlcyB0aGUgc3VtIG9mIHR3byBudW1iZXJzCi8vCi8vIEBwYXJhbSBhCi8vIEBwYXJhbSBiCi8vIEByZXR1cm5zIFRoZSBzdW0gb2YgYSBhbmQgYgpnZXRTdW06Cglwcm90byAyIDEKCgkvLyBjb250cmFjdHMvZGVtby10ZWFsc2NyaXB0LmFsZ28udHM6MTMKCS8vIHJldHVybiBhICsgYjsKCWZyYW1lX2RpZyAtMSAvLyBhOiBudW1iZXIKCWZyYW1lX2RpZyAtMiAvLyBiOiBudW1iZXIKCSsKCXJldHN1YgoKLy8gZ2V0RGlmZmVyZW5jZShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlcgovLwovLyBDYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG51bWJlcnMKLy8KLy8gQHBhcmFtIGEKLy8gQHBhcmFtIGIKLy8gQHJldHVybnMgVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGFuZCBiLgpnZXREaWZmZXJlbmNlOgoJcHJvdG8gMiAxCgoJLy8gY29udHJhY3RzL2RlbW8tdGVhbHNjcmlwdC5hbGdvLnRzOjI0CgkvLyByZXR1cm4gYSA+PSBiID8gYSAtIGIgOiBiIC0gYTsKCWZyYW1lX2RpZyAtMSAvLyBhOiBudW1iZXIKCWZyYW1lX2RpZyAtMiAvLyBiOiBudW1iZXIKCT49CglieiAqdGVybmFyeTBfZmFsc2UKCWZyYW1lX2RpZyAtMSAvLyBhOiBudW1iZXIKCWZyYW1lX2RpZyAtMiAvLyBiOiBudW1iZXIKCS0KCWIgKnRlcm5hcnkwX2VuZAoKKnRlcm5hcnkwX2ZhbHNlOgoJZnJhbWVfZGlnIC0yIC8vIGI6IG51bWJlcgoJZnJhbWVfZGlnIC0xIC8vIGE6IG51bWJlcgoJLQoKKnRlcm5hcnkwX2VuZDoKCXJldHN1YgoKLy8gZG9NYXRoKHVpbnQ2NCx1aW50NjQsc3RyaW5nKXVpbnQ2NAoqYWJpX3JvdXRlX2RvTWF0aDoKCS8vIFRoZSBBQkkgcmV0dXJuIHByZWZpeAoJYnl0ZSAweDE1MWY3Yzc1CgoJLy8gb3BlcmF0aW9uOiBzdHJpbmcKCXR4bmEgQXBwbGljYXRpb25BcmdzIDMKCWV4dHJhY3QgMiAwCgoJLy8gYjogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAyCglidG9pCgoJLy8gYTogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBkb01hdGgodWludDY0LHVpbnQ2NCxzdHJpbmcpdWludDY0CgljYWxsc3ViIGRvTWF0aAoJaXRvYgoJY29uY2F0Cglsb2cKCWludCAxCglyZXR1cm4KCi8vIGRvTWF0aChhOiBudW1iZXIsIGI6IG51bWJlciwgb3BlcmF0aW9uOiBzdHJpbmcpOiBudW1iZXIKLy8KLy8gQSBtZXRob2QgdGhhdCB0YWtlcyB0d28gbnVtYmVycyBhbmQgZG9lcyBlaXRoZXIgYWRkaXRpb24gb3Igc3VidHJhY3Rpb24KLy8KLy8gQHBhcmFtIGEgVGhlIGZpcnN0IG51bWJlcgovLyBAcGFyYW0gYiBUaGUgc2Vjb25kIG51bWJlcgovLyBAcGFyYW0gb3BlcmF0aW9uIFRoZSBvcGVyYXRpb24gdG8gcGVyZm9ybS4gQ2FuIGJlIGVpdGhlciAnc3VtJyBvciAnZGlmZmVyZW5jZScKLy8KLy8gQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgb3BlcmF0aW9uCmRvTWF0aDoKCXByb3RvIDMgMQoKCS8vIFB1c2ggZW1wdHkgYnl0ZXMgYWZ0ZXIgdGhlIGZyYW1lIHBvaW50ZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgbG9jYWwgdmFyaWFibGVzCglieXRlIDB4CgoJLy8gKmlmMF9jb25kaXRpb24KCS8vIGNvbnRyYWN0cy9kZW1vLXRlYWxzY3JpcHQuYWxnby50czozOQoJLy8gb3BlcmF0aW9uID09PSAnc3VtJwoJZnJhbWVfZGlnIC0zIC8vIG9wZXJhdGlvbjogc3RyaW5nCglieXRlIDB4NzM3NTZkIC8vICJzdW0iCgk9PQoJYnogKmlmMF9lbHNlaWYxX2NvbmRpdGlvbgoKCS8vICppZjBfY29uc2VxdWVudAoJLy8gY29udHJhY3RzL2RlbW8tdGVhbHNjcmlwdC5hbGdvLnRzOjQwCgkvLyByZXN1bHQgPSB0aGlzLmdldFN1bShhLCBiKQoJZnJhbWVfZGlnIC0yIC8vIGI6IG51bWJlcgoJZnJhbWVfZGlnIC0xIC8vIGE6IG51bWJlcgoJY2FsbHN1YiBnZXRTdW0KCWZyYW1lX2J1cnkgMCAvLyByZXN1bHQ6IG51bWJlcgoJYiAqaWYwX2VuZAoKKmlmMF9lbHNlaWYxX2NvbmRpdGlvbjoKCS8vIGNvbnRyYWN0cy9kZW1vLXRlYWxzY3JpcHQuYWxnby50czo0MQoJLy8gb3BlcmF0aW9uID09PSAnZGlmZmVyZW5jZScKCWZyYW1lX2RpZyAtMyAvLyBvcGVyYXRpb246IHN0cmluZwoJYnl0ZSAweDY0Njk2NjY2NjU3MjY1NmU2MzY1IC8vICJkaWZmZXJlbmNlIgoJPT0KCWJ6ICppZjBfZWxzZQoKCS8vICppZjBfZWxzZWlmMV9jb25zZXF1ZW50CgkvLyBjb250cmFjdHMvZGVtby10ZWFsc2NyaXB0LmFsZ28udHM6NDIKCS8vIHJlc3VsdCA9IHRoaXMuZ2V0RGlmZmVyZW5jZShhLCBiKQoJZnJhbWVfZGlnIC0yIC8vIGI6IG51bWJlcgoJZnJhbWVfZGlnIC0xIC8vIGE6IG51bWJlcgoJY2FsbHN1YiBnZXREaWZmZXJlbmNlCglmcmFtZV9idXJ5IDAgLy8gcmVzdWx0OiBudW1iZXIKCWIgKmlmMF9lbmQKCippZjBfZWxzZToKCWVyciAvLyAnSW52YWxpZCBvcGVyYXRpb24nCgoqaWYwX2VuZDoKCS8vIGNvbnRyYWN0cy9kZW1vLXRlYWxzY3JpcHQuYWxnby50czo0NQoJLy8gcmV0dXJuIHJlc3VsdDsKCWZyYW1lX2RpZyAwIC8vIHJlc3VsdDogbnVtYmVyCgoJLy8gc2V0IHRoZSBzdWJyb3V0aW5lIHJldHVybiB2YWx1ZQoJZnJhbWVfYnVyeSAwCglyZXRzdWIKCiphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb246CglpbnQgMQoJcmV0dXJuCgoqY3JlYXRlX05vT3A6CgltZXRob2QgImNyZWF0ZUFwcGxpY2F0aW9uKCl2b2lkIgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9jcmVhdGVBcHBsaWNhdGlvbgoJZXJyCgoqY2FsbF9Ob09wOgoJbWV0aG9kICJkb01hdGgodWludDY0LHVpbnQ2NCxzdHJpbmcpdWludDY0IgoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAoJbWF0Y2ggKmFiaV9yb3V0ZV9kb01hdGgKCWVycg==",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDEw"
  },
  "contract": {
    "name": "DemoTealscript",
    "desc": "",
    "methods": [
      {
        "name": "doMath",
        "desc": "A method that takes two numbers and does either addition or subtraction",
        "args": [
          {
            "name": "a",
            "type": "uint64",
            "desc": "The first number"
          },
          {
            "name": "b",
            "type": "uint64",
            "desc": "The second number"
          },
          {
            "name": "operation",
            "type": "string",
            "desc": "The operation to perform. Can be either 'sum' or 'difference'"
          }
        ],
        "returns": {
          "type": "uint64",
          "desc": "The result of the operation"
        }
      },
      {
        "name": "createApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the DemoTealscript smart contract.
 */
export type DemoTealscript = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'doMath(uint64,uint64,string)uint64' | 'doMath', {
      argsObj: {
        /**
         * The first number
         */
        a: bigint | number
        /**
         * The second number
         */
        b: bigint | number
        /**
         * The operation to perform. Can be either 'sum' or 'difference'
         */
        operation: string
      }
      argsTuple: [a: bigint | number, b: bigint | number, operation: string]
      /**
       * The result of the operation
       */
      returns: bigint
    }>
    & Record<'createApplication()void' | 'createApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
}
/**
 * Defines the possible abi call signatures
 */
export type DemoTealscriptSig = keyof DemoTealscript['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends DemoTealscriptSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the DemoTealscript smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends DemoTealscriptSig> = DemoTealscript['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the DemoTealscript smart contract to the method's return type
 */
export type MethodReturn<TSignature extends DemoTealscriptSig> = DemoTealscript['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type DemoTealscriptCreateCalls = (typeof DemoTealscriptCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type DemoTealscriptCreateCallParams =
  | (TypedCallParams<'createApplication()void'> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type DemoTealscriptDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: DemoTealscriptCreateCalls) => DemoTealscriptCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class DemoTealscriptCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the DemoTealscript smart contract using the createApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the doMath(uint64,uint64,string)uint64 ABI method
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'doMath(uint64,uint64,string)uint64' as const,
      methodArgs: Array.isArray(args) ? args : [args.a, args.b, args.operation],
      ...params,
    }
  }
}

/**
 * A client to make calls to the DemoTealscript smart contract
 */
export class DemoTealscriptClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `DemoTealscriptClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof DemoTealscript['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the DemoTealscript smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: DemoTealscriptDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(DemoTealscriptCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the DemoTealscript smart contract using the createApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication()void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication()void'>, AppCreateCallTransactionResult>(await $this.appClient.create(DemoTealscriptCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the DemoTealscript smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the doMath(uint64,uint64,string)uint64 ABI method.
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call: The result of the operation
   */
  public doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(DemoTealscriptCallFactory.doMath(args, params))
  }

  public compose(): DemoTealscriptComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.doMath(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as DemoTealscriptComposer
  }
}
export type DemoTealscriptComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the doMath(uint64,uint64,string)uint64 ABI method.
   *
   * A method that takes two numbers and does either addition or subtraction
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  doMath(args: MethodArgs<'doMath(uint64,uint64,string)uint64'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): DemoTealscriptComposer<[...TReturns, MethodReturn<'doMath(uint64,uint64,string)uint64'>]>

  /**
   * Makes a clear_state call to an existing instance of the DemoTealscript smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): DemoTealscriptComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): DemoTealscriptComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<DemoTealscriptComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<DemoTealscriptComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type DemoTealscriptComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type DemoTealscriptComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}