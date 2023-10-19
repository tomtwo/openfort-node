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

import { SortOrder } from '../models/SortOrder';
import { TransactionIntentResponseExpandable } from '../models/TransactionIntentResponseExpandable';
import { HttpFile } from '../http/http';

export class TransactionIntentListQueries {
    /**
    * Specifies the maximum number of records to return.
    */
    'limit'?: number;
    /**
    * Specifies the offset for the first records to return.
    */
    'skip'?: number;
    'order'?: SortOrder;
    /**
    * Specifies the fields to expand in the response.
    */
    'expand'?: Array<TransactionIntentResponseExpandable>;
    /**
    * The chain ID.
    */
    'chainId'?: number;
    /**
    * Filter by account ID.
    */
    'accountId'?: Array<string>;
    /**
    * Filter by player ID (starts with pla_).
    */
    'playerId'?: Array<string>;
    /**
    * Filter by policy ID (starts with pol_).
    */
    'policyId'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "double"
        },
        {
            "name": "skip",
            "baseName": "skip",
            "type": "number",
            "format": "double"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "SortOrder",
            "format": ""
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "Array<TransactionIntentResponseExpandable>",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "playerId",
            "baseName": "playerId",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "policyId",
            "baseName": "policyId",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionIntentListQueries.attributeTypeMap;
    }

    public constructor() {
    }
}



