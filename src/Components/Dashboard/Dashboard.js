import React, { useState } from 'react';
import Table from './Table.js'
import { Button } from "../Button";


const Dashboard = () => {

  return (
    <>
    <h1 className="dash-header">My PillYa</h1>
    <Table />
    </>
  );
};

export default Dashboard;