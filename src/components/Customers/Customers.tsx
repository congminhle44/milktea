import React, {FC} from 'react';
import Button from '../Button';
import Input from '../Input/input';
import List from './Customers-list/list';
import {ReactComponent as Plus} from './icons/Plus.svg';
import styles from './customer.module.css';

interface CustomersProps {}

const Customer: FC<CustomersProps> = (props) => {
  return (
    <div className={styles.customer}>
      <div className={styles.customerEvent}>
        <div className={styles.searchCustomers}>
          <Input search border={false} placeholder="Search for customers" />
        </div>
        <Button IconButton>
          <Plus />
        </Button>
      </div>
      <div className={styles.customerList}>
        <List />
      </div>
    </div>
  );
};

export default Customer;
