import * as request from '~/utils/httpRequest';

export const accountService = async (page = 'h', per_page = 'less') => {
   try {
      const res = await request.get(`users/suggested`, {
         params: {
            page,
            per_page,
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
