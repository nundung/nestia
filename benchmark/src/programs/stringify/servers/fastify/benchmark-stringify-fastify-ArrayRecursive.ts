import typia from "typia";

import { Collection } from "../../../../structures/pure/Collection";
import { ArrayRecursive } from "../../../../structures/pure/ArrayRecursive";
import { createAjvStringifyProgram } from "../createAjvStringifyProgram";

createAjvStringifyProgram(37_002)(
    typia.json.application<[Collection<ArrayRecursive>], "ajv">()
);