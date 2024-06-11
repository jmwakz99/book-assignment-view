import { Book } from "../graphql/generated/graphql";

export interface BookWithAdditionalProperties extends Book {
  id?: number;
}
