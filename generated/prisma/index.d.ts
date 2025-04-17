
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Tickets
 * 
 */
export type Tickets = $Result.DefaultSelection<Prisma.$TicketsPayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model Couponds
 * 
 */
export type Couponds = $Result.DefaultSelection<Prisma.$CoupondsPayload>
/**
 * Model Vouchers
 * 
 */
export type Vouchers = $Result.DefaultSelection<Prisma.$VouchersPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model Points
 * 
 */
export type Points = $Result.DefaultSelection<Prisma.$PointsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  PROMOTOR: 'PROMOTOR'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickets`: Exposes CRUD operations for the **Tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.tickets.findMany()
    * ```
    */
  get tickets(): Prisma.TicketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.couponds`: Exposes CRUD operations for the **Couponds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couponds
    * const couponds = await prisma.couponds.findMany()
    * ```
    */
  get couponds(): Prisma.CoupondsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vouchers`: Exposes CRUD operations for the **Vouchers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.vouchers.findMany()
    * ```
    */
  get vouchers(): Prisma.VouchersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.points`: Exposes CRUD operations for the **Points** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.points.findMany()
    * ```
    */
  get points(): Prisma.PointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Events: 'Events',
    Tickets: 'Tickets',
    Transactions: 'Transactions',
    Couponds: 'Couponds',
    Vouchers: 'Vouchers',
    Referral: 'Referral',
    Points: 'Points',
    Notifications: 'Notifications'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "events" | "tickets" | "transactions" | "couponds" | "vouchers" | "referral" | "points" | "notifications"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Tickets: {
        payload: Prisma.$TicketsPayload<ExtArgs>
        fields: Prisma.TicketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findFirst: {
            args: Prisma.TicketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          findMany: {
            args: Prisma.TicketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          create: {
            args: Prisma.TicketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          createMany: {
            args: Prisma.TicketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          delete: {
            args: Prisma.TicketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          update: {
            args: Prisma.TicketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          deleteMany: {
            args: Prisma.TicketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>[]
          }
          upsert: {
            args: Prisma.TicketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketsPayload>
          }
          aggregate: {
            args: Prisma.TicketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickets>
          }
          groupBy: {
            args: Prisma.TicketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketsCountArgs<ExtArgs>
            result: $Utils.Optional<TicketsCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      Couponds: {
        payload: Prisma.$CoupondsPayload<ExtArgs>
        fields: Prisma.CoupondsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoupondsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoupondsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>
          }
          findFirst: {
            args: Prisma.CoupondsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoupondsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>
          }
          findMany: {
            args: Prisma.CoupondsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>[]
          }
          create: {
            args: Prisma.CoupondsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>
          }
          createMany: {
            args: Prisma.CoupondsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoupondsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>[]
          }
          delete: {
            args: Prisma.CoupondsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>
          }
          update: {
            args: Prisma.CoupondsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>
          }
          deleteMany: {
            args: Prisma.CoupondsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoupondsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoupondsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>[]
          }
          upsert: {
            args: Prisma.CoupondsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoupondsPayload>
          }
          aggregate: {
            args: Prisma.CoupondsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCouponds>
          }
          groupBy: {
            args: Prisma.CoupondsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoupondsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoupondsCountArgs<ExtArgs>
            result: $Utils.Optional<CoupondsCountAggregateOutputType> | number
          }
        }
      }
      Vouchers: {
        payload: Prisma.$VouchersPayload<ExtArgs>
        fields: Prisma.VouchersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VouchersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VouchersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          findFirst: {
            args: Prisma.VouchersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VouchersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          findMany: {
            args: Prisma.VouchersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>[]
          }
          create: {
            args: Prisma.VouchersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          createMany: {
            args: Prisma.VouchersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VouchersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>[]
          }
          delete: {
            args: Prisma.VouchersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          update: {
            args: Prisma.VouchersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          deleteMany: {
            args: Prisma.VouchersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VouchersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VouchersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>[]
          }
          upsert: {
            args: Prisma.VouchersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VouchersPayload>
          }
          aggregate: {
            args: Prisma.VouchersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVouchers>
          }
          groupBy: {
            args: Prisma.VouchersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VouchersGroupByOutputType>[]
          }
          count: {
            args: Prisma.VouchersCountArgs<ExtArgs>
            result: $Utils.Optional<VouchersCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      Points: {
        payload: Prisma.$PointsPayload<ExtArgs>
        fields: Prisma.PointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          findFirst: {
            args: Prisma.PointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          findMany: {
            args: Prisma.PointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          create: {
            args: Prisma.PointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          createMany: {
            args: Prisma.PointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          delete: {
            args: Prisma.PointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          update: {
            args: Prisma.PointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          deleteMany: {
            args: Prisma.PointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          upsert: {
            args: Prisma.PointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          aggregate: {
            args: Prisma.PointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoints>
          }
          groupBy: {
            args: Prisma.PointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointsCountArgs<ExtArgs>
            result: $Utils.Optional<PointsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    events?: EventsOmit
    tickets?: TicketsOmit
    transactions?: TransactionsOmit
    couponds?: CoupondsOmit
    vouchers?: VouchersOmit
    referral?: ReferralOmit
    points?: PointsOmit
    notifications?: NotificationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    events: number
    transactions: number
    points: number
    couponds: number
    notifications: number
    referredUsers: number
    referrals: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UsersCountOutputTypeCountEventsArgs
    transactions?: boolean | UsersCountOutputTypeCountTransactionsArgs
    points?: boolean | UsersCountOutputTypeCountPointsArgs
    couponds?: boolean | UsersCountOutputTypeCountCoupondsArgs
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs
    referredUsers?: boolean | UsersCountOutputTypeCountReferredUsersArgs
    referrals?: boolean | UsersCountOutputTypeCountReferralsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCoupondsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupondsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }


  /**
   * Count Type EventsCountOutputType
   */

  export type EventsCountOutputType = {
    transactions: number
    tickets: number
    vouchers: number
  }

  export type EventsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | EventsCountOutputTypeCountTransactionsArgs
    tickets?: boolean | EventsCountOutputTypeCountTicketsArgs
    vouchers?: boolean | EventsCountOutputTypeCountVouchersArgs
  }

  // Custom InputTypes
  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventsCountOutputType
     */
    select?: EventsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
  }

  /**
   * EventsCountOutputType without action
   */
  export type EventsCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VouchersWhereInput
  }


  /**
   * Count Type TicketsCountOutputType
   */

  export type TicketsCountOutputType = {
    transactions: number
  }

  export type TicketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TicketsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketsCountOutputType
     */
    select?: TicketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketsCountOutputType without action
   */
  export type TicketsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type CoupondsCountOutputType
   */

  export type CoupondsCountOutputType = {
    transactions: number
  }

  export type CoupondsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | CoupondsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CoupondsCountOutputType without action
   */
  export type CoupondsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoupondsCountOutputType
     */
    select?: CoupondsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoupondsCountOutputType without action
   */
  export type CoupondsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Count Type VouchersCountOutputType
   */

  export type VouchersCountOutputType = {
    transactions: number
  }

  export type VouchersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | VouchersCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VouchersCountOutputType
     */
    select?: VouchersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VouchersCountOutputType without action
   */
  export type VouchersCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    usersId: number | null
  }

  export type UsersSumAggregateOutputType = {
    usersId: number | null
  }

  export type UsersMinAggregateOutputType = {
    usersId: number | null
    name: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.Role | null
    referralCode: string | null
    referredBy: string | null
    createdAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    usersId: number | null
    name: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.Role | null
    referralCode: string | null
    referredBy: string | null
    createdAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    usersId: number
    name: number
    email: number
    password: number
    profileImage: number
    role: number
    referralCode: number
    referredBy: number
    createdAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    usersId?: true
  }

  export type UsersSumAggregateInputType = {
    usersId?: true
  }

  export type UsersMinAggregateInputType = {
    usersId?: true
    name?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    referralCode?: true
    referredBy?: true
    createdAt?: true
  }

  export type UsersMaxAggregateInputType = {
    usersId?: true
    name?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    referralCode?: true
    referredBy?: true
    createdAt?: true
  }

  export type UsersCountAggregateInputType = {
    usersId?: true
    name?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    referralCode?: true
    referredBy?: true
    createdAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    usersId: number
    name: string
    email: string
    password: string
    profileImage: string | null
    role: $Enums.Role | null
    referralCode: string | null
    referredBy: string | null
    createdAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usersId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
    events?: boolean | Users$eventsArgs<ExtArgs>
    transactions?: boolean | Users$transactionsArgs<ExtArgs>
    points?: boolean | Users$pointsArgs<ExtArgs>
    couponds?: boolean | Users$coupondsArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    referredUsers?: boolean | Users$referredUsersArgs<ExtArgs>
    referrals?: boolean | Users$referralsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usersId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usersId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    usersId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usersId" | "name" | "email" | "password" | "profileImage" | "role" | "referralCode" | "referredBy" | "createdAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Users$eventsArgs<ExtArgs>
    transactions?: boolean | Users$transactionsArgs<ExtArgs>
    points?: boolean | Users$pointsArgs<ExtArgs>
    couponds?: boolean | Users$coupondsArgs<ExtArgs>
    notifications?: boolean | Users$notificationsArgs<ExtArgs>
    referredUsers?: boolean | Users$referredUsersArgs<ExtArgs>
    referrals?: boolean | Users$referralsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      events: Prisma.$EventsPayload<ExtArgs>[]
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      points: Prisma.$PointsPayload<ExtArgs>[]
      couponds: Prisma.$CoupondsPayload<ExtArgs>[]
      notifications: Prisma.$NotificationsPayload<ExtArgs>[]
      referredUsers: Prisma.$ReferralPayload<ExtArgs>[]
      referrals: Prisma.$ReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usersId: number
      name: string
      email: string
      password: string
      profileImage: string | null
      role: $Enums.Role | null
      referralCode: string | null
      referredBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `usersId`
     * const usersWithUsersIdOnly = await prisma.users.findMany({ select: { usersId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `usersId`
     * const usersWithUsersIdOnly = await prisma.users.createManyAndReturn({
     *   select: { usersId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `usersId`
     * const usersWithUsersIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { usersId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Users$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Users$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Users$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends Users$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Users$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    couponds<T extends Users$coupondsArgs<ExtArgs> = {}>(args?: Subset<T, Users$coupondsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Users$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referredUsers<T extends Users$referredUsersArgs<ExtArgs> = {}>(args?: Subset<T, Users$referredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referrals<T extends Users$referralsArgs<ExtArgs> = {}>(args?: Subset<T, Users$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly usersId: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly profileImage: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly referralCode: FieldRef<"Users", 'String'>
    readonly referredBy: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.events
   */
  export type Users$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Users.transactions
   */
  export type Users$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Users.points
   */
  export type Users$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    cursor?: PointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Users.couponds
   */
  export type Users$coupondsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    where?: CoupondsWhereInput
    orderBy?: CoupondsOrderByWithRelationInput | CoupondsOrderByWithRelationInput[]
    cursor?: CoupondsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoupondsScalarFieldEnum | CoupondsScalarFieldEnum[]
  }

  /**
   * Users.notifications
   */
  export type Users$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    cursor?: NotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Users.referredUsers
   */
  export type Users$referredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Users.referrals
   */
  export type Users$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    eventId: number | null
    promotorId: number | null
    availableSeats: number | null
  }

  export type EventsSumAggregateOutputType = {
    eventId: number | null
    promotorId: number | null
    availableSeats: number | null
  }

  export type EventsMinAggregateOutputType = {
    eventId: number | null
    promotorId: number | null
    nameEvents: string | null
    categoryEvents: string | null
    priceEvents: string | null
    descriptionEvents: string | null
    locationEvents: string | null
    startDateEvents: Date | null
    endDateEvents: Date | null
    availableSeats: number | null
    createdAt: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    eventId: number | null
    promotorId: number | null
    nameEvents: string | null
    categoryEvents: string | null
    priceEvents: string | null
    descriptionEvents: string | null
    locationEvents: string | null
    startDateEvents: Date | null
    endDateEvents: Date | null
    availableSeats: number | null
    createdAt: Date | null
  }

  export type EventsCountAggregateOutputType = {
    eventId: number
    promotorId: number
    nameEvents: number
    categoryEvents: number
    priceEvents: number
    descriptionEvents: number
    locationEvents: number
    startDateEvents: number
    endDateEvents: number
    availableSeats: number
    createdAt: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    eventId?: true
    promotorId?: true
    availableSeats?: true
  }

  export type EventsSumAggregateInputType = {
    eventId?: true
    promotorId?: true
    availableSeats?: true
  }

  export type EventsMinAggregateInputType = {
    eventId?: true
    promotorId?: true
    nameEvents?: true
    categoryEvents?: true
    priceEvents?: true
    descriptionEvents?: true
    locationEvents?: true
    startDateEvents?: true
    endDateEvents?: true
    availableSeats?: true
    createdAt?: true
  }

  export type EventsMaxAggregateInputType = {
    eventId?: true
    promotorId?: true
    nameEvents?: true
    categoryEvents?: true
    priceEvents?: true
    descriptionEvents?: true
    locationEvents?: true
    startDateEvents?: true
    endDateEvents?: true
    availableSeats?: true
    createdAt?: true
  }

  export type EventsCountAggregateInputType = {
    eventId?: true
    promotorId?: true
    nameEvents?: true
    categoryEvents?: true
    priceEvents?: true
    descriptionEvents?: true
    locationEvents?: true
    startDateEvents?: true
    endDateEvents?: true
    availableSeats?: true
    createdAt?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    eventId: number
    promotorId: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date
    endDateEvents: Date
    availableSeats: number
    createdAt: Date
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    promotorId?: boolean
    nameEvents?: boolean
    categoryEvents?: boolean
    priceEvents?: boolean
    descriptionEvents?: boolean
    locationEvents?: boolean
    startDateEvents?: boolean
    endDateEvents?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    promotor?: boolean | UsersDefaultArgs<ExtArgs>
    transactions?: boolean | Events$transactionsArgs<ExtArgs>
    tickets?: boolean | Events$ticketsArgs<ExtArgs>
    vouchers?: boolean | Events$vouchersArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    promotorId?: boolean
    nameEvents?: boolean
    categoryEvents?: boolean
    priceEvents?: boolean
    descriptionEvents?: boolean
    locationEvents?: boolean
    startDateEvents?: boolean
    endDateEvents?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    promotor?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    promotorId?: boolean
    nameEvents?: boolean
    categoryEvents?: boolean
    priceEvents?: boolean
    descriptionEvents?: boolean
    locationEvents?: boolean
    startDateEvents?: boolean
    endDateEvents?: boolean
    availableSeats?: boolean
    createdAt?: boolean
    promotor?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    eventId?: boolean
    promotorId?: boolean
    nameEvents?: boolean
    categoryEvents?: boolean
    priceEvents?: boolean
    descriptionEvents?: boolean
    locationEvents?: boolean
    startDateEvents?: boolean
    endDateEvents?: boolean
    availableSeats?: boolean
    createdAt?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "promotorId" | "nameEvents" | "categoryEvents" | "priceEvents" | "descriptionEvents" | "locationEvents" | "startDateEvents" | "endDateEvents" | "availableSeats" | "createdAt", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | UsersDefaultArgs<ExtArgs>
    transactions?: boolean | Events$transactionsArgs<ExtArgs>
    tickets?: boolean | Events$ticketsArgs<ExtArgs>
    vouchers?: boolean | Events$vouchersArgs<ExtArgs>
    _count?: boolean | EventsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotor?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      promotor: Prisma.$UsersPayload<ExtArgs>
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      tickets: Prisma.$TicketsPayload<ExtArgs>[]
      vouchers: Prisma.$VouchersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: number
      promotorId: number
      nameEvents: string
      categoryEvents: string
      priceEvents: string
      descriptionEvents: string
      locationEvents: string
      startDateEvents: Date
      endDateEvents: Date
      availableSeats: number
      createdAt: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventsWithEventIdOnly = await prisma.events.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `eventId`
     * const eventsWithEventIdOnly = await prisma.events.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `eventId`
     * const eventsWithEventIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotor<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Events$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Events$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Events$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Events$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends Events$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, Events$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly eventId: FieldRef<"Events", 'Int'>
    readonly promotorId: FieldRef<"Events", 'Int'>
    readonly nameEvents: FieldRef<"Events", 'String'>
    readonly categoryEvents: FieldRef<"Events", 'String'>
    readonly priceEvents: FieldRef<"Events", 'String'>
    readonly descriptionEvents: FieldRef<"Events", 'String'>
    readonly locationEvents: FieldRef<"Events", 'String'>
    readonly startDateEvents: FieldRef<"Events", 'DateTime'>
    readonly endDateEvents: FieldRef<"Events", 'DateTime'>
    readonly availableSeats: FieldRef<"Events", 'Int'>
    readonly createdAt: FieldRef<"Events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events.transactions
   */
  export type Events$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Events.tickets
   */
  export type Events$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    cursor?: TicketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Events.vouchers
   */
  export type Events$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    where?: VouchersWhereInput
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    cursor?: VouchersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model Tickets
   */

  export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  export type TicketsAvgAggregateOutputType = {
    ticketId: number | null
    eventId: number | null
    quantityAvailable: number | null
  }

  export type TicketsSumAggregateOutputType = {
    ticketId: number | null
    eventId: number | null
    quantityAvailable: number | null
  }

  export type TicketsMinAggregateOutputType = {
    ticketId: number | null
    eventId: number | null
    ticketType: string | null
    ticketPrice: string | null
    quantityAvailable: number | null
    createdAt: Date | null
  }

  export type TicketsMaxAggregateOutputType = {
    ticketId: number | null
    eventId: number | null
    ticketType: string | null
    ticketPrice: string | null
    quantityAvailable: number | null
    createdAt: Date | null
  }

  export type TicketsCountAggregateOutputType = {
    ticketId: number
    eventId: number
    ticketType: number
    ticketPrice: number
    quantityAvailable: number
    createdAt: number
    _all: number
  }


  export type TicketsAvgAggregateInputType = {
    ticketId?: true
    eventId?: true
    quantityAvailable?: true
  }

  export type TicketsSumAggregateInputType = {
    ticketId?: true
    eventId?: true
    quantityAvailable?: true
  }

  export type TicketsMinAggregateInputType = {
    ticketId?: true
    eventId?: true
    ticketType?: true
    ticketPrice?: true
    quantityAvailable?: true
    createdAt?: true
  }

  export type TicketsMaxAggregateInputType = {
    ticketId?: true
    eventId?: true
    ticketType?: true
    ticketPrice?: true
    quantityAvailable?: true
    createdAt?: true
  }

  export type TicketsCountAggregateInputType = {
    ticketId?: true
    eventId?: true
    ticketType?: true
    ticketPrice?: true
    quantityAvailable?: true
    createdAt?: true
    _all?: true
  }

  export type TicketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to aggregate.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketsMaxAggregateInputType
  }

  export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
        [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickets[P]>
      : GetScalarType<T[P], AggregateTickets[P]>
  }




  export type TicketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketsWhereInput
    orderBy?: TicketsOrderByWithAggregationInput | TicketsOrderByWithAggregationInput[]
    by: TicketsScalarFieldEnum[] | TicketsScalarFieldEnum
    having?: TicketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketsCountAggregateInputType | true
    _avg?: TicketsAvgAggregateInputType
    _sum?: TicketsSumAggregateInputType
    _min?: TicketsMinAggregateInputType
    _max?: TicketsMaxAggregateInputType
  }

  export type TicketsGroupByOutputType = {
    ticketId: number
    eventId: number
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt: Date
    _count: TicketsCountAggregateOutputType | null
    _avg: TicketsAvgAggregateOutputType | null
    _sum: TicketsSumAggregateOutputType | null
    _min: TicketsMinAggregateOutputType | null
    _max: TicketsMaxAggregateOutputType | null
  }

  type GetTicketsGroupByPayload<T extends TicketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketsGroupByOutputType[P]>
            : GetScalarType<T[P], TicketsGroupByOutputType[P]>
        }
      >
    >


  export type TicketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    eventId?: boolean
    ticketType?: boolean
    ticketPrice?: boolean
    quantityAvailable?: boolean
    createdAt?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
    transactions?: boolean | Tickets$transactionsArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    eventId?: boolean
    ticketType?: boolean
    ticketPrice?: boolean
    quantityAvailable?: boolean
    createdAt?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ticketId?: boolean
    eventId?: boolean
    ticketType?: boolean
    ticketPrice?: boolean
    quantityAvailable?: boolean
    createdAt?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tickets"]>

  export type TicketsSelectScalar = {
    ticketId?: boolean
    eventId?: boolean
    ticketType?: boolean
    ticketPrice?: boolean
    quantityAvailable?: boolean
    createdAt?: boolean
  }

  export type TicketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ticketId" | "eventId" | "ticketType" | "ticketPrice" | "quantityAvailable" | "createdAt", ExtArgs["result"]["tickets"]>
  export type TicketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
    transactions?: boolean | Tickets$transactionsArgs<ExtArgs>
    _count?: boolean | TicketsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type TicketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }

  export type $TicketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tickets"
    objects: {
      event: Prisma.$EventsPayload<ExtArgs>
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ticketId: number
      eventId: number
      ticketType: string
      ticketPrice: string
      quantityAvailable: number
      createdAt: Date
    }, ExtArgs["result"]["tickets"]>
    composites: {}
  }

  type TicketsGetPayload<S extends boolean | null | undefined | TicketsDefaultArgs> = $Result.GetResult<Prisma.$TicketsPayload, S>

  type TicketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketsCountAggregateInputType | true
    }

  export interface TicketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tickets'], meta: { name: 'Tickets' } }
    /**
     * Find zero or one Tickets that matches the filter.
     * @param {TicketsFindUniqueArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketsFindUniqueArgs>(args: SelectSubset<T, TicketsFindUniqueArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketsFindUniqueOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketsFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketsFindFirstArgs>(args?: SelectSubset<T, TicketsFindFirstArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindFirstOrThrowArgs} args - Arguments to find a Tickets
     * @example
     * // Get one Tickets
     * const tickets = await prisma.tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketsFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.tickets.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.tickets.findMany({ take: 10 })
     * 
     * // Only select the `ticketId`
     * const ticketsWithTicketIdOnly = await prisma.tickets.findMany({ select: { ticketId: true } })
     * 
     */
    findMany<T extends TicketsFindManyArgs>(args?: SelectSubset<T, TicketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickets.
     * @param {TicketsCreateArgs} args - Arguments to create a Tickets.
     * @example
     * // Create one Tickets
     * const Tickets = await prisma.tickets.create({
     *   data: {
     *     // ... data to create a Tickets
     *   }
     * })
     * 
     */
    create<T extends TicketsCreateArgs>(args: SelectSubset<T, TicketsCreateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketsCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketsCreateManyArgs>(args?: SelectSubset<T, TicketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketsCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const tickets = await prisma.tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `ticketId`
     * const ticketsWithTicketIdOnly = await prisma.tickets.createManyAndReturn({
     *   select: { ticketId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketsCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickets.
     * @param {TicketsDeleteArgs} args - Arguments to delete one Tickets.
     * @example
     * // Delete one Tickets
     * const Tickets = await prisma.tickets.delete({
     *   where: {
     *     // ... filter to delete one Tickets
     *   }
     * })
     * 
     */
    delete<T extends TicketsDeleteArgs>(args: SelectSubset<T, TicketsDeleteArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickets.
     * @param {TicketsUpdateArgs} args - Arguments to update one Tickets.
     * @example
     * // Update one Tickets
     * const tickets = await prisma.tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketsUpdateArgs>(args: SelectSubset<T, TicketsUpdateArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketsDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketsDeleteManyArgs>(args?: SelectSubset<T, TicketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketsUpdateManyArgs>(args: SelectSubset<T, TicketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketsUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const tickets = await prisma.tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `ticketId`
     * const ticketsWithTicketIdOnly = await prisma.tickets.updateManyAndReturn({
     *   select: { ticketId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketsUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickets.
     * @param {TicketsUpsertArgs} args - Arguments to update or create a Tickets.
     * @example
     * // Update or create a Tickets
     * const tickets = await prisma.tickets.upsert({
     *   create: {
     *     // ... data to create a Tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickets we want to update
     *   }
     * })
     */
    upsert<T extends TicketsUpsertArgs>(args: SelectSubset<T, TicketsUpsertArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.tickets.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketsCountArgs>(
      args?: Subset<T, TicketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketsAggregateArgs>(args: Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>

    /**
     * Group by Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketsGroupByArgs['orderBy'] }
        : { orderBy?: TicketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tickets model
   */
  readonly fields: TicketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Tickets$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Tickets$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tickets model
   */
  interface TicketsFieldRefs {
    readonly ticketId: FieldRef<"Tickets", 'Int'>
    readonly eventId: FieldRef<"Tickets", 'Int'>
    readonly ticketType: FieldRef<"Tickets", 'String'>
    readonly ticketPrice: FieldRef<"Tickets", 'String'>
    readonly quantityAvailable: FieldRef<"Tickets", 'Int'>
    readonly createdAt: FieldRef<"Tickets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tickets findUnique
   */
  export type TicketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findUniqueOrThrow
   */
  export type TicketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets findFirst
   */
  export type TicketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findFirstOrThrow
   */
  export type TicketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets findMany
   */
  export type TicketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketsOrderByWithRelationInput | TicketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketsScalarFieldEnum | TicketsScalarFieldEnum[]
  }

  /**
   * Tickets create
   */
  export type TicketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The data needed to create a Tickets.
     */
    data: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
  }

  /**
   * Tickets createMany
   */
  export type TicketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickets createManyAndReturn
   */
  export type TicketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketsCreateManyInput | TicketsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tickets update
   */
  export type TicketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The data needed to update a Tickets.
     */
    data: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
    /**
     * Choose, which Tickets to update.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets updateMany
   */
  export type TicketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Tickets updateManyAndReturn
   */
  export type TicketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tickets upsert
   */
  export type TicketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * The filter to search for the Tickets to update in case it exists.
     */
    where: TicketsWhereUniqueInput
    /**
     * In case the Tickets found by the `where` argument doesn't exist, create a new Tickets with this data.
     */
    create: XOR<TicketsCreateInput, TicketsUncheckedCreateInput>
    /**
     * In case the Tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketsUpdateInput, TicketsUncheckedUpdateInput>
  }

  /**
   * Tickets delete
   */
  export type TicketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
    /**
     * Filter which Tickets to delete.
     */
    where: TicketsWhereUniqueInput
  }

  /**
   * Tickets deleteMany
   */
  export type TicketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketsWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Tickets.transactions
   */
  export type Tickets$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Tickets without action
   */
  export type TicketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickets
     */
    select?: TicketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickets
     */
    omit?: TicketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketsInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    transactionId: number | null
    userId: number | null
    eventId: number | null
    ticketId: number | null
    ticketQuantity: number | null
    pointUsed: number | null
    coupondId: number | null
    voucherId: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    transactionId: number | null
    userId: number | null
    eventId: number | null
    ticketId: number | null
    ticketQuantity: number | null
    pointUsed: number | null
    coupondId: number | null
    voucherId: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    transactionId: number | null
    userId: number | null
    eventId: number | null
    ticketId: number | null
    ticketQuantity: number | null
    totalPrice: string | null
    pointUsed: number | null
    coupondId: number | null
    voucherId: number | null
    statusTransaction: string | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    transactionId: number | null
    userId: number | null
    eventId: number | null
    ticketId: number | null
    ticketQuantity: number | null
    totalPrice: string | null
    pointUsed: number | null
    coupondId: number | null
    voucherId: number | null
    statusTransaction: string | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    transactionId: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: number
    pointUsed: number
    coupondId: number
    voucherId: number
    statusTransaction: number
    createdAt: number
    expiredAt: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    transactionId?: true
    userId?: true
    eventId?: true
    ticketId?: true
    ticketQuantity?: true
    pointUsed?: true
    coupondId?: true
    voucherId?: true
  }

  export type TransactionsSumAggregateInputType = {
    transactionId?: true
    userId?: true
    eventId?: true
    ticketId?: true
    ticketQuantity?: true
    pointUsed?: true
    coupondId?: true
    voucherId?: true
  }

  export type TransactionsMinAggregateInputType = {
    transactionId?: true
    userId?: true
    eventId?: true
    ticketId?: true
    ticketQuantity?: true
    totalPrice?: true
    pointUsed?: true
    coupondId?: true
    voucherId?: true
    statusTransaction?: true
    createdAt?: true
    expiredAt?: true
  }

  export type TransactionsMaxAggregateInputType = {
    transactionId?: true
    userId?: true
    eventId?: true
    ticketId?: true
    ticketQuantity?: true
    totalPrice?: true
    pointUsed?: true
    coupondId?: true
    voucherId?: true
    statusTransaction?: true
    createdAt?: true
    expiredAt?: true
  }

  export type TransactionsCountAggregateInputType = {
    transactionId?: true
    userId?: true
    eventId?: true
    ticketId?: true
    ticketQuantity?: true
    totalPrice?: true
    pointUsed?: true
    coupondId?: true
    voucherId?: true
    statusTransaction?: true
    createdAt?: true
    expiredAt?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    transactionId: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId: number | null
    voucherId: number | null
    statusTransaction: string
    createdAt: Date
    expiredAt: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    ticketQuantity?: boolean
    totalPrice?: boolean
    pointUsed?: boolean
    coupondId?: boolean
    voucherId?: boolean
    statusTransaction?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
    ticket?: boolean | TicketsDefaultArgs<ExtArgs>
    coupond?: boolean | Transactions$coupondArgs<ExtArgs>
    voucher?: boolean | Transactions$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    ticketQuantity?: boolean
    totalPrice?: boolean
    pointUsed?: boolean
    coupondId?: boolean
    voucherId?: boolean
    statusTransaction?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
    ticket?: boolean | TicketsDefaultArgs<ExtArgs>
    coupond?: boolean | Transactions$coupondArgs<ExtArgs>
    voucher?: boolean | Transactions$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transactionId?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    ticketQuantity?: boolean
    totalPrice?: boolean
    pointUsed?: boolean
    coupondId?: boolean
    voucherId?: boolean
    statusTransaction?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
    ticket?: boolean | TicketsDefaultArgs<ExtArgs>
    coupond?: boolean | Transactions$coupondArgs<ExtArgs>
    voucher?: boolean | Transactions$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    transactionId?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    ticketQuantity?: boolean
    totalPrice?: boolean
    pointUsed?: boolean
    coupondId?: boolean
    voucherId?: boolean
    statusTransaction?: boolean
    createdAt?: boolean
    expiredAt?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"transactionId" | "userId" | "eventId" | "ticketId" | "ticketQuantity" | "totalPrice" | "pointUsed" | "coupondId" | "voucherId" | "statusTransaction" | "createdAt" | "expiredAt", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
    ticket?: boolean | TicketsDefaultArgs<ExtArgs>
    coupond?: boolean | Transactions$coupondArgs<ExtArgs>
    voucher?: boolean | Transactions$voucherArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
    ticket?: boolean | TicketsDefaultArgs<ExtArgs>
    coupond?: boolean | Transactions$coupondArgs<ExtArgs>
    voucher?: boolean | Transactions$voucherArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    event?: boolean | EventsDefaultArgs<ExtArgs>
    ticket?: boolean | TicketsDefaultArgs<ExtArgs>
    coupond?: boolean | Transactions$coupondArgs<ExtArgs>
    voucher?: boolean | Transactions$voucherArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      event: Prisma.$EventsPayload<ExtArgs>
      ticket: Prisma.$TicketsPayload<ExtArgs>
      coupond: Prisma.$CoupondsPayload<ExtArgs> | null
      voucher: Prisma.$VouchersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      transactionId: number
      userId: number
      eventId: number
      ticketId: number
      ticketQuantity: number
      totalPrice: string
      pointUsed: number
      coupondId: number | null
      voucherId: number | null
      statusTransaction: string
      createdAt: Date
      expiredAt: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `transactionId`
     * const transactionsWithTransactionIdOnly = await prisma.transactions.findMany({ select: { transactionId: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transactionId`
     * const transactionsWithTransactionIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { transactionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `transactionId`
     * const transactionsWithTransactionIdOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { transactionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TicketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketsDefaultArgs<ExtArgs>>): Prisma__TicketsClient<$Result.GetResult<Prisma.$TicketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coupond<T extends Transactions$coupondArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$coupondArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    voucher<T extends Transactions$voucherArgs<ExtArgs> = {}>(args?: Subset<T, Transactions$voucherArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly transactionId: FieldRef<"Transactions", 'Int'>
    readonly userId: FieldRef<"Transactions", 'Int'>
    readonly eventId: FieldRef<"Transactions", 'Int'>
    readonly ticketId: FieldRef<"Transactions", 'Int'>
    readonly ticketQuantity: FieldRef<"Transactions", 'Int'>
    readonly totalPrice: FieldRef<"Transactions", 'String'>
    readonly pointUsed: FieldRef<"Transactions", 'Int'>
    readonly coupondId: FieldRef<"Transactions", 'Int'>
    readonly voucherId: FieldRef<"Transactions", 'Int'>
    readonly statusTransaction: FieldRef<"Transactions", 'String'>
    readonly createdAt: FieldRef<"Transactions", 'DateTime'>
    readonly expiredAt: FieldRef<"Transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions.coupond
   */
  export type Transactions$coupondArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    where?: CoupondsWhereInput
  }

  /**
   * Transactions.voucher
   */
  export type Transactions$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    where?: VouchersWhereInput
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model Couponds
   */

  export type AggregateCouponds = {
    _count: CoupondsCountAggregateOutputType | null
    _avg: CoupondsAvgAggregateOutputType | null
    _sum: CoupondsSumAggregateOutputType | null
    _min: CoupondsMinAggregateOutputType | null
    _max: CoupondsMaxAggregateOutputType | null
  }

  export type CoupondsAvgAggregateOutputType = {
    coupondId: number | null
    userId: number | null
    couponAmmount: number | null
  }

  export type CoupondsSumAggregateOutputType = {
    coupondId: number | null
    userId: number | null
    couponAmmount: number | null
  }

  export type CoupondsMinAggregateOutputType = {
    coupondId: number | null
    userId: number | null
    couponAmmount: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type CoupondsMaxAggregateOutputType = {
    coupondId: number | null
    userId: number | null
    couponAmmount: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type CoupondsCountAggregateOutputType = {
    coupondId: number
    userId: number
    couponAmmount: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type CoupondsAvgAggregateInputType = {
    coupondId?: true
    userId?: true
    couponAmmount?: true
  }

  export type CoupondsSumAggregateInputType = {
    coupondId?: true
    userId?: true
    couponAmmount?: true
  }

  export type CoupondsMinAggregateInputType = {
    coupondId?: true
    userId?: true
    couponAmmount?: true
    expiredAt?: true
    createdAt?: true
  }

  export type CoupondsMaxAggregateInputType = {
    coupondId?: true
    userId?: true
    couponAmmount?: true
    expiredAt?: true
    createdAt?: true
  }

  export type CoupondsCountAggregateInputType = {
    coupondId?: true
    userId?: true
    couponAmmount?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type CoupondsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couponds to aggregate.
     */
    where?: CoupondsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couponds to fetch.
     */
    orderBy?: CoupondsOrderByWithRelationInput | CoupondsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoupondsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couponds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couponds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couponds
    **/
    _count?: true | CoupondsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoupondsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoupondsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoupondsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoupondsMaxAggregateInputType
  }

  export type GetCoupondsAggregateType<T extends CoupondsAggregateArgs> = {
        [P in keyof T & keyof AggregateCouponds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCouponds[P]>
      : GetScalarType<T[P], AggregateCouponds[P]>
  }




  export type CoupondsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoupondsWhereInput
    orderBy?: CoupondsOrderByWithAggregationInput | CoupondsOrderByWithAggregationInput[]
    by: CoupondsScalarFieldEnum[] | CoupondsScalarFieldEnum
    having?: CoupondsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoupondsCountAggregateInputType | true
    _avg?: CoupondsAvgAggregateInputType
    _sum?: CoupondsSumAggregateInputType
    _min?: CoupondsMinAggregateInputType
    _max?: CoupondsMaxAggregateInputType
  }

  export type CoupondsGroupByOutputType = {
    coupondId: number
    userId: number
    couponAmmount: number
    expiredAt: Date
    createdAt: Date
    _count: CoupondsCountAggregateOutputType | null
    _avg: CoupondsAvgAggregateOutputType | null
    _sum: CoupondsSumAggregateOutputType | null
    _min: CoupondsMinAggregateOutputType | null
    _max: CoupondsMaxAggregateOutputType | null
  }

  type GetCoupondsGroupByPayload<T extends CoupondsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoupondsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoupondsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoupondsGroupByOutputType[P]>
            : GetScalarType<T[P], CoupondsGroupByOutputType[P]>
        }
      >
    >


  export type CoupondsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupondId?: boolean
    userId?: boolean
    couponAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    transactions?: boolean | Couponds$transactionsArgs<ExtArgs>
    _count?: boolean | CoupondsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponds"]>

  export type CoupondsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupondId?: boolean
    userId?: boolean
    couponAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponds"]>

  export type CoupondsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coupondId?: boolean
    userId?: boolean
    couponAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["couponds"]>

  export type CoupondsSelectScalar = {
    coupondId?: boolean
    userId?: boolean
    couponAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }

  export type CoupondsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"coupondId" | "userId" | "couponAmmount" | "expiredAt" | "createdAt", ExtArgs["result"]["couponds"]>
  export type CoupondsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    transactions?: boolean | Couponds$transactionsArgs<ExtArgs>
    _count?: boolean | CoupondsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoupondsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CoupondsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CoupondsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Couponds"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      coupondId: number
      userId: number
      couponAmmount: number
      expiredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["couponds"]>
    composites: {}
  }

  type CoupondsGetPayload<S extends boolean | null | undefined | CoupondsDefaultArgs> = $Result.GetResult<Prisma.$CoupondsPayload, S>

  type CoupondsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoupondsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoupondsCountAggregateInputType | true
    }

  export interface CoupondsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Couponds'], meta: { name: 'Couponds' } }
    /**
     * Find zero or one Couponds that matches the filter.
     * @param {CoupondsFindUniqueArgs} args - Arguments to find a Couponds
     * @example
     * // Get one Couponds
     * const couponds = await prisma.couponds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoupondsFindUniqueArgs>(args: SelectSubset<T, CoupondsFindUniqueArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Couponds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoupondsFindUniqueOrThrowArgs} args - Arguments to find a Couponds
     * @example
     * // Get one Couponds
     * const couponds = await prisma.couponds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoupondsFindUniqueOrThrowArgs>(args: SelectSubset<T, CoupondsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couponds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsFindFirstArgs} args - Arguments to find a Couponds
     * @example
     * // Get one Couponds
     * const couponds = await prisma.couponds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoupondsFindFirstArgs>(args?: SelectSubset<T, CoupondsFindFirstArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Couponds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsFindFirstOrThrowArgs} args - Arguments to find a Couponds
     * @example
     * // Get one Couponds
     * const couponds = await prisma.couponds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoupondsFindFirstOrThrowArgs>(args?: SelectSubset<T, CoupondsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Couponds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couponds
     * const couponds = await prisma.couponds.findMany()
     * 
     * // Get first 10 Couponds
     * const couponds = await prisma.couponds.findMany({ take: 10 })
     * 
     * // Only select the `coupondId`
     * const coupondsWithCoupondIdOnly = await prisma.couponds.findMany({ select: { coupondId: true } })
     * 
     */
    findMany<T extends CoupondsFindManyArgs>(args?: SelectSubset<T, CoupondsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Couponds.
     * @param {CoupondsCreateArgs} args - Arguments to create a Couponds.
     * @example
     * // Create one Couponds
     * const Couponds = await prisma.couponds.create({
     *   data: {
     *     // ... data to create a Couponds
     *   }
     * })
     * 
     */
    create<T extends CoupondsCreateArgs>(args: SelectSubset<T, CoupondsCreateArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Couponds.
     * @param {CoupondsCreateManyArgs} args - Arguments to create many Couponds.
     * @example
     * // Create many Couponds
     * const couponds = await prisma.couponds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoupondsCreateManyArgs>(args?: SelectSubset<T, CoupondsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Couponds and returns the data saved in the database.
     * @param {CoupondsCreateManyAndReturnArgs} args - Arguments to create many Couponds.
     * @example
     * // Create many Couponds
     * const couponds = await prisma.couponds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Couponds and only return the `coupondId`
     * const coupondsWithCoupondIdOnly = await prisma.couponds.createManyAndReturn({
     *   select: { coupondId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoupondsCreateManyAndReturnArgs>(args?: SelectSubset<T, CoupondsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Couponds.
     * @param {CoupondsDeleteArgs} args - Arguments to delete one Couponds.
     * @example
     * // Delete one Couponds
     * const Couponds = await prisma.couponds.delete({
     *   where: {
     *     // ... filter to delete one Couponds
     *   }
     * })
     * 
     */
    delete<T extends CoupondsDeleteArgs>(args: SelectSubset<T, CoupondsDeleteArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Couponds.
     * @param {CoupondsUpdateArgs} args - Arguments to update one Couponds.
     * @example
     * // Update one Couponds
     * const couponds = await prisma.couponds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoupondsUpdateArgs>(args: SelectSubset<T, CoupondsUpdateArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Couponds.
     * @param {CoupondsDeleteManyArgs} args - Arguments to filter Couponds to delete.
     * @example
     * // Delete a few Couponds
     * const { count } = await prisma.couponds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoupondsDeleteManyArgs>(args?: SelectSubset<T, CoupondsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couponds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couponds
     * const couponds = await prisma.couponds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoupondsUpdateManyArgs>(args: SelectSubset<T, CoupondsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couponds and returns the data updated in the database.
     * @param {CoupondsUpdateManyAndReturnArgs} args - Arguments to update many Couponds.
     * @example
     * // Update many Couponds
     * const couponds = await prisma.couponds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Couponds and only return the `coupondId`
     * const coupondsWithCoupondIdOnly = await prisma.couponds.updateManyAndReturn({
     *   select: { coupondId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoupondsUpdateManyAndReturnArgs>(args: SelectSubset<T, CoupondsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Couponds.
     * @param {CoupondsUpsertArgs} args - Arguments to update or create a Couponds.
     * @example
     * // Update or create a Couponds
     * const couponds = await prisma.couponds.upsert({
     *   create: {
     *     // ... data to create a Couponds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Couponds we want to update
     *   }
     * })
     */
    upsert<T extends CoupondsUpsertArgs>(args: SelectSubset<T, CoupondsUpsertArgs<ExtArgs>>): Prisma__CoupondsClient<$Result.GetResult<Prisma.$CoupondsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Couponds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsCountArgs} args - Arguments to filter Couponds to count.
     * @example
     * // Count the number of Couponds
     * const count = await prisma.couponds.count({
     *   where: {
     *     // ... the filter for the Couponds we want to count
     *   }
     * })
    **/
    count<T extends CoupondsCountArgs>(
      args?: Subset<T, CoupondsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoupondsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Couponds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoupondsAggregateArgs>(args: Subset<T, CoupondsAggregateArgs>): Prisma.PrismaPromise<GetCoupondsAggregateType<T>>

    /**
     * Group by Couponds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoupondsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoupondsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoupondsGroupByArgs['orderBy'] }
        : { orderBy?: CoupondsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoupondsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoupondsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Couponds model
   */
  readonly fields: CoupondsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Couponds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoupondsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Couponds$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Couponds$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Couponds model
   */
  interface CoupondsFieldRefs {
    readonly coupondId: FieldRef<"Couponds", 'Int'>
    readonly userId: FieldRef<"Couponds", 'Int'>
    readonly couponAmmount: FieldRef<"Couponds", 'Int'>
    readonly expiredAt: FieldRef<"Couponds", 'DateTime'>
    readonly createdAt: FieldRef<"Couponds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Couponds findUnique
   */
  export type CoupondsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * Filter, which Couponds to fetch.
     */
    where: CoupondsWhereUniqueInput
  }

  /**
   * Couponds findUniqueOrThrow
   */
  export type CoupondsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * Filter, which Couponds to fetch.
     */
    where: CoupondsWhereUniqueInput
  }

  /**
   * Couponds findFirst
   */
  export type CoupondsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * Filter, which Couponds to fetch.
     */
    where?: CoupondsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couponds to fetch.
     */
    orderBy?: CoupondsOrderByWithRelationInput | CoupondsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couponds.
     */
    cursor?: CoupondsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couponds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couponds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couponds.
     */
    distinct?: CoupondsScalarFieldEnum | CoupondsScalarFieldEnum[]
  }

  /**
   * Couponds findFirstOrThrow
   */
  export type CoupondsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * Filter, which Couponds to fetch.
     */
    where?: CoupondsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couponds to fetch.
     */
    orderBy?: CoupondsOrderByWithRelationInput | CoupondsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couponds.
     */
    cursor?: CoupondsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couponds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couponds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couponds.
     */
    distinct?: CoupondsScalarFieldEnum | CoupondsScalarFieldEnum[]
  }

  /**
   * Couponds findMany
   */
  export type CoupondsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * Filter, which Couponds to fetch.
     */
    where?: CoupondsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couponds to fetch.
     */
    orderBy?: CoupondsOrderByWithRelationInput | CoupondsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couponds.
     */
    cursor?: CoupondsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couponds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couponds.
     */
    skip?: number
    distinct?: CoupondsScalarFieldEnum | CoupondsScalarFieldEnum[]
  }

  /**
   * Couponds create
   */
  export type CoupondsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * The data needed to create a Couponds.
     */
    data: XOR<CoupondsCreateInput, CoupondsUncheckedCreateInput>
  }

  /**
   * Couponds createMany
   */
  export type CoupondsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couponds.
     */
    data: CoupondsCreateManyInput | CoupondsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Couponds createManyAndReturn
   */
  export type CoupondsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * The data used to create many Couponds.
     */
    data: CoupondsCreateManyInput | CoupondsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Couponds update
   */
  export type CoupondsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * The data needed to update a Couponds.
     */
    data: XOR<CoupondsUpdateInput, CoupondsUncheckedUpdateInput>
    /**
     * Choose, which Couponds to update.
     */
    where: CoupondsWhereUniqueInput
  }

  /**
   * Couponds updateMany
   */
  export type CoupondsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couponds.
     */
    data: XOR<CoupondsUpdateManyMutationInput, CoupondsUncheckedUpdateManyInput>
    /**
     * Filter which Couponds to update
     */
    where?: CoupondsWhereInput
    /**
     * Limit how many Couponds to update.
     */
    limit?: number
  }

  /**
   * Couponds updateManyAndReturn
   */
  export type CoupondsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * The data used to update Couponds.
     */
    data: XOR<CoupondsUpdateManyMutationInput, CoupondsUncheckedUpdateManyInput>
    /**
     * Filter which Couponds to update
     */
    where?: CoupondsWhereInput
    /**
     * Limit how many Couponds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Couponds upsert
   */
  export type CoupondsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * The filter to search for the Couponds to update in case it exists.
     */
    where: CoupondsWhereUniqueInput
    /**
     * In case the Couponds found by the `where` argument doesn't exist, create a new Couponds with this data.
     */
    create: XOR<CoupondsCreateInput, CoupondsUncheckedCreateInput>
    /**
     * In case the Couponds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoupondsUpdateInput, CoupondsUncheckedUpdateInput>
  }

  /**
   * Couponds delete
   */
  export type CoupondsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
    /**
     * Filter which Couponds to delete.
     */
    where: CoupondsWhereUniqueInput
  }

  /**
   * Couponds deleteMany
   */
  export type CoupondsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couponds to delete
     */
    where?: CoupondsWhereInput
    /**
     * Limit how many Couponds to delete.
     */
    limit?: number
  }

  /**
   * Couponds.transactions
   */
  export type Couponds$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Couponds without action
   */
  export type CoupondsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Couponds
     */
    select?: CoupondsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Couponds
     */
    omit?: CoupondsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoupondsInclude<ExtArgs> | null
  }


  /**
   * Model Vouchers
   */

  export type AggregateVouchers = {
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  export type VouchersAvgAggregateOutputType = {
    voucherId: number | null
    eventId: number | null
    voucherAmmount: number | null
  }

  export type VouchersSumAggregateOutputType = {
    voucherId: number | null
    eventId: number | null
    voucherAmmount: number | null
  }

  export type VouchersMinAggregateOutputType = {
    voucherId: number | null
    eventId: number | null
    code: string | null
    voucherAmmount: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type VouchersMaxAggregateOutputType = {
    voucherId: number | null
    eventId: number | null
    code: string | null
    voucherAmmount: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type VouchersCountAggregateOutputType = {
    voucherId: number
    eventId: number
    code: number
    voucherAmmount: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type VouchersAvgAggregateInputType = {
    voucherId?: true
    eventId?: true
    voucherAmmount?: true
  }

  export type VouchersSumAggregateInputType = {
    voucherId?: true
    eventId?: true
    voucherAmmount?: true
  }

  export type VouchersMinAggregateInputType = {
    voucherId?: true
    eventId?: true
    code?: true
    voucherAmmount?: true
    expiredAt?: true
    createdAt?: true
  }

  export type VouchersMaxAggregateInputType = {
    voucherId?: true
    eventId?: true
    code?: true
    voucherAmmount?: true
    expiredAt?: true
    createdAt?: true
  }

  export type VouchersCountAggregateInputType = {
    voucherId?: true
    eventId?: true
    code?: true
    voucherAmmount?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type VouchersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to aggregate.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VouchersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VouchersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VouchersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VouchersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VouchersMaxAggregateInputType
  }

  export type GetVouchersAggregateType<T extends VouchersAggregateArgs> = {
        [P in keyof T & keyof AggregateVouchers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVouchers[P]>
      : GetScalarType<T[P], AggregateVouchers[P]>
  }




  export type VouchersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VouchersWhereInput
    orderBy?: VouchersOrderByWithAggregationInput | VouchersOrderByWithAggregationInput[]
    by: VouchersScalarFieldEnum[] | VouchersScalarFieldEnum
    having?: VouchersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VouchersCountAggregateInputType | true
    _avg?: VouchersAvgAggregateInputType
    _sum?: VouchersSumAggregateInputType
    _min?: VouchersMinAggregateInputType
    _max?: VouchersMaxAggregateInputType
  }

  export type VouchersGroupByOutputType = {
    voucherId: number
    eventId: number
    code: string
    voucherAmmount: number
    expiredAt: Date
    createdAt: Date
    _count: VouchersCountAggregateOutputType | null
    _avg: VouchersAvgAggregateOutputType | null
    _sum: VouchersSumAggregateOutputType | null
    _min: VouchersMinAggregateOutputType | null
    _max: VouchersMaxAggregateOutputType | null
  }

  type GetVouchersGroupByPayload<T extends VouchersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VouchersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VouchersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VouchersGroupByOutputType[P]>
            : GetScalarType<T[P], VouchersGroupByOutputType[P]>
        }
      >
    >


  export type VouchersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voucherId?: boolean
    eventId?: boolean
    code?: boolean
    voucherAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
    transactions?: boolean | Vouchers$transactionsArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type VouchersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voucherId?: boolean
    eventId?: boolean
    code?: boolean
    voucherAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type VouchersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voucherId?: boolean
    eventId?: boolean
    code?: boolean
    voucherAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vouchers"]>

  export type VouchersSelectScalar = {
    voucherId?: boolean
    eventId?: boolean
    code?: boolean
    voucherAmmount?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }

  export type VouchersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"voucherId" | "eventId" | "code" | "voucherAmmount" | "expiredAt" | "createdAt", ExtArgs["result"]["vouchers"]>
  export type VouchersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
    transactions?: boolean | Vouchers$transactionsArgs<ExtArgs>
    _count?: boolean | VouchersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VouchersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }
  export type VouchersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventsDefaultArgs<ExtArgs>
  }

  export type $VouchersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vouchers"
    objects: {
      event: Prisma.$EventsPayload<ExtArgs>
      transactions: Prisma.$TransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      voucherId: number
      eventId: number
      code: string
      voucherAmmount: number
      expiredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["vouchers"]>
    composites: {}
  }

  type VouchersGetPayload<S extends boolean | null | undefined | VouchersDefaultArgs> = $Result.GetResult<Prisma.$VouchersPayload, S>

  type VouchersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VouchersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VouchersCountAggregateInputType | true
    }

  export interface VouchersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vouchers'], meta: { name: 'Vouchers' } }
    /**
     * Find zero or one Vouchers that matches the filter.
     * @param {VouchersFindUniqueArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VouchersFindUniqueArgs>(args: SelectSubset<T, VouchersFindUniqueArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vouchers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VouchersFindUniqueOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VouchersFindUniqueOrThrowArgs>(args: SelectSubset<T, VouchersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersFindFirstArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VouchersFindFirstArgs>(args?: SelectSubset<T, VouchersFindFirstArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vouchers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersFindFirstOrThrowArgs} args - Arguments to find a Vouchers
     * @example
     * // Get one Vouchers
     * const vouchers = await prisma.vouchers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VouchersFindFirstOrThrowArgs>(args?: SelectSubset<T, VouchersFindFirstOrThrowArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.vouchers.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.vouchers.findMany({ take: 10 })
     * 
     * // Only select the `voucherId`
     * const vouchersWithVoucherIdOnly = await prisma.vouchers.findMany({ select: { voucherId: true } })
     * 
     */
    findMany<T extends VouchersFindManyArgs>(args?: SelectSubset<T, VouchersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vouchers.
     * @param {VouchersCreateArgs} args - Arguments to create a Vouchers.
     * @example
     * // Create one Vouchers
     * const Vouchers = await prisma.vouchers.create({
     *   data: {
     *     // ... data to create a Vouchers
     *   }
     * })
     * 
     */
    create<T extends VouchersCreateArgs>(args: SelectSubset<T, VouchersCreateArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VouchersCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VouchersCreateManyArgs>(args?: SelectSubset<T, VouchersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VouchersCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const vouchers = await prisma.vouchers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `voucherId`
     * const vouchersWithVoucherIdOnly = await prisma.vouchers.createManyAndReturn({
     *   select: { voucherId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VouchersCreateManyAndReturnArgs>(args?: SelectSubset<T, VouchersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vouchers.
     * @param {VouchersDeleteArgs} args - Arguments to delete one Vouchers.
     * @example
     * // Delete one Vouchers
     * const Vouchers = await prisma.vouchers.delete({
     *   where: {
     *     // ... filter to delete one Vouchers
     *   }
     * })
     * 
     */
    delete<T extends VouchersDeleteArgs>(args: SelectSubset<T, VouchersDeleteArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vouchers.
     * @param {VouchersUpdateArgs} args - Arguments to update one Vouchers.
     * @example
     * // Update one Vouchers
     * const vouchers = await prisma.vouchers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VouchersUpdateArgs>(args: SelectSubset<T, VouchersUpdateArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VouchersDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.vouchers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VouchersDeleteManyArgs>(args?: SelectSubset<T, VouchersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VouchersUpdateManyArgs>(args: SelectSubset<T, VouchersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VouchersUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const vouchers = await prisma.vouchers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `voucherId`
     * const vouchersWithVoucherIdOnly = await prisma.vouchers.updateManyAndReturn({
     *   select: { voucherId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VouchersUpdateManyAndReturnArgs>(args: SelectSubset<T, VouchersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vouchers.
     * @param {VouchersUpsertArgs} args - Arguments to update or create a Vouchers.
     * @example
     * // Update or create a Vouchers
     * const vouchers = await prisma.vouchers.upsert({
     *   create: {
     *     // ... data to create a Vouchers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vouchers we want to update
     *   }
     * })
     */
    upsert<T extends VouchersUpsertArgs>(args: SelectSubset<T, VouchersUpsertArgs<ExtArgs>>): Prisma__VouchersClient<$Result.GetResult<Prisma.$VouchersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.vouchers.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VouchersCountArgs>(
      args?: Subset<T, VouchersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VouchersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VouchersAggregateArgs>(args: Subset<T, VouchersAggregateArgs>): Prisma.PrismaPromise<GetVouchersAggregateType<T>>

    /**
     * Group by Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VouchersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VouchersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VouchersGroupByArgs['orderBy'] }
        : { orderBy?: VouchersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VouchersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVouchersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vouchers model
   */
  readonly fields: VouchersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vouchers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VouchersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventsDefaultArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Vouchers$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Vouchers$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vouchers model
   */
  interface VouchersFieldRefs {
    readonly voucherId: FieldRef<"Vouchers", 'Int'>
    readonly eventId: FieldRef<"Vouchers", 'Int'>
    readonly code: FieldRef<"Vouchers", 'String'>
    readonly voucherAmmount: FieldRef<"Vouchers", 'Int'>
    readonly expiredAt: FieldRef<"Vouchers", 'DateTime'>
    readonly createdAt: FieldRef<"Vouchers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vouchers findUnique
   */
  export type VouchersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers findUniqueOrThrow
   */
  export type VouchersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers findFirst
   */
  export type VouchersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Vouchers findFirstOrThrow
   */
  export type VouchersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Vouchers findMany
   */
  export type VouchersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VouchersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VouchersOrderByWithRelationInput | VouchersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VouchersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VouchersScalarFieldEnum | VouchersScalarFieldEnum[]
  }

  /**
   * Vouchers create
   */
  export type VouchersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * The data needed to create a Vouchers.
     */
    data: XOR<VouchersCreateInput, VouchersUncheckedCreateInput>
  }

  /**
   * Vouchers createMany
   */
  export type VouchersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VouchersCreateManyInput | VouchersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vouchers createManyAndReturn
   */
  export type VouchersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VouchersCreateManyInput | VouchersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vouchers update
   */
  export type VouchersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * The data needed to update a Vouchers.
     */
    data: XOR<VouchersUpdateInput, VouchersUncheckedUpdateInput>
    /**
     * Choose, which Vouchers to update.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers updateMany
   */
  export type VouchersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VouchersUpdateManyMutationInput, VouchersUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VouchersWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Vouchers updateManyAndReturn
   */
  export type VouchersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VouchersUpdateManyMutationInput, VouchersUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VouchersWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vouchers upsert
   */
  export type VouchersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * The filter to search for the Vouchers to update in case it exists.
     */
    where: VouchersWhereUniqueInput
    /**
     * In case the Vouchers found by the `where` argument doesn't exist, create a new Vouchers with this data.
     */
    create: XOR<VouchersCreateInput, VouchersUncheckedCreateInput>
    /**
     * In case the Vouchers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VouchersUpdateInput, VouchersUncheckedUpdateInput>
  }

  /**
   * Vouchers delete
   */
  export type VouchersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
    /**
     * Filter which Vouchers to delete.
     */
    where: VouchersWhereUniqueInput
  }

  /**
   * Vouchers deleteMany
   */
  export type VouchersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VouchersWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Vouchers.transactions
   */
  export type Vouchers$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Vouchers without action
   */
  export type VouchersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vouchers
     */
    select?: VouchersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vouchers
     */
    omit?: VouchersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VouchersInclude<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    referralId: number | null
    referrerId: number | null
    referredUserId: number | null
    rewardCouponId: number | null
    rewardPoints: number | null
  }

  export type ReferralSumAggregateOutputType = {
    referralId: number | null
    referrerId: number | null
    referredUserId: number | null
    rewardCouponId: number | null
    rewardPoints: number | null
  }

  export type ReferralMinAggregateOutputType = {
    referralId: number | null
    referrerId: number | null
    referredUserId: number | null
    rewardCouponId: number | null
    rewardPoints: number | null
    createdAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    referralId: number | null
    referrerId: number | null
    referredUserId: number | null
    rewardCouponId: number | null
    rewardPoints: number | null
    createdAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    referralId: number
    referrerId: number
    referredUserId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    referralId?: true
    referrerId?: true
    referredUserId?: true
    rewardCouponId?: true
    rewardPoints?: true
  }

  export type ReferralSumAggregateInputType = {
    referralId?: true
    referrerId?: true
    referredUserId?: true
    rewardCouponId?: true
    rewardPoints?: true
  }

  export type ReferralMinAggregateInputType = {
    referralId?: true
    referrerId?: true
    referredUserId?: true
    rewardCouponId?: true
    rewardPoints?: true
    createdAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    referralId?: true
    referrerId?: true
    referredUserId?: true
    rewardCouponId?: true
    rewardPoints?: true
    createdAt?: true
  }

  export type ReferralCountAggregateInputType = {
    referralId?: true
    referrerId?: true
    referredUserId?: true
    rewardCouponId?: true
    rewardPoints?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    referralId: number
    referrerId: number
    referredUserId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt: Date
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    referralId?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    rewardCouponId?: boolean
    rewardPoints?: boolean
    createdAt?: boolean
    referrer?: boolean | UsersDefaultArgs<ExtArgs>
    referredUser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    referralId?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    rewardCouponId?: boolean
    rewardPoints?: boolean
    createdAt?: boolean
    referrer?: boolean | UsersDefaultArgs<ExtArgs>
    referredUser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    referralId?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    rewardCouponId?: boolean
    rewardPoints?: boolean
    createdAt?: boolean
    referrer?: boolean | UsersDefaultArgs<ExtArgs>
    referredUser?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    referralId?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    rewardCouponId?: boolean
    rewardPoints?: boolean
    createdAt?: boolean
  }

  export type ReferralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"referralId" | "referrerId" | "referredUserId" | "rewardCouponId" | "rewardPoints" | "createdAt", ExtArgs["result"]["referral"]>
  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UsersDefaultArgs<ExtArgs>
    referredUser?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UsersDefaultArgs<ExtArgs>
    referredUser?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UsersDefaultArgs<ExtArgs>
    referredUser?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      referrer: Prisma.$UsersPayload<ExtArgs>
      referredUser: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      referralId: number
      referrerId: number
      referredUserId: number
      rewardCouponId: number
      rewardPoints: number
      createdAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `referralId`
     * const referralWithReferralIdOnly = await prisma.referral.findMany({ select: { referralId: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `referralId`
     * const referralWithReferralIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { referralId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {ReferralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `referralId`
     * const referralWithReferralIdOnly = await prisma.referral.updateManyAndReturn({
     *   select: { referralId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferralUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referredUser<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */
  interface ReferralFieldRefs {
    readonly referralId: FieldRef<"Referral", 'Int'>
    readonly referrerId: FieldRef<"Referral", 'Int'>
    readonly referredUserId: FieldRef<"Referral", 'Int'>
    readonly rewardCouponId: FieldRef<"Referral", 'Int'>
    readonly rewardPoints: FieldRef<"Referral", 'Int'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
  }

  /**
   * Referral updateManyAndReturn
   */
  export type ReferralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
    /**
     * Limit how many Referrals to delete.
     */
    limit?: number
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Referral
     */
    omit?: ReferralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model Points
   */

  export type AggregatePoints = {
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  export type PointsAvgAggregateOutputType = {
    pointId: number | null
    userId: number | null
    pointsAmmount: number | null
  }

  export type PointsSumAggregateOutputType = {
    pointId: number | null
    userId: number | null
    pointsAmmount: number | null
  }

  export type PointsMinAggregateOutputType = {
    pointId: number | null
    userId: number | null
    pointsAmmount: number | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type PointsMaxAggregateOutputType = {
    pointId: number | null
    userId: number | null
    pointsAmmount: number | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type PointsCountAggregateOutputType = {
    pointId: number
    userId: number
    pointsAmmount: number
    createdAt: number
    expiredAt: number
    _all: number
  }


  export type PointsAvgAggregateInputType = {
    pointId?: true
    userId?: true
    pointsAmmount?: true
  }

  export type PointsSumAggregateInputType = {
    pointId?: true
    userId?: true
    pointsAmmount?: true
  }

  export type PointsMinAggregateInputType = {
    pointId?: true
    userId?: true
    pointsAmmount?: true
    createdAt?: true
    expiredAt?: true
  }

  export type PointsMaxAggregateInputType = {
    pointId?: true
    userId?: true
    pointsAmmount?: true
    createdAt?: true
    expiredAt?: true
  }

  export type PointsCountAggregateInputType = {
    pointId?: true
    userId?: true
    pointsAmmount?: true
    createdAt?: true
    expiredAt?: true
    _all?: true
  }

  export type PointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to aggregate.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsMaxAggregateInputType
  }

  export type GetPointsAggregateType<T extends PointsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoints[P]>
      : GetScalarType<T[P], AggregatePoints[P]>
  }




  export type PointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithAggregationInput | PointsOrderByWithAggregationInput[]
    by: PointsScalarFieldEnum[] | PointsScalarFieldEnum
    having?: PointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsCountAggregateInputType | true
    _avg?: PointsAvgAggregateInputType
    _sum?: PointsSumAggregateInputType
    _min?: PointsMinAggregateInputType
    _max?: PointsMaxAggregateInputType
  }

  export type PointsGroupByOutputType = {
    pointId: number
    userId: number
    pointsAmmount: number
    createdAt: Date
    expiredAt: Date
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  type GetPointsGroupByPayload<T extends PointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsGroupByOutputType[P]>
            : GetScalarType<T[P], PointsGroupByOutputType[P]>
        }
      >
    >


  export type PointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pointId?: boolean
    userId?: boolean
    pointsAmmount?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    Users?: boolean | Points$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pointId?: boolean
    userId?: boolean
    pointsAmmount?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    Users?: boolean | Points$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pointId?: boolean
    userId?: boolean
    pointsAmmount?: boolean
    createdAt?: boolean
    expiredAt?: boolean
    Users?: boolean | Points$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectScalar = {
    pointId?: boolean
    userId?: boolean
    pointsAmmount?: boolean
    createdAt?: boolean
    expiredAt?: boolean
  }

  export type PointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pointId" | "userId" | "pointsAmmount" | "createdAt" | "expiredAt", ExtArgs["result"]["points"]>
  export type PointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Points$UsersArgs<ExtArgs>
  }
  export type PointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Points$UsersArgs<ExtArgs>
  }
  export type PointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Points$UsersArgs<ExtArgs>
  }

  export type $PointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Points"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pointId: number
      userId: number
      pointsAmmount: number
      createdAt: Date
      expiredAt: Date
    }, ExtArgs["result"]["points"]>
    composites: {}
  }

  type PointsGetPayload<S extends boolean | null | undefined | PointsDefaultArgs> = $Result.GetResult<Prisma.$PointsPayload, S>

  type PointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsCountAggregateInputType | true
    }

  export interface PointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Points'], meta: { name: 'Points' } }
    /**
     * Find zero or one Points that matches the filter.
     * @param {PointsFindUniqueArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointsFindUniqueArgs>(args: SelectSubset<T, PointsFindUniqueArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Points that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointsFindUniqueOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointsFindUniqueOrThrowArgs>(args: SelectSubset<T, PointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindFirstArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointsFindFirstArgs>(args?: SelectSubset<T, PointsFindFirstArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindFirstOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointsFindFirstOrThrowArgs>(args?: SelectSubset<T, PointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.points.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.points.findMany({ take: 10 })
     * 
     * // Only select the `pointId`
     * const pointsWithPointIdOnly = await prisma.points.findMany({ select: { pointId: true } })
     * 
     */
    findMany<T extends PointsFindManyArgs>(args?: SelectSubset<T, PointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Points.
     * @param {PointsCreateArgs} args - Arguments to create a Points.
     * @example
     * // Create one Points
     * const Points = await prisma.points.create({
     *   data: {
     *     // ... data to create a Points
     *   }
     * })
     * 
     */
    create<T extends PointsCreateArgs>(args: SelectSubset<T, PointsCreateArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointsCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointsCreateManyArgs>(args?: SelectSubset<T, PointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointsCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `pointId`
     * const pointsWithPointIdOnly = await prisma.points.createManyAndReturn({
     *   select: { pointId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointsCreateManyAndReturnArgs>(args?: SelectSubset<T, PointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Points.
     * @param {PointsDeleteArgs} args - Arguments to delete one Points.
     * @example
     * // Delete one Points
     * const Points = await prisma.points.delete({
     *   where: {
     *     // ... filter to delete one Points
     *   }
     * })
     * 
     */
    delete<T extends PointsDeleteArgs>(args: SelectSubset<T, PointsDeleteArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Points.
     * @param {PointsUpdateArgs} args - Arguments to update one Points.
     * @example
     * // Update one Points
     * const points = await prisma.points.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointsUpdateArgs>(args: SelectSubset<T, PointsUpdateArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointsDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.points.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointsDeleteManyArgs>(args?: SelectSubset<T, PointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointsUpdateManyArgs>(args: SelectSubset<T, PointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointsUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `pointId`
     * const pointsWithPointIdOnly = await prisma.points.updateManyAndReturn({
     *   select: { pointId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointsUpdateManyAndReturnArgs>(args: SelectSubset<T, PointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Points.
     * @param {PointsUpsertArgs} args - Arguments to update or create a Points.
     * @example
     * // Update or create a Points
     * const points = await prisma.points.upsert({
     *   create: {
     *     // ... data to create a Points
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Points we want to update
     *   }
     * })
     */
    upsert<T extends PointsUpsertArgs>(args: SelectSubset<T, PointsUpsertArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.points.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointsCountArgs>(
      args?: Subset<T, PointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointsAggregateArgs>(args: Subset<T, PointsAggregateArgs>): Prisma.PrismaPromise<GetPointsAggregateType<T>>

    /**
     * Group by Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointsGroupByArgs['orderBy'] }
        : { orderBy?: PointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Points model
   */
  readonly fields: PointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Points.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Points$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Points$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Points model
   */
  interface PointsFieldRefs {
    readonly pointId: FieldRef<"Points", 'Int'>
    readonly userId: FieldRef<"Points", 'Int'>
    readonly pointsAmmount: FieldRef<"Points", 'Int'>
    readonly createdAt: FieldRef<"Points", 'DateTime'>
    readonly expiredAt: FieldRef<"Points", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Points findUnique
   */
  export type PointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points findUniqueOrThrow
   */
  export type PointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points findFirst
   */
  export type PointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points findFirstOrThrow
   */
  export type PointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points findMany
   */
  export type PointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points create
   */
  export type PointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The data needed to create a Points.
     */
    data: XOR<PointsCreateInput, PointsUncheckedCreateInput>
  }

  /**
   * Points createMany
   */
  export type PointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointsCreateManyInput | PointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Points createManyAndReturn
   */
  export type PointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointsCreateManyInput | PointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Points update
   */
  export type PointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The data needed to update a Points.
     */
    data: XOR<PointsUpdateInput, PointsUncheckedUpdateInput>
    /**
     * Choose, which Points to update.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points updateMany
   */
  export type PointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Points updateManyAndReturn
   */
  export type PointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Points upsert
   */
  export type PointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The filter to search for the Points to update in case it exists.
     */
    where: PointsWhereUniqueInput
    /**
     * In case the Points found by the `where` argument doesn't exist, create a new Points with this data.
     */
    create: XOR<PointsCreateInput, PointsUncheckedCreateInput>
    /**
     * In case the Points was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointsUpdateInput, PointsUncheckedUpdateInput>
  }

  /**
   * Points delete
   */
  export type PointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter which Points to delete.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points deleteMany
   */
  export type PointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Points.Users
   */
  export type Points$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Points without action
   */
  export type PointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    notificationId: number | null
    userId: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    notificationId: number | null
    userId: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    notificationId: number | null
    userId: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    notificationId: number | null
    userId: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    notificationId: number
    userId: number
    title: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    notificationId?: true
    userId?: true
  }

  export type NotificationsSumAggregateInputType = {
    notificationId?: true
    userId?: true
  }

  export type NotificationsMinAggregateInputType = {
    notificationId?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationsMaxAggregateInputType = {
    notificationId?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationsCountAggregateInputType = {
    notificationId?: true
    userId?: true
    title?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    notificationId: number
    userId: number
    title: string
    message: string
    isRead: boolean
    createdAt: Date
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    Users?: boolean | Notifications$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    Users?: boolean | Notifications$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notificationId?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    Users?: boolean | Notifications$UsersArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    notificationId?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notificationId" | "userId" | "title" | "message" | "isRead" | "createdAt", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Notifications$UsersArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Notifications$UsersArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Notifications$UsersArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      notificationId: number
      userId: number
      title: string
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `notificationId`
     * const notificationsWithNotificationIdOnly = await prisma.notifications.findMany({ select: { notificationId: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notificationId`
     * const notificationsWithNotificationIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { notificationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notificationId`
     * const notificationsWithNotificationIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { notificationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Notifications$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly notificationId: FieldRef<"Notifications", 'Int'>
    readonly userId: FieldRef<"Notifications", 'Int'>
    readonly title: FieldRef<"Notifications", 'String'>
    readonly message: FieldRef<"Notifications", 'String'>
    readonly isRead: FieldRef<"Notifications", 'Boolean'>
    readonly createdAt: FieldRef<"Notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications.Users
   */
  export type Notifications$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    usersId: 'usersId',
    name: 'name',
    email: 'email',
    password: 'password',
    profileImage: 'profileImage',
    role: 'role',
    referralCode: 'referralCode',
    referredBy: 'referredBy',
    createdAt: 'createdAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    eventId: 'eventId',
    promotorId: 'promotorId',
    nameEvents: 'nameEvents',
    categoryEvents: 'categoryEvents',
    priceEvents: 'priceEvents',
    descriptionEvents: 'descriptionEvents',
    locationEvents: 'locationEvents',
    startDateEvents: 'startDateEvents',
    endDateEvents: 'endDateEvents',
    availableSeats: 'availableSeats',
    createdAt: 'createdAt'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const TicketsScalarFieldEnum: {
    ticketId: 'ticketId',
    eventId: 'eventId',
    ticketType: 'ticketType',
    ticketPrice: 'ticketPrice',
    quantityAvailable: 'quantityAvailable',
    createdAt: 'createdAt'
  };

  export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    transactionId: 'transactionId',
    userId: 'userId',
    eventId: 'eventId',
    ticketId: 'ticketId',
    ticketQuantity: 'ticketQuantity',
    totalPrice: 'totalPrice',
    pointUsed: 'pointUsed',
    coupondId: 'coupondId',
    voucherId: 'voucherId',
    statusTransaction: 'statusTransaction',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const CoupondsScalarFieldEnum: {
    coupondId: 'coupondId',
    userId: 'userId',
    couponAmmount: 'couponAmmount',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type CoupondsScalarFieldEnum = (typeof CoupondsScalarFieldEnum)[keyof typeof CoupondsScalarFieldEnum]


  export const VouchersScalarFieldEnum: {
    voucherId: 'voucherId',
    eventId: 'eventId',
    code: 'code',
    voucherAmmount: 'voucherAmmount',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type VouchersScalarFieldEnum = (typeof VouchersScalarFieldEnum)[keyof typeof VouchersScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    referralId: 'referralId',
    referrerId: 'referrerId',
    referredUserId: 'referredUserId',
    rewardCouponId: 'rewardCouponId',
    rewardPoints: 'rewardPoints',
    createdAt: 'createdAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const PointsScalarFieldEnum: {
    pointId: 'pointId',
    userId: 'userId',
    pointsAmmount: 'pointsAmmount',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt'
  };

  export type PointsScalarFieldEnum = (typeof PointsScalarFieldEnum)[keyof typeof PointsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    notificationId: 'notificationId',
    userId: 'userId',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    usersId?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    profileImage?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleNullableFilter<"Users"> | $Enums.Role | null
    referralCode?: StringNullableFilter<"Users"> | string | null
    referredBy?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    events?: EventsListRelationFilter
    transactions?: TransactionsListRelationFilter
    points?: PointsListRelationFilter
    couponds?: CoupondsListRelationFilter
    notifications?: NotificationsListRelationFilter
    referredUsers?: ReferralListRelationFilter
    referrals?: ReferralListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    usersId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    referredBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    events?: EventsOrderByRelationAggregateInput
    transactions?: TransactionsOrderByRelationAggregateInput
    points?: PointsOrderByRelationAggregateInput
    couponds?: CoupondsOrderByRelationAggregateInput
    notifications?: NotificationsOrderByRelationAggregateInput
    referredUsers?: ReferralOrderByRelationAggregateInput
    referrals?: ReferralOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    usersId?: number
    email?: string
    referralCode?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    profileImage?: StringNullableFilter<"Users"> | string | null
    role?: EnumRoleNullableFilter<"Users"> | $Enums.Role | null
    referredBy?: StringNullableFilter<"Users"> | string | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    events?: EventsListRelationFilter
    transactions?: TransactionsListRelationFilter
    points?: PointsListRelationFilter
    couponds?: CoupondsListRelationFilter
    notifications?: NotificationsListRelationFilter
    referredUsers?: ReferralListRelationFilter
    referrals?: ReferralListRelationFilter
  }, "usersId" | "email" | "referralCode">

  export type UsersOrderByWithAggregationInput = {
    usersId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    referredBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    usersId?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    profileImage?: StringNullableWithAggregatesFilter<"Users"> | string | null
    role?: EnumRoleNullableWithAggregatesFilter<"Users"> | $Enums.Role | null
    referralCode?: StringNullableWithAggregatesFilter<"Users"> | string | null
    referredBy?: StringNullableWithAggregatesFilter<"Users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    eventId?: IntFilter<"Events"> | number
    promotorId?: IntFilter<"Events"> | number
    nameEvents?: StringFilter<"Events"> | string
    categoryEvents?: StringFilter<"Events"> | string
    priceEvents?: StringFilter<"Events"> | string
    descriptionEvents?: StringFilter<"Events"> | string
    locationEvents?: StringFilter<"Events"> | string
    startDateEvents?: DateTimeFilter<"Events"> | Date | string
    endDateEvents?: DateTimeFilter<"Events"> | Date | string
    availableSeats?: IntFilter<"Events"> | number
    createdAt?: DateTimeFilter<"Events"> | Date | string
    promotor?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    transactions?: TransactionsListRelationFilter
    tickets?: TicketsListRelationFilter
    vouchers?: VouchersListRelationFilter
  }

  export type EventsOrderByWithRelationInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    nameEvents?: SortOrder
    categoryEvents?: SortOrder
    priceEvents?: SortOrder
    descriptionEvents?: SortOrder
    locationEvents?: SortOrder
    startDateEvents?: SortOrder
    endDateEvents?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    promotor?: UsersOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
    tickets?: TicketsOrderByRelationAggregateInput
    vouchers?: VouchersOrderByRelationAggregateInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    eventId?: number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    promotorId?: IntFilter<"Events"> | number
    nameEvents?: StringFilter<"Events"> | string
    categoryEvents?: StringFilter<"Events"> | string
    priceEvents?: StringFilter<"Events"> | string
    descriptionEvents?: StringFilter<"Events"> | string
    locationEvents?: StringFilter<"Events"> | string
    startDateEvents?: DateTimeFilter<"Events"> | Date | string
    endDateEvents?: DateTimeFilter<"Events"> | Date | string
    availableSeats?: IntFilter<"Events"> | number
    createdAt?: DateTimeFilter<"Events"> | Date | string
    promotor?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    transactions?: TransactionsListRelationFilter
    tickets?: TicketsListRelationFilter
    vouchers?: VouchersListRelationFilter
  }, "eventId">

  export type EventsOrderByWithAggregationInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    nameEvents?: SortOrder
    categoryEvents?: SortOrder
    priceEvents?: SortOrder
    descriptionEvents?: SortOrder
    locationEvents?: SortOrder
    startDateEvents?: SortOrder
    endDateEvents?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    eventId?: IntWithAggregatesFilter<"Events"> | number
    promotorId?: IntWithAggregatesFilter<"Events"> | number
    nameEvents?: StringWithAggregatesFilter<"Events"> | string
    categoryEvents?: StringWithAggregatesFilter<"Events"> | string
    priceEvents?: StringWithAggregatesFilter<"Events"> | string
    descriptionEvents?: StringWithAggregatesFilter<"Events"> | string
    locationEvents?: StringWithAggregatesFilter<"Events"> | string
    startDateEvents?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    endDateEvents?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    availableSeats?: IntWithAggregatesFilter<"Events"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Events"> | Date | string
  }

  export type TicketsWhereInput = {
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    ticketId?: IntFilter<"Tickets"> | number
    eventId?: IntFilter<"Tickets"> | number
    ticketType?: StringFilter<"Tickets"> | string
    ticketPrice?: StringFilter<"Tickets"> | string
    quantityAvailable?: IntFilter<"Tickets"> | number
    createdAt?: DateTimeFilter<"Tickets"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type TicketsOrderByWithRelationInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    quantityAvailable?: SortOrder
    createdAt?: SortOrder
    event?: EventsOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type TicketsWhereUniqueInput = Prisma.AtLeast<{
    ticketId?: number
    AND?: TicketsWhereInput | TicketsWhereInput[]
    OR?: TicketsWhereInput[]
    NOT?: TicketsWhereInput | TicketsWhereInput[]
    eventId?: IntFilter<"Tickets"> | number
    ticketType?: StringFilter<"Tickets"> | string
    ticketPrice?: StringFilter<"Tickets"> | string
    quantityAvailable?: IntFilter<"Tickets"> | number
    createdAt?: DateTimeFilter<"Tickets"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "ticketId">

  export type TicketsOrderByWithAggregationInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    quantityAvailable?: SortOrder
    createdAt?: SortOrder
    _count?: TicketsCountOrderByAggregateInput
    _avg?: TicketsAvgOrderByAggregateInput
    _max?: TicketsMaxOrderByAggregateInput
    _min?: TicketsMinOrderByAggregateInput
    _sum?: TicketsSumOrderByAggregateInput
  }

  export type TicketsScalarWhereWithAggregatesInput = {
    AND?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    OR?: TicketsScalarWhereWithAggregatesInput[]
    NOT?: TicketsScalarWhereWithAggregatesInput | TicketsScalarWhereWithAggregatesInput[]
    ticketId?: IntWithAggregatesFilter<"Tickets"> | number
    eventId?: IntWithAggregatesFilter<"Tickets"> | number
    ticketType?: StringWithAggregatesFilter<"Tickets"> | string
    ticketPrice?: StringWithAggregatesFilter<"Tickets"> | string
    quantityAvailable?: IntWithAggregatesFilter<"Tickets"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tickets"> | Date | string
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    transactionId?: IntFilter<"Transactions"> | number
    userId?: IntFilter<"Transactions"> | number
    eventId?: IntFilter<"Transactions"> | number
    ticketId?: IntFilter<"Transactions"> | number
    ticketQuantity?: IntFilter<"Transactions"> | number
    totalPrice?: StringFilter<"Transactions"> | string
    pointUsed?: IntFilter<"Transactions"> | number
    coupondId?: IntNullableFilter<"Transactions"> | number | null
    voucherId?: IntNullableFilter<"Transactions"> | number | null
    statusTransaction?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    expiredAt?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    ticket?: XOR<TicketsScalarRelationFilter, TicketsWhereInput>
    coupond?: XOR<CoupondsNullableScalarRelationFilter, CoupondsWhereInput> | null
    voucher?: XOR<VouchersNullableScalarRelationFilter, VouchersWhereInput> | null
  }

  export type TransactionsOrderByWithRelationInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    totalPrice?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrderInput | SortOrder
    voucherId?: SortOrderInput | SortOrder
    statusTransaction?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    event?: EventsOrderByWithRelationInput
    ticket?: TicketsOrderByWithRelationInput
    coupond?: CoupondsOrderByWithRelationInput
    voucher?: VouchersOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    transactionId?: number
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    userId?: IntFilter<"Transactions"> | number
    eventId?: IntFilter<"Transactions"> | number
    ticketId?: IntFilter<"Transactions"> | number
    ticketQuantity?: IntFilter<"Transactions"> | number
    totalPrice?: StringFilter<"Transactions"> | string
    pointUsed?: IntFilter<"Transactions"> | number
    coupondId?: IntNullableFilter<"Transactions"> | number | null
    voucherId?: IntNullableFilter<"Transactions"> | number | null
    statusTransaction?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    expiredAt?: DateTimeFilter<"Transactions"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    ticket?: XOR<TicketsScalarRelationFilter, TicketsWhereInput>
    coupond?: XOR<CoupondsNullableScalarRelationFilter, CoupondsWhereInput> | null
    voucher?: XOR<VouchersNullableScalarRelationFilter, VouchersWhereInput> | null
  }, "transactionId">

  export type TransactionsOrderByWithAggregationInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    totalPrice?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrderInput | SortOrder
    voucherId?: SortOrderInput | SortOrder
    statusTransaction?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    transactionId?: IntWithAggregatesFilter<"Transactions"> | number
    userId?: IntWithAggregatesFilter<"Transactions"> | number
    eventId?: IntWithAggregatesFilter<"Transactions"> | number
    ticketId?: IntWithAggregatesFilter<"Transactions"> | number
    ticketQuantity?: IntWithAggregatesFilter<"Transactions"> | number
    totalPrice?: StringWithAggregatesFilter<"Transactions"> | string
    pointUsed?: IntWithAggregatesFilter<"Transactions"> | number
    coupondId?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    voucherId?: IntNullableWithAggregatesFilter<"Transactions"> | number | null
    statusTransaction?: StringWithAggregatesFilter<"Transactions"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
  }

  export type CoupondsWhereInput = {
    AND?: CoupondsWhereInput | CoupondsWhereInput[]
    OR?: CoupondsWhereInput[]
    NOT?: CoupondsWhereInput | CoupondsWhereInput[]
    coupondId?: IntFilter<"Couponds"> | number
    userId?: IntFilter<"Couponds"> | number
    couponAmmount?: IntFilter<"Couponds"> | number
    expiredAt?: DateTimeFilter<"Couponds"> | Date | string
    createdAt?: DateTimeFilter<"Couponds"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type CoupondsOrderByWithRelationInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type CoupondsWhereUniqueInput = Prisma.AtLeast<{
    coupondId?: number
    AND?: CoupondsWhereInput | CoupondsWhereInput[]
    OR?: CoupondsWhereInput[]
    NOT?: CoupondsWhereInput | CoupondsWhereInput[]
    userId?: IntFilter<"Couponds"> | number
    couponAmmount?: IntFilter<"Couponds"> | number
    expiredAt?: DateTimeFilter<"Couponds"> | Date | string
    createdAt?: DateTimeFilter<"Couponds"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "coupondId">

  export type CoupondsOrderByWithAggregationInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: CoupondsCountOrderByAggregateInput
    _avg?: CoupondsAvgOrderByAggregateInput
    _max?: CoupondsMaxOrderByAggregateInput
    _min?: CoupondsMinOrderByAggregateInput
    _sum?: CoupondsSumOrderByAggregateInput
  }

  export type CoupondsScalarWhereWithAggregatesInput = {
    AND?: CoupondsScalarWhereWithAggregatesInput | CoupondsScalarWhereWithAggregatesInput[]
    OR?: CoupondsScalarWhereWithAggregatesInput[]
    NOT?: CoupondsScalarWhereWithAggregatesInput | CoupondsScalarWhereWithAggregatesInput[]
    coupondId?: IntWithAggregatesFilter<"Couponds"> | number
    userId?: IntWithAggregatesFilter<"Couponds"> | number
    couponAmmount?: IntWithAggregatesFilter<"Couponds"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"Couponds"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Couponds"> | Date | string
  }

  export type VouchersWhereInput = {
    AND?: VouchersWhereInput | VouchersWhereInput[]
    OR?: VouchersWhereInput[]
    NOT?: VouchersWhereInput | VouchersWhereInput[]
    voucherId?: IntFilter<"Vouchers"> | number
    eventId?: IntFilter<"Vouchers"> | number
    code?: StringFilter<"Vouchers"> | string
    voucherAmmount?: IntFilter<"Vouchers"> | number
    expiredAt?: DateTimeFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeFilter<"Vouchers"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type VouchersOrderByWithRelationInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    voucherAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    event?: EventsOrderByWithRelationInput
    transactions?: TransactionsOrderByRelationAggregateInput
  }

  export type VouchersWhereUniqueInput = Prisma.AtLeast<{
    voucherId?: number
    AND?: VouchersWhereInput | VouchersWhereInput[]
    OR?: VouchersWhereInput[]
    NOT?: VouchersWhereInput | VouchersWhereInput[]
    eventId?: IntFilter<"Vouchers"> | number
    code?: StringFilter<"Vouchers"> | string
    voucherAmmount?: IntFilter<"Vouchers"> | number
    expiredAt?: DateTimeFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeFilter<"Vouchers"> | Date | string
    event?: XOR<EventsScalarRelationFilter, EventsWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "voucherId">

  export type VouchersOrderByWithAggregationInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    voucherAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: VouchersCountOrderByAggregateInput
    _avg?: VouchersAvgOrderByAggregateInput
    _max?: VouchersMaxOrderByAggregateInput
    _min?: VouchersMinOrderByAggregateInput
    _sum?: VouchersSumOrderByAggregateInput
  }

  export type VouchersScalarWhereWithAggregatesInput = {
    AND?: VouchersScalarWhereWithAggregatesInput | VouchersScalarWhereWithAggregatesInput[]
    OR?: VouchersScalarWhereWithAggregatesInput[]
    NOT?: VouchersScalarWhereWithAggregatesInput | VouchersScalarWhereWithAggregatesInput[]
    voucherId?: IntWithAggregatesFilter<"Vouchers"> | number
    eventId?: IntWithAggregatesFilter<"Vouchers"> | number
    code?: StringWithAggregatesFilter<"Vouchers"> | string
    voucherAmmount?: IntWithAggregatesFilter<"Vouchers"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Vouchers"> | Date | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    referralId?: IntFilter<"Referral"> | number
    referrerId?: IntFilter<"Referral"> | number
    referredUserId?: IntFilter<"Referral"> | number
    rewardCouponId?: IntFilter<"Referral"> | number
    rewardPoints?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    referrer?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    referredUser?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ReferralOrderByWithRelationInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
    createdAt?: SortOrder
    referrer?: UsersOrderByWithRelationInput
    referredUser?: UsersOrderByWithRelationInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    referralId?: number
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    referrerId?: IntFilter<"Referral"> | number
    referredUserId?: IntFilter<"Referral"> | number
    rewardCouponId?: IntFilter<"Referral"> | number
    rewardPoints?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    referrer?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    referredUser?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "referralId">

  export type ReferralOrderByWithAggregationInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _avg?: ReferralAvgOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
    _sum?: ReferralSumOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    referralId?: IntWithAggregatesFilter<"Referral"> | number
    referrerId?: IntWithAggregatesFilter<"Referral"> | number
    referredUserId?: IntWithAggregatesFilter<"Referral"> | number
    rewardCouponId?: IntWithAggregatesFilter<"Referral"> | number
    rewardPoints?: IntWithAggregatesFilter<"Referral"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
  }

  export type PointsWhereInput = {
    AND?: PointsWhereInput | PointsWhereInput[]
    OR?: PointsWhereInput[]
    NOT?: PointsWhereInput | PointsWhereInput[]
    pointId?: IntFilter<"Points"> | number
    userId?: IntFilter<"Points"> | number
    pointsAmmount?: IntFilter<"Points"> | number
    createdAt?: DateTimeFilter<"Points"> | Date | string
    expiredAt?: DateTimeFilter<"Points"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type PointsOrderByWithRelationInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
  }

  export type PointsWhereUniqueInput = Prisma.AtLeast<{
    pointId?: number
    AND?: PointsWhereInput | PointsWhereInput[]
    OR?: PointsWhereInput[]
    NOT?: PointsWhereInput | PointsWhereInput[]
    userId?: IntFilter<"Points"> | number
    pointsAmmount?: IntFilter<"Points"> | number
    createdAt?: DateTimeFilter<"Points"> | Date | string
    expiredAt?: DateTimeFilter<"Points"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "pointId">

  export type PointsOrderByWithAggregationInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
    _count?: PointsCountOrderByAggregateInput
    _avg?: PointsAvgOrderByAggregateInput
    _max?: PointsMaxOrderByAggregateInput
    _min?: PointsMinOrderByAggregateInput
    _sum?: PointsSumOrderByAggregateInput
  }

  export type PointsScalarWhereWithAggregatesInput = {
    AND?: PointsScalarWhereWithAggregatesInput | PointsScalarWhereWithAggregatesInput[]
    OR?: PointsScalarWhereWithAggregatesInput[]
    NOT?: PointsScalarWhereWithAggregatesInput | PointsScalarWhereWithAggregatesInput[]
    pointId?: IntWithAggregatesFilter<"Points"> | number
    userId?: IntWithAggregatesFilter<"Points"> | number
    pointsAmmount?: IntWithAggregatesFilter<"Points"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Points"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"Points"> | Date | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    notificationId?: IntFilter<"Notifications"> | number
    userId?: IntFilter<"Notifications"> | number
    title?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    notificationId?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    userId?: IntFilter<"Notifications"> | number
    title?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "notificationId">

  export type NotificationsOrderByWithAggregationInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    notificationId?: IntWithAggregatesFilter<"Notifications"> | number
    userId?: IntWithAggregatesFilter<"Notifications"> | number
    title?: StringWithAggregatesFilter<"Notifications"> | string
    message?: StringWithAggregatesFilter<"Notifications"> | string
    isRead?: BoolWithAggregatesFilter<"Notifications"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notifications"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUsersInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersCreateManyInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateInput = {
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    promotor: UsersCreateNestedOneWithoutEventsInput
    transactions?: TransactionsCreateNestedManyWithoutEventInput
    tickets?: TicketsCreateNestedManyWithoutEventInput
    vouchers?: VouchersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateInput = {
    eventId?: number
    promotorId: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VouchersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsUpdateInput = {
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: UsersUpdateOneRequiredWithoutEventsNestedInput
    transactions?: TransactionsUpdateManyWithoutEventNestedInput
    tickets?: TicketsUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsCreateManyInput = {
    eventId?: number
    promotorId: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
  }

  export type EventsUpdateManyMutationInput = {
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsCreateInput = {
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
    event: EventsCreateNestedOneWithoutTicketsInput
    transactions?: TransactionsCreateNestedManyWithoutTicketInput
  }

  export type TicketsUncheckedCreateInput = {
    ticketId?: number
    eventId: number
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketsUpdateInput = {
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutTicketsNestedInput
    transactions?: TransactionsUpdateManyWithoutTicketNestedInput
  }

  export type TicketsUncheckedUpdateInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketsCreateManyInput = {
    ticketId?: number
    eventId: number
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
  }

  export type TicketsUpdateManyMutationInput = {
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsUncheckedUpdateManyInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateInput = {
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
    user: UsersCreateNestedOneWithoutTransactionsInput
    event: EventsCreateNestedOneWithoutTransactionsInput
    ticket: TicketsCreateNestedOneWithoutTransactionsInput
    coupond?: CoupondsCreateNestedOneWithoutTransactionsInput
    voucher?: VouchersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsUpdateInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventsUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketsUpdateOneRequiredWithoutTransactionsNestedInput
    coupond?: CoupondsUpdateOneWithoutTransactionsNestedInput
    voucher?: VouchersUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsUpdateManyMutationInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupondsCreateInput = {
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    Users: UsersCreateNestedOneWithoutCoupondsInput
    transactions?: TransactionsCreateNestedManyWithoutCoupondInput
  }

  export type CoupondsUncheckedCreateInput = {
    coupondId?: number
    userId: number
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutCoupondInput
  }

  export type CoupondsUpdateInput = {
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutCoupondsNestedInput
    transactions?: TransactionsUpdateManyWithoutCoupondNestedInput
  }

  export type CoupondsUncheckedUpdateInput = {
    coupondId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutCoupondNestedInput
  }

  export type CoupondsCreateManyInput = {
    coupondId?: number
    userId: number
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type CoupondsUpdateManyMutationInput = {
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupondsUncheckedUpdateManyInput = {
    coupondId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersCreateInput = {
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    event: EventsCreateNestedOneWithoutVouchersInput
    transactions?: TransactionsCreateNestedManyWithoutVoucherInput
  }

  export type VouchersUncheckedCreateInput = {
    voucherId?: number
    eventId: number
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VouchersUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutVouchersNestedInput
    transactions?: TransactionsUpdateManyWithoutVoucherNestedInput
  }

  export type VouchersUncheckedUpdateInput = {
    voucherId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VouchersCreateManyInput = {
    voucherId?: number
    eventId: number
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type VouchersUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersUncheckedUpdateManyInput = {
    voucherId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateInput = {
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
    referrer: UsersCreateNestedOneWithoutReferredUsersInput
    referredUser: UsersCreateNestedOneWithoutReferralsInput
  }

  export type ReferralUncheckedCreateInput = {
    referralId?: number
    referrerId: number
    referredUserId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
  }

  export type ReferralUpdateInput = {
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UsersUpdateOneRequiredWithoutReferredUsersNestedInput
    referredUser?: UsersUpdateOneRequiredWithoutReferralsNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    referralId?: IntFieldUpdateOperationsInput | number
    referrerId?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCreateManyInput = {
    referralId?: number
    referrerId: number
    referredUserId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
  }

  export type ReferralUpdateManyMutationInput = {
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    referralId?: IntFieldUpdateOperationsInput | number
    referrerId?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsCreateInput = {
    pointsAmmount: number
    createdAt?: Date | string
    expiredAt: Date | string
    Users?: UsersCreateNestedOneWithoutPointsInput
  }

  export type PointsUncheckedCreateInput = {
    pointId?: number
    userId: number
    pointsAmmount: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type PointsUpdateInput = {
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutPointsNestedInput
  }

  export type PointsUncheckedUpdateInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsCreateManyInput = {
    pointId?: number
    userId: number
    pointsAmmount: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type PointsUpdateManyMutationInput = {
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUncheckedUpdateManyInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
    Users?: UsersCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationsUncheckedCreateInput = {
    notificationId?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsCreateManyInput = {
    notificationId?: number
    userId: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type PointsListRelationFilter = {
    every?: PointsWhereInput
    some?: PointsWhereInput
    none?: PointsWhereInput
  }

  export type CoupondsListRelationFilter = {
    every?: CoupondsWhereInput
    some?: CoupondsWhereInput
    none?: CoupondsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: NotificationsWhereInput
    some?: NotificationsWhereInput
    none?: NotificationsWhereInput
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoupondsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    usersId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    usersId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    usersId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    usersId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    usersId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TicketsListRelationFilter = {
    every?: TicketsWhereInput
    some?: TicketsWhereInput
    none?: TicketsWhereInput
  }

  export type VouchersListRelationFilter = {
    every?: VouchersWhereInput
    some?: VouchersWhereInput
    none?: VouchersWhereInput
  }

  export type TicketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VouchersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    nameEvents?: SortOrder
    categoryEvents?: SortOrder
    priceEvents?: SortOrder
    descriptionEvents?: SortOrder
    locationEvents?: SortOrder
    startDateEvents?: SortOrder
    endDateEvents?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    availableSeats?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    nameEvents?: SortOrder
    categoryEvents?: SortOrder
    priceEvents?: SortOrder
    descriptionEvents?: SortOrder
    locationEvents?: SortOrder
    startDateEvents?: SortOrder
    endDateEvents?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    nameEvents?: SortOrder
    categoryEvents?: SortOrder
    priceEvents?: SortOrder
    descriptionEvents?: SortOrder
    locationEvents?: SortOrder
    startDateEvents?: SortOrder
    endDateEvents?: SortOrder
    availableSeats?: SortOrder
    createdAt?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    eventId?: SortOrder
    promotorId?: SortOrder
    availableSeats?: SortOrder
  }

  export type EventsScalarRelationFilter = {
    is?: EventsWhereInput
    isNot?: EventsWhereInput
  }

  export type TicketsCountOrderByAggregateInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    quantityAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketsAvgOrderByAggregateInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type TicketsMaxOrderByAggregateInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    quantityAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketsMinOrderByAggregateInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    quantityAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketsSumOrderByAggregateInput = {
    ticketId?: SortOrder
    eventId?: SortOrder
    quantityAvailable?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TicketsScalarRelationFilter = {
    is?: TicketsWhereInput
    isNot?: TicketsWhereInput
  }

  export type CoupondsNullableScalarRelationFilter = {
    is?: CoupondsWhereInput | null
    isNot?: CoupondsWhereInput | null
  }

  export type VouchersNullableScalarRelationFilter = {
    is?: VouchersWhereInput | null
    isNot?: VouchersWhereInput | null
  }

  export type TransactionsCountOrderByAggregateInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    totalPrice?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrder
    voucherId?: SortOrder
    statusTransaction?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrder
    voucherId?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    totalPrice?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrder
    voucherId?: SortOrder
    statusTransaction?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    totalPrice?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrder
    voucherId?: SortOrder
    statusTransaction?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    transactionId?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    ticketQuantity?: SortOrder
    pointUsed?: SortOrder
    coupondId?: SortOrder
    voucherId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CoupondsCountOrderByAggregateInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CoupondsAvgOrderByAggregateInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
  }

  export type CoupondsMaxOrderByAggregateInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CoupondsMinOrderByAggregateInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CoupondsSumOrderByAggregateInput = {
    coupondId?: SortOrder
    userId?: SortOrder
    couponAmmount?: SortOrder
  }

  export type VouchersCountOrderByAggregateInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    voucherAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VouchersAvgOrderByAggregateInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    voucherAmmount?: SortOrder
  }

  export type VouchersMaxOrderByAggregateInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    voucherAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VouchersMinOrderByAggregateInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    voucherAmmount?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VouchersSumOrderByAggregateInput = {
    voucherId?: SortOrder
    eventId?: SortOrder
    voucherAmmount?: SortOrder
  }

  export type ReferralCountOrderByAggregateInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralAvgOrderByAggregateInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralSumOrderByAggregateInput = {
    referralId?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    rewardCouponId?: SortOrder
    rewardPoints?: SortOrder
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type PointsCountOrderByAggregateInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type PointsAvgOrderByAggregateInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
  }

  export type PointsMaxOrderByAggregateInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type PointsMinOrderByAggregateInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type PointsSumOrderByAggregateInput = {
    pointId?: SortOrder
    userId?: SortOrder
    pointsAmmount?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationsCountOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    notificationId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventsCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventsCreateWithoutPromotorInput, EventsUncheckedCreateWithoutPromotorInput> | EventsCreateWithoutPromotorInput[] | EventsUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutPromotorInput | EventsCreateOrConnectWithoutPromotorInput[]
    createMany?: EventsCreateManyPromotorInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type PointsCreateNestedManyWithoutUsersInput = {
    create?: XOR<PointsCreateWithoutUsersInput, PointsUncheckedCreateWithoutUsersInput> | PointsCreateWithoutUsersInput[] | PointsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUsersInput | PointsCreateOrConnectWithoutUsersInput[]
    createMany?: PointsCreateManyUsersInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type CoupondsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CoupondsCreateWithoutUsersInput, CoupondsUncheckedCreateWithoutUsersInput> | CoupondsCreateWithoutUsersInput[] | CoupondsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CoupondsCreateOrConnectWithoutUsersInput | CoupondsCreateOrConnectWithoutUsersInput[]
    createMany?: CoupondsCreateManyUsersInputEnvelope
    connect?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
  }

  export type NotificationsCreateNestedManyWithoutUsersInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutPromotorInput = {
    create?: XOR<EventsCreateWithoutPromotorInput, EventsUncheckedCreateWithoutPromotorInput> | EventsCreateWithoutPromotorInput[] | EventsUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutPromotorInput | EventsCreateOrConnectWithoutPromotorInput[]
    createMany?: EventsCreateManyPromotorInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type PointsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<PointsCreateWithoutUsersInput, PointsUncheckedCreateWithoutUsersInput> | PointsCreateWithoutUsersInput[] | PointsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUsersInput | PointsCreateOrConnectWithoutUsersInput[]
    createMany?: PointsCreateManyUsersInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type CoupondsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CoupondsCreateWithoutUsersInput, CoupondsUncheckedCreateWithoutUsersInput> | CoupondsCreateWithoutUsersInput[] | CoupondsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CoupondsCreateOrConnectWithoutUsersInput | CoupondsCreateOrConnectWithoutUsersInput[]
    createMany?: CoupondsCreateManyUsersInputEnvelope
    connect?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
  }

  export type NotificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventsUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventsCreateWithoutPromotorInput, EventsUncheckedCreateWithoutPromotorInput> | EventsCreateWithoutPromotorInput[] | EventsUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutPromotorInput | EventsCreateOrConnectWithoutPromotorInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutPromotorInput | EventsUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventsCreateManyPromotorInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutPromotorInput | EventsUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutPromotorInput | EventsUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type PointsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PointsCreateWithoutUsersInput, PointsUncheckedCreateWithoutUsersInput> | PointsCreateWithoutUsersInput[] | PointsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUsersInput | PointsCreateOrConnectWithoutUsersInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutUsersInput | PointsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PointsCreateManyUsersInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutUsersInput | PointsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutUsersInput | PointsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type CoupondsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CoupondsCreateWithoutUsersInput, CoupondsUncheckedCreateWithoutUsersInput> | CoupondsCreateWithoutUsersInput[] | CoupondsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CoupondsCreateOrConnectWithoutUsersInput | CoupondsCreateOrConnectWithoutUsersInput[]
    upsert?: CoupondsUpsertWithWhereUniqueWithoutUsersInput | CoupondsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CoupondsCreateManyUsersInputEnvelope
    set?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    disconnect?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    delete?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    connect?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    update?: CoupondsUpdateWithWhereUniqueWithoutUsersInput | CoupondsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CoupondsUpdateManyWithWhereWithoutUsersInput | CoupondsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CoupondsScalarWhereInput | CoupondsScalarWhereInput[]
  }

  export type NotificationsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput | NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput | NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput | NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferrerInput | ReferralUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferrerInput | ReferralUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferrerInput | ReferralUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferredUserInput | ReferralUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferredUserInput | ReferralUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferredUserInput | ReferralUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventsUncheckedUpdateManyWithoutPromotorNestedInput = {
    create?: XOR<EventsCreateWithoutPromotorInput, EventsUncheckedCreateWithoutPromotorInput> | EventsCreateWithoutPromotorInput[] | EventsUncheckedCreateWithoutPromotorInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutPromotorInput | EventsCreateOrConnectWithoutPromotorInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutPromotorInput | EventsUpsertWithWhereUniqueWithoutPromotorInput[]
    createMany?: EventsCreateManyPromotorInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutPromotorInput | EventsUpdateWithWhereUniqueWithoutPromotorInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutPromotorInput | EventsUpdateManyWithWhereWithoutPromotorInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type PointsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<PointsCreateWithoutUsersInput, PointsUncheckedCreateWithoutUsersInput> | PointsCreateWithoutUsersInput[] | PointsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUsersInput | PointsCreateOrConnectWithoutUsersInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutUsersInput | PointsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: PointsCreateManyUsersInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutUsersInput | PointsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutUsersInput | PointsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type CoupondsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CoupondsCreateWithoutUsersInput, CoupondsUncheckedCreateWithoutUsersInput> | CoupondsCreateWithoutUsersInput[] | CoupondsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CoupondsCreateOrConnectWithoutUsersInput | CoupondsCreateOrConnectWithoutUsersInput[]
    upsert?: CoupondsUpsertWithWhereUniqueWithoutUsersInput | CoupondsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CoupondsCreateManyUsersInputEnvelope
    set?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    disconnect?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    delete?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    connect?: CoupondsWhereUniqueInput | CoupondsWhereUniqueInput[]
    update?: CoupondsUpdateWithWhereUniqueWithoutUsersInput | CoupondsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CoupondsUpdateManyWithWhereWithoutUsersInput | CoupondsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CoupondsScalarWhereInput | CoupondsScalarWhereInput[]
  }

  export type NotificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput> | NotificationsCreateWithoutUsersInput[] | NotificationsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: NotificationsCreateOrConnectWithoutUsersInput | NotificationsCreateOrConnectWithoutUsersInput[]
    upsert?: NotificationsUpsertWithWhereUniqueWithoutUsersInput | NotificationsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: NotificationsCreateManyUsersInputEnvelope
    set?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    disconnect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    delete?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    connect?: NotificationsWhereUniqueInput | NotificationsWhereUniqueInput[]
    update?: NotificationsUpdateWithWhereUniqueWithoutUsersInput | NotificationsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: NotificationsUpdateManyWithWhereWithoutUsersInput | NotificationsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput> | ReferralCreateWithoutReferrerInput[] | ReferralUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferrerInput | ReferralCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferrerInput | ReferralUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralCreateManyReferrerInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferrerInput | ReferralUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferrerInput | ReferralUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput> | ReferralCreateWithoutReferredUserInput[] | ReferralUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredUserInput | ReferralCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferredUserInput | ReferralUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralCreateManyReferredUserInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferredUserInput | ReferralUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferredUserInput | ReferralUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutEventsInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    connect?: UsersWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionsCreateWithoutEventInput, TransactionsUncheckedCreateWithoutEventInput> | TransactionsCreateWithoutEventInput[] | TransactionsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEventInput | TransactionsCreateOrConnectWithoutEventInput[]
    createMany?: TransactionsCreateManyEventInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TicketsCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketsCreateWithoutEventInput, TicketsUncheckedCreateWithoutEventInput> | TicketsCreateWithoutEventInput[] | TicketsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutEventInput | TicketsCreateOrConnectWithoutEventInput[]
    createMany?: TicketsCreateManyEventInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type VouchersCreateNestedManyWithoutEventInput = {
    create?: XOR<VouchersCreateWithoutEventInput, VouchersUncheckedCreateWithoutEventInput> | VouchersCreateWithoutEventInput[] | VouchersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VouchersCreateOrConnectWithoutEventInput | VouchersCreateOrConnectWithoutEventInput[]
    createMany?: VouchersCreateManyEventInputEnvelope
    connect?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionsCreateWithoutEventInput, TransactionsUncheckedCreateWithoutEventInput> | TransactionsCreateWithoutEventInput[] | TransactionsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEventInput | TransactionsCreateOrConnectWithoutEventInput[]
    createMany?: TransactionsCreateManyEventInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TicketsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketsCreateWithoutEventInput, TicketsUncheckedCreateWithoutEventInput> | TicketsCreateWithoutEventInput[] | TicketsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutEventInput | TicketsCreateOrConnectWithoutEventInput[]
    createMany?: TicketsCreateManyEventInputEnvelope
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
  }

  export type VouchersUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VouchersCreateWithoutEventInput, VouchersUncheckedCreateWithoutEventInput> | VouchersCreateWithoutEventInput[] | VouchersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VouchersCreateOrConnectWithoutEventInput | VouchersCreateOrConnectWithoutEventInput[]
    createMany?: VouchersCreateManyEventInputEnvelope
    connect?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEventsInput
    upsert?: UsersUpsertWithoutEventsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEventsInput, UsersUpdateWithoutEventsInput>, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type TransactionsUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionsCreateWithoutEventInput, TransactionsUncheckedCreateWithoutEventInput> | TransactionsCreateWithoutEventInput[] | TransactionsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEventInput | TransactionsCreateOrConnectWithoutEventInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutEventInput | TransactionsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionsCreateManyEventInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutEventInput | TransactionsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutEventInput | TransactionsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TicketsUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketsCreateWithoutEventInput, TicketsUncheckedCreateWithoutEventInput> | TicketsCreateWithoutEventInput[] | TicketsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutEventInput | TicketsCreateOrConnectWithoutEventInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutEventInput | TicketsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketsCreateManyEventInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutEventInput | TicketsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutEventInput | TicketsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type VouchersUpdateManyWithoutEventNestedInput = {
    create?: XOR<VouchersCreateWithoutEventInput, VouchersUncheckedCreateWithoutEventInput> | VouchersCreateWithoutEventInput[] | VouchersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VouchersCreateOrConnectWithoutEventInput | VouchersCreateOrConnectWithoutEventInput[]
    upsert?: VouchersUpsertWithWhereUniqueWithoutEventInput | VouchersUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VouchersCreateManyEventInputEnvelope
    set?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    disconnect?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    delete?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    connect?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    update?: VouchersUpdateWithWhereUniqueWithoutEventInput | VouchersUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VouchersUpdateManyWithWhereWithoutEventInput | VouchersUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VouchersScalarWhereInput | VouchersScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionsCreateWithoutEventInput, TransactionsUncheckedCreateWithoutEventInput> | TransactionsCreateWithoutEventInput[] | TransactionsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutEventInput | TransactionsCreateOrConnectWithoutEventInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutEventInput | TransactionsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionsCreateManyEventInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutEventInput | TransactionsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutEventInput | TransactionsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TicketsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketsCreateWithoutEventInput, TicketsUncheckedCreateWithoutEventInput> | TicketsCreateWithoutEventInput[] | TicketsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketsCreateOrConnectWithoutEventInput | TicketsCreateOrConnectWithoutEventInput[]
    upsert?: TicketsUpsertWithWhereUniqueWithoutEventInput | TicketsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketsCreateManyEventInputEnvelope
    set?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    disconnect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    delete?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    connect?: TicketsWhereUniqueInput | TicketsWhereUniqueInput[]
    update?: TicketsUpdateWithWhereUniqueWithoutEventInput | TicketsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketsUpdateManyWithWhereWithoutEventInput | TicketsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
  }

  export type VouchersUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VouchersCreateWithoutEventInput, VouchersUncheckedCreateWithoutEventInput> | VouchersCreateWithoutEventInput[] | VouchersUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VouchersCreateOrConnectWithoutEventInput | VouchersCreateOrConnectWithoutEventInput[]
    upsert?: VouchersUpsertWithWhereUniqueWithoutEventInput | VouchersUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VouchersCreateManyEventInputEnvelope
    set?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    disconnect?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    delete?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    connect?: VouchersWhereUniqueInput | VouchersWhereUniqueInput[]
    update?: VouchersUpdateWithWhereUniqueWithoutEventInput | VouchersUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VouchersUpdateManyWithWhereWithoutEventInput | VouchersUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VouchersScalarWhereInput | VouchersScalarWhereInput[]
  }

  export type EventsCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventsCreateWithoutTicketsInput, EventsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTicketsInput
    connect?: EventsWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionsCreateWithoutTicketInput, TransactionsUncheckedCreateWithoutTicketInput> | TransactionsCreateWithoutTicketInput[] | TransactionsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTicketInput | TransactionsCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionsCreateManyTicketInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionsCreateWithoutTicketInput, TransactionsUncheckedCreateWithoutTicketInput> | TransactionsCreateWithoutTicketInput[] | TransactionsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTicketInput | TransactionsCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionsCreateManyTicketInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type EventsUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<EventsCreateWithoutTicketsInput, EventsUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTicketsInput
    upsert?: EventsUpsertWithoutTicketsInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutTicketsInput, EventsUpdateWithoutTicketsInput>, EventsUncheckedUpdateWithoutTicketsInput>
  }

  export type TransactionsUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionsCreateWithoutTicketInput, TransactionsUncheckedCreateWithoutTicketInput> | TransactionsCreateWithoutTicketInput[] | TransactionsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTicketInput | TransactionsCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutTicketInput | TransactionsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionsCreateManyTicketInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutTicketInput | TransactionsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutTicketInput | TransactionsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionsCreateWithoutTicketInput, TransactionsUncheckedCreateWithoutTicketInput> | TransactionsCreateWithoutTicketInput[] | TransactionsUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutTicketInput | TransactionsCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutTicketInput | TransactionsUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionsCreateManyTicketInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutTicketInput | TransactionsUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutTicketInput | TransactionsUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UsersCreateWithoutTransactionsInput, UsersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransactionsInput
    connect?: UsersWhereUniqueInput
  }

  export type EventsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EventsCreateWithoutTransactionsInput, EventsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTransactionsInput
    connect?: EventsWhereUniqueInput
  }

  export type TicketsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TicketsCreateWithoutTransactionsInput, TicketsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutTransactionsInput
    connect?: TicketsWhereUniqueInput
  }

  export type CoupondsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CoupondsCreateWithoutTransactionsInput, CoupondsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CoupondsCreateOrConnectWithoutTransactionsInput
    connect?: CoupondsWhereUniqueInput
  }

  export type VouchersCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<VouchersCreateWithoutTransactionsInput, VouchersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VouchersCreateOrConnectWithoutTransactionsInput
    connect?: VouchersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UsersCreateWithoutTransactionsInput, UsersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTransactionsInput
    upsert?: UsersUpsertWithoutTransactionsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTransactionsInput, UsersUpdateWithoutTransactionsInput>, UsersUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<EventsCreateWithoutTransactionsInput, EventsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventsCreateOrConnectWithoutTransactionsInput
    upsert?: EventsUpsertWithoutTransactionsInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutTransactionsInput, EventsUpdateWithoutTransactionsInput>, EventsUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TicketsCreateWithoutTransactionsInput, TicketsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketsCreateOrConnectWithoutTransactionsInput
    upsert?: TicketsUpsertWithoutTransactionsInput
    connect?: TicketsWhereUniqueInput
    update?: XOR<XOR<TicketsUpdateToOneWithWhereWithoutTransactionsInput, TicketsUpdateWithoutTransactionsInput>, TicketsUncheckedUpdateWithoutTransactionsInput>
  }

  export type CoupondsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CoupondsCreateWithoutTransactionsInput, CoupondsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CoupondsCreateOrConnectWithoutTransactionsInput
    upsert?: CoupondsUpsertWithoutTransactionsInput
    disconnect?: CoupondsWhereInput | boolean
    delete?: CoupondsWhereInput | boolean
    connect?: CoupondsWhereUniqueInput
    update?: XOR<XOR<CoupondsUpdateToOneWithWhereWithoutTransactionsInput, CoupondsUpdateWithoutTransactionsInput>, CoupondsUncheckedUpdateWithoutTransactionsInput>
  }

  export type VouchersUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<VouchersCreateWithoutTransactionsInput, VouchersUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: VouchersCreateOrConnectWithoutTransactionsInput
    upsert?: VouchersUpsertWithoutTransactionsInput
    disconnect?: VouchersWhereInput | boolean
    delete?: VouchersWhereInput | boolean
    connect?: VouchersWhereUniqueInput
    update?: XOR<XOR<VouchersUpdateToOneWithWhereWithoutTransactionsInput, VouchersUpdateWithoutTransactionsInput>, VouchersUncheckedUpdateWithoutTransactionsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersCreateNestedOneWithoutCoupondsInput = {
    create?: XOR<UsersCreateWithoutCoupondsInput, UsersUncheckedCreateWithoutCoupondsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCoupondsInput
    connect?: UsersWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutCoupondInput = {
    create?: XOR<TransactionsCreateWithoutCoupondInput, TransactionsUncheckedCreateWithoutCoupondInput> | TransactionsCreateWithoutCoupondInput[] | TransactionsUncheckedCreateWithoutCoupondInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoupondInput | TransactionsCreateOrConnectWithoutCoupondInput[]
    createMany?: TransactionsCreateManyCoupondInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutCoupondInput = {
    create?: XOR<TransactionsCreateWithoutCoupondInput, TransactionsUncheckedCreateWithoutCoupondInput> | TransactionsCreateWithoutCoupondInput[] | TransactionsUncheckedCreateWithoutCoupondInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoupondInput | TransactionsCreateOrConnectWithoutCoupondInput[]
    createMany?: TransactionsCreateManyCoupondInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutCoupondsNestedInput = {
    create?: XOR<UsersCreateWithoutCoupondsInput, UsersUncheckedCreateWithoutCoupondsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCoupondsInput
    upsert?: UsersUpsertWithoutCoupondsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCoupondsInput, UsersUpdateWithoutCoupondsInput>, UsersUncheckedUpdateWithoutCoupondsInput>
  }

  export type TransactionsUpdateManyWithoutCoupondNestedInput = {
    create?: XOR<TransactionsCreateWithoutCoupondInput, TransactionsUncheckedCreateWithoutCoupondInput> | TransactionsCreateWithoutCoupondInput[] | TransactionsUncheckedCreateWithoutCoupondInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoupondInput | TransactionsCreateOrConnectWithoutCoupondInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCoupondInput | TransactionsUpsertWithWhereUniqueWithoutCoupondInput[]
    createMany?: TransactionsCreateManyCoupondInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCoupondInput | TransactionsUpdateWithWhereUniqueWithoutCoupondInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCoupondInput | TransactionsUpdateManyWithWhereWithoutCoupondInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutCoupondNestedInput = {
    create?: XOR<TransactionsCreateWithoutCoupondInput, TransactionsUncheckedCreateWithoutCoupondInput> | TransactionsCreateWithoutCoupondInput[] | TransactionsUncheckedCreateWithoutCoupondInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutCoupondInput | TransactionsCreateOrConnectWithoutCoupondInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutCoupondInput | TransactionsUpsertWithWhereUniqueWithoutCoupondInput[]
    createMany?: TransactionsCreateManyCoupondInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutCoupondInput | TransactionsUpdateWithWhereUniqueWithoutCoupondInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutCoupondInput | TransactionsUpdateManyWithWhereWithoutCoupondInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type EventsCreateNestedOneWithoutVouchersInput = {
    create?: XOR<EventsCreateWithoutVouchersInput, EventsUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: EventsCreateOrConnectWithoutVouchersInput
    connect?: EventsWhereUniqueInput
  }

  export type TransactionsCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionsCreateWithoutVoucherInput, TransactionsUncheckedCreateWithoutVoucherInput> | TransactionsCreateWithoutVoucherInput[] | TransactionsUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutVoucherInput | TransactionsCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionsCreateManyVoucherInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionsCreateWithoutVoucherInput, TransactionsUncheckedCreateWithoutVoucherInput> | TransactionsCreateWithoutVoucherInput[] | TransactionsUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutVoucherInput | TransactionsCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionsCreateManyVoucherInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type EventsUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<EventsCreateWithoutVouchersInput, EventsUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: EventsCreateOrConnectWithoutVouchersInput
    upsert?: EventsUpsertWithoutVouchersInput
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutVouchersInput, EventsUpdateWithoutVouchersInput>, EventsUncheckedUpdateWithoutVouchersInput>
  }

  export type TransactionsUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionsCreateWithoutVoucherInput, TransactionsUncheckedCreateWithoutVoucherInput> | TransactionsCreateWithoutVoucherInput[] | TransactionsUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutVoucherInput | TransactionsCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutVoucherInput | TransactionsUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionsCreateManyVoucherInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutVoucherInput | TransactionsUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutVoucherInput | TransactionsUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionsCreateWithoutVoucherInput, TransactionsUncheckedCreateWithoutVoucherInput> | TransactionsCreateWithoutVoucherInput[] | TransactionsUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutVoucherInput | TransactionsCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutVoucherInput | TransactionsUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionsCreateManyVoucherInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutVoucherInput | TransactionsUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutVoucherInput | TransactionsUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutReferredUsersInput = {
    create?: XOR<UsersCreateWithoutReferredUsersInput, UsersUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReferredUsersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UsersCreateWithoutReferralsInput, UsersUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReferralsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReferredUsersNestedInput = {
    create?: XOR<UsersCreateWithoutReferredUsersInput, UsersUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReferredUsersInput
    upsert?: UsersUpsertWithoutReferredUsersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReferredUsersInput, UsersUpdateWithoutReferredUsersInput>, UsersUncheckedUpdateWithoutReferredUsersInput>
  }

  export type UsersUpdateOneRequiredWithoutReferralsNestedInput = {
    create?: XOR<UsersCreateWithoutReferralsInput, UsersUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReferralsInput
    upsert?: UsersUpsertWithoutReferralsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReferralsInput, UsersUpdateWithoutReferralsInput>, UsersUncheckedUpdateWithoutReferralsInput>
  }

  export type UsersCreateNestedOneWithoutPointsInput = {
    create?: XOR<UsersCreateWithoutPointsInput, UsersUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPointsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneWithoutPointsNestedInput = {
    create?: XOR<UsersCreateWithoutPointsInput, UsersUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPointsInput
    upsert?: UsersUpsertWithoutPointsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPointsInput, UsersUpdateWithoutPointsInput>, UsersUncheckedUpdateWithoutPointsInput>
  }

  export type UsersCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    connect?: UsersWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsersUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotificationsInput
    upsert?: UsersUpsertWithoutNotificationsInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotificationsInput, UsersUpdateWithoutNotificationsInput>, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventsCreateWithoutPromotorInput = {
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutEventInput
    tickets?: TicketsCreateNestedManyWithoutEventInput
    vouchers?: VouchersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutPromotorInput = {
    eventId?: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VouchersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutPromotorInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutPromotorInput, EventsUncheckedCreateWithoutPromotorInput>
  }

  export type EventsCreateManyPromotorInputEnvelope = {
    data: EventsCreateManyPromotorInput | EventsCreateManyPromotorInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutUserInput = {
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
    event: EventsCreateNestedOneWithoutTransactionsInput
    ticket: TicketsCreateNestedOneWithoutTransactionsInput
    coupond?: CoupondsCreateNestedOneWithoutTransactionsInput
    voucher?: VouchersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    transactionId?: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointsCreateWithoutUsersInput = {
    pointsAmmount: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type PointsUncheckedCreateWithoutUsersInput = {
    pointId?: number
    pointsAmmount: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type PointsCreateOrConnectWithoutUsersInput = {
    where: PointsWhereUniqueInput
    create: XOR<PointsCreateWithoutUsersInput, PointsUncheckedCreateWithoutUsersInput>
  }

  export type PointsCreateManyUsersInputEnvelope = {
    data: PointsCreateManyUsersInput | PointsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CoupondsCreateWithoutUsersInput = {
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutCoupondInput
  }

  export type CoupondsUncheckedCreateWithoutUsersInput = {
    coupondId?: number
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutCoupondInput
  }

  export type CoupondsCreateOrConnectWithoutUsersInput = {
    where: CoupondsWhereUniqueInput
    create: XOR<CoupondsCreateWithoutUsersInput, CoupondsUncheckedCreateWithoutUsersInput>
  }

  export type CoupondsCreateManyUsersInputEnvelope = {
    data: CoupondsCreateManyUsersInput | CoupondsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type NotificationsCreateWithoutUsersInput = {
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsUncheckedCreateWithoutUsersInput = {
    notificationId?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationsCreateOrConnectWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type NotificationsCreateManyUsersInputEnvelope = {
    data: NotificationsCreateManyUsersInput | NotificationsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutReferrerInput = {
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
    referredUser: UsersCreateNestedOneWithoutReferralsInput
  }

  export type ReferralUncheckedCreateWithoutReferrerInput = {
    referralId?: number
    referredUserId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutReferrerInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralCreateManyReferrerInputEnvelope = {
    data: ReferralCreateManyReferrerInput | ReferralCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCreateWithoutReferredUserInput = {
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
    referrer: UsersCreateNestedOneWithoutReferredUsersInput
  }

  export type ReferralUncheckedCreateWithoutReferredUserInput = {
    referralId?: number
    referrerId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
  }

  export type ReferralCreateOrConnectWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralCreateManyReferredUserInputEnvelope = {
    data: ReferralCreateManyReferredUserInput | ReferralCreateManyReferredUserInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithWhereUniqueWithoutPromotorInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutPromotorInput, EventsUncheckedUpdateWithoutPromotorInput>
    create: XOR<EventsCreateWithoutPromotorInput, EventsUncheckedCreateWithoutPromotorInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutPromotorInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutPromotorInput, EventsUncheckedUpdateWithoutPromotorInput>
  }

  export type EventsUpdateManyWithWhereWithoutPromotorInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutPromotorInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    eventId?: IntFilter<"Events"> | number
    promotorId?: IntFilter<"Events"> | number
    nameEvents?: StringFilter<"Events"> | string
    categoryEvents?: StringFilter<"Events"> | string
    priceEvents?: StringFilter<"Events"> | string
    descriptionEvents?: StringFilter<"Events"> | string
    locationEvents?: StringFilter<"Events"> | string
    startDateEvents?: DateTimeFilter<"Events"> | Date | string
    endDateEvents?: DateTimeFilter<"Events"> | Date | string
    availableSeats?: IntFilter<"Events"> | number
    createdAt?: DateTimeFilter<"Events"> | Date | string
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    transactionId?: IntFilter<"Transactions"> | number
    userId?: IntFilter<"Transactions"> | number
    eventId?: IntFilter<"Transactions"> | number
    ticketId?: IntFilter<"Transactions"> | number
    ticketQuantity?: IntFilter<"Transactions"> | number
    totalPrice?: StringFilter<"Transactions"> | string
    pointUsed?: IntFilter<"Transactions"> | number
    coupondId?: IntNullableFilter<"Transactions"> | number | null
    voucherId?: IntNullableFilter<"Transactions"> | number | null
    statusTransaction?: StringFilter<"Transactions"> | string
    createdAt?: DateTimeFilter<"Transactions"> | Date | string
    expiredAt?: DateTimeFilter<"Transactions"> | Date | string
  }

  export type PointsUpsertWithWhereUniqueWithoutUsersInput = {
    where: PointsWhereUniqueInput
    update: XOR<PointsUpdateWithoutUsersInput, PointsUncheckedUpdateWithoutUsersInput>
    create: XOR<PointsCreateWithoutUsersInput, PointsUncheckedCreateWithoutUsersInput>
  }

  export type PointsUpdateWithWhereUniqueWithoutUsersInput = {
    where: PointsWhereUniqueInput
    data: XOR<PointsUpdateWithoutUsersInput, PointsUncheckedUpdateWithoutUsersInput>
  }

  export type PointsUpdateManyWithWhereWithoutUsersInput = {
    where: PointsScalarWhereInput
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyWithoutUsersInput>
  }

  export type PointsScalarWhereInput = {
    AND?: PointsScalarWhereInput | PointsScalarWhereInput[]
    OR?: PointsScalarWhereInput[]
    NOT?: PointsScalarWhereInput | PointsScalarWhereInput[]
    pointId?: IntFilter<"Points"> | number
    userId?: IntFilter<"Points"> | number
    pointsAmmount?: IntFilter<"Points"> | number
    createdAt?: DateTimeFilter<"Points"> | Date | string
    expiredAt?: DateTimeFilter<"Points"> | Date | string
  }

  export type CoupondsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CoupondsWhereUniqueInput
    update: XOR<CoupondsUpdateWithoutUsersInput, CoupondsUncheckedUpdateWithoutUsersInput>
    create: XOR<CoupondsCreateWithoutUsersInput, CoupondsUncheckedCreateWithoutUsersInput>
  }

  export type CoupondsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CoupondsWhereUniqueInput
    data: XOR<CoupondsUpdateWithoutUsersInput, CoupondsUncheckedUpdateWithoutUsersInput>
  }

  export type CoupondsUpdateManyWithWhereWithoutUsersInput = {
    where: CoupondsScalarWhereInput
    data: XOR<CoupondsUpdateManyMutationInput, CoupondsUncheckedUpdateManyWithoutUsersInput>
  }

  export type CoupondsScalarWhereInput = {
    AND?: CoupondsScalarWhereInput | CoupondsScalarWhereInput[]
    OR?: CoupondsScalarWhereInput[]
    NOT?: CoupondsScalarWhereInput | CoupondsScalarWhereInput[]
    coupondId?: IntFilter<"Couponds"> | number
    userId?: IntFilter<"Couponds"> | number
    couponAmmount?: IntFilter<"Couponds"> | number
    expiredAt?: DateTimeFilter<"Couponds"> | Date | string
    createdAt?: DateTimeFilter<"Couponds"> | Date | string
  }

  export type NotificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    update: XOR<NotificationsUpdateWithoutUsersInput, NotificationsUncheckedUpdateWithoutUsersInput>
    create: XOR<NotificationsCreateWithoutUsersInput, NotificationsUncheckedCreateWithoutUsersInput>
  }

  export type NotificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: NotificationsWhereUniqueInput
    data: XOR<NotificationsUpdateWithoutUsersInput, NotificationsUncheckedUpdateWithoutUsersInput>
  }

  export type NotificationsUpdateManyWithWhereWithoutUsersInput = {
    where: NotificationsScalarWhereInput
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyWithoutUsersInput>
  }

  export type NotificationsScalarWhereInput = {
    AND?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    OR?: NotificationsScalarWhereInput[]
    NOT?: NotificationsScalarWhereInput | NotificationsScalarWhereInput[]
    notificationId?: IntFilter<"Notifications"> | number
    userId?: IntFilter<"Notifications"> | number
    title?: StringFilter<"Notifications"> | string
    message?: StringFilter<"Notifications"> | string
    isRead?: BoolFilter<"Notifications"> | boolean
    createdAt?: DateTimeFilter<"Notifications"> | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutReferrerInput, ReferralUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralCreateWithoutReferrerInput, ReferralUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutReferrerInput, ReferralUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    referralId?: IntFilter<"Referral"> | number
    referrerId?: IntFilter<"Referral"> | number
    referredUserId?: IntFilter<"Referral"> | number
    rewardCouponId?: IntFilter<"Referral"> | number
    rewardPoints?: IntFilter<"Referral"> | number
    createdAt?: DateTimeFilter<"Referral"> | Date | string
  }

  export type ReferralUpsertWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutReferredUserInput, ReferralUncheckedUpdateWithoutReferredUserInput>
    create: XOR<ReferralCreateWithoutReferredUserInput, ReferralUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutReferredUserInput, ReferralUncheckedUpdateWithoutReferredUserInput>
  }

  export type ReferralUpdateManyWithWhereWithoutReferredUserInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutReferredUserInput>
  }

  export type UsersCreateWithoutEventsInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUsersInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateWithoutEventsInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersCreateOrConnectWithoutEventsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
  }

  export type TransactionsCreateWithoutEventInput = {
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
    user: UsersCreateNestedOneWithoutTransactionsInput
    ticket: TicketsCreateNestedOneWithoutTransactionsInput
    coupond?: CoupondsCreateNestedOneWithoutTransactionsInput
    voucher?: VouchersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutEventInput = {
    transactionId?: number
    userId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsCreateOrConnectWithoutEventInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutEventInput, TransactionsUncheckedCreateWithoutEventInput>
  }

  export type TransactionsCreateManyEventInputEnvelope = {
    data: TransactionsCreateManyEventInput | TransactionsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketsCreateWithoutEventInput = {
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutTicketInput
  }

  export type TicketsUncheckedCreateWithoutEventInput = {
    ticketId?: number
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketsCreateOrConnectWithoutEventInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutEventInput, TicketsUncheckedCreateWithoutEventInput>
  }

  export type TicketsCreateManyEventInputEnvelope = {
    data: TicketsCreateManyEventInput | TicketsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VouchersCreateWithoutEventInput = {
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    transactions?: TransactionsCreateNestedManyWithoutVoucherInput
  }

  export type VouchersUncheckedCreateWithoutEventInput = {
    voucherId?: number
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VouchersCreateOrConnectWithoutEventInput = {
    where: VouchersWhereUniqueInput
    create: XOR<VouchersCreateWithoutEventInput, VouchersUncheckedCreateWithoutEventInput>
  }

  export type VouchersCreateManyEventInputEnvelope = {
    data: VouchersCreateManyEventInput | VouchersCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutEventsInput = {
    update: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
    create: XOR<UsersCreateWithoutEventsInput, UsersUncheckedCreateWithoutEventsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEventsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEventsInput, UsersUncheckedUpdateWithoutEventsInput>
  }

  export type UsersUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutEventsInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutEventInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutEventInput, TransactionsUncheckedUpdateWithoutEventInput>
    create: XOR<TransactionsCreateWithoutEventInput, TransactionsUncheckedCreateWithoutEventInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutEventInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutEventInput, TransactionsUncheckedUpdateWithoutEventInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutEventInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketsUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketsWhereUniqueInput
    update: XOR<TicketsUpdateWithoutEventInput, TicketsUncheckedUpdateWithoutEventInput>
    create: XOR<TicketsCreateWithoutEventInput, TicketsUncheckedCreateWithoutEventInput>
  }

  export type TicketsUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketsWhereUniqueInput
    data: XOR<TicketsUpdateWithoutEventInput, TicketsUncheckedUpdateWithoutEventInput>
  }

  export type TicketsUpdateManyWithWhereWithoutEventInput = {
    where: TicketsScalarWhereInput
    data: XOR<TicketsUpdateManyMutationInput, TicketsUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketsScalarWhereInput = {
    AND?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
    OR?: TicketsScalarWhereInput[]
    NOT?: TicketsScalarWhereInput | TicketsScalarWhereInput[]
    ticketId?: IntFilter<"Tickets"> | number
    eventId?: IntFilter<"Tickets"> | number
    ticketType?: StringFilter<"Tickets"> | string
    ticketPrice?: StringFilter<"Tickets"> | string
    quantityAvailable?: IntFilter<"Tickets"> | number
    createdAt?: DateTimeFilter<"Tickets"> | Date | string
  }

  export type VouchersUpsertWithWhereUniqueWithoutEventInput = {
    where: VouchersWhereUniqueInput
    update: XOR<VouchersUpdateWithoutEventInput, VouchersUncheckedUpdateWithoutEventInput>
    create: XOR<VouchersCreateWithoutEventInput, VouchersUncheckedCreateWithoutEventInput>
  }

  export type VouchersUpdateWithWhereUniqueWithoutEventInput = {
    where: VouchersWhereUniqueInput
    data: XOR<VouchersUpdateWithoutEventInput, VouchersUncheckedUpdateWithoutEventInput>
  }

  export type VouchersUpdateManyWithWhereWithoutEventInput = {
    where: VouchersScalarWhereInput
    data: XOR<VouchersUpdateManyMutationInput, VouchersUncheckedUpdateManyWithoutEventInput>
  }

  export type VouchersScalarWhereInput = {
    AND?: VouchersScalarWhereInput | VouchersScalarWhereInput[]
    OR?: VouchersScalarWhereInput[]
    NOT?: VouchersScalarWhereInput | VouchersScalarWhereInput[]
    voucherId?: IntFilter<"Vouchers"> | number
    eventId?: IntFilter<"Vouchers"> | number
    code?: StringFilter<"Vouchers"> | string
    voucherAmmount?: IntFilter<"Vouchers"> | number
    expiredAt?: DateTimeFilter<"Vouchers"> | Date | string
    createdAt?: DateTimeFilter<"Vouchers"> | Date | string
  }

  export type EventsCreateWithoutTicketsInput = {
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    promotor: UsersCreateNestedOneWithoutEventsInput
    transactions?: TransactionsCreateNestedManyWithoutEventInput
    vouchers?: VouchersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutTicketsInput = {
    eventId?: number
    promotorId: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VouchersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutTicketsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutTicketsInput, EventsUncheckedCreateWithoutTicketsInput>
  }

  export type TransactionsCreateWithoutTicketInput = {
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
    user: UsersCreateNestedOneWithoutTransactionsInput
    event: EventsCreateNestedOneWithoutTransactionsInput
    coupond?: CoupondsCreateNestedOneWithoutTransactionsInput
    voucher?: VouchersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutTicketInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsCreateOrConnectWithoutTicketInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutTicketInput, TransactionsUncheckedCreateWithoutTicketInput>
  }

  export type TransactionsCreateManyTicketInputEnvelope = {
    data: TransactionsCreateManyTicketInput | TransactionsCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithoutTicketsInput = {
    update: XOR<EventsUpdateWithoutTicketsInput, EventsUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventsCreateWithoutTicketsInput, EventsUncheckedCreateWithoutTicketsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutTicketsInput, EventsUncheckedUpdateWithoutTicketsInput>
  }

  export type EventsUpdateWithoutTicketsInput = {
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: UsersUpdateOneRequiredWithoutEventsNestedInput
    transactions?: TransactionsUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutTicketsInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutTicketInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutTicketInput, TransactionsUncheckedUpdateWithoutTicketInput>
    create: XOR<TransactionsCreateWithoutTicketInput, TransactionsUncheckedCreateWithoutTicketInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutTicketInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutTicketInput, TransactionsUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutTicketInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutTicketInput>
  }

  export type UsersCreateWithoutTransactionsInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    points?: PointsCreateNestedManyWithoutUsersInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateWithoutTransactionsInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersCreateOrConnectWithoutTransactionsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTransactionsInput, UsersUncheckedCreateWithoutTransactionsInput>
  }

  export type EventsCreateWithoutTransactionsInput = {
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    promotor: UsersCreateNestedOneWithoutEventsInput
    tickets?: TicketsCreateNestedManyWithoutEventInput
    vouchers?: VouchersCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutTransactionsInput = {
    eventId?: number
    promotorId: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    tickets?: TicketsUncheckedCreateNestedManyWithoutEventInput
    vouchers?: VouchersUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutTransactionsInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutTransactionsInput, EventsUncheckedCreateWithoutTransactionsInput>
  }

  export type TicketsCreateWithoutTransactionsInput = {
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
    event: EventsCreateNestedOneWithoutTicketsInput
  }

  export type TicketsUncheckedCreateWithoutTransactionsInput = {
    ticketId?: number
    eventId: number
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
  }

  export type TicketsCreateOrConnectWithoutTransactionsInput = {
    where: TicketsWhereUniqueInput
    create: XOR<TicketsCreateWithoutTransactionsInput, TicketsUncheckedCreateWithoutTransactionsInput>
  }

  export type CoupondsCreateWithoutTransactionsInput = {
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    Users: UsersCreateNestedOneWithoutCoupondsInput
  }

  export type CoupondsUncheckedCreateWithoutTransactionsInput = {
    coupondId?: number
    userId: number
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type CoupondsCreateOrConnectWithoutTransactionsInput = {
    where: CoupondsWhereUniqueInput
    create: XOR<CoupondsCreateWithoutTransactionsInput, CoupondsUncheckedCreateWithoutTransactionsInput>
  }

  export type VouchersCreateWithoutTransactionsInput = {
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
    event: EventsCreateNestedOneWithoutVouchersInput
  }

  export type VouchersUncheckedCreateWithoutTransactionsInput = {
    voucherId?: number
    eventId: number
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type VouchersCreateOrConnectWithoutTransactionsInput = {
    where: VouchersWhereUniqueInput
    create: XOR<VouchersCreateWithoutTransactionsInput, VouchersUncheckedCreateWithoutTransactionsInput>
  }

  export type UsersUpsertWithoutTransactionsInput = {
    update: XOR<UsersUpdateWithoutTransactionsInput, UsersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UsersCreateWithoutTransactionsInput, UsersUncheckedCreateWithoutTransactionsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTransactionsInput, UsersUncheckedUpdateWithoutTransactionsInput>
  }

  export type UsersUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTransactionsInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type EventsUpsertWithoutTransactionsInput = {
    update: XOR<EventsUpdateWithoutTransactionsInput, EventsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EventsCreateWithoutTransactionsInput, EventsUncheckedCreateWithoutTransactionsInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutTransactionsInput, EventsUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventsUpdateWithoutTransactionsInput = {
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: UsersUpdateOneRequiredWithoutEventsNestedInput
    tickets?: TicketsUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutTransactionsInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketsUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketsUpsertWithoutTransactionsInput = {
    update: XOR<TicketsUpdateWithoutTransactionsInput, TicketsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TicketsCreateWithoutTransactionsInput, TicketsUncheckedCreateWithoutTransactionsInput>
    where?: TicketsWhereInput
  }

  export type TicketsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TicketsWhereInput
    data: XOR<TicketsUpdateWithoutTransactionsInput, TicketsUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketsUpdateWithoutTransactionsInput = {
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketsUncheckedUpdateWithoutTransactionsInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupondsUpsertWithoutTransactionsInput = {
    update: XOR<CoupondsUpdateWithoutTransactionsInput, CoupondsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CoupondsCreateWithoutTransactionsInput, CoupondsUncheckedCreateWithoutTransactionsInput>
    where?: CoupondsWhereInput
  }

  export type CoupondsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CoupondsWhereInput
    data: XOR<CoupondsUpdateWithoutTransactionsInput, CoupondsUncheckedUpdateWithoutTransactionsInput>
  }

  export type CoupondsUpdateWithoutTransactionsInput = {
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutCoupondsNestedInput
  }

  export type CoupondsUncheckedUpdateWithoutTransactionsInput = {
    coupondId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersUpsertWithoutTransactionsInput = {
    update: XOR<VouchersUpdateWithoutTransactionsInput, VouchersUncheckedUpdateWithoutTransactionsInput>
    create: XOR<VouchersCreateWithoutTransactionsInput, VouchersUncheckedCreateWithoutTransactionsInput>
    where?: VouchersWhereInput
  }

  export type VouchersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: VouchersWhereInput
    data: XOR<VouchersUpdateWithoutTransactionsInput, VouchersUncheckedUpdateWithoutTransactionsInput>
  }

  export type VouchersUpdateWithoutTransactionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutVouchersNestedInput
  }

  export type VouchersUncheckedUpdateWithoutTransactionsInput = {
    voucherId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateWithoutCoupondsInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateWithoutCoupondsInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersCreateOrConnectWithoutCoupondsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCoupondsInput, UsersUncheckedCreateWithoutCoupondsInput>
  }

  export type TransactionsCreateWithoutCoupondInput = {
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
    user: UsersCreateNestedOneWithoutTransactionsInput
    event: EventsCreateNestedOneWithoutTransactionsInput
    ticket: TicketsCreateNestedOneWithoutTransactionsInput
    voucher?: VouchersCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutCoupondInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsCreateOrConnectWithoutCoupondInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutCoupondInput, TransactionsUncheckedCreateWithoutCoupondInput>
  }

  export type TransactionsCreateManyCoupondInputEnvelope = {
    data: TransactionsCreateManyCoupondInput | TransactionsCreateManyCoupondInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutCoupondsInput = {
    update: XOR<UsersUpdateWithoutCoupondsInput, UsersUncheckedUpdateWithoutCoupondsInput>
    create: XOR<UsersCreateWithoutCoupondsInput, UsersUncheckedCreateWithoutCoupondsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCoupondsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCoupondsInput, UsersUncheckedUpdateWithoutCoupondsInput>
  }

  export type UsersUpdateWithoutCoupondsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutCoupondsInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutCoupondInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutCoupondInput, TransactionsUncheckedUpdateWithoutCoupondInput>
    create: XOR<TransactionsCreateWithoutCoupondInput, TransactionsUncheckedCreateWithoutCoupondInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutCoupondInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutCoupondInput, TransactionsUncheckedUpdateWithoutCoupondInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutCoupondInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutCoupondInput>
  }

  export type EventsCreateWithoutVouchersInput = {
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    promotor: UsersCreateNestedOneWithoutEventsInput
    transactions?: TransactionsCreateNestedManyWithoutEventInput
    tickets?: TicketsCreateNestedManyWithoutEventInput
  }

  export type EventsUncheckedCreateWithoutVouchersInput = {
    eventId?: number
    promotorId: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
    transactions?: TransactionsUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketsUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventsCreateOrConnectWithoutVouchersInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutVouchersInput, EventsUncheckedCreateWithoutVouchersInput>
  }

  export type TransactionsCreateWithoutVoucherInput = {
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
    user: UsersCreateNestedOneWithoutTransactionsInput
    event: EventsCreateNestedOneWithoutTransactionsInput
    ticket: TicketsCreateNestedOneWithoutTransactionsInput
    coupond?: CoupondsCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateWithoutVoucherInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsCreateOrConnectWithoutVoucherInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutVoucherInput, TransactionsUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionsCreateManyVoucherInputEnvelope = {
    data: TransactionsCreateManyVoucherInput | TransactionsCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithoutVouchersInput = {
    update: XOR<EventsUpdateWithoutVouchersInput, EventsUncheckedUpdateWithoutVouchersInput>
    create: XOR<EventsCreateWithoutVouchersInput, EventsUncheckedCreateWithoutVouchersInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutVouchersInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutVouchersInput, EventsUncheckedUpdateWithoutVouchersInput>
  }

  export type EventsUpdateWithoutVouchersInput = {
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotor?: UsersUpdateOneRequiredWithoutEventsNestedInput
    transactions?: TransactionsUpdateManyWithoutEventNestedInput
    tickets?: TicketsUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutVouchersInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    promotorId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionsUpsertWithWhereUniqueWithoutVoucherInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutVoucherInput, TransactionsUncheckedUpdateWithoutVoucherInput>
    create: XOR<TransactionsCreateWithoutVoucherInput, TransactionsUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutVoucherInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutVoucherInput, TransactionsUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutVoucherInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutVoucherInput>
  }

  export type UsersCreateWithoutReferredUsersInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUsersInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateWithoutReferredUsersInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersCreateOrConnectWithoutReferredUsersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReferredUsersInput, UsersUncheckedCreateWithoutReferredUsersInput>
  }

  export type UsersCreateWithoutReferralsInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUsersInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
  }

  export type UsersUncheckedCreateWithoutReferralsInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
  }

  export type UsersCreateOrConnectWithoutReferralsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReferralsInput, UsersUncheckedCreateWithoutReferralsInput>
  }

  export type UsersUpsertWithoutReferredUsersInput = {
    update: XOR<UsersUpdateWithoutReferredUsersInput, UsersUncheckedUpdateWithoutReferredUsersInput>
    create: XOR<UsersCreateWithoutReferredUsersInput, UsersUncheckedCreateWithoutReferredUsersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReferredUsersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReferredUsersInput, UsersUncheckedUpdateWithoutReferredUsersInput>
  }

  export type UsersUpdateWithoutReferredUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutReferredUsersInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUpsertWithoutReferralsInput = {
    update: XOR<UsersUpdateWithoutReferralsInput, UsersUncheckedUpdateWithoutReferralsInput>
    create: XOR<UsersCreateWithoutReferralsInput, UsersUncheckedCreateWithoutReferralsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReferralsInput, UsersUncheckedUpdateWithoutReferralsInput>
  }

  export type UsersUpdateWithoutReferralsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
  }

  export type UsersUncheckedUpdateWithoutReferralsInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
  }

  export type UsersCreateWithoutPointsInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    notifications?: NotificationsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateWithoutPointsInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    notifications?: NotificationsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersCreateOrConnectWithoutPointsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPointsInput, UsersUncheckedCreateWithoutPointsInput>
  }

  export type UsersUpsertWithoutPointsInput = {
    update: XOR<UsersUpdateWithoutPointsInput, UsersUncheckedUpdateWithoutPointsInput>
    create: XOR<UsersCreateWithoutPointsInput, UsersUncheckedCreateWithoutPointsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPointsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPointsInput, UsersUncheckedUpdateWithoutPointsInput>
  }

  export type UsersUpdateWithoutPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutPointsInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    notifications?: NotificationsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersCreateWithoutNotificationsInput = {
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUsersInput
    couponds?: CoupondsCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralCreateNestedManyWithoutReferrerInput
    referrals?: ReferralCreateNestedManyWithoutReferredUserInput
  }

  export type UsersUncheckedCreateWithoutNotificationsInput = {
    usersId?: number
    name: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role | null
    referralCode?: string | null
    referredBy?: string | null
    createdAt?: Date | string
    events?: EventsUncheckedCreateNestedManyWithoutPromotorInput
    transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUsersInput
    couponds?: CoupondsUncheckedCreateNestedManyWithoutUsersInput
    referredUsers?: ReferralUncheckedCreateNestedManyWithoutReferrerInput
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UsersCreateOrConnectWithoutNotificationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
  }

  export type UsersUpsertWithoutNotificationsInput = {
    update: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UsersCreateWithoutNotificationsInput, UsersUncheckedCreateWithoutNotificationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotificationsInput, UsersUncheckedUpdateWithoutNotificationsInput>
  }

  export type UsersUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUpdateManyWithoutReferredUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotificationsInput = {
    usersId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventsUncheckedUpdateManyWithoutPromotorNestedInput
    transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUsersNestedInput
    couponds?: CoupondsUncheckedUpdateManyWithoutUsersNestedInput
    referredUsers?: ReferralUncheckedUpdateManyWithoutReferrerNestedInput
    referrals?: ReferralUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type EventsCreateManyPromotorInput = {
    eventId?: number
    nameEvents: string
    categoryEvents: string
    priceEvents: string
    descriptionEvents: string
    locationEvents: string
    startDateEvents: Date | string
    endDateEvents: Date | string
    availableSeats: number
    createdAt?: Date | string
  }

  export type TransactionsCreateManyUserInput = {
    transactionId?: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type PointsCreateManyUsersInput = {
    pointId?: number
    pointsAmmount: number
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type CoupondsCreateManyUsersInput = {
    coupondId?: number
    couponAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type NotificationsCreateManyUsersInput = {
    notificationId?: number
    title: string
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type ReferralCreateManyReferrerInput = {
    referralId?: number
    referredUserId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
  }

  export type ReferralCreateManyReferredUserInput = {
    referralId?: number
    referrerId: number
    rewardCouponId: number
    rewardPoints: number
    createdAt?: Date | string
  }

  export type EventsUpdateWithoutPromotorInput = {
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutEventNestedInput
    tickets?: TicketsUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateWithoutPromotorInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketsUncheckedUpdateManyWithoutEventNestedInput
    vouchers?: VouchersUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateManyWithoutPromotorInput = {
    eventId?: IntFieldUpdateOperationsInput | number
    nameEvents?: StringFieldUpdateOperationsInput | string
    categoryEvents?: StringFieldUpdateOperationsInput | string
    priceEvents?: StringFieldUpdateOperationsInput | string
    descriptionEvents?: StringFieldUpdateOperationsInput | string
    locationEvents?: StringFieldUpdateOperationsInput | string
    startDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    endDateEvents?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUpdateWithoutUserInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventsUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketsUpdateOneRequiredWithoutTransactionsNestedInput
    coupond?: CoupondsUpdateOneWithoutTransactionsNestedInput
    voucher?: VouchersUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUpdateWithoutUsersInput = {
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUncheckedUpdateWithoutUsersInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUncheckedUpdateManyWithoutUsersInput = {
    pointId?: IntFieldUpdateOperationsInput | number
    pointsAmmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoupondsUpdateWithoutUsersInput = {
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutCoupondNestedInput
  }

  export type CoupondsUncheckedUpdateWithoutUsersInput = {
    coupondId?: IntFieldUpdateOperationsInput | number
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutCoupondNestedInput
  }

  export type CoupondsUncheckedUpdateManyWithoutUsersInput = {
    coupondId?: IntFieldUpdateOperationsInput | number
    couponAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateWithoutUsersInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationsUncheckedUpdateManyWithoutUsersInput = {
    notificationId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutReferrerInput = {
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUser?: UsersUpdateOneRequiredWithoutReferralsNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferrerInput = {
    referralId?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutReferrerInput = {
    referralId?: IntFieldUpdateOperationsInput | number
    referredUserId?: IntFieldUpdateOperationsInput | number
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUpdateWithoutReferredUserInput = {
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UsersUpdateOneRequiredWithoutReferredUsersNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferredUserInput = {
    referralId?: IntFieldUpdateOperationsInput | number
    referrerId?: IntFieldUpdateOperationsInput | number
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyWithoutReferredUserInput = {
    referralId?: IntFieldUpdateOperationsInput | number
    referrerId?: IntFieldUpdateOperationsInput | number
    rewardCouponId?: IntFieldUpdateOperationsInput | number
    rewardPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyEventInput = {
    transactionId?: number
    userId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TicketsCreateManyEventInput = {
    ticketId?: number
    ticketType: string
    ticketPrice: string
    quantityAvailable: number
    createdAt?: Date | string
  }

  export type VouchersCreateManyEventInput = {
    voucherId?: number
    code: string
    voucherAmmount: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type TransactionsUpdateWithoutEventInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketsUpdateOneRequiredWithoutTransactionsNestedInput
    coupond?: CoupondsUpdateOneWithoutTransactionsNestedInput
    voucher?: VouchersUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutEventInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutEventInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketsUpdateWithoutEventInput = {
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutTicketNestedInput
  }

  export type TicketsUncheckedUpdateWithoutEventInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketsUncheckedUpdateManyWithoutEventInput = {
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketType?: StringFieldUpdateOperationsInput | string
    ticketPrice?: StringFieldUpdateOperationsInput | string
    quantityAvailable?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VouchersUpdateWithoutEventInput = {
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUpdateManyWithoutVoucherNestedInput
  }

  export type VouchersUncheckedUpdateWithoutEventInput = {
    voucherId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionsUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VouchersUncheckedUpdateManyWithoutEventInput = {
    voucherId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    voucherAmmount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyTicketInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsUpdateWithoutTicketInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventsUpdateOneRequiredWithoutTransactionsNestedInput
    coupond?: CoupondsUpdateOneWithoutTransactionsNestedInput
    voucher?: VouchersUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutTicketInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutTicketInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyCoupondInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    voucherId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsUpdateWithoutCoupondInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventsUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketsUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VouchersUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutCoupondInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutCoupondInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsCreateManyVoucherInput = {
    transactionId?: number
    userId: number
    eventId: number
    ticketId: number
    ticketQuantity: number
    totalPrice: string
    pointUsed: number
    coupondId?: number | null
    statusTransaction: string
    createdAt?: Date | string
    expiredAt: Date | string
  }

  export type TransactionsUpdateWithoutVoucherInput = {
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventsUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketsUpdateOneRequiredWithoutTransactionsNestedInput
    coupond?: CoupondsUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateWithoutVoucherInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutVoucherInput = {
    transactionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    ticketQuantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: StringFieldUpdateOperationsInput | string
    pointUsed?: IntFieldUpdateOperationsInput | number
    coupondId?: NullableIntFieldUpdateOperationsInput | number | null
    statusTransaction?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}