import React from 'react';
import SearchBar from '../subComponents/SearchBar';
import { Header } from 'semantic-ui-react';

const TopHeader = () => {
  return (
    <div textAlign="center"
    style={{ margin: "-15px auto", width: "100%" }}
    id="top-header">
      <Header as="h1" style={{ color: "white", fontSize: '3.5rem'}} className="animate__animated animate__backInDown">Find your way home</Header>
      <Header  as="h3" style={{ color: "white",fontSize: '2rem' }} className="animate__animated animate__bounceIn">Discover a place you'll live and love</Header>
      <SearchBar/>
    </div>
  );
};
export default TopHeader;
