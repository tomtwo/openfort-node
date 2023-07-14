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
import { PolicyResponseTransactionIntentsInner } from './policyResponseTransactionIntentsInner';
import { TransactionIntentResponseAccount } from './transactionIntentResponseAccount';

export class PlayerResponse {
    'id': string;
    'object': string;
    'createdAt': number;
    'name': string | null;
    'email': string | null;
    'description': string | null;
    'metadata': string;
    'transactionIntents'?: Array<PolicyResponseTransactionIntentsInner>;
    'accounts'?: Array<TransactionIntentResponseAccount>;

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
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string"
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PolicyResponseTransactionIntentsInner>"
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<TransactionIntentResponseAccount>"
        }    ];

    static getAttributeTypeMap() {
        return PlayerResponse.attributeTypeMap;
    }
}

