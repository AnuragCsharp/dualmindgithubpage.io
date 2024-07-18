// src/pages/404.tsx

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Error from '@/components/error';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <Wrapper>
      <Head>
        <title>404 error || DualMind - Bridging Skills, Building Careers</title>
      </Head>
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

export default Custom404;
