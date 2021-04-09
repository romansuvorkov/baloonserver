import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';

const sendActionGAandYM = (
    categoryInput,
    actionNameInput,
    labelInput,
    valueInput,
    yandexMetrics,
  ) => {
    ReactGA.event({
      category: categoryInput,
      action: actionNameInput,
      label: labelInput,
      value: valueInput,
    });

    ym('reachGoal', yandexMetrics);
};

export default sendActionGAandYM;
