1) 50 подсказок предлагаю вынести в массив. Добавив в него индекс и в зависимости от страницы , подтягивать соответствующий массив.
Тем самым у нас на каждой странице будет уникальная цепочка подсказок.

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