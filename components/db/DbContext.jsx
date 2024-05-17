import React from 'react';

const DbContext = React.createContext({
  db: null,
  conn: null,
  worker: null,
  tableNameByYear: '',
  startTime: 0,
});

export default DbContext;
