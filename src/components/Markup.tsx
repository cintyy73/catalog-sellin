import { FC } from "react";

import { MarkupProps } from "@/types";

const createMarkup = (setHtml: string) => ({ __html: setHtml });

export const Markup: FC<MarkupProps> = ({ html }) => {
  return <div dangerouslySetInnerHTML={createMarkup(html)} />;
};
