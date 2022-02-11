import RespImage from '../../components/respImage';
import ImageSlider from '../../components/galleries/imageSlider';

function getDetails(data) {
  const matadata = data.match(/---(.*\n)*---/)[0];
  const details = matadata.match(/(.*):(.*)/g).reduce((obj, detail) => {
    const value = detail.substr(detail.indexOf(':') + 2);
    const key = detail.substr(0, detail.indexOf(':'));
    obj[key] = value;
    return obj;
  }, {});
  return details;
}

function getBody(md) {
  return md.replace(/---(.*\n)*---/, '');
}

function getMD(md) {
  return [getDetails(md), getBody(md)];
}

const projectMDOptions = {
  wrapper: 'article',
  forceWrapper: true,
  overrides: {
    ImageSlider: { component: ImageSlider },
    img: {
      component: RespImage,
      props: {
        class:
          'w-full lg:col-span-3 lg:block -mx-[50vw] w-[100vw] relative inset-x-1/2 max-w-[100vw] lg:mx-auto lg:w-full lg:static lg:inset-0 lg:max-w-full',
      },
    },
    p: {
      props: {
        class: 'leading-loose max-w-prose mx-auto lg:contents',
      },
    },
    Spacer: {
      component: 'div',
      class: 'hidden lg:block',
    },
  },
};

const pageMDOptions = {
  wrapper: 'article',
  forceWrapper: 'true',
};

export { getMD, projectMDOptions, pageMDOptions };
