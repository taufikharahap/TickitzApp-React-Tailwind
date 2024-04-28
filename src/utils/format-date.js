const showFormattedDate = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }
    // return new Date(date).toLocaleDateString("en-US", options)
    return new Date(date).toISOString().split("T")[0]
}
export default showFormattedDate;