1) 50 подсказок предлагаю вынести в массив. Добавив в него индекс и в зависимости от страницы , подтягивать соответствующий массив.
Тем самым у нас на каждой странице будет уникальная цепочка подсказок.

1.2)
Функцию переключения с одной подсказки на другую (с его текущим стэйтом - индексом) можно вынести либо в отдельный helper, либо контекст, либо внутри файла Tootip.tsx (но нужно передавать в компонент еще больше пропсов)

const handleNextTooltip = () => {
        setCurrentTooltipIndex((prevIndex) => {
            if (prevIndex === TOOLTIP_DATA.length - 1) {
                return prevIndex;
            }
            return prevIndex + 1;
        });
    };




2) 30 секунд на сайте возможно реализовать путем добавления задержки отображения активного тултипа в useEffect

Логика примерно такая (с учетом моей реализованной логики в текущем проекте)

 const [ isActiveTooltip, setIsActiveTooltip ] = useState(false); 

 const delay = 30000;

    useEffect(() => {
        const tooltipAlreadyShown = localStorage.getItem('showTooltip');

        if (!tooltipAlreadyShown) {
            const timeoutId = setTimeout(() => {
                setIsActiveTooltip(true);
                localStorage.setItem('showTooltip', 'true');
            }, delay);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, []);

    return (
        <div>
        {
            isActiveTooltip && <Tooltip/>
        }
        </div>
    )
