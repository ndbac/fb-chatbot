import { applyDecorators } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { IEndpointConfiguration } from 'src/shared/types';

export const EndpointConfig = (config: IEndpointConfiguration) => {
  const decors = [
    ApiOperation({
      operationId: config.operationId,
      summary: config.summary,
      description: config.description,
    }),
    ...(config.body ? [ApiBody(config.body)] : []),
    ...(config.params ? config.params.map((p) => ApiParam(p)) : []),
    ...(config.query ? config.query.map(ApiQuery) : []),
    ...(config.responses ? config.responses.map(ApiResponse) : []),
  ];
  return applyDecorators(...decors);
};
