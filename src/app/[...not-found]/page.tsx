'use client'


import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Error from '@/components/error';

// export const metadata = {
//   title: "404 error || DualMind -  Bridging Skills, Building Careers",
// };


const index = () => {
  return (
    <Wrapper>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Error />
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

export default index;