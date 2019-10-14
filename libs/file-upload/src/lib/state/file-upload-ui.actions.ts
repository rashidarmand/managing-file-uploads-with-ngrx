import { FileUploadModel } from '@app/shared-models';
import { createAction, props } from '@ngrx/store';

export const enqueueFile = createAction(
  '[File Upload Form] Enqueue File',
  props<{ file: File }>()
);
export const processQueue = createAction('[File Upload Form] Process Queue');
export const clearQueue = createAction('[File Upload Form] Clear Queue');
export const removeFileFromQueue = createAction(
  '[File Upload Form] Remove File From Queue',
  props<{ id: number }>()
);
export const uploadRequest = createAction(
  '[File Upload Form] Upload Request',
  props<{ fileToUpload: FileUploadModel }>()
);

export const retryUpload = createAction(
  '[File Upload Form] Retry File Upload',
  props<{ id: number }>()
);

export const cancelUpload = createAction(
  '[File Upload Form] Cancel File Upload'
);
