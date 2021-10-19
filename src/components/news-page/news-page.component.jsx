import React from 'react';

import NewsContentGroup from './news-content-group.component';
import newsImage1 from '../../assets/news_img_01.jpg';
import newsImage2 from '../../assets/news_img_02.jpg';
import newsImage3 from '../../assets/news_img_03.jpg';
import newsImage4 from '../../assets/news_img_04.jpg';
import newsImage5 from '../../assets/news_img_05.jpg';
import newsImage6 from '../../assets/news_img_06.jpg';
import AnimatedButton from '../animated-button/animated-button.component';

import './news-page.styles.scss';

const NewsPage = () => (
    <div className="news-page-background">
        <p className="news-title">NEWS</p>
        <p className="news-subheading">お知らせ</p>

        <div className="container-container">
            <div className="news-content-group-container">

                <NewsContentGroup
                    url="https://www.bbc.co.uk/news"
                    image={newsImage1}
                    article="2021年、明けましておめでとうございます"
                    date="2021.01.04"
                    mediaType="Press Release"
                />
                <NewsContentGroup
                    url="https://www.bbc.co.uk/news"
                    image={newsImage2}
                    article="雑誌『Organic』にて、当社商品が紹介されました！"
                    date="2020.08.10"
                    mediaType="Media"
                />
                <NewsContentGroup
                    url="https://www.bbc.co.uk/news"
                    image={newsImage3}
                    article="DEAR COCOから新しいライフスタイルを提案"
                    date="2020.01.15"
                    mediaType="Press Release"
                />
                <NewsContentGroup
                    url="https://www.bbc.co.uk/news"
                    image={newsImage4}
                    article="年内営業日・年始営業開始日についてのお知らせ"
                    date="2020.12.27"
                    mediaType="Press Release"
                />
                <NewsContentGroup
                    url="https://www.bbc.co.uk/news"
                    image={newsImage5}
                    article="緊急事態宣言発令に伴う、当社の対応について"
                    date="2020.04.08"
                    mediaType="Press Release"
                />
                <NewsContentGroup
                    url="https://www.bbc.co.uk/news"
                    image={newsImage6}
                    article="新商品のお知らせ"
                    date="2019.10.27"
                    mediaType="Press Release"
                />

            </div>
        </div>
        <div className="news-button-container">
            <AnimatedButton>記事一覧へ</AnimatedButton>
        </div>

    </div>
);

export default NewsPage;