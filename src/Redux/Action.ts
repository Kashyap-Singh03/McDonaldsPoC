export const check_request = (data: any) => ({
  type: 'CHECK_REQUEST',
  paylaod: data,
});

export const check_succuss = (data: any) => ({
  type: 'CHECK_SUCCESS',
  payload: data,
});
