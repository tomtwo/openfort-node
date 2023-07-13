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
    'created_at': number;
    'name': string | null;
    'chain_id': number;
    'strategy': PolicyStrategy;
    'transaction_intents'?: Array<PolicyResponseTransactionIntentsInner>;
    'policy_rules'?: Array<PolicyResponsePolicyRulesInner>;

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
            "name": "created_at",
            "baseName": "created_at",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "chain_id",
            "baseName": "chain_id",
            "type": "number"
        },
        {
            "name": "strategy",
            "baseName": "strategy",
            "type": "PolicyStrategy"
        },
        {
            "name": "transaction_intents",
            "baseName": "transaction_intents",
            "type": "Array<PolicyResponseTransactionIntentsInner>"
        },
        {
            "name": "policy_rules",
            "baseName": "policy_rules",
            "type": "Array<PolicyResponsePolicyRulesInner>"
        }    ];

    static getAttributeTypeMap() {
        return PolicyResponse.attributeTypeMap;
    }
}

