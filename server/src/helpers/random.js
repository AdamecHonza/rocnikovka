const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

exports.randomTicketSecret = () => {
    return randomNumber(10_000, 99_999)
}

exports.randomTicketNumber = () => {
    return randomNumber(10_000, 99_999)
}