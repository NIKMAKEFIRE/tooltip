import { FC } from 'react';

import styles from './Overlay.module.scss';

interface OverlayProps {
    isActive: boolean;
}

export const Overlay: FC<OverlayProps> = ({ isActive }) => {
    return <div className={isActive ? styles.overlay : ''}></div>;
};
