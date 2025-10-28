import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export function getShippingDate(days) {
    const today = dayjs();
    return (today.add(days, 'days').format('dddd, MMMM D'));
}