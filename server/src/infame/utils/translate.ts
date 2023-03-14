import { env } from "@/env";
import { Language } from "@/infame/types/language";
import { getEnglish } from "@/infame/utils/translate/getEnglish";
import { getFrench } from "@/infame/utils/translate/getFrench";

export const translate = (
  identifier: string,
  ...format: {
    search: string;
    replace: string;
  }[]
): string => {
  if (env.language.type === Language.English) {
    let response = getEnglish()[identifier];
    format.map((value) => {
      response = response.replace(value.search, value.replace);
    });

    return response;
  } else {
    let response = getFrench()[identifier];
    format.map((value) => {
      response = response.replace(value.search, value.replace);
    });

    return response;
  }
};
