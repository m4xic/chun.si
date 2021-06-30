'use strict';

require('./src/assets/scss/init.scss');
require('./static/css/prismjs/theme.min.css');

import littlefoot from 'littlefoot'
import 'littlefoot/dist/littlefoot.css'

export function onRouteUpdate() {
  littlefoot() // Pass any littlefoot settings here.
}