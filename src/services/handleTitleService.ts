

class HandleTitleService {
  static execute(title: string) {
    const newTitle = title.replace('-', ' ')

    return newTitle
  }
}

export default HandleTitleService