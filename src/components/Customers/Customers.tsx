import React, {FC, useState} from 'react';

import Button, {ButtonVariants} from '../Button';

import Input from '../Input/input';

import List from './Customers-list/list';

import {Portal} from '../Modal';

import {Plus} from '../Icons';

import styles from './customer.module.css';

import formatPoints from '../../Helper/formatPoints';

import getCustomers from '../../api/customers';

interface CustomersProps {}

const Customer: FC<CustomersProps> = (props) => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const [statusModal, setStatusModal] = useState<string>('create');

  const [userObject, setUsertObject] = useState<any>({});

  return (
    <div className={styles.customer}>
      {showAddModal ? (
        <Portal
          show={() => {
            setShowAddModal(false);
          }}
          event={statusModal === 'create' ? 'Create' : 'Edit'}
          header={
            statusModal === 'create' ? 'Create customer' : 'Edit customer'
          }
        >
          <div className={styles.formItem}>
            <Input
              label="Name"
              defaultValue={
                Object.keys(userObject).length > 0 ? userObject.name : ''
              }
              placeholder="Enter name"
            />
          </div>
          <div className={styles.formItem}>
            <Input
              label="Title"
              defaultValue={
                Object.keys(userObject).length > 0 ? userObject.title : ''
              }
              placeholder="Enter title"
            />
          </div>
          <div className={styles.formItem}>
            <Input
              label="Points"
              defaultValue={
                Object.keys(userObject).length > 0 ? userObject.points : ''
              }
              placeholder="Enter points"
            />
          </div>
        </Portal>
      ) : null}
      {showDeleteModal ? (
        <Portal
          show={() => {
            setShowDeleteModal(false);
          }}
          event="Delete"
          error
          header="Delete customer"
        >
          <div className={styles.portalWrapper}>
            <div className={styles.portalSubHeader}>
              Are you sure want to delete this customer?
            </div>
            <div className={styles.portalContent}>
              <p>
                <strong>Name:</strong> {userObject.name}
              </p>
              <p>
                <strong>Title:</strong> {userObject.title}
              </p>
              <p>
                <strong>Rank:</strong> {userObject.rank}
              </p>
              <p>
                <strong>Points:</strong> {formatPoints(userObject.points)}
              </p>
            </div>
          </div>
        </Portal>
      ) : null}
      <div className={styles.customerEvent}>
        <div className={styles.searchCustomers}>
          <Input search border={false} placeholder="Search for customers" />
        </div>
        <div className={styles.addButton}>
          <Button
            onClick={() => {
              setStatusModal('create');
              setUsertObject({});
              setShowAddModal(true);
            }}
            variant={ButtonVariants.Small}
            IconButton
          >
            <Plus />
          </Button>
        </div>
      </div>
      <div className={styles.customerList}>
        <List
          setModal={() => {
            setStatusModal('edit');
            setShowAddModal(true);
          }}
          setDeleteModal={() => {
            setShowDeleteModal(true);
            setShowAddModal(false);
          }}
          setUser={(data: any) => {
            setUsertObject(data);
          }}
        />
      </div>
    </div>
  );
};

export default Customer;
