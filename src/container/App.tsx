import React from 'react';
import MainPageHeader from 'components/MainPage/MainPageHeader';
import MainPageSection from 'components/MainPage/MainPageSection';
import MainLandingSection from 'components/MainPage/MainLandingSection';
import FormSection from 'components/MainPage/FormSection';
import MainBlogSection from 'components/MainPage/MainBlogSection';
import MainFooter from 'components/MainPage/MainFooter';

function App() {
  return (
    <>
      <MainPageHeader />
      <MainPageSection />
      <MainLandingSection />
      <FormSection />
      <MainBlogSection />
      <MainFooter />
    </>
  );
}

export default App;
