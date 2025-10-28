import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';

export function getShippingDate(shippingId) {
    const today = dayjs();
    const daysToAdd = deliveryOptions
        .find(option => Number(option.id) === shippingId)?.deliveryDays;
    return (today.add(daysToAdd, 'days').format('dddd, MMMM D'));
}