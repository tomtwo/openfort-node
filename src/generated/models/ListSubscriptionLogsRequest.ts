/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * OpenAPI spec version: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APITopic } from '../models/APITopic';
import { SortOrder } from '../models/SortOrder';
import { Status } from '../models/Status';
import { HttpFile } from '../http/http';

export class ListSubscriptionLogsRequest {
    /**
    * Specifies the maximum number of records to return.
    */
    'limit'?: number;
    /**
    * Specifies the offset for the first records to return.
    */
    'skip'?: number;
    'order'?: SortOrder;
    'topic'?: APITopic;
    'status'?: Status;
    /**
    * Specifies the object ID of the object related to triggered notification
    */
    'object'?: string;
    /**
    * Specifies the subscription ID
    */
    'subscription'?: string;
    /**
    * Specifies the trigger ID
    */
    'trigger'?: string;
    /**
    * Specifies the request ID
    */
    'requestID'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortOrder",
            "format": ""
        },
        {
            "name": "topic",
            "baseName": "topic",
            "type": "APITopic",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Status",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string",
            "format": ""
        },
        {
            "name": "trigger",
            "baseName": "trigger",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestID",
            "baseName": "requestID",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListSubscriptionLogsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



