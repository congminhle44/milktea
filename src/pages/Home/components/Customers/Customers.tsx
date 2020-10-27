import React, {FC, useState} from 'react';

import Button, {ButtonVariants} from '../../../../components/Button';

import Input from '../../../../components/Input/input';

import List from './CustomersList';

import {Portal} from '../../../../components/Modal';

import {Plus} from '../../../../components/Icons';

import styles from './customer.module.css';

import formatPoints from '../../../../Helper/formatPoints';
import identifyRank from '../../../../Helper/indentifyRank';
import firstLetterUppercase from '../../../../Helper/firstLetterToUppercase';

interface CustomersProps {
  getCustomerList?: any;
  createCustomer?: any;
  deleteCustomer?: any;
  loading?: boolean;
  editCustomers?: any;
  page?: any;
  prevPage?: any;
  nextPage?: any;
  currentPage?: number;
  searchKey?: any;
}

interface UserObject {
  name: string;
  title: string;
  points: number;
}

const Customer: FC<CustomersProps> = ({
  getCustomerList,
  createCustomer,
  deleteCustomer,
  editCustomers,
  searchKey,
  prevPage,
  nextPage,
  currentPage,
  page,
  loading,
}) => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const [statusModal, setStatusModal] = useState<string>('create');

  const [userObject, setUsertObject] = useState<any>({});

  const handleTyping = (e: any) => {
    const {name, value} = e.target;
    setUsertObject((userObject: object) => ({...userObject, [name]: value}));
  };

  const handleSubmitUser = () => {
    if (statusModal === 'create') {
      createCustomer(userObject);
    } else {
      editCustomers(userObject.id, userObject);
    }
    setShowAddModal(false);
  };

  const handleSearch = (e: any) => {
    const {value} = e.target;
    searchKey(value);
  };

  return (
    <div className={styles.customer}>
      {showAddModal ? (
        <Portal
          event={statusModal === 'create' ? 'Create' : 'Edit'}
          onOK={() => {
            handleSubmitUser();
          }}
          onCancel={() => {
            setShowAddModal(false);
          }}
          header={
            statusModal === 'create' ? 'Create customer' : 'Edit customer'
          }
        >
          <div className={styles.formItem}>
            <Input
              label="Name"
              name="name"
              onChange={handleTyping}
              defaultValue={
                Object.keys(userObject).length > 0 ? userObject.name : ''
              }
              placeholder="Enter name"
            />
          </div>
          <div className={styles.formItem}>
            <Input
              label="Title"
              name="title"
              onChange={handleTyping}
              defaultValue={
                Object.keys(userObject).length > 0 ? userObject.title : ''
              }
              placeholder="Enter title"
            />
          </div>
          <div className={styles.formItem}>
            <Input
              label="Points"
              name="points"
              onChange={handleTyping}
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
          onCancel={() => {
            setShowDeleteModal(false);
          }}
          onDelete={() => {
            deleteCustomer(userObject.id);
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
                <strong>Rank:</strong> {identifyRank(userObject.points)}
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
          <Input
            onChange={handleSearch}
            search
            border={false}
            placeholder="Search for customers"
          />
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
          loading={loading}
          page={page}
          currentPage={currentPage}
          next={() => {
            nextPage();
          }}
          prev={() => {
            prevPage();
          }}
          customers={getCustomerList}
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
