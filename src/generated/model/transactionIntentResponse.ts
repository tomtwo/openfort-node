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
import { InteractionResponse } from './interactionResponse';
import { JsonValue } from './jsonValue';
import { ResponseResponse } from './responseResponse';
import { TransactionIntentResponseAccount } from './transactionIntentResponseAccount';
import { TransactionIntentResponsePlayer } from './transactionIntentResponsePlayer';
import { TransactionIntentResponsePolicy } from './transactionIntentResponsePolicy';

export class TransactionIntentResponse {
    'id': string;
    'object': string;
    'createdAt': Date;
    'updatedAt': Date;
    'chainId': number;
    'userOperationHash': string | null;
    'userOperation'?: JsonValue | null;
    'policy': TransactionIntentResponsePolicy | null;
    'player'?: TransactionIntentResponsePlayer;
    'nextAction'?: object | null;
    'account'?: TransactionIntentResponseAccount;
    'interactions': Array<InteractionResponse> | null;
    'response': ResponseResponse | null;

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
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "chainId",
            "baseName": "chain_id",
            "type": "number"
        },
        {
            "name": "userOperationHash",
            "baseName": "user_operation_hash",
            "type": "string"
        },
        {
            "name": "userOperation",
            "baseName": "user_operation",
            "type": "JsonValue"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "TransactionIntentResponsePolicy"
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "TransactionIntentResponsePlayer"
        },
        {
            "name": "nextAction",
            "baseName": "next_action",
            "type": "object"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "TransactionIntentResponseAccount"
        },
        {
            "name": "interactions",
            "baseName": "interactions",
            "type": "Array<InteractionResponse>"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "ResponseResponse"
        }    ];

    static getAttributeTypeMap() {
        return TransactionIntentResponse.attributeTypeMap;
    }
}
