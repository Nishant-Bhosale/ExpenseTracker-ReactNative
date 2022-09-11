const getFormattedDate = (dateObj) => {
	return `${dateObj.getFullYear()}-${
		dateObj.getMonth() + 1 <= 9
			? `0${dateObj.getMonth() + 1}`
			: dateObj.getMonth() + 1
	}-${dateObj.getDate()}`;
};

export { getFormattedDate };
