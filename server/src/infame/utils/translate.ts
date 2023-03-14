import { env } from "@/env";
import { Language } from "@/infame/types/language";
import { getEnglish } from "@/infame/utils/translate/getEnglish";
import { getFrench } from "@/infame/utils/translate/getFrench";

export const translate = (
  identifier: string,
  replaces: string[] = []
): string => {
  let replace = "$$";
  let response = (
    env.language.type === Language.English ? getEnglish() : getFrench()
  )[identifier];
  replaces.map((value) => {
    response = response.replace(replace, value);
    replace = replace + "$";
  });

  return response;
};
