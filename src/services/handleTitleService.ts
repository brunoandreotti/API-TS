

class HandleTitleService {
  static execute(title: string) {
    const regex = /-/g
    const newTitle = title.replace(regex, ' ')
    console.log(newTitle)

    return newTitle
  }
}

export default HandleTitleService