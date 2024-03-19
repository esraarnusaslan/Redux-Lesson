import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { getCurrentLang, langs, setLang } from '../../helpers/locale-helper';

const LangSwitch = () => {
    const lang = getCurrentLang();

    return (
        <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <span className={`fi fi-${lang.country}`}></span> {lang.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {langs.map((item) => (
                    <Dropdown.Item
                        href="#"
                        key={item.code}
                        onClick={() => setLang(item)}
                    >
                        <span className={`fi fi-${item.country}`}></span>{' '}
                        {item.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LangSwitch;
