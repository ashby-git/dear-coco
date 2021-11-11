import React from 'react';

import './all-pages.styles.scss';

import Navbar from '../nav-bar/nav-bar.component';
import TopPageContent from '../top-page/top-page-content.component';
import ConceptPage from '../concept-page/concept-page.component';
import QualityPage from '../quality-page/quality-page.component';
import ProductsPage from '../products-page/products-page.component';
import ShopsPage from '../shops-page/shops-page.component';
import NewsPage from '../news-page/news-page.component';
import Footer from '../footer/footer.component';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

const AllPages = () => (
    <div>
        <Navbar />
        <TopPageContent />
        <ConceptPage />
        <QualityPage />
        <ProductsPage />
        <ShopsPage />
        <NewsPage />
        <Footer />
    </div>
);

export default AllPages;