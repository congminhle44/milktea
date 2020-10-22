import React from 'react';

import {api} from '../';

api
  .get('/customers')
  .then((customer) => {
    React.createContext(customer);
  })
  .catch((err) => {
    return err;
  });
