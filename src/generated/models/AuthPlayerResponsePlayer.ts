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

import { EntityTypePLAYER } from '../models/EntityTypePLAYER';
import { PickPlayerResponseId } from '../models/PickPlayerResponseId';
import { PlayerMetadataValue } from '../models/PlayerMetadataValue';
import { PlayerResponse } from '../models/PlayerResponse';
import { PlayerResponseAccountsInner } from '../models/PlayerResponseAccountsInner';
import { PlayerResponseTransactionIntentsInner } from '../models/PlayerResponseTransactionIntentsInner';
import { HttpFile } from '../http/http';

export class AuthPlayerResponsePlayer {
    'id': string;
    'object': EntityTypePLAYER;
    'createdAt': number;
    'name': string;
    'description'?: string;
    'metadata'?: { [key: string]: PlayerMetadataValue; };
    'transactionIntents'?: Array<PlayerResponseTransactionIntentsInner>;
    'accounts'?: Array<PlayerResponseAccountsInner>;

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
            "type": "EntityTypePLAYER",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: PlayerMetadataValue; }",
            "format": ""
        },
        {
            "name": "transactionIntents",
            "baseName": "transactionIntents",
            "type": "Array<PlayerResponseTransactionIntentsInner>",
            "format": ""
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<PlayerResponseAccountsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthPlayerResponsePlayer.attributeTypeMap;
    }

    public constructor() {
    }
}



