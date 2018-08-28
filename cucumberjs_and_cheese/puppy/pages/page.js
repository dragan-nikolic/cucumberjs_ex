class Page {
  constructor(world) {
    this.world = world
    this.webdriver = world.webdriver
    this.logger = world.logger
  }

  async open(relativeUrl) {
    await this.webdriver.windowHandleMaximize()
    await this.webdriver.url(`baseUrl/${relativeUrl}`)
  }
}

module.exports = Page
