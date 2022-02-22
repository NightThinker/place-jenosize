import getConfig from 'next/config';

import apiConfig from '@/config/api-config';
import { PLACE } from '@/constants/api-url';

const { publicRuntimeConfig } = getConfig();

export const getPlaces = () => {
    return apiConfig.get(`${PLACE}?query=restaurants%20in%20Sydney&key=${publicRuntimeConfig.apiKey}`);
};
