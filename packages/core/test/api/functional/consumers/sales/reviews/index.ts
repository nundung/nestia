/**
 * @packageDocumentation
 * @module api.functional.consumers.sales.reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import { Fetcher, Primitive } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { ISaleInquiry } from "./../../../../structures/ISaleInquiry";
import type { ISaleReview } from "./../../../../structures/ISaleReview";

/**
 * Store a new inquiry.
 *
 * Write a new article inquirying about a sale.
 *
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param input Content to archive
 * @return Newly archived inquiry
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 *
 * @controller ConsumerSaleReviewsController.store()
 * @path POST /consumers/:section/sales/:saleId/reviews
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function store(
    connection: IConnection,
    section: string,
    saleId: string,
    input: Primitive<store.Input>,
): Promise<store.Output> {
    return Fetcher.fetch(
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section, saleId),
        input,
    );
}
export namespace store {
    export type Input = Primitive<ISaleReview.IStore>;
    export type Output = Primitive<ISaleInquiry<ISaleReview.IContent>>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/reviews";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: string): string {
        return `/consumers/${section}/sales/${saleId}/reviews`;
    }
}
