
module.exports = {

  format_date: (date) => {
    return date.toLocaleDateString();
  },

  format_amount: (amount) => {
    return parseInt(amount).toLocaleString();
  },

  content_preview: (content) => {
    if (content.length >= 70) {
      content = content.slice(0,70) + " ...";
    }
    return content;
  },

};
