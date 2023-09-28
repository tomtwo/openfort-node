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

import { NextActionPayload } from '../models/NextActionPayload';
import { NextActionType } from '../models/NextActionType';
import { HttpFile } from '../http/http';

export class NextActionResponse {
    'type': NextActionType;
    'payload': NextActionPayload;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "NextActionType",
            "format": ""
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "NextActionPayload",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NextActionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


