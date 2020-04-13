import React, { useState, useEffect, useMemo } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import { MdVisibility, MdEdit, MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container, OptionsList, Option } from './styles';
import history from '../../services/history';
import Dialog from '../Dialog';

export default function MenuOptions({
    showVisibilityOption,
    showEditOption,
    deleteText,
    editOptionRedirectTo,
    visibilityAction,
    deleteButtonAction,
}) {
    const [visible, setVisible] = useState(false);

    function handleToggleVisible() {
        setVisible(!visible);
    }

    function handleEditActon() {
        history.push(editOptionRedirectTo);
    }

    return (
        <Container onClick={handleToggleVisible}>
            <FaEllipsisH color="#C6C6C6" size={18} />
            <OptionsList visible={visible}>
                {showVisibilityOption && (
                    <Option onClick={visibilityAction}>
                        <MdVisibility color="#8E5BE8" size={18} />

                        <span>Visualizar</span>
                    </Option>
                )}

                {showEditOption && (
                    <Option onClick={handleEditActon}>
                        <MdEdit color="#4D85EE" size={18} />

                        <span>Editar</span>
                    </Option>
                )}
                <Option onClick={deleteButtonAction}>
                    <MdDeleteForever color="#DE3B3B" size={18} />

                    <span>{deleteText}</span>
                </Option>
            </OptionsList>
        </Container>
    );
}

MenuOptions.propTypes = {
    showVisibilityOption: PropTypes.bool,
    showEditOption: PropTypes.bool,
    editOptionRedirectTo: PropTypes.string,
    deleteText: PropTypes.string,
    visibilityAction: PropTypes.func,
    deleteButtonAction: PropTypes.func,
};

MenuOptions.defaultProps = {
    showVisibilityOption: true,
    showEditOption: true,
    editOptionRedirectTo: '',
    deleteText: 'Excluir',
    visibilityAction: null,
    deleteButtonAction: null,
};
