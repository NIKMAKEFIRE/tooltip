/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { ITooltip } from '../../../models/Tooltip';
import { TooltipContext } from '../../../context/tooltipContext';
import { CloseIcon } from '../Icons/Icons';

import styles from './Tooltip.module.scss';

interface TooltipProps {
    children: ReactNode;
    tooltips: ITooltip;
    position: string;
    length: number;
    nextTooltip: () => void;
    currentIndex: number;
}

const Tooltip: FC<TooltipProps> = (props) => {
    const { children, tooltips, position, length, nextTooltip, currentIndex } = props;
    const { isActiveTooltip, setIsActiveTooltip } = useContext(TooltipContext);

    return (
        <div style={{ position: 'relative' }}>
            {currentIndex === tooltips.index && (
                <div
                    className={classNames(styles.tooltip__box, isActiveTooltip ? 'active' : 'inactive', {
                        [styles.left]: position === 'left',
                        [styles.right]: position === 'right',
                        [styles.top]: position === 'top',
                        [styles.bottom]: position === 'bottom',
                    })}
                >
                    <div className={styles.tooltip__header}>
                        <h4 className={styles.tooltip__title}>{tooltips.title}</h4>
                        <div className={styles.tooltip__close_icon} onClick={() => setIsActiveTooltip(false)}>
                            <CloseIcon />
                        </div>
                    </div>
                    <p className={styles.tooltip__text}>{tooltips.text}</p>
                    <div className={styles.tooltip__footer}>
                        <div
                            onClick={() => {
                                nextTooltip();
                                tooltips.id === length && setIsActiveTooltip(false);
                            }}
                            className={styles.tooltip__link}
                        >
                            {tooltips.link}
                        </div>
                        <div className={styles.tooltip__steps}>{`${tooltips.id}/${length}`}</div>
                    </div>
                </div>
            )}

            <div style={{ zIndex: 3 }}>{children}</div>
        </div>
    );
};

export default Tooltip;
