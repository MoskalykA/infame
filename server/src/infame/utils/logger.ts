import { Logger, ILogObj } from "tslog";
import { env } from "@/env";
import { client } from "@/infame/utils/sql";

const logger: Logger<ILogObj> = new Logger({
  hideLogPositionForProduction: true,
});

export const info = (...args: unknown[]): any => {
  if (env.log.saveInDatabase) {
    client
      .db("infame")
      .collection("logs")
      .insertOne({
        content: args.length === 1 ? args[0] : JSON.stringify(args),
        time: new Date().getTime(),
      });
  }

  logger.info(...args);
};
