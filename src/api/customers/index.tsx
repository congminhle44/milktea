import React from 'react';

import {api} from '../';

const getCustomers = () => {
  api
    .get('/customers')
    .then((customer) => {})
    .catch((err) => {
      return err;
    });
};

export default getCustomers;
