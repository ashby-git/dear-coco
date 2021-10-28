import React from 'react';

import './message-page.styles.scss';

const MessagePage = () => (

    <div className="message-background">
        <div className="message-card">
            <div className="message-card-content">
                <div className="message-title">地球の恵み、ココナッツへの 愛を込めて。</div>
                <p className="message-paragraph">
                    豊富な栄養を持つことで知られるココナッツは、多くの国で食材として用いられるほか、その殻や繊維までも余すことなく資源として利用されています。<br />
                    熱帯地方の人々の暮らしを豊かにするココナッツは、まさに地球からのギフト。
                </p>
                <p className="message-paragraph">
                    私達DEAR COCOはこの地球の恵みに感謝し、ココナッツの持つパワーを多くの皆様にお届けできるよう、より良い製品作りに努めてまいります。
                </p>
                <p className="message-paragraph">
                    製品に関するご意見、ご質問は、下記よりお問い合わせください。
                </p>

                <div className="message-button-container">

                    {/* お問い合わせページへ */}

                </div>
            </div>
        </div>
    </div>
);

export default MessagePage;