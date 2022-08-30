module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  content_preview: (content) => {
    if (content.length >= 70) {
      content = content.slice(0,70) + " ...";
    }
    return content;
  },
};
