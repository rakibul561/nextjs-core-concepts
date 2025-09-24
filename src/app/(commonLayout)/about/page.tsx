import { Metadata } from 'next';
import style from './about.module.css'


export const metadata: Metadata = {
  title: 'About Us',
  description: '...',
}


const AboutPage = () => {


    return (
        <div>
            <h1 className={style.text_style}>About Page</h1>
        </div>
    );
};

export default AboutPage;