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

import { AuthPlayerResponsePlayer } from '../models/AuthPlayerResponsePlayer';
import { EntityTypePLAYER } from '../models/EntityTypePLAYER';
import { LinkedAccountResponse } from '../models/LinkedAccountResponse';
import { HttpFile } from '../http/http';

export class AuthPlayerResponseWithRecoveryShare {
    'player'?: AuthPlayerResponsePlayer;
    'id': string;
    'object': EntityTypePLAYER;
    'createdAt': number;
    'linkedAccounts': Array<LinkedAccountResponse>;
    'recoveryShare'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "player",
            "baseName": "player",
            "type": "AuthPlayerResponsePlayer",
            "format": ""
        },
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
            "name": "linkedAccounts",
            "baseName": "linkedAccounts",
            "type": "Array<LinkedAccountResponse>",
            "format": ""
        },
        {
            "name": "recoveryShare",
            "baseName": "recoveryShare",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthPlayerResponseWithRecoveryShare.attributeTypeMap;
    }

    public constructor() {
    }
}



