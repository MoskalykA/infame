import { env } from "@/env";
import { Language } from "@/infame/types/language";
import { language as english } from "@/infame/locales/english";
import { language as french } from "@/infame/locales/french";

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
