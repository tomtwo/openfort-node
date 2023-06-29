import {httpErrorHandler} from "./http-error-handler";
import {TransactionIntentsApi} from "../generated/api/transactionIntentsApi";
import {GetTransactionIntentRequest, ListTransactionIntentsRequest, UpdateTransactionIntentRequest, SignatureTransactionIntentRequest} from "../model";
import {TransactionIntentResponse} from "../generated/model/transactionIntentResponse";
import {TransactionIntentsResponse} from "../generated/model/transactionIntentsResponse";
import {TransactionIntentRequest} from "../generated/model/transactionIntentRequest";

export class TransactionIntentsApiWrapper {
    private readonly _api: TransactionIntentsApi;

    constructor(accessToken: string, basePath?: string) {
        this._api = new TransactionIntentsApi(basePath);
        this._api.accessToken = accessToken;
    }

    /**
     * Creates a transaction intent object.
     * @param req Parameters to create transaction intent
     */
    @httpErrorHandler()
    public async create(req: TransactionIntentRequest): Promise<TransactionIntentResponse> {
        const response = await this._api.createTransactionIntent(req);
        return response.body;
    }

    /**
     * Retrieves a transaction intent object.
     * @param req Parameters to retrieve transaction intent
     */
    @httpErrorHandler()
    public async get(req: GetTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const response = await this._api.getTransactionIntent(req.id, req.project);
        return response.body;
    }

    /**
     * Returns a list of transaction intents for the given project. The accounts are returned sorted by creation date, with the most recently created accounts appearing first.
     * @param req Parameters to get list of the transaction intents
     */
    @httpErrorHandler()
    public async list(req?: ListTransactionIntentsRequest): Promise<TransactionIntentsResponse> {
        const response = await this._api.getTransactionIntents(
            req?.expand,
            req?.limit,
            req?.project,
            req?.filter,
            req?.order,
            req?.skip,
        );
        return response.body;
    }

    /**
     * Confirms the creation of a transaction intent with an external owner.
     * @param req Parameters to signature session
     */
    @httpErrorHandler()
    public async signature(req: SignatureTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const {id, ...body} = req;
        const response = await this._api.signature(id, body);
        return response.body;
    }

    /**
     * Updates transaction intent response
     * @param req Request to update transaction intent
     */
    @httpErrorHandler()
    public async updateResponse(req: UpdateTransactionIntentRequest): Promise<TransactionIntentResponse> {
        const response = await this._api.updateTransactionIntentResponse(req.id, req.project);
        return response.body;
    }

    /**
     *
     * @param project
     */
    @httpErrorHandler()
    public async updateList(project?: string): Promise<TransactionIntentsResponse> {
        const response = await this._api.updateTransactionIntentsResponse(project);
        return response.body;
    }
}
