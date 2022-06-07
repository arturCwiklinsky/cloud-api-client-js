import {APIEntity} from '../APIEntity';
import {APIResource} from '../APIResource';
import {BuildLogsData, BuildLogsParams} from "../models/UserFile";

export function postDeviceRunIds<T>(parent: APIEntity, name: string, ids?: Array<number>) {
  const a = new APIResource<T>(parent).push(name);

  if (ids != null) {
    a.params({
      deviceRunIds: ids
    });
  }

  return a.post();
}

export default postDeviceRunIds;
