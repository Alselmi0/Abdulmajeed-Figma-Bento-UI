import React from 'react';
import NavItem from '../components/ui/NavItem';
import OverViewGrid from '../components/ovreview/OverViewGrid';

function Overview() {
  return (
    <div className='relative dark:bg-dark-navbarBg bg-white after:content-[url("/assets/greenCircleEffect.svg")] after:absolute after:top-12 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:scale-75 lg:after:scale-75 md:after:scale-50 sm:after:scale-25 overflow-hidden'>
        <NavItem/>
        <OverViewGrid/>
    </div>
  );
}

export default Overview;
