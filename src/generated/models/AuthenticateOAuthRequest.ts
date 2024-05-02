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
import { PlayerResponseExpandable } from '../models/PlayerResponseExpandable';
import { TokenType } from '../models/TokenType';
import { HttpFile } from '../http/http';

export class AuthenticateOAuthRequest {
    'provider': OAuthProvider;
    /**
    * Token to be verified
    */
    'token': string;
    'tokenType': TokenType;
    /**
    * Specifies the fields to expand in the response.
    */
    'expand'?: Array<PlayerResponseExpandable>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OAuthProvider",
            "format": ""
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenType",
            "baseName": "tokenType",
            "type": "TokenType",
            "format": ""
        },
        {
            "name": "expand",
            "baseName": "expand",
            "type": "Array<PlayerResponseExpandable>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthenticateOAuthRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



