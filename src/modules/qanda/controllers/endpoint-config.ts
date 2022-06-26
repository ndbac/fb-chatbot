import { HttpStatus } from '@nestjs/common';
import { IEndpointConfiguration } from 'src/shared/types';
import { CreateQAndADto } from '../dto/qanda.dto';

export enum EQAndAOperationId {
  CREATE_QANDA = 'createQuestionAndAnswer',
}

export const QANDA_ENDPOINT_CONFIG: Record<
  EQAndAOperationId,
  IEndpointConfiguration
> = {
  [EQAndAOperationId.CREATE_QANDA]: {
    operationId: EQAndAOperationId.CREATE_QANDA,
    body: {
      type: CreateQAndADto,
    },
    responses: [
      {
        status: HttpStatus.OK,
        type: CreateQAndADto,
      },
    ],
  },
};
