import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export const getPage = async (pageId: string): Promise<ExtendedRecordMap> => {
  const recordMap = await notion.getPage(pageId);
  return recordMap;
};
