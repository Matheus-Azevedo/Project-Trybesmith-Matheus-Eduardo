interface Status {
  BAD_REQUEST: number;
  OK: number;
  CREATED: number;
  INTERNAL_SERVER_ERROR: number;
  CONFLICT: number;
  UNAUTHORIZED: number;
  NOT_FOUND: number;
  FORBIDDEN: number;
  DELETED: number;
  UNPROCESSABLE_ENTITY: number;
}

const statusCode: Status = {
  BAD_REQUEST: 400,
  OK: 200,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
  CONFLICT: 409,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  FORBIDDEN: 403,
  DELETED: 204,
  UNPROCESSABLE_ENTITY: 422,
};

export default statusCode;