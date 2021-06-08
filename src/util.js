import dayjs from 'dayjs';

export const getWeekAgo = () => {
    const WEEK_AGO = new Date();
    WEEK_AGO.setDate(WEEK_AGO.getDate() - 7)
    return WEEK_AGO;
}

export const getDate = (value) => {
    return dayjs(value).format('YYYY-MM-DD')
}