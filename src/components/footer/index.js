import React from 'react';
import { useSelector } from 'react-redux';
import { $t } from '../../helpers/locale-helper';

const Footer = () => {
    const { darkMode } = useSelector((state) => state.theme);

    return (
        <div
            className={`${
                darkMode ? 'bg-dark border-top' : 'bg-info'
            } p-4 text-center`}
        >
            &copy;2023 - {$t('copyright')} Techproeducation
        </div>
    );
};

export default Footer;
