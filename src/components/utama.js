import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from '../pages/beranda';
import TentangSaya from '../pages/tentangsaya';
import Kontak from '../pages/kontak';

const Utama = () => (
    <switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/kontak" component={Kontak} />
    </switch>
)

export default Utama;