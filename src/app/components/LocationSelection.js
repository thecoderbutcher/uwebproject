'use client';

import React, {useState} from "react";
import {Menu} from '@headlessui/react';
import {FaMapMarkerAlt} from 'react-icons/fa';
const locations = [
  "Main streer 123, United States",
  "Main streer 123, United States",
  "Main streer 123, United States",
];
export default function LocationSelection() {
  const [location, setLocation] = useState('Select Location');
  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
      <div>
        <Menu.Button>Menu BTN</Menu.Button>
        <Menu.Items>Menu Items</Menu.Items>
      </div>
    </Menu>
  )
}