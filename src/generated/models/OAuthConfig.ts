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

import { AccelbyteOAuthConfig } from '../models/AccelbyteOAuthConfig';
import { GoogleOAuthConfig } from '../models/GoogleOAuthConfig';
import { OAuthProviderPLAYFAB } from '../models/OAuthProviderPLAYFAB';
import { PlayFabOAuthConfig } from '../models/PlayFabOAuthConfig';
import { HttpFile } from '../http/http';

export class OAuthConfig {
    /**
    * Enable PlayFab Auth.
    */
    'enabled': boolean;
    /**
    * Base URI of your accelbyte gaming service environment. E.g. https://mygame.dev.gamingservices.accelbyte.io/
    */
    'baseUrl': string;
    /**
    * Google API client ID.
    */
    'clientId': string;
    /**
    * Google API client secret.
    */
    'clientSecret': string;
    'provider': OAuthProviderPLAYFAB;
    /**
    * The URI to redirect to after completing the auth request. You can use Openfort redirect URL: https://openfort.xyz/auth/v1/google/callback
    */
    'redirectUri': string;
    /**
    * Title ID of your Play Fab gaming service environment.
    */
    'titleId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "baseUrl",
            "baseName": "baseUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "clientSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "OAuthProviderPLAYFAB",
            "format": ""
        },
        {
            "name": "redirectUri",
            "baseName": "redirectUri",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleId",
            "baseName": "titleId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OAuthConfig.attributeTypeMap;
    }

    public constructor() {
    }
}


