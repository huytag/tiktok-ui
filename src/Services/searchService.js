import * as request from '~/utils/httpRequest';

export const searchService = async (q, type = 'less') => {
   try {
      const res = await request.get(`users/search`, {
         params: {
            q,
            type,
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};

export const accountService = async (q = 'h', type = 'less') => {
   try {
      const res = await request.get(`users/search`, {
         params: {
            q,
            type,
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
