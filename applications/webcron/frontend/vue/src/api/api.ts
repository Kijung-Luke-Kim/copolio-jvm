/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateHttpJob
 */
export interface CreateHttpJob {
    /**
     * 
     * @type {HttpJob}
     * @memberof CreateHttpJob
     */
    'httpJob': HttpJob;
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJob
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJob
     */
    'cronExpression': string;
}
/**
 * 
 * @export
 * @interface CreateHttpJobResult
 */
export interface CreateHttpJobResult {
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJobResult
     */
    'groupName': string;
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJobResult
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJobResult
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJobResult
     */
    'cronExpression': string;
    /**
     * 
     * @type {string}
     * @memberof CreateHttpJobResult
     */
    'url': string;
}
/**
 * 
 * @export
 * @interface DefaultError
 */
export interface DefaultError {
    /**
     * 
     * @type {string}
     * @memberof DefaultError
     */
    'timestamp': string;
    /**
     * 
     * @type {string}
     * @memberof DefaultError
     */
    'status': DefaultErrorStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof DefaultError
     */
    'error': string;
    /**
     * 
     * @type {string}
     * @memberof DefaultError
     */
    'exception': string;
    /**
     * 
     * @type {string}
     * @memberof DefaultError
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof DefaultError
     */
    'path': string;
}

export const DefaultErrorStatusEnum = {
    _100Continue: '100 CONTINUE',
    _101SwitchingProtocols: '101 SWITCHING_PROTOCOLS',
    _102Processing: '102 PROCESSING',
    _103Checkpoint: '103 CHECKPOINT',
    _200Ok: '200 OK',
    _201Created: '201 CREATED',
    _202Accepted: '202 ACCEPTED',
    _203NonAuthoritativeInformation: '203 NON_AUTHORITATIVE_INFORMATION',
    _204NoContent: '204 NO_CONTENT',
    _205ResetContent: '205 RESET_CONTENT',
    _206PartialContent: '206 PARTIAL_CONTENT',
    _207MultiStatus: '207 MULTI_STATUS',
    _208AlreadyReported: '208 ALREADY_REPORTED',
    _226ImUsed: '226 IM_USED',
    _300MultipleChoices: '300 MULTIPLE_CHOICES',
    _301MovedPermanently: '301 MOVED_PERMANENTLY',
    _302Found: '302 FOUND',
    _302MovedTemporarily: '302 MOVED_TEMPORARILY',
    _303SeeOther: '303 SEE_OTHER',
    _304NotModified: '304 NOT_MODIFIED',
    _305UseProxy: '305 USE_PROXY',
    _307TemporaryRedirect: '307 TEMPORARY_REDIRECT',
    _308PermanentRedirect: '308 PERMANENT_REDIRECT',
    _400BadRequest: '400 BAD_REQUEST',
    _401Unauthorized: '401 UNAUTHORIZED',
    _402PaymentRequired: '402 PAYMENT_REQUIRED',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _405MethodNotAllowed: '405 METHOD_NOT_ALLOWED',
    _406NotAcceptable: '406 NOT_ACCEPTABLE',
    _407ProxyAuthenticationRequired: '407 PROXY_AUTHENTICATION_REQUIRED',
    _408RequestTimeout: '408 REQUEST_TIMEOUT',
    _409Conflict: '409 CONFLICT',
    _410Gone: '410 GONE',
    _411LengthRequired: '411 LENGTH_REQUIRED',
    _412PreconditionFailed: '412 PRECONDITION_FAILED',
    _413PayloadTooLarge: '413 PAYLOAD_TOO_LARGE',
    _413RequestEntityTooLarge: '413 REQUEST_ENTITY_TOO_LARGE',
    _414UriTooLong: '414 URI_TOO_LONG',
    _414RequestUriTooLong: '414 REQUEST_URI_TOO_LONG',
    _415UnsupportedMediaType: '415 UNSUPPORTED_MEDIA_TYPE',
    _416RequestedRangeNotSatisfiable: '416 REQUESTED_RANGE_NOT_SATISFIABLE',
    _417ExpectationFailed: '417 EXPECTATION_FAILED',
    _418IAmATeapot: '418 I_AM_A_TEAPOT',
    _419InsufficientSpaceOnResource: '419 INSUFFICIENT_SPACE_ON_RESOURCE',
    _420MethodFailure: '420 METHOD_FAILURE',
    _421DestinationLocked: '421 DESTINATION_LOCKED',
    _422UnprocessableEntity: '422 UNPROCESSABLE_ENTITY',
    _423Locked: '423 LOCKED',
    _424FailedDependency: '424 FAILED_DEPENDENCY',
    _425TooEarly: '425 TOO_EARLY',
    _426UpgradeRequired: '426 UPGRADE_REQUIRED',
    _428PreconditionRequired: '428 PRECONDITION_REQUIRED',
    _429TooManyRequests: '429 TOO_MANY_REQUESTS',
    _431RequestHeaderFieldsTooLarge: '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
    _451UnavailableForLegalReasons: '451 UNAVAILABLE_FOR_LEGAL_REASONS',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _501NotImplemented: '501 NOT_IMPLEMENTED',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE',
    _504GatewayTimeout: '504 GATEWAY_TIMEOUT',
    _505HttpVersionNotSupported: '505 HTTP_VERSION_NOT_SUPPORTED',
    _506VariantAlsoNegotiates: '506 VARIANT_ALSO_NEGOTIATES',
    _507InsufficientStorage: '507 INSUFFICIENT_STORAGE',
    _508LoopDetected: '508 LOOP_DETECTED',
    _509BandwidthLimitExceeded: '509 BANDWIDTH_LIMIT_EXCEEDED',
    _510NotExtended: '510 NOT_EXTENDED',
    _511NetworkAuthenticationRequired: '511 NETWORK_AUTHENTICATION_REQUIRED'
} as const;

export type DefaultErrorStatusEnum = typeof DefaultErrorStatusEnum[keyof typeof DefaultErrorStatusEnum];

/**
 * 
 * @export
 * @interface DeleteHttpJobResult
 */
export interface DeleteHttpJobResult {
    /**
     * 
     * @type {string}
     * @memberof DeleteHttpJobResult
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface HttpJob
 */
export interface HttpJob {
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'uri'?: string;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'body'?: string;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'apiKey'?: string;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'apiToken'?: string;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'httpMethod': HttpJobHttpMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'jobName': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJob
     */
    'jobGroup': string;
}

export const HttpJobHttpMethodEnum = {
    Get: 'GET',
    Head: 'HEAD',
    Post: 'POST',
    Put: 'PUT',
    Patch: 'PATCH',
    Delete: 'DELETE',
    Options: 'OPTIONS',
    Trace: 'TRACE'
} as const;

export type HttpJobHttpMethodEnum = typeof HttpJobHttpMethodEnum[keyof typeof HttpJobHttpMethodEnum];

/**
 * 
 * @export
 * @interface HttpJobExecutionQueryResult
 */
export interface HttpJobExecutionQueryResult {
    /**
     * 
     * @type {string}
     * @memberof HttpJobExecutionQueryResult
     */
    'jobGroup': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobExecutionQueryResult
     */
    'jobName': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobExecutionQueryResult
     */
    'startTime': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobExecutionQueryResult
     */
    'endTime': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobExecutionQueryResult
     */
    'statusCode': HttpJobExecutionQueryResultStatusCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof HttpJobExecutionQueryResult
     */
    'response': string;
}

export const HttpJobExecutionQueryResultStatusCodeEnum = {
    _100Continue: '100 CONTINUE',
    _101SwitchingProtocols: '101 SWITCHING_PROTOCOLS',
    _102Processing: '102 PROCESSING',
    _103Checkpoint: '103 CHECKPOINT',
    _200Ok: '200 OK',
    _201Created: '201 CREATED',
    _202Accepted: '202 ACCEPTED',
    _203NonAuthoritativeInformation: '203 NON_AUTHORITATIVE_INFORMATION',
    _204NoContent: '204 NO_CONTENT',
    _205ResetContent: '205 RESET_CONTENT',
    _206PartialContent: '206 PARTIAL_CONTENT',
    _207MultiStatus: '207 MULTI_STATUS',
    _208AlreadyReported: '208 ALREADY_REPORTED',
    _226ImUsed: '226 IM_USED',
    _300MultipleChoices: '300 MULTIPLE_CHOICES',
    _301MovedPermanently: '301 MOVED_PERMANENTLY',
    _302Found: '302 FOUND',
    _302MovedTemporarily: '302 MOVED_TEMPORARILY',
    _303SeeOther: '303 SEE_OTHER',
    _304NotModified: '304 NOT_MODIFIED',
    _305UseProxy: '305 USE_PROXY',
    _307TemporaryRedirect: '307 TEMPORARY_REDIRECT',
    _308PermanentRedirect: '308 PERMANENT_REDIRECT',
    _400BadRequest: '400 BAD_REQUEST',
    _401Unauthorized: '401 UNAUTHORIZED',
    _402PaymentRequired: '402 PAYMENT_REQUIRED',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _405MethodNotAllowed: '405 METHOD_NOT_ALLOWED',
    _406NotAcceptable: '406 NOT_ACCEPTABLE',
    _407ProxyAuthenticationRequired: '407 PROXY_AUTHENTICATION_REQUIRED',
    _408RequestTimeout: '408 REQUEST_TIMEOUT',
    _409Conflict: '409 CONFLICT',
    _410Gone: '410 GONE',
    _411LengthRequired: '411 LENGTH_REQUIRED',
    _412PreconditionFailed: '412 PRECONDITION_FAILED',
    _413PayloadTooLarge: '413 PAYLOAD_TOO_LARGE',
    _413RequestEntityTooLarge: '413 REQUEST_ENTITY_TOO_LARGE',
    _414UriTooLong: '414 URI_TOO_LONG',
    _414RequestUriTooLong: '414 REQUEST_URI_TOO_LONG',
    _415UnsupportedMediaType: '415 UNSUPPORTED_MEDIA_TYPE',
    _416RequestedRangeNotSatisfiable: '416 REQUESTED_RANGE_NOT_SATISFIABLE',
    _417ExpectationFailed: '417 EXPECTATION_FAILED',
    _418IAmATeapot: '418 I_AM_A_TEAPOT',
    _419InsufficientSpaceOnResource: '419 INSUFFICIENT_SPACE_ON_RESOURCE',
    _420MethodFailure: '420 METHOD_FAILURE',
    _421DestinationLocked: '421 DESTINATION_LOCKED',
    _422UnprocessableEntity: '422 UNPROCESSABLE_ENTITY',
    _423Locked: '423 LOCKED',
    _424FailedDependency: '424 FAILED_DEPENDENCY',
    _425TooEarly: '425 TOO_EARLY',
    _426UpgradeRequired: '426 UPGRADE_REQUIRED',
    _428PreconditionRequired: '428 PRECONDITION_REQUIRED',
    _429TooManyRequests: '429 TOO_MANY_REQUESTS',
    _431RequestHeaderFieldsTooLarge: '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
    _451UnavailableForLegalReasons: '451 UNAVAILABLE_FOR_LEGAL_REASONS',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _501NotImplemented: '501 NOT_IMPLEMENTED',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE',
    _504GatewayTimeout: '504 GATEWAY_TIMEOUT',
    _505HttpVersionNotSupported: '505 HTTP_VERSION_NOT_SUPPORTED',
    _506VariantAlsoNegotiates: '506 VARIANT_ALSO_NEGOTIATES',
    _507InsufficientStorage: '507 INSUFFICIENT_STORAGE',
    _508LoopDetected: '508 LOOP_DETECTED',
    _509BandwidthLimitExceeded: '509 BANDWIDTH_LIMIT_EXCEEDED',
    _510NotExtended: '510 NOT_EXTENDED',
    _511NetworkAuthenticationRequired: '511 NETWORK_AUTHENTICATION_REQUIRED'
} as const;

export type HttpJobExecutionQueryResultStatusCodeEnum = typeof HttpJobExecutionQueryResultStatusCodeEnum[keyof typeof HttpJobExecutionQueryResultStatusCodeEnum];

/**
 * 
 * @export
 * @interface HttpJobGroupQueryResult
 */
export interface HttpJobGroupQueryResult {
    /**
     * 
     * @type {string}
     * @memberof HttpJobGroupQueryResult
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface HttpJobQueryResult
 */
export interface HttpJobQueryResult {
    /**
     * 
     * @type {string}
     * @memberof HttpJobQueryResult
     */
    'groupName': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobQueryResult
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobQueryResult
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobQueryResult
     */
    'cronExpression': string;
    /**
     * 
     * @type {string}
     * @memberof HttpJobQueryResult
     */
    'url': string;
}
/**
 * 
 * @export
 * @interface PageHttpJobExecutionQueryResult
 */
export interface PageHttpJobExecutionQueryResult {
    /**
     * 
     * @type {number}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'totalPages'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'totalElements'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'first'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'last'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'size'?: number;
    /**
     * 
     * @type {Array<HttpJobExecutionQueryResult>}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'content'?: Array<HttpJobExecutionQueryResult>;
    /**
     * 
     * @type {number}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'number'?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'sort'?: SortObject;
    /**
     * 
     * @type {PageableObject}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'pageable'?: PageableObject;
    /**
     * 
     * @type {number}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'numberOfElements'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PageHttpJobExecutionQueryResult
     */
    'empty'?: boolean;
}
/**
 * 
 * @export
 * @interface PageableObject
 */
export interface PageableObject {
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'offset'?: number;
    /**
     * 
     * @type {SortObject}
     * @memberof PageableObject
     */
    'sort'?: SortObject;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    'paged'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PageableObject
     */
    'unpaged'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'pageNumber'?: number;
    /**
     * 
     * @type {number}
     * @memberof PageableObject
     */
    'pageSize'?: number;
}
/**
 * 
 * @export
 * @interface SortObject
 */
export interface SortObject {
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    'empty'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    'sorted'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SortObject
     */
    'unsorted'?: boolean;
}

/**
 * SchedulerControllerApi - axios parameter creator
 * @export
 */
export const SchedulerControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateHttpJob} createHttpJob 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addJob: async (createHttpJob: CreateHttpJob, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createHttpJob' is not null or undefined
            assertParamExists('addJob', 'createHttpJob', createHttpJob)
            const localVarPath = `/api/http-scheduler/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createHttpJob, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob: async (groupName: string, jobName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupName' is not null or undefined
            assertParamExists('deleteJob', 'groupName', groupName)
            // verify required parameter 'jobName' is not null or undefined
            assertParamExists('deleteJob', 'jobName', jobName)
            const localVarPath = `/api/http-scheduler/groups/{groupName}/jobs/{jobName}`
                .replace(`{${"groupName"}}`, encodeURIComponent(String(groupName)))
                .replace(`{${"jobName"}}`, encodeURIComponent(String(jobName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroups: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/http-scheduler/groups`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob: async (groupName: string, jobName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupName' is not null or undefined
            assertParamExists('getJob', 'groupName', groupName)
            // verify required parameter 'jobName' is not null or undefined
            assertParamExists('getJob', 'jobName', jobName)
            const localVarPath = `/api/http-scheduler/groups/{groupName}/jobs/{jobName}`
                .replace(`{${"groupName"}}`, encodeURIComponent(String(groupName)))
                .replace(`{${"jobName"}}`, encodeURIComponent(String(jobName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [groupName] 
         * @param {string} [jobName] 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobExecutions: async (groupName?: string, jobName?: string, page?: number, size?: number, sort?: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/http-scheduler/executions/search`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (groupName !== undefined) {
                localVarQueryParameter['groupName'] = groupName;
            }

            if (jobName !== undefined) {
                localVarQueryParameter['jobName'] = jobName;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} groupName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs: async (groupName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupName' is not null or undefined
            assertParamExists('getJobs', 'groupName', groupName)
            const localVarPath = `/api/http-scheduler/groups/{groupName}/jobs`
                .replace(`{${"groupName"}}`, encodeURIComponent(String(groupName)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SchedulerControllerApi - functional programming interface
 * @export
 */
export const SchedulerControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SchedulerControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateHttpJob} createHttpJob 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addJob(createHttpJob: CreateHttpJob, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateHttpJobResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addJob(createHttpJob, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteJob(groupName: string, jobName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteHttpJobResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteJob(groupName, jobName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroups(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<HttpJobGroupQueryResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getGroups(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJob(groupName: string, jobName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HttpJobQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJob(groupName, jobName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} [groupName] 
         * @param {string} [jobName] 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobExecutions(groupName?: string, jobName?: string, page?: number, size?: number, sort?: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageHttpJobExecutionQueryResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobExecutions(groupName, jobName, page, size, sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} groupName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobs(groupName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<HttpJobQueryResult>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobs(groupName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SchedulerControllerApi - factory interface
 * @export
 */
export const SchedulerControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SchedulerControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateHttpJob} createHttpJob 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addJob(createHttpJob: CreateHttpJob, options?: any): AxiosPromise<CreateHttpJobResult> {
            return localVarFp.addJob(createHttpJob, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob(groupName: string, jobName: string, options?: any): AxiosPromise<DeleteHttpJobResult> {
            return localVarFp.deleteJob(groupName, jobName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroups(options?: any): AxiosPromise<Array<HttpJobGroupQueryResult>> {
            return localVarFp.getGroups(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob(groupName: string, jobName: string, options?: any): AxiosPromise<HttpJobQueryResult> {
            return localVarFp.getJob(groupName, jobName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [groupName] 
         * @param {string} [jobName] 
         * @param {number} [page] Zero-based page index (0..N)
         * @param {number} [size] The size of the page to be returned
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobExecutions(groupName?: string, jobName?: string, page?: number, size?: number, sort?: Array<string>, options?: any): AxiosPromise<PageHttpJobExecutionQueryResult> {
            return localVarFp.getJobExecutions(groupName, jobName, page, size, sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs(groupName: string, options?: any): AxiosPromise<Array<HttpJobQueryResult>> {
            return localVarFp.getJobs(groupName, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SchedulerControllerApi - object-oriented interface
 * @export
 * @class SchedulerControllerApi
 * @extends {BaseAPI}
 */
export class SchedulerControllerApi extends BaseAPI {
    /**
     * 
     * @param {CreateHttpJob} createHttpJob 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public addJob(createHttpJob: CreateHttpJob, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).addJob(createHttpJob, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupName 
     * @param {string} jobName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public deleteJob(groupName: string, jobName: string, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).deleteJob(groupName, jobName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public getGroups(options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).getGroups(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupName 
     * @param {string} jobName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public getJob(groupName: string, jobName: string, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).getJob(groupName, jobName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [groupName] 
     * @param {string} [jobName] 
     * @param {number} [page] Zero-based page index (0..N)
     * @param {number} [size] The size of the page to be returned
     * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public getJobExecutions(groupName?: string, jobName?: string, page?: number, size?: number, sort?: Array<string>, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).getJobExecutions(groupName, jobName, page, size, sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} groupName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public getJobs(groupName: string, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).getJobs(groupName, options).then((request) => request(this.axios, this.basePath));
    }
}


