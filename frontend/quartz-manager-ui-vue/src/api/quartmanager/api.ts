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
 * @interface GetRestJobResponse
 */
export interface GetRestJobResponse {
    /**
     * 
     * @type {string}
     * @memberof GetRestJobResponse
     */
    'jobGroup': string;
    /**
     * 
     * @type {string}
     * @memberof GetRestJobResponse
     */
    'jobName': string;
    /**
     * 
     * @type {string}
     * @memberof GetRestJobResponse
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof GetRestJobResponse
     */
    'cronExpression': string;
}
/**
 * 
 * @export
 * @interface JobKey
 */
export interface JobKey {
    /**
     * 
     * @type {string}
     * @memberof JobKey
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof JobKey
     */
    'group'?: string;
}
/**
 * 
 * @export
 * @interface PostRestJobRequest
 */
export interface PostRestJobRequest {
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'jobGroup'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'jobName': string;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'url': string;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'password'?: string;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'httpMethod': PostRestJobRequestHttpMethodEnum;
    /**
     * 
     * @type {string}
     * @memberof PostRestJobRequest
     */
    'cronExpression': string;
}

export const PostRestJobRequestHttpMethodEnum = {
    Get: 'GET',
    Head: 'HEAD',
    Post: 'POST',
    Put: 'PUT',
    Patch: 'PATCH',
    Delete: 'DELETE',
    Options: 'OPTIONS',
    Trace: 'TRACE'
} as const;

export type PostRestJobRequestHttpMethodEnum = typeof PostRestJobRequestHttpMethodEnum[keyof typeof PostRestJobRequestHttpMethodEnum];


/**
 * SchedulerControllerApi - axios parameter creator
 * @export
 */
export const SchedulerControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {PostRestJobRequest} postRestJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addJob: async (postRestJobRequest: PostRestJobRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'postRestJobRequest' is not null or undefined
            assertParamExists('addJob', 'postRestJobRequest', postRestJobRequest)
            const localVarPath = `/scheduler/`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(postRestJobRequest, localVarRequestOptions, configuration)

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
            const localVarPath = `/scheduler/groups/{groupName}/jobs/{jobName}`
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
            const localVarPath = `/scheduler/groups`;
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
            const localVarPath = `/scheduler/groups/{groupName}/jobs/{jobName}`
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
         * @param {string} groupName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs: async (groupName: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'groupName' is not null or undefined
            assertParamExists('getJobs', 'groupName', groupName)
            const localVarPath = `/scheduler/groups/{groupName}/jobs`
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
         * @param {PostRestJobRequest} postRestJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addJob(postRestJobRequest: PostRestJobRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetRestJobResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addJob(postRestJobRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteJob(groupName: string, jobName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteJob(groupName, jobName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroups(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>> {
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
        async getJob(groupName: string, jobName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetRestJobResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJob(groupName, jobName, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} groupName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobs(groupName: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<JobKey>>> {
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
         * @param {PostRestJobRequest} postRestJobRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addJob(postRestJobRequest: PostRestJobRequest, options?: any): AxiosPromise<GetRestJobResponse> {
            return localVarFp.addJob(postRestJobRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJob(groupName: string, jobName: string, options?: any): AxiosPromise<string> {
            return localVarFp.deleteJob(groupName, jobName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroups(options?: any): AxiosPromise<Array<string>> {
            return localVarFp.getGroups(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupName 
         * @param {string} jobName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJob(groupName: string, jobName: string, options?: any): AxiosPromise<GetRestJobResponse> {
            return localVarFp.getJob(groupName, jobName, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} groupName 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobs(groupName: string, options?: any): AxiosPromise<Array<JobKey>> {
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
     * @param {PostRestJobRequest} postRestJobRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public addJob(postRestJobRequest: PostRestJobRequest, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).addJob(postRestJobRequest, options).then((request) => request(this.axios, this.basePath));
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
     * @param {string} groupName 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SchedulerControllerApi
     */
    public getJobs(groupName: string, options?: AxiosRequestConfig) {
        return SchedulerControllerApiFp(this.configuration).getJobs(groupName, options).then((request) => request(this.axios, this.basePath));
    }
}

