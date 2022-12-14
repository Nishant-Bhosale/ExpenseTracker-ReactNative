const getFormattedDate = (dateObj) => {
	return `${dateObj.getFullYear()}-${
		dateObj.getMonth() + 1 <= 9
			? `0${dateObj.getMonth() + 1}`
			: dateObj.getMonth() + 1
	}-${dateObj.getDate()}`;
};

const getDateMinusDays = (date, days) => {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};

export { getFormattedDate, getDateMinusDays };
