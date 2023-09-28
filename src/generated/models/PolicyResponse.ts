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

import { EntityTypePOLICY } from '../models/EntityTypePOLICY';
import { PlayerResponseTransactionIntentsInner } from '../models/PlayerResponseTransactionIntentsInner';
import { PolicyResponsePolicyRulesInner } from '../models/PolicyResponsePolicyRulesInner';
import { PolicyStrategy } from '../models/PolicyStrategy';
import { HttpFile } from '../http/http';

export class PolicyResponse {
    'id': string;
    'object': EntityTypePOLICY;
    'createdAt': number;
    'name': string | null;
    'deleted': boolean;
    /**
    * The chain ID.
    */
    'chainId': number;
    'strategy': PolicyStrategy;
    'transactionIntents': Array<PlayerResponseTransactionIntentsInner>;
    'policyRules': Array<PolicyResponsePolicyRulesInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "EntityTypePOLICY",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "PolicyStrategy",
            "format": ""
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PlayerResponseTransactionIntentsInner>",
            "format": ""
        },
        {
            "name": "policyRules",
            "baseName": "policyRules",
            "type": "Array<PolicyResponsePolicyRulesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PolicyResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


