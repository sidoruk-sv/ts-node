import './index-2';

const timeout = setTimeout(() => {}, 0);

if (timeout.unref) {
  timeout.unref();
}

require('./index-3');
