import { appSchema } from "@nozbe/watermelondb";
import { userSchema } from "./userSchema";
import { carSchema } from "./carSchema";

export const schemas = appSchema({
    version: 1,
    tables: [userSchema, carSchema],
});
