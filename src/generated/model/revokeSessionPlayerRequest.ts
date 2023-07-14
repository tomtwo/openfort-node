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

export class RevokeSessionPlayerRequest {
    'address': string;
    'policy'?: string;
    'optimistic'?: boolean;
    'chainId': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "string"
        },
        {
            "name": "optimistic",
            "baseName": "optimistic",
            "type": "boolean"
        },
        {
            "name": "chainId",
            "baseName": "chainId",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RevokeSessionPlayerRequest.attributeTypeMap;
    }
}

