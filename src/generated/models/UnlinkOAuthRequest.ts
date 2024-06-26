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

import { OAuthProvider } from '../models/OAuthProvider';
import { HttpFile } from '../http/http';

/**
* The request to verify access token
*/
export class UnlinkOAuthRequest {
    'provider': OAuthProvider;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OAuthProvider",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UnlinkOAuthRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



