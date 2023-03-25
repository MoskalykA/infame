import { env } from "shared/env";
import { Language } from "shared/types/language";
import { language as english } from "shared/locales/english";
import { language as french } from "shared/locales/french";

export const translate = (
  identifier: string,
  replaces: string[] = []
): string => {
  let replace = "$$";
  let response = (env.language.type === Language.English ? english : french)[
    identifier
  ];

  replaces.map((value) => {
    response = response.replace(replace, value);
    replace = replace + "$";
  });

  return response;
};
