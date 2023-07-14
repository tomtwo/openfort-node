/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { PolicyResponsePolicyRulesInner } from './policyResponsePolicyRulesInner';
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';
import { PolicyStrategy } from './policyStrategy';

export class PolicyResponse {
    'id': string;
    'object': string;
    'createdAt': number;
    'name': string | null;
    'chainId': number;
    'strategy': PolicyStrategy;
    'transactionIntents'?: Array<PolicyResponseTransactionIntentsInner>;
    'policyRules'?: Array<PolicyResponsePolicyRulesInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "PolicyStrategy"
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PolicyResponseTransactionIntentsInner>"
        },
        {
            "name": "policyRules",
            "baseName": "policyRules",
            "type": "Array<PolicyResponsePolicyRulesInner>"
        }    ];

    static getAttributeTypeMap() {
        return PolicyResponse.attributeTypeMap;
    }
}

