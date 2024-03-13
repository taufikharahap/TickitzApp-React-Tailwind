const genre = "action, adventure"

const showFormattedDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date).toLocaleDateString("en-US", options)
  }

  console.log(showFormattedDate('2023-12-31T17:00:00.000Z'))

  export default showFormattedDate;