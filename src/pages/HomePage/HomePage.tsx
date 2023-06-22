import { Suspense, useContext, useState } from 'react';
import { Button, ButtonTheme, Loader, Overlay, Tooltip } from '../../components';
import { TOOLTIP_DATA } from '../../fixtures/tooltips';
import FurnitureSvg from '../../assets/furniture.svg';
import { TooltipContext, WindowWidthContext } from '../../context';

import styles from './HomePage.module.scss';

export const HomePage = () => {
    const { isActiveTooltip } = useContext(TooltipContext);
    const { width } = useContext(WindowWidthContext);

    const [currentTooltipIndex, setCurrentTooltipIndex] = useState(0);

    const handleNextTooltip = () => {
        setCurrentTooltipIndex((prevIndex) => {
            if (prevIndex === TOOLTIP_DATA.length - 1) {
                return prevIndex;
            }
            return prevIndex + 1;
        });
    };

    return (
        <main>
            <div className={styles.main}>
                <div>
                    <img src={FurnitureSvg} alt="furniture image" />
                </div>
                <div className={styles.main__content}>
                    <h1 className={styles.title}>Добро пожаловать в конструктор!</h1>
                    <p className={styles.paragraph}>Выберите действие для продолжения</p>
                    <div className={styles.main__content_btns}>
                        <Suspense fallback={<Loader />}>
                            <Tooltip
                                tooltips={TOOLTIP_DATA[currentTooltipIndex]}
                                currentIndex={TOOLTIP_DATA[0].index}
                                nextTooltip={handleNextTooltip}
                                length={TOOLTIP_DATA.length}
                                position={width < 1390 ? 'top' : 'left'}
                            >
                                <Button theme={ButtonTheme.LIGHT}>Изменить конфигурацию</Button>
                            </Tooltip>
                            <Tooltip
                                tooltips={TOOLTIP_DATA[currentTooltipIndex]}
                                currentIndex={TOOLTIP_DATA[1].index}
                                nextTooltip={handleNextTooltip}
                                length={TOOLTIP_DATA.length}
                                position={width < 1390 ? 'top' : 'right'}
                            >
                                <Button theme={ButtonTheme.DARK} style={{ marginLeft: '30px' }}>
                                    Купить любой диван
                                </Button>
                            </Tooltip>
                        </Suspense>
                    </div>
                </div>
            </div>
            <Overlay isActive={isActiveTooltip} />
        </main>
    );
};
