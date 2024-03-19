import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/slices/theme-slice';
import { $t } from '../../helpers/locale-helper';

const DarkModeSwitch = () => {
    const { darkMode } = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        document
            .querySelector('html')
            .setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label={darkMode ? $t('light') : $t('dark')}
            checked={darkMode}
            onChange={() => dispatch(toggle())}
        />
    );
};

export default DarkModeSwitch;
